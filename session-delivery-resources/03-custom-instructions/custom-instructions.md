## Demo 3: Generate custom instructions

### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code to view the application code

### Demo Steps 🗒

Delivery style (Recommended) | Demo Description 
--------------|------------- 
Do it live | - Create a new file called `AGENTS.md` in the root project directory <br> - Add the file contents outlined below to the file <br> - Explain that this file serves as custom instructions for GitHub Copilot when working on this project <br> - Highlight the testing patterns and application overview sections <br> - Show how Copilot will reference this file with a test prompt "List all of the API endpoints" and explain that it automatically pulls in the file for context (shown in the Copilot chat window)

### Talking points 🎙

1. Custom instructions help tailor Copilot's behavior to your specific needs and preferences.
2. They can be used to enforce security policies, coding standards, or any other guidelines relevant to your project.
3. Custom instructions can be updated as your project evolves or as new requirements arise.

---

### Use the following file contents and add it to your AGENTS.md file upon creation. Explain the contents, including the test pattern as part of the demo ⬇️:

# Application Overview and Testing Guide

## Application Overview

This is a Flask-based REST API for product management with CRUD operations.

The application code is in the directory `./src` so when asked questions relating to the application, only reference the files within this directory.

### Technology Stack
- **Language**: Python
- **Framework**: Flask
- **Testing**: pytest, Selenium

### API Endpoints
- `GET /products` - List all products
- `GET /products/<product_id>` - Get specific product
- `POST /products` - Create new product
- `PUT /products/<product_id>` - Update product
- `DELETE /products/<product_id>` - Delete product

## Running the Application

```bash
python app.py  # Starts on localhost:5000 by default
```

## Testing Strategy

- **Unit tests**: Use pytest with Flask test client fixture. Use the the test code examples form this file
- **E2E tests**: Selenium with Chrome driver on port 5001
- Run Flask app in daemon thread for E2E testing
 
When I ask copilot to write some unit tests. Use the code test pattern below and add it to the "test_app.py" file.
 
Unit tests:
```python
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
 
def test_update_product(client):
    rv = client.post('/products', json={'name': 'Test', 'description': 'Desc'})
    product = rv.get_json()
    rv = client.put(f"/products/{product['id']}", json={'name': 'Updated', 'description': 'NewDesc'})
    assert rv.status_code == 200
    assert rv.get_json()['name'] == 'Updated'
 
def test_delete_product(client):
    rv = client.post('/products', json={'name': 'Test', 'description': 'Desc'})
    product = rv.get_json()
    rv = client.delete(f"/products/{product['id']}")
    assert rv.status_code == 204
    rv = client.get(f"/products/{product['id']}")
    assert rv.status_code == 404
```
 
When I ask copilot to write some end to end tests. Use the code below and add it to the "test_e2e_app.py" file.
 
End to End test:
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import threading
import app
 
# Start Flask app in a thread
def run_app():
    app.app.run(port=5001)
 
def test_e2e():
    t = threading.Thread(target=run_app)
    t.daemon = True
    t.start()
    time.sleep(1)
    driver = webdriver.Chrome()
    driver.get('http://localhost:5001/')
    name = driver.find_element(By.ID, 'name')
    desc = driver.find_element(By.ID, 'description')
    name.send_keys('E2E Product')
    desc.send_keys('E2E Desc')
    driver.find_element(By.TAG_NAME, 'button').click()
    time.sleep(1)
    products = driver.find_elements(By.TAG_NAME, 'li')
    assert any('E2E Product' in p.text for p in products)
    driver.quit()
```
 
## Development Workflow
 
### Running the Application
```bash
python app.py  # Starts on localhost:5000 by default
```
 
### Testing Commands
```bash
pytest                    # Run unit tests
python -m pytest test_   # Run specific test pattern
```
 
### When Working with Tests
- Unit tests should use Flask test client, not real HTTP calls
- E2E tests run on port 5001 to avoid conflicts with dev server
- Always clean up browser instances in E2E tests


### Testing Best Practices
- Unit tests should use Flask test client, not real HTTP calls
- E2E tests run on port 5001 to avoid conflicts with dev server
- Always clean up browser instances in E2E tests


