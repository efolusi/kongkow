# Security Challenge: Bug Bounty

**Kongkow** runs a public bug bounty for general security research. Report vulnerabilities in our platform or APIs; we **score** each finding by severity and reward valid findings by that score. There is no single target account; any valid security issue in scope is welcome.

---

## How it works

1. **Find** a vulnerability in Kongkow (platform, APIs, auth, or data flows).
2. **Report** it with clear steps to reproduce and impact.
3. **We score** the finding (Critical / High / Medium / Low / Informational) and assign points.
4. **We reward** you based on the severity tier (see Rewards). First valid report per issue wins; duplicates are not rewarded.

---

## Scoring (severity and points)

We assign each validated finding a severity tier and a point value. Points are for transparency and consistency; payout is based on the **tier**.

| Severity        | Points | Description (examples) |
|-----------------|--------|--------------------------|
| **Critical**    | 100    | Full account takeover, credential extraction, remote code execution. |
| **High**        | 50     | Auth bypass for sensitive actions, access to another user's private data at scale, privilege escalation with clear impact. |
| **Medium**      | 20     | IDOR or data leak with limited impact, logic flaws that require non-trivial preconditions. |
| **Low**         | 5      | Information disclosure with low impact, minor bypass with constrained impact. |
| **Informational** | 1   | Best-practice or hardening suggestions, no direct exploit path. |

We may adjust severity after triage (e.g. if impact is lower or higher than initially reported). Final severity determines the reward.

---

## Rewards

One reward per validated finding; first reporter only. The reward is decided per finding from its final severity, and agreed with you before it is paid.

We pay after we confirm the finding and fix (or mitigate) the issue. We may cap total payouts per researcher or per year; any such cap will be communicated fairly.

---

## Rules (all researchers must follow)

1. **Good-faith testing**  
   Only test for security vulnerabilities. Do not access, modify, or delete data of real users except as needed to demonstrate a valid finding (and only to the minimum extent necessary).

2. **Designated test account (when needed)**  
   For tests that require a target account (e.g. proving account takeover), use only the account we designate for the program (we will publish username/profile). Do not target other users’ accounts.

3. **No physical or social engineering**  
   No physical access, phishing of staff or users, or pretexting. Testing is limited to the Kongkow platform and its APIs.

4. **Responsible disclosure**  
   Do not disclose the vulnerability publicly before we have had a reasonable time to fix it. No extortion or withholding details to force payment. Provide clear steps to reproduce and impact.

5. **One reward per finding**  
   First researcher to submit a valid report for a given issue receives the reward. Duplicate or substantially similar reports do not receive a separate payout.

6. **Legal and authorized testing**  
   Stay within the scope below and comply with applicable laws. Kongkow will not pursue legal action against researchers who follow these rules and act in good faith.

---

## In scope

| Area    | What we consider in scope |
|---------|----------------------------|
| **Target** | Production: **https://kongkow.efolusi.com** and its APIs. |
| **Auth**   | Login, signup, password reset, MFA, session handling, auth callbacks. |
| **API**    | All `/api/*` routes: auth bypass, IDOR, injection, rate limits, privilege escalation. |
| **Data**   | Unauthorized read or write of user data (profiles, posts, publishing accounts). |
| **Infra**  | Bugs in our app or config that lead to security impact (e.g. credential leak, access control bypass). |

Any vulnerability that affects the **confidentiality, integrity, or availability** of user data is in scope, subject to the rules above.

---

## Out of scope

- **Physical access, social engineering, phishing:** Not allowed.
- **Third-party-only bugs:** Issues only in a managed platform, hosting provider, etc., with no Kongkow-specific exploit path. Report those to the relevant vendor.
- **DoS or spam:** Unless they directly enable access to data (e.g. DoS that leads to auth bypass).
- **Low-impact or purely theoretical:** No realistic path to user harm; we may acknowledge but not pay.
- **Issues in out-of-scope assets:** Only Kongkow production platform and APIs listed above.

---

## How to submit

1. **Email:** hi@efolusi.com  
2. **Subject:** `[Bug Bounty]` + short description (e.g. `[Bug Bounty] IDOR on publishing API`)  
3. **Include:**
   - Clear description of the vulnerability and **step-by-step instructions** to reproduce.
   - **Impact:** how it affects users (data or access).
   - **Severity** you believe it fits (Critical / High / Medium / Low / Informational); we will confirm after triage.

We will respond within a reasonable time, triage the report, and agree the reward with you after confirmation and fix.

---

## Rewards and payment

- We agree the reward and how it is paid with you, by email.
- Payout is made after we **confirm** the finding and **fix or mitigate** the issue.
- Reward is based on the **final severity tier** we assign (see Rewards).
- **First valid report** per issue receives the reward; duplicates do not.

---

**Last updated:** 2026-11-19
