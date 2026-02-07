Check if hexul.com is up to date by running all checks below. Report results as a status table, then offer to fix any issues found.

## Checks

Run these checks in parallel where possible:

### 1. Local State
- Run `git status` — are there uncommitted changes to tracked files?
- Run `git log origin/main..HEAD` — are there unpushed commits?

### 2. GitHub Pages Deployment
- Run `gh api repos/hex/hexul.com/pages/builds/latest` to check the last deployment status and timestamp.

### 3. Live Content Match
- Fetch https://hexul.com using WebFetch and compare the `<title>`, `<h1>`, tagline, product names, and product links against the local `index.html`. Flag any differences.

### 4. Product Links
- Check that each product URL listed in `index.html` is reachable (HTTP 200). Extract the URLs from the source rather than hardcoding them. Use curl with `--head --max-time 5` for each.

## Output

Present results as a status table:

```
Check                  Status
-----                  ------
Uncommitted changes    [clean / dirty]
Unpushed commits       [synced / N commits ahead]
Last deploy            [success / failed] (timestamp)
Live content match     [match / N differences]
mirrorps.hexul.com     [up / down]
hex-forge.hexul.com    [up / down]
```

## Fixes

If any issues are found, offer specific fixes:
- **Uncommitted changes:** Offer to commit with a descriptive message
- **Unpushed commits:** Offer to push to origin/main
- **Deploy failure:** Show the error from the GitHub API and suggest checking the Pages settings
- **Content mismatch:** Show the specific differences and suggest pushing if local is ahead
- **Product link down:** Report the HTTP status code and suggest investigating
