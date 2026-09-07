# Run Dev Server

## Reproduce uncommitted artifacts
1. `.env` is already present in the checkout — no copy needed for the main worktree.
2. Dependencies are already installed in `node_modules/`.

## Start the dev server
```powershell
# Kill any stale node processes first
powershell -NoProfile -Command "Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force"

# Clean .next cache to avoid lock/corruption issues
powershell -NoProfile -Command "Remove-Item -Recurse -Force '.next' -ErrorAction SilentlyContinue"

# Start Next.js dev server (stdout/stderr to different files)
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '.freebuff\preview-28a905f9-ec39-4aef-a133-63e674862a31.log' -RedirectStandardError '.freebuff\preview-28a905f9-ec39-4aef-a133-63e674862a31.log.err' -WindowStyle Hidden -PassThru).Id"

# Confirm the process is alive
powershell -NoProfile -Command "Get-Process -Id <PID>"
```

## Notes
- Port 3000 may be grabbed by Windows services; the server auto-picks a free port. Check the log file for the actual URL.
- If Turbopack shows lock errors, ensure `.next/dev/lock` is deleted before starting.
- There is a stray `package-lock.json` in `C:\Users\anshk\` that causes Next.js to infer a wrong workspace root. The `turbopack.root: path.resolve(__dirname)` in `next.config.ts` mitigates this.
