import { DeepLinkType } from "expo-icp-frontend-helpers";

/**
 * Represents parameters that may include a session ID.
 * @property {string} [sessionId] - The session ID.
 */
export type ParamsWithSessionId = {
  sessionId?: string;
};

/**
 * Represents the base parameters required for deep link connections.
 * @extends ParamsWithSessionId
 * @property {string} deepLinkType - The type of deep link.
 */
export type DeepLinkConnectionParams = ParamsWithSessionId & {
  deepLinkType: DeepLinkType;
};
