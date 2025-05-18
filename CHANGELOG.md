# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.3] - 2025-05-18

### Added

- `buildInternetIdentityURL` function for building URLs to connect to Internet Identity
- Support for custom Internet Identity port configuration
- Added `pathname` parameter to `buildAppConnectionURL` function (optional, defaults to '/')
- Added `pathname` parameter to `buildAppConnectionParams` function (required)
- Added `pathname` to default required keys in `parseDeepLinkConnectionParams` function
- Comprehensive test suite for Internet Identity URL building functionality
- Updated test suites to cover pathname functionality
- Updated documentation with new function examples and API reference

## [0.1.2] - 2025-05-11

### Added

- Exported `parseDeepLinkConnectionParams` function in `index.ts` for public API access

## [0.1.1] - 2025-05-11

### Added

- `parseDeepLinkConnectionParams` function for parsing deep link connection parameters from URL query strings
- Support for custom required keys in parameter parsing
- Validation for deep link types
- Comprehensive test suite for parameter parsing functionality
- Updated documentation with new function examples and API reference

## [0.1.0] - 2025-05-11

### Added

- Initial release
- `buildAppConnectionURL` function for building URLs to connect to Internet Computer applications
- `buildAppConnectionParams` function for building deep link connection parameters
- TypeScript type definitions
- Comprehensive test suite
- Documentation with examples and API reference

### Dependencies

- Added peer dependencies:
  - `canister-manager` (>=0.1.7)
  - `expo-icp-frontend-helpers` (>=0.1.12)
- Added dev dependencies:
  - TypeScript
  - Vite
  - Vitest
  - vite-plugin-dts
  - Other development tools
