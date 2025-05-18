# expo-icp-app-connect-helpers

This project provides helpers for invoking another application from the frontend and receiving result via deep link in Internet Computer (ICP) applications.

## Installation

```bash
npm install expo-icp-app-connect-helpers
```

## Peer Dependencies

This package requires the following peer dependencies:

- `canister-manager`
- `expo-icp-frontend-helpers`

These dependencies are required for managing Internet Computer canisters and handling deep links in Expo applications. Make sure to install them in your project:

```bash
npm install canister-manager expo-icp-frontend-helpers
```

## Usage

### Building App Connection URL

```typescript
import { buildAppConnectionURL } from 'expo-icp-app-connect-helpers';

const url = buildAppConnectionURL({
  dfxNetwork: 'local',
  localIPAddress: '192.168.1.210',
  targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  pathname: '/dashboard', // Optional, defaults to '/'
});
// Returns: URL object with pathname '/dashboard'
```

### Building App Connection Parameters

```typescript
import { buildAppConnectionParams } from 'expo-icp-app-connect-helpers';

const params = buildAppConnectionParams({
  deepLink: 'exp://192.168.1.210:8081',
  frontendCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  easDeepLinkType: undefined,
  pathname: '/dashboard',
});
// Returns: { deepLinkType: 'expo-go', pathname: '/dashboard' }
```

### Building Internet Identity URL

```typescript
import { buildInternetIdentityURL } from 'expo-icp-app-connect-helpers';

const url = buildInternetIdentityURL({
  dfxNetwork: 'local',
  localIPAddress: '192.168.1.210',
  targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  internetIdentityPort: 24943, // Optional
});
// Returns: URL object for Internet Identity
```

## API Reference

### buildAppConnectionURL

Builds a URL for connecting to an Internet Computer application.

#### Parameters

| Parameter            | Type   | Required | Description                                              |
| -------------------- | ------ | -------- | -------------------------------------------------------- |
| dfxNetwork           | string | Yes      | The DFX network to connect to (e.g., 'local', 'ic')      |
| localIPAddress       | string | Yes      | The local IP address of the replica                      |
| replicaPort          | number | No       | Optional port number for the replica                     |
| canisterPort         | number | No       | Optional port number for the canister                    |
| internetIdentityPort | number | No       | Optional port number for Internet Identity               |
| targetCanisterId     | string | Yes      | The ID of the target canister to connect to              |
| pathname             | string | No       | Optional pathname to append to the URL (defaults to '/') |

#### Returns

`URL` - A URL object for connecting to the application

### buildAppConnectionParams

Builds connection parameters for deep linking to an Internet Computer application.

#### Parameters

| Parameter          | Type                | Required | Description                                 |
| ------------------ | ------------------- | -------- | ------------------------------------------- |
| deepLink           | string              | Yes      | The deep link URL to be processed           |
| frontendCanisterId | string              | Yes      | The ID of the frontend canister             |
| easDeepLinkType    | string \| undefined | No       | Optional EAS deep link type for Expo builds |
| pathname           | string              | Yes      | The pathname to be used in the deep link    |

#### Returns

`DeepLinkConnectionParams` - The connection parameters with deep link type and pathname

### parseDeepLinkConnectionParams

Parses deep link connection parameters from a URL query string.

#### Parameters

| Parameter    | Type        | Required | Description                                                  |
| ------------ | ----------- | -------- | ------------------------------------------------------------ |
| paramsStr    | string      | Yes      | The URL query string to parse                                |
| requiredKeys | (keyof P)[] | No       | Additional required keys to validate beyond the default ones |

#### Returns

`P` - The parsed parameters, where P extends Required<DeepLinkConnectionParams>

#### Example

```typescript
// Parse with default required keys (sessionId, deepLinkType, and pathname)
const params = parseDeepLinkConnectionParams(
  'sessionId=abc123&deepLinkType=expo-go&pathname=/app',
);

// Parse with additional required keys
const params = parseDeepLinkConnectionParams<
  Required<DeepLinkConnectionParams> & { customKey: string }
>(
  'sessionId=abc123&deepLinkType=development&pathname=/app&customKey=value',
  'customKey',
);
```

### buildInternetIdentityURL

Builds a URL for connecting to Internet Identity.

#### Parameters

| Parameter            | Type   | Required | Description                                         |
| -------------------- | ------ | -------- | --------------------------------------------------- |
| dfxNetwork           | string | Yes      | The DFX network to connect to (e.g., 'local', 'ic') |
| localIPAddress       | string | Yes      | The local IP address of the replica                 |
| replicaPort          | number | No       | Optional port number for the replica                |
| canisterPort         | number | No       | Optional port number for the canister               |
| internetIdentityPort | number | No       | Optional port number for Internet Identity          |
| targetCanisterId     | string | Yes      | The ID of the target canister to connect to         |

#### Returns

`URL` - A URL object for connecting to Internet Identity

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
