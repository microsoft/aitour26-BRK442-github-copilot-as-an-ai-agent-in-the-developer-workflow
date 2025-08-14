
# Instructions
Follow the steps in the [docs folder](../docs) to get started.


# Product Store Demo

A simple Flask-based product store API with in-memory storage and a basic HTML frontend, designed for Azure deployment using Azure App Service with Bicep infrastructure as code.

## Features

### Backend API
- **REST API**: Flask-based API with full CRUD operations for products
- **Product Management**: Create, read, update, and delete products
- **Product Schema**: Each product has `id`, `name`, and `description` fields
- **UUID Generation**: Automatic UUID generation for product IDs using `uuid4()`
- **Error Handling**: Proper HTTP status codes (200, 201, 204, 400, 404)
- **JSON Validation**: Request body validation for required fields

### Frontend
- **Modern Web Interface**: Clean, responsive HTML5/CSS3/JavaScript frontend
- **Single Page Application**: No page reloads, smooth user experience
- **Product Display**: Dynamic product grid with responsive layout
- **CRUD Operations**: Add, edit, and delete products through intuitive forms
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Modals**: Edit and delete confirmation dialogs
- **Real-time Updates**: Immediate UI updates after API operations
- **Error Handling**: User-friendly error messages and loading states
- **Success Feedback**: Clear confirmation messages for user actions
- **Accessibility**: Semantic HTML and keyboard-friendly interface

### Infrastructure
- **Azure Ready**: Bicep template for Azure App Service deployment
- **HTTPS Enforced**: Security best practices in Azure configuration
- **Basic B1 SKU**: Cost-effective App Service Plan for development/demo

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/<id>` | Get a specific product |
| POST | `/products` | Create a new product |
| PUT | `/products/<id>` | Update an existing product |
| DELETE | `/products/<id>` | Delete a product |

## Getting Started

### Prerequisites
- Python 3.7+
- Flask
- Azure CLI (for deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd product-store-demo
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python app.py
   ```

4. Open your browser and navigate to `http://localhost:5000`

### Testing
Run unit tests:
```bash
pytest
```

### Azure Deployment
Deploy infrastructure:
```bash
az deployment group create --template-file infra/main.bicep --resource-group <your-resource-group>
```

## Project Structure
```
├── app.py                 # Main Flask application with API endpoints and UI route
├── requirements.txt       # Python dependencies (includes flask-cors)
├── test_app.py           # Unit tests
├── templates/
│   └── index.html        # Main HTML frontend template
├── static/
│   ├── css/
│   │   └── styles.css    # Responsive CSS styling
│   └── js/
│       └── app.js        # JavaScript for API integration and UI interactions
├── infra/
│   └── main.bicep        # Azure infrastructure template
└── screenshots/          # UI screenshots demonstrating functionality
    ├── product-store-ui-working.png
    ├── product-store-ui-mobile.png
    └── product-store-ui-multiple-products.png
```

## TODO List

### Testing & Quality Assurance
- [ ] **Add End-to-End Integration Tests**: Implement Selenium-based E2E tests to verify full user workflows
- [ ] **Add Code Coverage Reporting**: Implement coverage tracking and reporting
- [ ] **Add Linting and Code Quality**: Set up flake8, black, and other code quality tools

### Data Persistence
- [ ] **Replace In-Memory Storage**: Implement persistent database storage
  - [ ] **Add SQLite Support**: For local development
  - [ ] **Add Azure SQL Database**: For production deployment
  - [ ] **Add Database Migrations**: Handle schema changes

### Frontend Improvements
- [x] **Add Modern UI**: Complete responsive web interface with HTML/CSS/JavaScript
- [x] **Add Error Handling**: User-friendly error messages and loading states
- [x] **Add Confirmation Dialogs**: Confirm destructive actions like delete
- [ ] **Modernize Frontend**: Upgrade to React, Vue, or Angular (optional future enhancement)

### Infrastructure & DevOps
- [ ] **Add CI/CD Pipeline**: Automated testing and deployment
- [ ] **Add Health Checks**: Endpoint for monitoring application health
- [ ] **Add Container Support**: Dockerize the application

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
