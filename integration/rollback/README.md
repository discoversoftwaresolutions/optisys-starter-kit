# Migration Rollback

Rollback is a first-class migration control.

Validated behavior includes:

- rollback revokes cutover authority;
- source infrastructure remains preserved;
- source retirement remains false after rollback;
- rollback checkpoints are established before provider execution;
- destructive cutover can be denied by policy.

This design separates migration success from irreversible source retirement.
