# NestJS Template with ESLint and Prettier

<p align="center">
  <b>README is also available in:</b><br>
  <a href="README.ko.md">한국어</a> |
  <a href="README.ja.md">日本語</a>
</p>

A carefully crafted NestJS template with enhanced code quality tools and modern TypeScript configurations.

## Features

- [NestJS](https://nestjs.com/) - A progressive Node.js framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety and modern JavaScript features
- [ESLint](https://eslint.org/) - Strict linting rules for consistent code quality
  - Type-aware linting
  - Enforced type imports
  - Strict naming conventions
  - Class member ordering
  - Function return type enforcement
  - And more...
- [Prettier](https://prettier.io/) - Opinionated code formatting
- Testing setup with Jest

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v8 or higher)

### Installation

```bash
# Clone the repository
git clone [your-repository-url]

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm run start:dev

# Run tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Check code style
pnpm run lint

# Format code
pnpm run format
```

## Project Structure

```
.
├── src/                      # Source code
│   ├── app.controller.ts     # Main application controller
│   ├── app.service.ts        # Main application service
│   ├── app.module.ts         # Root application module
│   └── main.ts              # Application entry point
├── test/                     # Test files
│   ├── app.e2e-spec.ts      # E2E tests
│   └── jest-e2e.json        # Jest E2E configuration
├── eslint.config.mjs        # ESLint flat configuration
├── prettier.config.mjs      # Prettier configuration
├── nest-cli.json           # NestJS CLI configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.build.json     # TypeScript build configuration
└── package.json            # Project dependencies and scripts
```

## Code Style Guide

This template enforces strict coding standards through ESLint and Prettier:

### TypeScript Guidelines
- Explicit function return types required
- Explicit accessibility modifiers on class members
- Interface names must start with 'I' and use PascalCase
- Enum names must use PascalCase
- Consistent type imports enforced
- Maximum function length of 50 lines

### Import Guidelines
- Type imports must be separate from value imports
  ```typescript
  // Good
  import type { INestApplication } from '@nestjs/common';
  import { Test } from '@nestjs/testing';
  
  // Bad
  import { INestApplication, Test } from '@nestjs/testing';
  ```
- Imports are automatically sorted for better readability
- Consistent member ordering in classes

## Scripts

- `start:dev`: Start the application in development mode with hot-reload
- `build`: Build the application
- `start:prod`: Start the application in production mode
- `lint`: Run ESLint
- `format`: Format code using Prettier
- `test`: Run unit tests
- `test:e2e`: Run end-to-end tests
- `test:cov`: Generate test coverage report

## License

This project is [MIT licensed](LICENSE).
