import { describe, it, expect } from 'vitest';
import { buildInternetIdentityURL } from '../buildInternetIdentityURL';

describe('buildInternetIdentityURL', () => {
  it('should build URL with all parameters', () => {
    const url = buildInternetIdentityURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      replicaPort: 4943,
      canisterPort: 14943,
      internetIdentityPort: 24943,
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
    });

    expect(url.toString()).toBe(
      'https://192.168.1.210:24943/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai',
    );
  });

  it('should build URL with minimal required parameters', () => {
    const url = buildInternetIdentityURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
    });

    expect(url.toString()).toBe(
      'https://192.168.1.210:24943/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai',
    );
  });

  it('should build URL with custom internet identity port', () => {
    const url = buildInternetIdentityURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      internetIdentityPort: 8000,
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
    });

    expect(url.toString()).toBe(
      'https://192.168.1.210:8000/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai',
    );
  });
});
