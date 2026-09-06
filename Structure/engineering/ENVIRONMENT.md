# Environment & Secrets

## Required environments

- local
- staging
- production

## Example variables

See `.env.example`.

## Rules

- Never commit `.env`.
- Never paste production secrets into source.
- Use secret manager/environment secrets.
- Rotate credentials after suspected exposure.
- Use separate credentials for each environment.
- Restrict production access.
