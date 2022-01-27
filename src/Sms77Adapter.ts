import {Adapter, AddonManagerProxy} from 'gateway-addon'
import {getConfigAndDatabase} from './util'
import {Sms77Device} from './Sms77Device'

export class Sms77Adapter extends Adapter {
    constructor(
        private addonManager: AddonManagerProxy,
        private packageId: string,
        private errorCallback: (error: string) => void
    ) {
        super(addonManager, 'Sms77Adapter', packageId)
        addonManager.addAdapter(this)
        this.init().then().catch(console.error)
    }

    private async init(): Promise<void> {
        this.addonManager.addAdapter(this)
        const [cfg] = await getConfigAndDatabase(this.packageId)

        const {apiKey} = cfg

        if (!apiKey)
            this.errorCallback('Required setting apiKey is empty') // exit with gateway message

        this.handleDeviceAdded(new Sms77Device(this, 'sms77'))
    }
}
