import { CanisterManager } from 'canister-manager';

/**
 * Parameters for building an internet identity URL
 * @typedef {Object} BuildInternetIdentityURLParams
 * @property {string} dfxNetwork - The DFX network to connect to (e.g., 'local', 'ic')
 * @property {string} localIPAddress - The local IP address of the replica
 * @property {number} [replicaPort] - Optional port number for the replica
 * @property {number} [canisterPort] - Optional port number for the canister
 * @property {number} [internetIdentityPort] - Optional port number for Internet Identity
 * @property {string} targetCanisterId - The ID of the target canister to connect to
 */
export type BuildInternetIdentityURLParams = {
  dfxNetwork: string;
  localIPAddress: string;
  replicaPort?: number;
  canisterPort?: number;
  internetIdentityPort?: number;
  targetCanisterId: string;
};

/**
 * Builds a URL for connecting to an Internet Identity
 * @param {BuildAppConnectionURLParams} params - The parameters for building the URL
 * @returns {string} The complete URL for connecting to the application
 * @example
 * const url = buildInternetIdentityURL({
 *   dfxNetwork: 'local',
 *   localIPAddress: '192.168.1.210',
 *   targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
 * });
 */
export const buildInternetIdentityURL = ({
  dfxNetwork,
  localIPAddress,
  replicaPort,
  canisterPort,
  internetIdentityPort,
  targetCanisterId,
}: BuildInternetIdentityURLParams): URL => {
  const canisterManager = new CanisterManager({
    dfxNetwork,
    localIPAddress,
    replicaPort,
    canisterPort,
    internetIdentityPort,
  });

  return new URL(canisterManager.getInternetIdentityURL(targetCanisterId));
};
