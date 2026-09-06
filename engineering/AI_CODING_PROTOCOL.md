# Vibecoding / AI Coding Protocol

## Before coding

The AI agent must read:
- AGENTS.md
- product requirements
- source-of-truth
- security baseline
- relevant skill file

## During coding

AI must:
- explain assumptions when requirements are ambiguous;
- use typed contracts where supported;
- avoid unnecessary dependencies;
- avoid broad permission changes;
- preserve security controls;
- add tests for security-sensitive logic.

## After coding

Run:
- formatter;
- linter;
- type checker;
- unit tests;
- integration tests;
- dependency audit;
- secret scan;
- accessibility checks;
- build.

## Human review required

AI must not independently approve:
- legal policies;
- production secrets;
- payment gateway configuration;
- parent consent mechanism;
- deletion/retention policy;
- public claims;
- production database migrations involving personal data;
- security exceptions.
