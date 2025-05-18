import { getDeepLinkType } from 'expo-icp-frontend-helpers';
import { DeepLinkConnectionParams } from './types';

/**
 * Parameters for building app connection parameters
 * @typedef {Object} BuildAppConnectionParamsParams
 * @property {string} deepLink - The deep link URL to be processed
 * @property {string} frontendCanisterId - The ID of the frontend canister
 * @property {string | undefined} easDeepLinkType - Optional EAS deep link type for Expo builds
 * @property {string} pathname - The pathname to be used in the deep link
 */
export type BuildAppConnectionParamsParams = {
  deepLink: string;
  frontendCanisterId: string;
  easDeepLinkType: string | undefined;
  pathname: string;
};

/**
 * Builds connection parameters for deep linking to an Internet Computer application
 * @template P - Type extending DeepLinkConnectionParams
 * @param {BuildAppConnectionParamsParams} params - The parameters for building the connection
 * @returns {P} The connection parameters with deep link type
 * @example
 * const params = buildAppConnectionParams({
 *   deepLink: 'exp://192.168.1.210:8081',
 *   frontendCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
 *   easDeepLinkType: undefined,
 *   pathname: '/dashboard'
 * });
 */
export const buildAppConnectionParams = <P extends DeepLinkConnectionParams>({
  deepLink,
  frontendCanisterId,
  easDeepLinkType,
  pathname,
}: BuildAppConnectionParamsParams): P => {
  const deepLinkType = getDeepLinkType({
    deepLink,
    frontendCanisterId,
    easDeepLinkType,
  });

  return {
    deepLinkType,
    pathname,
  } as P;
};
