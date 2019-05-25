import NeuronNet from './index'
import { emitDownload } from '@/utils/emit-download'
import { TloadModelOpt, RequireAtLeastOne } from './type'

/**
 * The NeuronNet for browser
 *
 * @export
 * @class BrowserNeuronNet
 * @extends {NeuronNet}
 */
export default class BrowserNeuronNet extends NeuronNet {

  /**
   *
   *
   * @memberof NeuronNet
   */
  public loadModel(options: RequireAtLeastOne<TloadModelOpt, 'params'>) {
    this.neuronLayers = [] // Clear 
    if (options.params) {
      this.loadModelFromJson(options.params)
    } else if (options.path) {
      console.error('[Error] loadModel <path> only suuport in nodejs')
    }
  }

  /**
  *
  *
  * @param {string} [name='neural-params' as string]
  * @memberof NeuronNet
  */
  public async export(name = 'neural-params' as string) {
    super.summary()
    const data = JSON.stringify(this.neuronLayersParams)
    emitDownload(data, name)
  }

  /**
   *
   *
  public async loadModelFromFile(path: string) {
   * @private
   * @param {string} path
   * @memberof BrowserNeuronNet
   */
  public async loadModelFromFile(path: string) {
    console.error('[Error]: Only nodejs env support')
  }
}
