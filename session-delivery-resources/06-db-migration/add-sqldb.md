## Demo 6: Add a SQLite database to the project

<!-- ### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code
- [ ] GitHub Pull Request extension installed
- [ ] Microsoft Learn MCP server installed
- [ ] A well-crafted prompt and previous steps completed (custom test agent needs to be present)
- [ ] Run the entire demo in VS Code -->

### Demo Steps 🗒   

| Delivery style (Recommended) | Demo Description
--------------|-------------
Use recorded demo video | - Talk over the video demo, explaining each step as it is shown (plan mode, agent mode, incorporation of all previous elements such as the Microsoft Learn MCP server and custom test-agent)

### Prompt(s)

*********
**GHCP Mode:** Agent

**Model:** Claude Sonnet 4.5

**Prompt:** "Plan out the process of adding a SQLite database to this application to move away from in-memory storage this application is currently using. Store all of the related files in a new directory /db. Update the .gitignore file to make sure no sensitive information is committed to git and do not use any specific product names when testing. Use the Microsoft Learn MCP server to research best practices and use the custom test-agent to write and update the tests for the application."
*********

## Talking points 🎙

1. Adding a SQLite database allows for data persistence, which is crucial for applications that require state management across sessions.
2. For this demo, we are using SQLite, a lightweight solution that can be easily integrated without the overhead of a full-fledged database server, but this approach can be adapted for other more robust databases as needed.
3. Adding a database to an application is complex and can take a developer a long time to complete

