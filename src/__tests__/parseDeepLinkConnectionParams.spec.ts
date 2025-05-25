import { describe, it, expect } from 'vitest';
import { parseDeepLinkConnectionParams } from '../parseDeepLinkConnectionParams';
import { DeepLinkConnectionParams } from '../types';

describe('parseDeepLinkConnectionParams', () => {
  it('should parse params with default required keys', () => {
    const params = parseDeepLinkConnectionParams(
      'sessionId=abc123&deepLinkType=expo-go&pathname=/app',
    );

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go',
      pathname: '/app',
    });
  });

  it('should parse params with additional required keys', () => {
    type ExtendedParams = Required<DeepLinkConnectionParams> & {
      customKey: string;
    };

    const params = parseDeepLinkConnectionParams<ExtendedParams>(
      'sessionId=abc123&deepLinkType=expo-go&pathname=/app&customKey=value',
      'customKey',
    );

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go',
      pathname: '/app',
      customKey: 'value',
    });
  });

  it('should parse params with additional optional keys', () => {
    type ExtendedParams = Required<DeepLinkConnectionParams> & {
      customKey?: string;
    };

    const params = parseDeepLinkConnectionParams<ExtendedParams>(
      'sessionId=abc123&deepLinkType=expo-go&pathname=/app&customKey=value',
    );

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go',
      pathname: '/app',
      customKey: 'value',
    });
  });

  it('should parse params with additional optional keys and missing customKey', () => {
    type ExtendedParams = Required<DeepLinkConnectionParams> & {
      customKey?: string;
    };

    const params = parseDeepLinkConnectionParams<ExtendedParams>(
      'sessionId=abc123&deepLinkType=expo-go&pathname=/app',
    );

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go',
      pathname: '/app',
    });
  });

  it('should throw error when required keys are missing', () => {
    expect(() => {
      parseDeepLinkConnectionParams('sessionId=abc123&deepLinkType=expo-go');
    }).toThrow();
  });

  it('should throw error when deepLinkType is invalid', () => {
    expect(() => {
      parseDeepLinkConnectionParams(
        'sessionId=abc123&deepLinkType=invalid-type&pathname=/app',
      );
    }).toThrow('Invalid deepLinkType');
  });
});
