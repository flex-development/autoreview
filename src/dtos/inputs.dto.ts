import { ReviewEvent } from '@autoreview/enums/review-event.enum'
import type { Inputs } from '@autoreview/interfaces'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

/**
 * @file Data Transfer Objects - InputsDTO
 * @module autoreview/dtos/InputsDTO
 */

/**
 * Options used by `autoreview`.
 *
 * @implements {Inputs}
 */
export default class InputsDTO implements Inputs {
  /**
   * @property {(keyof Inputs)[]} PROPS - Data transfer object property names
   */
  static PROPS: (keyof Inputs)[] = [
    'body',
    'event',
    'reviewers',
    'senders',
    'token'
  ]

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  body?: Inputs['body']

  @IsEnum(ReviewEvent)
  @IsOptional()
  event?: Inputs['event']

  @IsString()
  @IsOptional()
  reviewers?: Inputs['reviewers']

  @IsString()
  @IsOptional()
  senders?: Inputs['senders']

  @IsString()
  @IsNotEmpty({ message: 'GitHub personal access token required' })
  token: Inputs['token']
}
