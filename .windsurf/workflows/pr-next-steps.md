---
description: Extract and track next steps from PR descriptions
---

# PR Next Steps Tracker Workflow

Use this workflow when creating or updating a Pull Request description to extract next steps and create GitHub issues for them.

## Steps

### 1. Extract Next Steps from PR Description

Analyze the PR description for any mentions of:
- "Next steps"
- "Follow-up items"
- "Future work"
- "TODO"
- "Future enhancements"
- "Deferred work"

Extract each item as a distinct next step.

### 2. Search for Similar Existing Issues

For each extracted next step:
- Use the GitHub search_issues tool to find the top 3 most similar existing issues
- Search using relevant keywords from the next step description
- Consider both open and closed issues for context

Example search query format:
```
repo:owner/repo [keywords from next step] is:issue
```

### 3. Present Findings to User

Display a structured summary:

```markdown
## Extracted Next Steps from PR #[number]

### Next Step 1: [Description]
**Similar Existing Issues:**
1. #[issue-num] - [title] - **Similarity**: [High/Medium/Low] - [reason]
2. #[issue-num] - [title] - **Similarity**: [High/Medium/Low] - [reason]
3. #[issue-num] - [title] - **Similarity**: [High/Medium/Low] - [reason]

**Recommendation**: [Create new issue / Link to #[num] / Already tracked]

[Repeat for each next step]
```

### 4. Ask for User Confirmation

Present options for each next step:
- Create new issue for this next step
- Link to existing issue #[num] (add comment to existing issue)
- Skip this next step

### 5. Create Issues (if confirmed)

For next steps where user confirms issue creation:
- Create GitHub issue with descriptive title
- Include context from PR in issue body
- Add labels: "next-steps", "follow-up"
- Link back to originating PR number in the issue description
- Provide issue number back to user

For next steps linked to existing issues:
- Optionally add a comment to the existing issue referencing the PR

## Example Usage

```
User: "I just created PR #42 with some next steps in the description"
Assistant: [Runs this workflow]
- Extracts next steps
- Searches for similar issues
- Presents findings with top 3 matches per step
- Asks for confirmation
- Creates issues as confirmed
```

## Notes

- Use semantic similarity, not just keyword matching, for issue comparison
- Always include PR context in created issues
- Group related next steps into single issues when appropriate
