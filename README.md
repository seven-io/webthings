<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven SMS for WebThings</h1>

<p align="center">
  Send SMS notifications from your <a href="https://webthings.io/">WebThings</a> gateway via the seven gateway.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/WebThings-0.10%2B-blue" alt="WebThings 0.10+" />
  <img src="https://img.shields.io/badge/Node.js-20%2B-green" alt="Node.js 20+" />
</p>

---

## Features

- **Outbound SMS** - Trigger SMS notifications from any WebThings rule or event
- **Multiple recipients** - Configure a list of phone numbers to be notified
- **Custom sender ID** - Optional alphanumeric or numeric sender identifier
- **API key fallback** - Reads `SEVEN_API_KEY` from the environment if not configured

## Prerequisites

- [WebThings Gateway](https://webthings.io/) 0.10.0 or newer
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/api-key-access))
- Node.js 20+ (only required when building from source)

## Installation

### Option 1: Pre-built release (recommended)

1. Download the latest [release archive](https://github.com/seven-io/webthings/releases/latest).
2. Extract the contents to `~/.webthings/addons/seven-adapter`:
   ```bash
   mkdir -p ~/.webthings/addons/seven-adapter
   tar -xzf seven-adapter-*.tgz -C ~/.webthings/addons/seven-adapter --strip-components=1
   ```
3. Restart the WebThings Gateway and enable the addon under **Settings > Add-ons**.

### Option 2: Build from source

```bash
git clone https://github.com/seven-io/webthings.git
cd webthings
npm ci
npm run build
./package.sh
```

The resulting `seven-adapter-<version>.tgz` can be installed as in option 1.

## Configuration

Configure the addon under **Settings > Add-ons > seven > Configure**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `apiKey` | string | yes* | Your seven API key. Falls back to `process.env.SEVEN_API_KEY` if empty. |
| `from` | string | no | Sender identifier. Max 11 alphanumeric or 16 numeric characters. Country-specific limitations may apply ([details](https://help.seven.io/en/set-sender-id)). |
| `recipients` | string[] | yes | Phone numbers in E.164 format that will receive notifications. |

\* required unless `SEVEN_API_KEY` is set in the environment.

### Example

```json
{
  "apiKey": "your-seven-api-key",
  "from": "WebThings",
  "recipients": ["+491701234567", "+491709876543"]
}
```

## Usage

Once configured, the addon registers a notifier device. Use it in any WebThings rule by selecting **seven** as the notification target. The configured recipients will receive an SMS with the rule's notification message.

## Development

```bash
npm ci          # install dependencies
npm run build   # compile TypeScript to dist/
./package.sh    # produce a release tarball
```

CI runs the build matrix on Node 20.x, 22.x and 24.x.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact).

## License

[MIT](LICENSE)
