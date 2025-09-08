# Demo Setup Instructions: GitHub Copilot as an AI Agent in the Developer Workflow

## Overview

This document provides comprehensive setup instructions for delivering the **BRK442: GitHub Copilot as an AI Agent in the Developer Workflow** session. The session includes 6 demos showcasing GitHub Copilot's capabilities as an AI agent in modern development workflows.

## 🎯 Session Overview

| Demo | Description | Duration | Type |
|------|-------------|----------|------|
| Demo 1 | [Assign issue to Coding Agent](../01-coding-agent-assign-task/coding-agent-assign.md) | 5 mins | Recorded Video |
| Demo 2 | [Review PR from Coding Agent](../02-coding-agent-pr-review/coding-agent-prreview.md) | 5 mins | Live Demo |
| Demo 3 | [Generate Custom Instructions](../03-custom-instructions/custom-instructions.md) | 5 mins | Live Demo |
| Demo 4 | [Add Tests using Agent Mode](../04-agent-mode-add-tests/add-tests-with-agent-mode.md) | 5 mins | Live Demo |
| Demo 5 | [GitHub MCP Server Integration](../05-gh-mcp-server/add-mcp.md) | 10 mins | Live Demo |
| Demo 6 | [Add SQLite Database](../06-db-migration/add-sqldb.md) | 10 mins | Recorded Video |

## 🔧 Prerequisites & Environment Setup

We strongly recomend you use a local Codespace instance for the demos as this provides a consistent environment for delivery. If you choose to run the demos locally, please ensure your local environment matches the requirements outlined below.

- [ ] **Codespace setup:** Create a new Codespace on the main branch of this repository
- [ ] **Open in VS Code:** Open the Codespace in Visual Studio Code (locally) using the "Open in VS Code" button in the GitHub web interface
- [ ] **Wait for post-create script to finish:** This will take a few minutes to complete and sets up the Python environment and installs dependencies

![Open in VS Code](../../img/open-codespace-in-vscode.png)
![Finish post create script](../../img/wait-for-post-create-to-finish.png)

### Required Tools

✅ **Essential Tools**
- [ ] **Visual Studio Code** (latest version)
- [ ] **GitHub Copilot** (latest version)
- [ ] **GitHub Copilot Chat** (latest version)
- [ ] **GitHub Pull Requests** VS Code extension installed
- [ ] **Python 3.7+** with virtual environment support (this is run through a script on startup)

### GitHub Setup

✅ **Repository Requirements**
- [ ] Access to the demo repository with appropriate permissions to review and create issues/PRs
- [ ] GitHub Copilot subscription (Premium for Coding Agent features)
- [ ] Sample Pull Request created by the Coding Agent, ready for the review scenario

### VS Code Configuration

✅ **Extensions & Settings**
- [ ] Ensure GitHub Copilot is signed in and active
- [ ] Verify Copilot Chat panel is accessible
- [ ] Check that GitHub Pull Requests extension can access repositories
- [ ] Configure workspace to open the `src` folder for Python demos

### Python Environment Setup (if running locally) - NOT NEEDED IF USING A CODESPACE FOR THE DEMOS

✅ **Virtual Environment**
```bash
# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install required packages
pip install -r requirements.txt

# Verify pytest installation
pytest --version
```

✅ **Required Python Packages**
These are installed with the setup script when using a local Codespace, but if running locally, ensure these are installed:
- [ ] Flask (for the demo application)
- [ ] pytest (for testing demos)
- [ ] SQLAlchemy (for database demos, if doing live)
- [ ] selenium (for E2E testing demos - extra)

## 🎬 Demo-Specific Setup Instructions

