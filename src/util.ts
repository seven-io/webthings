import fetch, {RequestInit} from 'node-fetch'
import {Database} from 'gateway-addon'
import {Config} from './types'

export function arrayUnique(items: any[]) {
    return items.filter((el, pos, arr) => arr.indexOf(el) === pos)
}

export async function sms(cfg: Config, to: string, text: string): Promise<void> {
    const requestInit: RequestInit = {
        body: JSON.stringify({
            from: cfg.from,
            text,
            to,
        }),
        headers: {
            'Content-Type': 'application/json',
            SentWith: 'WebThings',
            'X-Api-Key': cfg.apiKey,
        },
        method: 'POST',
    }

    await fetch('https://gateway.seven.io/api/sms', requestInit)
}

export async function getConfigAndDatabase(id: string): Promise<[Config, Database]> {
    const db = new Database(id)
    await db.open()
    const cfg = <Config>await db.loadConfig()

    if (!cfg.apiKey) {
        const apiKey = process.env.SEVEN_API_KEY
        if (apiKey) {
            cfg.apiKey = apiKey
            await db.saveConfig(cfg)
        }
    }

    return [
        cfg,
        db
    ]
}
