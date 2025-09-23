# TypeScript Project Template

A comprehensive TypeScript project template with essential development tools and configurations pre-configured for rapid development.

## Features

- ✅ **TypeScript** - Strongly typed JavaScript with latest features
- ✅ **ESLint** - Code linting with TypeScript-specific rules
- ✅ **Prettier** - Code formatting and style consistency
- ✅ **Jest** - Testing framework with TypeScript support
- ✅ **Husky** - Git hooks for code quality enforcement
- ✅ **VS Code** - Optimized settings and extension recommendations
- ✅ **Build Scripts** - Pre-configured npm scripts for common tasks

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd typescript-project-template
npm install
```

### 2. Development

```bash
# Run in development mode with hot reload
npm run dev

# Build the project
npm run build

# Run the built project
npm start

# Watch mode for development
npm run watch
```

### 3. Code Quality

```bash
# Lint your code
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

### 4. Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Project Structure

```
├── src/                    # Source code
│   ├── index.ts           # Main entry point
│   ├── utils/             # Utility functions
│   │   └── math.ts        # Math utilities example
│   ├── index.test.ts      # Tests for main module
│   └── utils/
│       └── math.test.ts   # Tests for utilities
├── dist/                  # Compiled JavaScript (generated)
├── coverage/              # Test coverage reports (generated)
├── .vscode/               # VS Code settings
│   ├── extensions.json    # Recommended extensions
│   └── settings.json      # Editor settings
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── .prettierignore        # Prettier ignore patterns
├── .gitignore             # Git ignore patterns
├── .lintstagedrc.json     # Lint-staged configuration
├── jest.config.js         # Jest testing configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Configuration Details

### TypeScript (`tsconfig.json`)

- Target: ES2020
- Strict mode enabled
- Source maps and declarations generated
- Output directory: `dist/`

### ESLint (`.eslintrc.json`)

- TypeScript parser and rules
- Prettier integration
- Recommended configurations
- Custom rule overrides

### Prettier (`.prettierrc.json`)

- Single quotes
- Semicolons
- 2-space indentation
- 80 character line width

### Jest (`jest.config.js`)

- TypeScript support via ts-jest
- Coverage reporting
- Test file patterns configured

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run dev` | Run development server with ts-node |
| `npm run watch` | Watch mode compilation |
| `npm start` | Run compiled JavaScript |
| `npm run clean` | Remove dist directory |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |
| `npm test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |

## VS Code Setup

This template includes VS Code configuration with:

### Recommended Extensions
- TypeScript support
- ESLint integration
- Prettier formatting
- Jest test runner

### Editor Settings
- Format on save enabled
- Auto-fix ESLint issues on save
- Optimized file exclusions

## Git Hooks

Pre-commit hooks are configured with Husky and lint-staged to:
- Run ESLint and fix issues
- Format code with Prettier
- Ensure code quality before commits

## Customization

### Adding Dependencies

```bash
# Production dependencies
npm install package-name

# Development dependencies
npm install -D package-name
```

### Modifying Configurations

- **TypeScript**: Edit `tsconfig.json`
- **ESLint**: Edit `.eslintrc.json`
- **Prettier**: Edit `.prettierrc.json`
- **Jest**: Edit `jest.config.js`

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## Support

For issues and questions, please open an issue in the GitHub repository.
