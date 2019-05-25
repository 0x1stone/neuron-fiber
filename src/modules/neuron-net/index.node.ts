import fs from 'fs'
import NeuronNet from './index'
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
  public loadModel(options: RequireAtLeastOne<TloadModelOpt, 'params' | 'path'>) {
    this.neuronLayers = [] // Clear 
    if (options.params) {
      this.loadModelFromJson(options.params)
    } else if (options.path) {
      this.loadModelFromFile(options.path)
    }
  }

  /**
  *
  *
  * @param {string} [name='neural-params' as string]
  * @memberof NeuronNet
  */
  public async export(name = 'neural-params' as string) {
    const fileName = /\.json$/.test(name) ? name : `${name}.json`
    const data = JSON.stringify(this.neuronLayersParams)
    fs.writeFileSync(fileName, data)
  }

  /**
   * Only support in nodejs
   *
   * @private
   * @memberof NeuronNet
   */
  public async loadModelFromFile(path: string) {
    fs.readFile(path, (err, data) => {
      try {
        if (err) throw err;
        const contents = JSON.parse(data.toString())
        this.loadModelFromJson(JSON.parse(contents))
      } catch (e) {
        console.error('[Error] Failure to convert .json file')
      }
    })
  }
}
