# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of tailwind-material-3
- Button component with 5 variants (Filled, Outlined, Text, Elevated, Tonal)
- Icon buttons and FABs (Floating Action Buttons)
- Card component with 3 variants (Elevated, Filled, Outlined)
- Text Field component with 2 variants (Filled, Outlined)
- Complete Material Design 3 design token system
- TypeScript support with full type definitions
- ESM and CommonJS builds
- Interactive HTML demos
- Angular integration example

### Features
- **Design Tokens**: Complete Material 3 design system (colors, typography, elevation, shape, motion)
- **Dark Mode**: Full dark mode support with CSS custom properties
- **Accessibility**: ARIA attributes and keyboard navigation
- **Type Safety**: Comprehensive TypeScript definitions
- **Tree-shakeable**: ESM build with proper module structure
- **Framework Agnostic**: Works with any JavaScript framework or vanilla HTML

## [3.0.0] - TBD

Initial public release.

---

## Version Guidelines

- **Major** (X.0.0): Breaking changes
- **Minor** (0.X.0): New features, backwards compatible
- **Patch** (0.0.X): Bug fixes, backwards compatible

## Publishing Process

1. Update version in `package.json`
2. Update this CHANGELOG with changes
3. Commit: `git commit -am "Release v3.0.0"`
4. Tag: `git tag v3.0.0`
5. Push: `git push && git push --tags`
6. Create GitHub Release (triggers automatic npm publish)
