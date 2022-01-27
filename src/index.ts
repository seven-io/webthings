import {AddonManagerProxy} from 'gateway-addon'
import {Sms77Adapter} from './Sms77Adapter'
import {Sms77Notifier} from './Sms77Notifier'

const id = require('../manifest.json').id

export = function (
    addonManager: AddonManagerProxy,
    _: unknown,
    errorCallback: (packageName: string, error: string) => void
): void {
    new Sms77Adapter(
        addonManager,
        id,
        (error: string) => errorCallback(id, error)
    )

    new Sms77Notifier(addonManager)
};