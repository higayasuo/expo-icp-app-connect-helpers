import { describe, it, expect } from 'vitest'
import { buildAppConnectionURL } from '../buildAppConnectionURL'

describe('buildAppConnectionURL', () => {
  it('should build URL with all parameters', () => {
    const url = buildAppConnectionURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      replicaPort: 4943,
      canisterPort: 14943,
      internetIdentityPort: 24943,
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
    })

    expect(url).toBe('https://192.168.1.210:14943/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai')
  })

  it('should build URL with minimal required parameters', () => {
    const url = buildAppConnectionURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
    })

    expect(url).toBe('https://192.168.1.210:14943/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai')
  })

  it('should build URL with custom canister port', () => {
    const url = buildAppConnectionURL({
      dfxNetwork: 'local',
      localIPAddress: '192.168.1.210',
      canisterPort: 8000,
      targetCanisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai'
    })

    expect(url).toBe('https://192.168.1.210:8000/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai')
  })
})