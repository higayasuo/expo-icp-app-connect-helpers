import { describe, it, expect } from 'vitest'
import { parseDeepLinkConnectionParams } from '../parseDeepLinkConnectionParams'
import { DeepLinkConnectionParams } from '../types'

describe('parseDeepLinkConnectionParams', () => {
  it('should parse params with default required keys', () => {
    const params = parseDeepLinkConnectionParams(
      'sessionId=abc123&deepLinkType=expo-go'
    )

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go'
    })
  })

  it('should parse params with additional required keys', () => {
    type ExtendedParams = Required<DeepLinkConnectionParams> & {
      customKey: string
    }

    const params = parseDeepLinkConnectionParams<ExtendedParams>(
      'sessionId=abc123&deepLinkType=expo-go&customKey=value',
      'customKey'
    )

    expect(params).toEqual({
      sessionId: 'abc123',
      deepLinkType: 'expo-go',
      customKey: 'value'
    })
  })

  it('should throw error when required keys are missing', () => {
    expect(() => {
      parseDeepLinkConnectionParams(
        'sessionId=abc123'
      )
    }).toThrow()
  })

  it('should throw error when deepLinkType is invalid', () => {
    expect(() => {
      parseDeepLinkConnectionParams(
        'sessionId=abc123&deepLinkType=invalid-type'
      )
    }).toThrow('Invalid deepLinkType')
  })
})