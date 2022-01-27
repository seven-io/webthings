![](https://www.sms77.io/wp-content/uploads/2019/07/sms77-Logo-400x79.png "sms77 Logo")

# Official plugin for [WebThings](https://webthings.io/)

Send SMS via [sms77](https://www.sms77.io).

## Prerequisites

- [sms77](https://www.sms77.io) API Key - can be created in
  your [developer dashboard](https://app.sms77.io/developer)
- [WebThings](https://webthings.io/)

## Installation

1. Download the [release](https://github.com/sms77io/webthings/releases/download/v0.0.1/sms77-adapter-0.0.1.tgz)
2. Extract the archive contents to `~/.webthings/addons/sms77-adapter`

## Configuration
**apiKey:** Your sms77 API key. Falls back to *process.env.SMS77_API_KEY* if not set.

**from:** An optional sender identifier used as the message sender. 
May not exceed 11 alphanumeric or 16 numeric characters. 
Country specific limitations may apply.

**recipients:** An array of recipient numbers.

## Support

Need help? Feel free to [contact us](https://www.sms77.io/en/company/contact).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)