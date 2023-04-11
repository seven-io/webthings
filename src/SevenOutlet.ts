import {Constants, Notifier, Outlet} from 'gateway-addon'
import {sms} from './util'
import {Config} from './types'

export class SevenOutlet extends Outlet {
    constructor(notifier: Notifier, private config: Config, private recipient: any) {
        super(notifier, recipient)

        this.setName(recipient)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async notify(_title: string, message: string, _level: Constants.NotificationLevel) {
        console.log(`Sending SMS with message "${message}"`)

        await sms(this.config, this.recipient, message)
    }
}