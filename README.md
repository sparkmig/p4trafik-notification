# P4 Trafik Notification

A Node.js application that subscribes to DR's traffic API (P4 Trafik) using Server-Sent Events (SSE) and sends push notifications via Pushover when traffic updates are received.

## Features

- Real-time traffic updates from DR's P4 Trafik API
- Push notifications via Pushover
- Flexible logging system with file and console loggers
- Docker support with Docker Compose
- Automatic reconnection handling
- Graceful shutdown with cleanup

## Prerequisites

- Node.js 18+ (for local development)
- Docker and Docker Compose (for containerized deployment)
- Pushover account with User Key and App Token

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd p4trafik-notification
```

### 2. Configure Environment Variables

Copy the example environment file and add your Pushover credentials:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
PUSHOVER_USER_KEY=your_actual_user_key
PUSHOVER_APP_TOKEN=your_actual_app_token
```

### 3. Get Pushover Credentials

1. Sign up at [Pushover](https://pushover.net/)
2. Your **User Key** is displayed on your dashboard
3. Create a new application to get an **App Token**

## Running the Application

### Option 1: Local Development

```bash
npm install
npm run start
```

### Option 2: Docker Compose (Recommended)

```bash
docker-compose up -d
```

View logs:
```bash
docker-compose logs -f
```

Stop the application:
```bash
docker-compose down
```

## Project Structure

```
p4trafik-notification/
├── src/
│   ├── event-handlers.js      # EventSource event handlers
│   ├── logging/
│   │   ├── factory.js          # Logger factory (singleton pattern)
│   │   ├── logger-base.js      # Base logger class
│   │   └── file-logger.js      # File logger implementation
│   └── notification/
│       ├── client.js           # Pushover notification client
│       └── index.js            # Notification service export
├── logs/                       # Application logs directory (auto-created)
├── index.js                    # Application entry point
├── main.js                     # Main logic and EventSource setup
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
```

## How It Works

1. The application connects to DR's P4 Trafik API via Server-Sent Events (SSE)
2. When traffic updates are received, the `onMessage` handler is triggered
3. A push notification is sent via Pushover to your configured device(s)
4. The connection automatically reconnects if interrupted

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PUSHOVER_USER_KEY` | Your Pushover user key | Yes |
| `PUSHOVER_APP_TOKEN` | Your Pushover application token | Yes |

## Logging

The application includes a flexible logging system with multiple logger types:

### Logger Types

- **File Logger**: Writes logs to `logs/application.log` with timestamps and log levels
- **Console Logger**: Outputs logs directly to the console

### Using the Logger

```javascript
const LoggingFactory = require('./src/logging/factory.js').default;

// Get logger factory instance (singleton)
const factory = LoggingFactory.getInstance();

// Create a file logger
const logger = factory.createLogger('file');

// Use logger methods
logger.info('Application started');
logger.error('An error occurred');
logger.warning('Warning message');
logger.debug('Debug information');
```

### Log Format

File logs are formatted as:
```
[2025-12-17T10:30:45.123Z] [INFO]: Application started
[2025-12-17T10:30:46.456Z] [ERROR]: An error occurred
```

The `logs/` directory is automatically created at the project root when using the file logger.

## Development

The application uses:
- `eventsource` - For Server-Sent Events client support in Node.js
- Pushover API - For push notifications
- Custom logging system with factory pattern

## License

ISC
