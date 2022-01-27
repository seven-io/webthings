import {Action, Adapter, Device} from 'gateway-addon'

export class Sms77Device extends Device {
    private callbacks: { [key: string]: (action: Action) => void } = {}

    constructor(adapter: Adapter, id: string) {
        super(adapter, id)

        this['@context'] = 'https://iot.mozilla.org/schemas/'
        this.setDescription('Send SMS via sms77')
        this.setTitle('sms77')
    }

    async performAction(action: Action): Promise<void> {
        action.start()

        const name = action.getName()
        const callback = this.callbacks[name]

        if (callback) callback(action)
        else console.warn(`Unknown action "${name}"`)

        action.finish()
    }
}