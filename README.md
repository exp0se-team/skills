# @expose-team/skills

Install the [expose.team](https://expose.team) Agent Skill for use with Claude Code, ChatGPT, Cursor, GitHub Copilot, and [30+ AI agents](https://agentskills.io) that follow the [agentskills.io](https://agentskills.io) open standard.

## Usage

```bash
npx @expose-team/skills --api-key=YOUR_API_KEY
```

Get your API key at [expose.team/platform/ai](https://expose.team/platform/ai).

## Options

| Flag | Description |
|------|-------------|
| `--api-key=<key>` | Pre-fill your API key in the installed SKILL.md |
| `--global`, `-g` | Install to `~/.claude/skills/` (all projects) instead of `./.claude/skills/` |
| `--help`, `-h` | Show help |

## Examples

```bash
# Install in the current project
npx @expose-team/skills --api-key=sk-xxxxxxxx

# Install globally across all your projects
npx @expose-team/skills --api-key=sk-xxxxxxxx --global

# Install without a key (you can set EXPOSE_API_KEY in your environment later)
npx @expose-team/skills
```

## What gets installed

A `SKILL.md` file is created at `.claude/skills/expose-team/SKILL.md` (or the global equivalent). This file follows the [agentskills.io](https://agentskills.io) specification and tells your AI agent how to use the expose.team API.

Once installed, just ask your agent naturally:

- *"Look up john@example.com on expose"*
- *"Search expose for the company stripe.com"*
- *"How many expose.team credits do I have left?"*

## What the skill can do

| Action | How to ask |
|--------|-----------|
| Find a person by email | `"Look up john@example.com"` |
| Find a person by phone | `"Search for +14155551234"` |
| Find a person by social profile | `"Search for linkedin.com/in/johndoe"` |
| Find a company by domain | `"Look up stripe.com"` |
| Check remaining credits | `"How many credits do I have?"` |

## Compatible agents

Works with any agent that supports the [agentskills.io](https://agentskills.io) standard, including Claude Code, ChatGPT, Cursor, GitHub Copilot, Gemini CLI, Roo Code, and more.

## Links

- [expose.team](https://expose.team) — the intelligence platform
- [agentskills.io](https://agentskills.io) — the open skill standard
- [@expose-team/cli](https://www.npmjs.com/package/@expose-team/cli) — command-line interface
