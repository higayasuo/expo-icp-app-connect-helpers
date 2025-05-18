import { CanisterManager } from 'canister-manager';
import { concatPaths } from 'expo-icp-frontend-helpers';

/**
 * Parameters for building an app connection URL
 * @typedef {Object} BuildAppConnectionURLParams
 * @property {string} dfxNetwork - The DFX network to connect to (e.g., 'local', 'ic')
 * @property {string} localIPAddress - The local IP address of the replica
 * @property {number} [replicaPort] - Optional port number for the replica
 * @property {number} [canisterPort] - Optional port number for the canister
 * @property {number} [internetIdentityPort] - Optional port number for Internet Identity
 * @property {string} targetCanisterId - The ID of the target canister to connect to
 * @property {string} [pathname] - Optional pathname to append to the URL
 */
export type BuildAppConnectionURLParams = {
  dfxNetwork: string;
  localIPAddress: string;
  replicaPort?: number;
  canisterPort?: number;
  internetIdentityPort?: number;
  targetCanisterId: string;
  pathname?: string;
};

/**
 * Builds a URL for connecting to an Internet Computer application
 * @param {BuildAppConnectionURLParams} params - The parameters for building the URL
 * @returns {string} The complete URL for connecting to the application
 * @example
 * const url = buildAppConnectionURL({
 *   dfxNetwork: 'local',
 *   localIPAddress: '192.168.1.210',
 *   targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
 * });
 */
export const buildAppConnectionURL = ({
  dfxNetwork,
  localIPAddress,
  replicaPort,
  canisterPort,
  internetIdentityPort,
  targetCanisterId,
  pathname = '/',
}: BuildAppConnectionURLParams): URL => {
  const canisterManager = new CanisterManager({
    dfxNetwork,
    localIPAddress,
    replicaPort,
    canisterPort,
    internetIdentityPort,
  });

  const url = new URL(canisterManager.getFrontendCanisterURL(targetCanisterId));
  url.pathname = concatPaths(url.pathname, pathname);

  return url;
};
