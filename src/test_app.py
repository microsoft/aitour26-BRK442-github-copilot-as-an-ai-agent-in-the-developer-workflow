import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_create_and_get_product(client):
    # Create
    rv = client.post('/products', json={'name': 'Test', 'description': 'Desc'})
    assert rv.status_code == 201
    product = rv.get_json()
    # Get
    rv = client.get(f"/products/{product['id']}")
    assert rv.status_code == 200
    assert rv.get_json()['name'] == 'Test'

def test_index_route(client):
    """Test that the main route serves the HTML UI"""
    rv = client.get('/')
    assert rv.status_code == 200
    assert b'Product Store Demo' in rv.data
    assert b'Add New Product' in rv.data