## Demo 4: Use GitHub Copilot Agent mode to add tests
### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code
- [ ] Ensure pytest is installed in your Python virtual environment (In your venv python environment, run `pytest --version`. If pytest is not installed, run `pip install pytest` within the venv)

### Demo Steps 🗒   

Delivery style (Recommended) | Demo Description
--------------|-------------
Do it live | - For demo certainty, make sure the test code is in the copilot-instructions.md file as outlined <br> - Open the `test_app.py` file to show that it is empty and this is where the unit tests will live <br> - Open the GitHub Copilot chat pane <br> - Select "Agent" and enter the prompt outlined below <br> - Wait for completion <br> - In your terminal, which should be in the Python virtual environment (venv), run the command `pytest test_app.py` <br> - Discuss how this can improve productiviy and help developers with difficult tasks 

### Prompts

*********
I have a file called test_app.py. Create some unit tests to test the CRUD functionality of functions in app.py
*********

### Talking points 🎙
1. GitHub Copilot Agent mode can be used to generate unit tests based on existing code, which can save time and ensure comprehensive test coverage.
2. Use of custom instructions to guide Copilot in generating code, following the teams coding standards and practices.
