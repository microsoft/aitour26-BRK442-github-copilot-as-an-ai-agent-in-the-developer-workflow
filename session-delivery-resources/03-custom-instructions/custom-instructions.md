## Demo 3: Generate custom instructions

### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code

### Demo Steps 🗒

Delivery style (Recommended) | Demo Description 
--------------|------------- 
Do it live | - Open the Copilot chat window in VS Code <br> - Click on the settings wheel in the chat window <br> - Select "Instructions" from the menu <br> - Click on "Generate instructions" to create a new set of custom instructions <br> - Once generated, review the generated isntructions file and talk about the importance of providing this to copilot <br> - You can edit the instructions file manually

### Talking points 🎙

1. Custom instructions help tailor Copilot's behavior to your specific needs and preferences.
2. They can be used to enforce security policies, coding standards, or any other guidelines relevant to your project.
3. Custom instructions can be updated as your project evolves or as new requirements arise.

---

### Copilot will create your custom instructions live but you must ensure the newly created file content contains the following code sample for the following test demo to work every time:
 
### Testing Strategy
- **Unit tests**: Use pytest with Flask test client fixture. Use the the test code examples form this file
- **E2E tests**: Selenium with Chrome driver on port 5001
- Run Flask app in daemon thread for E2E testing
 
When I ask copilot to write some unit tests. Use thecode below and add it to the "test_app.py" file.
 
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
- Use the test patterns in `.vscode/docs.md` as templates
- Unit tests should use Flask test client, not real HTTP calls
- E2E tests run on port 5001 to avoid conflicts with dev server
- Always clean up browser instances in E2E tests


