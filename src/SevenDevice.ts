import {Action, Adapter, Device} from 'gateway-addon'

export class SevenDevice extends Device {
    private callbacks: { [key: string]: (action: Action) => void } = {}

    constructor(adapter: Adapter, id: string) {
        super(adapter, id)

        this['@context'] = 'https://iot.mozilla.org/schemas/'
        this.setDescription('Send SMS via seven')
        this.setTitle('seven')
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