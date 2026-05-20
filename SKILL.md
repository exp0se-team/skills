---
name: expose-team
description: Search for intelligence about people and companies using expose.team. Use when the user wants to look up a person by email address, phone number, or social media profile URL, or research a company by domain name.
license: Proprietary
compatibility: Requires internet access to the expose.team API. Set EXPOSE_API_KEY to your API key before use.
metadata:
  author: expose-team
  website: https://expose.team
  version: "1.0"
---

# expose.team Intelligence Search

expose.team cross-references billions of public data points about people and companies, returning structured intelligence in seconds.

## Setup

Set your API key as an environment variable before running any commands:

```
EXPOSE_API_KEY=your_api_key_here
```

Get your API key at https://expose.team/platform/ai

## Search for a Person

Search by email address, phone number, or social media profile URL.

```bash
# By email address
curl -s "https://expose.team/api/search?type=person&email=EMAIL" \
  -H "x-api-key: $EXPOSE_API_KEY" | jq

# By phone number
curl -s "https://expose.team/api/search?type=person&phone=PHONE" \
  -H "x-api-key: $EXPOSE_API_KEY" | jq

# By social media profile URL
curl -s "https://expose.team/api/search?type=person&profile_url=URL" \
  -H "x-api-key: $EXPOSE_API_KEY" | jq
```

## Search for a Company

Search by domain name to get structured company intelligence.

```bash
curl -s "https://expose.team/api/search?type=company&domain=DOMAIN" \
  -H "x-api-key: $EXPOSE_API_KEY" | jq
```

## Check Remaining Credits

```bash
curl -s "https://expose.team/api/credits-status" \
  -H "x-api-key: $EXPOSE_API_KEY" | jq
```

The response includes `credits` (remaining searches) and `renew_on` (next renewal date).

## Error Codes

- `401` — Invalid or missing API key
- `402` — No active subscription, or out of credits
- `500` — Upstream search service error; retry once
