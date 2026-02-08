# GitHub Actions CI/CD Setup

This project uses GitHub Actions for automated testing, building, and publishing to npm.

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main` and `develop` branches.

**What it does:**
- Tests on Node.js 18.x and 20.x
- Installs dependencies
- Runs linter
- Builds the library
- Runs tests
- Uploads build artifacts

### 2. Publish Workflow (`.github/workflows/publish.yml`)

Runs when a GitHub release is published or manually triggered.

**What it does:**
- Builds the library
- Runs tests and linter
- Publishes to npm with provenance
- Creates a release summary

## Setup Instructions

### 1. Add NPM Token to GitHub Secrets

1. **Generate npm token:**
   ```bash
   npm login
   npm token create
   ```

2. **Add to GitHub:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your npm token from step 1

### 2. Publishing a New Version

#### Option A: Using GitHub Releases (Recommended)

1. **Update version in package.json:**
   ```bash
   npm version patch  # or minor, or major
   ```

2. **Push changes and tags:**
   ```bash
   git push && git push --tags
   ```

3. **Create GitHub Release:**
   - Go to repository → Releases → Draft a new release
   - Choose the tag you just pushed
   - Add release notes
   - Click "Publish release"
   
   The workflow will automatically publish to npm!

#### Option B: Manual Workflow Dispatch

1. Go to Actions → Publish to NPM → Run workflow
2. Enter the tag (e.g., `v1.0.0`)
3. Click "Run workflow"

### 3. Publishing Checklist

Before publishing:
- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with changes
- [ ] Run `npm run build` locally to verify
- [ ] Run tests with `npm test`
- [ ] Commit and push all changes
- [ ] Create and push git tag
- [ ] Create GitHub release

## NPM Package Settings

The workflow publishes with:
- **Provenance**: Cryptographic signatures linking the package to the source code
- **Public access**: Package is publicly available
- **Registry**: https://registry.npmjs.org

## Troubleshooting

### Build fails in CI
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Verify the build works locally: `npm run build`

### Publish fails
- Verify `NPM_TOKEN` secret is set correctly
- Ensure you're logged in to npm: `npm whoami`
- Check if the version already exists on npm
- Verify package name is available

### Tests fail
- Tests are currently set to `continue-on-error: true`
- They won't block the build, but should be fixed

## Local Testing

Test the build process locally before pushing:

```bash
# Install dependencies
npm ci

# Run linter
npm run lint

# Build
npm run build

# Test (if available)
npm test

# Dry run publish (doesn't actually publish)
npm publish --dry-run
```
