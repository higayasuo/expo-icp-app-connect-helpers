import { describe, it, expect } from 'vitest';
import { buildAppConnectionParams } from '../buildAppConnectionParams';

describe('buildAppConnectionParams', () => {
  it('should build params with all parameters', () => {
    const params = buildAppConnectionParams({
      deepLink: 'exp://192.168.1.210:8081',
      frontendCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
      easDeepLinkType: undefined,
      pathname: '/dashboard',
    });

    expect(params).toEqual({
      deepLinkType: 'expo-go',
      pathname: '/dashboard',
    });
  });

  it('should build params with root pathname', () => {
    const params = buildAppConnectionParams({
      deepLink: 'exp://192.168.1.210:8081',
      frontendCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
      easDeepLinkType: undefined,
      pathname: '/',
    });

    expect(params).toEqual({
      deepLinkType: 'expo-go',
      pathname: '/',
    });
  });
});
