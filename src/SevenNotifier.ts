import {AddonManagerProxy, Notifier} from 'gateway-addon'
import {arrayUnique, getConfigAndDatabase} from './util'
import {SevenOutlet} from './SevenOutlet'

const id = require('../manifest.json').id

export class SevenNotifier extends Notifier {
    constructor(addonManager: AddonManagerProxy) {
        super(addonManager, id, id)

        addonManager.addNotifier(this)

        this.load().then().catch(console.error)
    }

    async load() {
        const [cfg, db] = await getConfigAndDatabase(this.getId())

        this.handleOutletAdded(
            new SevenOutlet(this, cfg, arrayUnique(cfg.recipients).join(',')))

        await db.saveConfig(cfg)
        db.close()

        return cfg
    }
}
