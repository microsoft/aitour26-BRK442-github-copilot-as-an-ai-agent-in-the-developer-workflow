## Demo 2: Review the PR from the Coding Agent

### Pre-requisites (Checklist) ✅

- [ ] Open the `src` folder in VS Code
- [ ] GitHub Pull Request extension installed
- [ ] A PR created by the coding agent earlier ready for review
- [ ] Run the entire demo in VS Code

### Demo Steps 🗒️

| Delivery style (Recommended) | Demo Description 
--------------|------------- 
Do it live | - Open the pull request in VS Code using the GitHub Pull Request extension <br> - Review the PR comment from the coding agent that summarizes what changed <br> - Review the screenshots of the UI <br> Switch tone to “we forgot to specify that this UI needs a category drop down list, lets ask Copilot to edit this code change” <br> - Scroll to the bottom and enter the prompt provided in the context <br> - Click on “View session” to see the agent working <br> - Go to an existing PR that has had this action previously completed <br> - Walk through the change and how it has been worked on with Copilot

### Prompts 💬

********
This great but each product entry also needs a category drop down list. Create a drop down list with the following fields and also show this on each product entry.

- Electrical
- Garden & Outdoor
- Hand tools
- Hardware
- Lumber & Building materials
- Paint & Finishes
- Plumbing
- Power tools
- Storage & organization

Show screenshots of this working and do not include any actual product names. Keep the test data previously used.
********

### Talking points 🎙
1. Coding agent can be prompted to make changes to the PR (human in the loop)
2. Now you need to specify in comments by @’ting copilot when you want it to act on the feedback
