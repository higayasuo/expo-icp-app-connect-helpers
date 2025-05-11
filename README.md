# expo-icp-app-connect-helpers

This project provides helpers for invoking another application from the frontend and receiving result via deep link in Internet Computer (ICP) applications.

## Installation

```bash
npm install expo-icp-app-connect-helpers
```

## Peer Dependencies

This package requires the following peer dependencies:

- `canister-manager` (>=0.1.7)
- `expo-icp-frontend-helpers` (>=0.1.12)

These dependencies are required for managing Internet Computer canisters and handling deep links in Expo applications. Make sure to install them in your project:

```bash
npm install canister-manager@^0.1.7 expo-icp-frontend-helpers@^0.1.12
```

## Usage

### Building App Connection URL

```typescript
import { buildAppConnectionURL } from 'expo-icp-app-connect-helpers'

const url = buildAppConnectionURL({
  dfxNetwork: 'local',
  localIPAddress: '192.168.1.210',
  targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
})
// Returns: 'https://192.168.1.210:14943/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai'
```

### Building App Connection Parameters

```typescript
import { buildAppConnectionParams } from 'expo-icp-app-connect-helpers'

const params = buildAppConnectionParams({
  deepLink: 'exp://192.168.1.210:8081',
  frontendCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  easDeepLinkType: undefined
})
// Returns: { deepLinkType: 'expo-go' }
```

## API Reference

### buildAppConnectionURL

Builds a URL for connecting to an Internet Computer application.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| dfxNetwork | string | Yes | The DFX network to connect to (e.g., 'local', 'ic') |
| localIPAddress | string | Yes | The local IP address of the replica |
| replicaPort | number | No | Optional port number for the replica |
| canisterPort | number | No | Optional port number for the canister |
| internetIdentityPort | number | No | Optional port number for Internet Identity |
| targetCanisterId | string | Yes | The ID of the target canister to connect to |

#### Returns

`string` - The complete URL for connecting to the application

### buildAppConnectionParams

Builds connection parameters for deep linking to an Internet Computer application.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| deepLink | string | Yes | The deep link URL to be processed |
| frontendCanisterId | string | Yes | The ID of the frontend canister |
| easDeepLinkType | string \| undefined | No | Optional EAS deep link type for Expo builds |

#### Returns

`DeepLinkConnectionParams` - The connection parameters with deep link type

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build the package
npm run build
```

## License

ISC
