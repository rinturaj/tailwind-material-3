# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-02-08

### Added

- **New Components**:
  - `Checkbox`
  - `Radio`
  - `Switch`
  - `Tabs` (Primary/Secondary)
  - `Navigation Drawer` (Standard/Modal)
  - `App Bar` (Top/Bottom)
  - `List`
  - `Chip` (Assist, Filter, Input, Suggestion)
  - `Badge`
  - `Progress Indicator` (Linear/Circular)
  - `Tooltip`
  - `Bottom Sheet`
  - `Menu`
- **Design Tokens**: Full Material 3 design token system (Colors, Typography, Elevation, Shape, Motion).
- **TypeScript Support**: Complete TypeScript rewrite with comprehensive type definitions.
- **Build System**: Migrated to Vite building for optimized ESM and CJS output.

### Changed

- **Breaking Change**: Project structure completely reorganized.
- **Breaking Change**: Entry point changed from `index.js` to `dist/index.js`.
- **Breaking Change**: `createMaterialConfig` helper replaced with `tailwind-material-3` plugin.
- **Breaking Change**: Updated `tailwind-material-colors` peer dependency to latest version.

### Removed

- **Old JavaScript Files**: Replaced with TypeScript equivalents.
- **Legacy Components**: Refactored Button and Card to adhere strictly to M3 specs.

## [2.1.0] - 2025-01-15

### Added

- Initial Button component implementation.
- Basic Card component implementation.

### Changed

- Updated Tailwind CSS dependency.

## [1.0.0] - 2024-11-01

### Added

- Initial release.
