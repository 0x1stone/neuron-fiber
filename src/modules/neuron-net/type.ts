import { INeuralLayerParams } from '../neuron-layer/type'

export interface TloadModelOpt {
  params?: INeuralLayerParams[],
  path?: string
}

export type RequireAtLeastOne<T, Keys extends keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]
