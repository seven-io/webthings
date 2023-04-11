![](https://www.seven.io/wp-content/uploads/Logo.svg "seven Logo")

# Official plugin for [WebThings](https://webthings.io/)

Send SMS via [seven](https://www.seven.io).

## Prerequisites

- [seven](https://www.seven.io) API Key - can be created in
  your [developer dashboard](https://app.seven.io/developer)
- [WebThings](https://webthings.io/)

## Installation

1. Download the [release](https://github.com/seven-io/webthings/releases/latest/download/seven-webthings-latest.tgz)
2. Extract the archive contents to `~/.webthings/addons/seven-adapter`

## Configuration
**apiKey:** Your seven API key. Falls back to *process.env.SEVEN_API_KEY* if not set.

**from:** An optional sender identifier used as the message sender. 
May not exceed 11 alphanumeric or 16 numeric characters. 
Country specific limitations may apply.

**recipients:** An array of recipient numbers.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)