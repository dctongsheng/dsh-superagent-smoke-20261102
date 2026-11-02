# DSH Superagent smoke test

Public, disposable test fixture for dsh-superagent. Contains no application data or credentials.

Run `npm test` with Node.js 22 or newer. The initial `add` implementation intentionally subtracts; the agent should fix it in a pull request.

The `Request Superagent smoke test` workflow posts one scoped request on issue #1 as `github-actions[bot]`. It must be dispatched manually.
