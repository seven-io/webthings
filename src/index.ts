import {AddonManagerProxy} from 'gateway-addon'
import {SevenAdapter} from './SevenAdapter'
import {SevenNotifier} from './SevenNotifier'

const id = require('../manifest.json').id

export = function (
    addonManager: AddonManagerProxy,
    _: unknown,
    errorCallback: (packageName: string, error: string) => void
): void {
    new SevenAdapter(
        addonManager,
        id,
        (error: string) => errorCallback(id, error)
    )

    new SevenNotifier(addonManager)
};