from flask import Flask, jsonify, request, abort, render_template
from uuid import uuid4

app = Flask(__name__)

# In-memory product store
data = {}

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(list(data.values())), 200

@app.route('/products/<product_id>', methods=['GET'])
def get_product(product_id):
    product = data.get(product_id)
    if not product:
        abort(404)
    return jsonify(product), 200

@app.route('/products', methods=['POST'])
def create_product():
    body = request.get_json()
    if not body or 'name' not in body:
        abort(400)
    product_id = str(uuid4())
    product = {'id': product_id, 'name': body['name'], 'description': body.get('description', '')}
    data[product_id] = product
    return jsonify(product), 201

@app.route('/products/<product_id>', methods=['PUT'])
def update_product(product_id):
    if product_id not in data:
        abort(404)
    body = request.get_json()
    if not body or 'name' not in body:
        abort(400)
    data[product_id].update({'name': body['name'], 'description': body.get('description', '')})
    return jsonify(data[product_id]), 200

@app.route('/products/<product_id>', methods=['DELETE'])
def delete_product(product_id):
    if product_id not in data:
        abort(404)
    del data[product_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
