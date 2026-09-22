# Repository workflow

Read `.agent-workflows/policy/core.md` and `.agent-workflows/profile.json` before work. Follow the pinned `review.md`, `implementation-handoff.md`, `cost.md`, and `cleanup.md` for the assigned workflow. Preserve project-specific requirements and the boundaries of Ashley's current instruction.

Verify the local immutable bundle with `node .agent-workflows/bin/workflow.mjs verify`. Review and stage only approved paths, then run `node .agent-workflows/bin/workflow.mjs validate` before committing. The shared commands use the pinned local copy without a private-source token. Direct validation remains required unless a separately authorized Claude adapter has live enforcement evidence.

Preserve the separate assignment directories, submitted archives, and their requirements. The npm profile targets assignment-8-vite only; it does not cover the other coursework or authorize rewriting submitted artifacts.

The application checks retained by this profile are `npm --prefix assignment-8-vite run lint`, `npm --prefix assignment-8-vite run build`. Keep existing assertions, relevant manual verification, required checks, and deployment settings.

- Only assignment-8-vite lint/build is automated by this profile. No behavior test suite was identified there, and other assignments require their own review.
