#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
@expose-team/skills — install the expose.team Agent Skill

Usage:
  npx @expose-team/skills [options]

Options:
  --api-key=<key>   Pre-fill your API key in SKILL.md (get yours at https://expose.team/platform/ai)
  --global, -g      Install to ~/.claude/skills/ instead of ./.claude/skills/
  --help,   -h      Show this help message
`);
  process.exit(0);
}

const isGlobal = args.includes("--global") || args.includes("-g");
const apiKeyArg = args.find((a) => a.startsWith("--api-key="));
const apiKey = apiKeyArg ? apiKeyArg.split("=").slice(1).join("=") : "YOUR_API_KEY";

const skillDir = isGlobal
  ? join(homedir(), ".claude", "skills", "expose-team")
  : join(process.cwd(), ".claude", "skills", "expose-team");

const skillContent = `---
name: expose-team
description: Search for intelligence about people and companies using expose.team. Use when the user wants to look up a person by email address, phone number, or social media profile URL, or research a company by domain name.
license: Proprietary
compatibility: Requires internet access to the expose.team API. Set EXPOSE_API_KEY before use.
metadata:
  author: expose-team
  website: https://expose.team
  version: "1.0"
---

# expose.team Intelligence Search

expose.team cross-references billions of public data points about people and companies.

## Setup

\`\`\`
EXPOSE_API_KEY=${apiKey}
\`\`\`

## Search for a Person

\`\`\`bash
# By email address
curl -s "https://expose.team/api/search?type=person&email=EMAIL" \\
  -H "x-api-key: $EXPOSE_API_KEY" | jq

# By phone number
curl -s "https://expose.team/api/search?type=person&phone=PHONE" \\
  -H "x-api-key: $EXPOSE_API_KEY" | jq

# By social media profile URL
curl -s "https://expose.team/api/search?type=person&profile_url=URL" \\
  -H "x-api-key: $EXPOSE_API_KEY" | jq
\`\`\`

## Search for a Company

\`\`\`bash
curl -s "https://expose.team/api/search?type=company&domain=DOMAIN" \\
  -H "x-api-key: $EXPOSE_API_KEY" | jq
\`\`\`

## Check Remaining Credits

\`\`\`bash
curl -s "https://expose.team/api/credits-status" \\
  -H "x-api-key: $EXPOSE_API_KEY" | jq
\`\`\`
`;

mkdirSync(skillDir, { recursive: true });
writeFileSync(join(skillDir, "SKILL.md"), skillContent);

console.log(`\n✓ expose-team skill installed\n  ${skillDir}/SKILL.md\n`);

if (apiKey === "YOUR_API_KEY") {
  console.log(
    `  No API key provided — reinstall with:\n  npx @expose-team/skills --api-key=<your_key>\n\n  Get your key at https://expose.team/platform/ai\n`,
  );
}
