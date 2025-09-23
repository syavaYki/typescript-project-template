# Usage Examples

This document provides examples of how to use the TypeScript project template.

## Basic Usage

### Creating Functions

```typescript
// src/utils/helpers.ts
export function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
}

export function createUser(
  id: number,
  firstName: string,
  lastName: string,
  email?: string
): User {
  return {
    id,
    firstName,
    lastName,
    ...(email && { email }),
  };
}
```

### Writing Tests

```typescript
// src/utils/helpers.test.ts
import { formatName, createUser } from './helpers';

describe('formatName', () => {
  it('should format full name correctly', () => {
    expect(formatName('John', 'Doe')).toBe('John Doe');
  });

  it('should handle empty strings', () => {
    expect(formatName('', 'Doe')).toBe('Doe');
    expect(formatName('John', '')).toBe('John');
  });
});

describe('createUser', () => {
  it('should create user without email', () => {
    const user = createUser(1, 'John', 'Doe');
    expect(user).toEqual({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    });
  });

  it('should create user with email', () => {
    const user = createUser(1, 'John', 'Doe', 'john@example.com');
    expect(user).toEqual({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    });
  });
});
```

## Development Workflow

1. **Write code** in the `src/` directory
2. **Run in development mode** with `npm run dev`
3. **Run tests** with `npm test` or `npm run test:watch`
4. **Lint and format** with `npm run lint:fix` and `npm run format`
5. **Build for production** with `npm run build`
6. **Run built code** with `npm start`

## CI/CD Integration

### GitHub Actions Example

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]

    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run test:coverage
      - run: npm run build
```

## Customization Examples

### Adding Express.js

```bash
npm install express
npm install -D @types/express
```

```typescript
// src/server.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from TypeScript Express server!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Adding Environment Configuration

```bash
npm install dotenv
npm install -D @types/dotenv
```

```typescript
// src/config/environment.ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbUrl: process.env.DATABASE_URL || '',
} as const;
```

## Best Practices

1. **Use TypeScript strict mode** - It's already enabled in tsconfig.json
2. **Write tests for all public functions** - Jest is configured and ready
3. **Use meaningful variable and function names** - ESLint will help enforce this
4. **Keep functions small and focused** - Easier to test and maintain
5. **Use interfaces for object shapes** - Better type safety and IntelliSense
6. **Handle errors gracefully** - Use proper error types and handling
7. **Use async/await for promises** - More readable than Promise chains

## Debugging

### VS Code Debugging Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "program": "${workspaceFolder}/src/index.ts",
      "runtimeArgs": ["-r", "ts-node/register"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
}
```

This allows you to set breakpoints and debug your TypeScript code directly in VS Code.
