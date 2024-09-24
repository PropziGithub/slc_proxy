# SLC Proxy Server
This is a Node.js application that sets up a proxy server using Express.js. It's designed to forward requests to specified Pardot forms while handling CORS (Cross-Origin Resource Sharing) issues.

## Features

- Uses Express.js as the server framework
- Implements CORS handling
- Proxies requests to multiple Pardot form endpoints
- Configurable through environment variables
- Modifies headers for proper origin and CORS handling

## Prerequisites

- Node.js (version 18.x or higher recommended)
- yarn (usually comes with Node.js)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `yarn install` to install the dependencies.

## Configuration
Create a `.env` file in the root directory of the project with the following content:
```bash
PORT=3000
ALLOWED_ORIGINS=https://your-allowed-origin.com
```

## Usage
To start the server, run:

```typescript
node server.js
```