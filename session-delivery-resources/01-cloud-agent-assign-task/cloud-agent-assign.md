## Demo 1: Assign an issue to the Cloud Agent

<!-- ### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code
- [ ] GitHub Pull Request extension installed
- [ ] Well-scoped issue
- [ ] Run the entire demo in VS Code if doing live -->

### Demo Steps 🗒️

| Delivery style (Recommended) | Demo Description 
--------------|------------- 
Use recorded demo video | - Open Copilot CLI in your terminal using the `copilot --banner` command <br> - Talk about the CLI and what it is <br> - Show the language model picker in the CLI using `/model` (Optional) <br> - By default the GitHub MCP server is installed so ask it to list all of the open issues on the repository <br> - Use `/plan` and the provided prompt to create a plan for the solution to the GitHub issue <br> - When happy with the planned solution, use `/delegate` to assign the work to the Cloud Coding Agent

### Prompt(s) 💬

********
1. "List all open issues"
2. "Summarise the issue and create an implementation plan"
********

## Talking points 🎙️

1. **Issue Scoping:** GitHub issues need to be well-defined for Coding Agent success
2. **Premium Requests:** Each Coding Agent run uses 1 premium request
3. **Processing Time:** Coding Agent tasks take several minutes depending on complexity (but are prone to taking much longer)
4. **Session Logs:** All Coding Agent steps are captured in session logs
<!-- 5. **Language Model Picker:** Users have the ability to show/hide/add models from other providers within the LMP -->