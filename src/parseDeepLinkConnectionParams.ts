import { parseParams, isDeepLinkType } from 'expo-icp-frontend-helpers'
import { DeepLinkConnectionParams } from "./types";

/**
 * Default required keys for deep link connection parameters
 * - sessionId: Unique identifier for the connection session
 * - deepLinkType: Type of deep link (e.g., 'expo-go')
 */
const defaultRequiredKeys = ['sessionId', 'deepLinkType'] as const;

/**
 * Parses deep link connection parameters from a URL query string
 * @template P - Type extending Required<DeepLinkConnectionParams>
 * @param {string} paramsStr - The URL query string to parse
 * @param {...(keyof P)[]} requiredKeys - Additional required keys to validate
 * @returns {P} The parsed parameters
 * @example
 * // Parse with default required keys (sessionId and deepLinkType)
 * const params = parseDeepLinkConnectionParams(
 *   'sessionId=abc123&deepLinkType=expo-go'
 * );
 *
 * // Parse with additional required keys
 * const params = parseDeepLinkConnectionParams<Required<DeepLinkConnectionParams> & { customKey: string }>(
 *   'sessionId=abc123&deepLinkType=development&customKey=value',
 *   'customKey'
 * );
 */
export const parseDeepLinkConnectionParams = <P extends Required<DeepLinkConnectionParams>>(
  paramsStr: string,
  ...requiredKeys: (keyof P)[]
): P => {
  const keys = [...new Set([...defaultRequiredKeys, ...requiredKeys])] as (keyof P)[];

  const params = parseParams<P>(paramsStr, ...keys);

  if (!isDeepLinkType(params.deepLinkType)) {
    throw new Error('Invalid deepLinkType');
  }

  return params;
};