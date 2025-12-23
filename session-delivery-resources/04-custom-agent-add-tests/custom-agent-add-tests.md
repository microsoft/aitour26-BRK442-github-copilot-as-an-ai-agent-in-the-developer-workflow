## Demo 4: Use GitHub Copilot Agent mode to add tests
### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code
- [ ] Ensure pytest is installed in your Python virtual environment (In your venv python environment, run `pytest --version`. If pytest is not installed, run `pip install pytest` within the venv)

### Demo Steps 🗒   

Delivery style (Recommended) | Demo Description
--------------|-------------
Do it live | - For demo certainty, make sure the test code is in the custom agent .md file as outlined in previous demo <br> - Open the `test_app.py` file to show that it is empty and this is where the unit tests will live <br> - Open the GitHub Copilot Chat window <br> - Select your custom agent "_test-agent_" and enter the prompt outlined below <br> - Wait for completion <br> - If the chat completion did not do it, open your terminal, (which should be in the Python virtual environment (venv)) and run the command `pytest test_app.py` to run the test file <br> - Discuss how this can improve productiviy and help developers with difficult tasks 

### Prompts

*********
I have a file called test_app.py. Create some unit tests to test the CRUD functionality of functions in app.py
*********

### Talking points 🎙
1. Custom agent modes can be used specilise in certain code generation, in this case, to generate unit tests based on existing code, which can save time and ensure comprehensive test coverage.
2. They can follow a teams coding standards and practices.
