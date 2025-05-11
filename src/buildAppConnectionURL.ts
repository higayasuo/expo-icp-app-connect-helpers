import { CanisterManager } from 'canister-manager';

/**
 * Parameters for building an app connection URL
 * @typedef {Object} BuildAppConnectionURLParams
 * @property {string} dfxNetwork - The DFX network to connect to (e.g., 'local', 'ic')
 * @property {string} localIPAddress - The local IP address of the replica
 * @property {number} [replicaPort] - Optional port number for the replica
 * @property {number} [canisterPort] - Optional port number for the canister
 * @property {number} [internetIdentityPort] - Optional port number for Internet Identity
 * @property {string} targetCanisterId - The ID of the target canister to connect to
 */
type BuildAppConnectionURLParams = {
  dfxNetwork: string;
  localIPAddress: string;
  replicaPort?: number;
  canisterPort?: number;
  internetIdentityPort?: number;
  targetCanisterId: string;
};

/**
 * Builds a URL for connecting to an Internet Computer application
 * @param {BuildAppConnectionURLParams} params - The parameters for building the URL
 * @returns {string} The complete URL for connecting to the application
 * @example
 * const url = buildAppConnectionURL({
 *   dfxNetwork: 'local',
 *   localIPAddress: '192.168.1.210',
 *   replicaPort: 4943,
 *   canisterPort: 14943,
 *   internetIdentityPort: 24943,
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
}: BuildAppConnectionURLParams): string => {
  const canisterManager = new CanisterManager({
    dfxNetwork,
    localIPAddress,
    replicaPort,
    canisterPort,
    internetIdentityPort,
  });

  return canisterManager.getFrontendCanisterURL(targetCanisterId);
};
