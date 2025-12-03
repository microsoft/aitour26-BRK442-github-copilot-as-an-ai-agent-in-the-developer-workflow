
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
- **Single Page Application**: Modern HTML interface with vanilla JavaScript
- **Product Display**: Dynamic product list with card-based layout
- **CRUD Operations**: Add, edit, and delete products through the UI
- **Responsive Design**: Mobile-first responsive design that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **User Feedback**: Success messages, error handling, and loading states

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
- Flask and Flask-CORS
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

The web interface provides:
- A form to add new products
- A grid display of all products
- Edit and delete buttons for each product
- Responsive design that works on mobile and desktop

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
├── app.py                 # Main Flask application with API endpoints
├── requirements.txt       # Python dependencies
├── test_app.py           # Unit tests
├── templates/
│   └── index.html        # Frontend HTML template
├── static/
│   ├── css/
│   │   └── style.css     # Responsive CSS styles
│   └── js/
│       └── app.js        # Frontend JavaScript for CRUD operations
└── infra/
    └── main.bicep        # Azure infrastructure template
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