### Demo 1: Coding Agent Assignment
**Setup Requirements:**
- [ ] **Note:** This demo uses a recorded demo video for consistency and time efficiency
- [ ] Ensure the Codeing Agent Pull Request is already created on the repository as this will be needed in future demos
- [ ] If there is **NO** Pull Request on the repository, assign issue _[Add a User Interface (UI) to the Product Store Demo Application #2](https://github.com/microsoft/aitour26-BRK442-github-copilot-as-an-ai-agent-in-the-developer-workflow/issues/2)_ to the Coding Agent to create a PR (this takes about 15 mins to complete so ensure this is done well in advance of the session)

### Demo 2: PR Review Process
**Setup Requirements:**
- [ ] Open a local Codespace of this repository in VS Code
- [ ] Ensure the PR created by the Coding Agent from Demo 1 exists (check with the GitHub extension Pull Request panel)
- [ ] GitHub Pull Request extension properly authenticated
- [ ] Test the PR review workflow beforehand, but **DO NOT** submit a review before the demo

### Demo 3: Custom Instructions
**Setup Requirements:**
- [ ] Copilot Chat panel authenticated and accessible
- [ ] Prepare to demonstrate custom-instruction generation
- [ ] **Important:** Ensure the generated instructions include specific test code templates found in [Generate Custom Instructions](../03-custom-instructions/custom-instructions.md) 

### Demo 4: Agent Mode Testing
**Setup Requirements:**
- [ ] App running and available at http://localhost:5000 and terminal virtual environment activated with the dependency requirements installed. To test the app is running correctly, go to http://localhost:5000/products and you will see an empty product list
- [ ] `test_app.py` file should be present but **empty**
- [ ] Custom instructions from Demo 3 should be configured correctly, including the test code templates
- [ ] Terminal ready to run pytest commands within the virtual environment (venv)

### Demo 5: MCP Server Integration
**Setup Requirements:**
- [ ] **CRITICAL:** Uninstall GitHub MCP Server if previously installed as the install flow of this MCP server is the demo
- [ ] VS Code extensions panel accessible
- [ ] Be prepared to authenticate with GitHub during MCP server installation flow
- [ ] Project documentation available for creating issues in GitHub

### Demo 6: Database Migration
**Setup Requirements:**
- [ ] **Note:** Uses recorded demo video

If running live:
- [ ] SQLite development environment ready
- [ ] SQLite Viewer extension installed into the local VS Code Codespace instance
- [ ] MS Docs MCP server installed and available for best practice retreival

## 🚀 Pre-Demo Checklist

### Environment Verification
- [ ] Local Codespace VS Code instance opens without errors
- [ ] GitHub Copilot is signed in and active
- [ ] GitHub Pull Requests extension can access the repository
- [ ] Python virtual environment activates and installs dependencies successfully within the local Codespace instance without errors

### Functionality Testing
- [ ] Copilot Chat responds to test prompts
- [ ] Agent mode is accessible in Copilot Chat
- [ ] MCP Servers section visible in VS Code extensions
- [ ] pytest runs successfully on sample tests
- [ ] Flask application starts on localhost:5000

### Content Preparation
- [ ] Demo recordings are accessible and tested (for demo 1 and 6)
- [ ] Live demo scripts are rehearsed
- [ ] Fallback plans prepared for live demos (demo recordings are quickly accessible)
- [ ] All demo prompts are saved and easily accessible

## 📋 Demo Delivery Tips

### Technical Considerations/Discussions
1. **Issue Scoping:** GitHub issues need to be well-defined for Coding Agent success
2. **Premium Requests:** Each Coding Agent run uses 1 premium request
3. **Processing Time:** Coding Agent tasks take several minutes depending on complexity (but are prone to taking much longer)
4. **Session Logs:** All Coding Agent steps are captured in session logs
5. **Human-in-the-Loop:** Demonstrate how to provide feedback to GitHub Copilot and that all external requests require human review (continue in session/workspace/always allow button in Copilot Chat)

### Best Practices
- **Rehearse:** Practice all live demos multiple times
- **Backup Plans:** Have recorded versions of live demos as fallbacks
- **Stay Current:** GitHub Copilot UI changes frequently - verify current interface and minor changes to avoid surprises
- **Custom Instructions:** Emphasize importance for code quality and security
- **Real-world Context:** Connect each demo to the practical development scenario for Zava

## 🆘 Troubleshooting

### Common Issues
- **Copilot Not Active:** Check subscription and sign-in status
- **MCP Server Issues:** Ensure proper installation of MCP Servers
- **Python Environment:** Verify virtual environment activation
- **GitHub Authentication:** Confirm repository access permissions
- **Extension Conflicts:** Disable non-essential VS Code extensions that may interfere, even when using a local Codespace

### Emergency Procedures
- Switch to recorded demos if live demos fail
- Have a backup GitHub repository ready
- Keep simplified demo scripts for time constraints
- Prepare alternative prompts if specific examples don't work for you

## 📝 Post-Demo Actions

- [ ] Clean up demo environment / delete local Codespace instance - ** Do NOT commit any changes to the repository main branch! **
- [ ] Reset you local MCP Server installations
- [ ] Unassign issue _[Add a User Interface (UI) to the Product Store Demo Application #2](https://github.com/microsoft/aitour26-BRK442-github-copilot-as-an-ai-agent-in-the-developer-workflow/issues/2)_ from the Coding Agent on the repository ready for the next delivery
- [ ] Collect feedback for future improvements
- [ ] Update setup instructions based on experience

---

**Session Delivery Contact:** For questions about content or delivery, reach out to the content leads listed in the main repository README.

**Last Updated:** Review and update these instructions before each delivery to ensure accuracy with the latest GitHub Copilot features.