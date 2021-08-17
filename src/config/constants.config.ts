import type { TVODefaults } from '@autoreview/types'

/**
 * @file Configuration - Constant Values
 * @module autoreview/config/constants
 */

/**
 * @property {TVODefaults} TVO_DEFAULTS - `class-transformer-validator` options
 * @see https://github.com/MichalLytek/class-transformer-validator
 */
export const TVO_DEFAULTS: TVODefaults = Object.freeze({
  transformer: {},
  validator: {
    enableDebugMessages: true,
    forbidNonWhitelisted: true,
    stopAtFirstError: false,
    validationError: { target: false, value: true },
    whitelist: false
  }
})
