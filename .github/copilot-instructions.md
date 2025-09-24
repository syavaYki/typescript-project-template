# TypeScript Project Template

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Project Overview
This is a basic TypeScript project template with modern tooling including TypeScript, ESLint, Prettier, Jest, and comprehensive npm scripts. The project compiles TypeScript to CommonJS modules and includes a complete development workflow.

## Working Effectively

### Bootstrap and Setup Commands
Run these commands in exact order to set up the development environment:

```bash
npm install  # Install dependencies - takes ~30 seconds, NEVER CANCEL, set timeout to 120+ seconds
```

### Build Commands  
**CRITICAL**: All build and test commands have been validated and work correctly.

```bash
npm run build  # TypeScript compilation - takes ~1-2 seconds, set timeout to 60+ seconds
npm run clean  # Remove build artifacts - instant
```

### Development Commands
```bash
npm run dev    # Run TypeScript source directly with ts-node - takes ~1-2 seconds
npm run watch  # Watch mode with automatic restart - long-running process
npm start      # Run compiled JavaScript - requires build first, instant
```

### Testing Commands
**NEVER CANCEL**: Test suite runs quickly but allow adequate time for Jest initialization.

```bash
npm test              # Run Jest tests - takes ~2-3 seconds, set timeout to 120+ seconds  
npm run test:watch    # Run tests in watch mode - long-running process
npm run test:coverage # Run tests with coverage report - takes ~3-4 seconds, set timeout to 120+ seconds
```

### Code Quality Commands
All linting and formatting commands are fast but set appropriate timeouts:

```bash
npm run lint          # ESLint check - takes ~1-2 seconds, set timeout to 60+ seconds
npm run lint:fix      # ESLint with auto-fix - takes ~1-2 seconds, set timeout to 60+ seconds
npm run format        # Format code with Prettier - takes ~1 second, set timeout to 60+ seconds
npm run format:check  # Check Prettier formatting - takes ~1 second, set timeout to 60+ seconds
```

### Complete Validation Workflow
**ALWAYS run this complete workflow before committing changes**:

```bash
npm run clean && npm run lint && npm run format:check && npm test && npm run build && npm start
```

This workflow takes ~10-15 seconds total. Set timeout to 300+ seconds to allow for all steps.

## Validation Scenarios

### CRITICAL: Manual Validation Requirements
After making any code changes, ALWAYS run through these scenarios:

1. **Basic Function Test**: Verify the greet function works correctly
   - Run `npm run dev` and confirm it outputs "Hello, World!"
   - Verify the function accepts different inputs properly

2. **Build Test**: Ensure compilation works and output is correct
   - Run `npm run build` and verify dist/ folder is created with .js, .d.ts, and .map files
   - Run `npm start` and confirm it produces the same output as dev mode

3. **Test Suite Validation**: Confirm all tests pass
   - Run `npm test` and verify both test cases pass
   - Run `npm run test:coverage` and verify coverage reports are generated

## Project Structure

### Key Directories and Files
```
├── src/                 # TypeScript source files
│   └── index.ts        # Main entry point with greet function
├── tests/              # Jest test files  
│   └── index.test.ts   # Tests for main functions
├── dist/               # Compiled JavaScript output (generated)
├── coverage/           # Jest coverage reports (generated)
├── .github/            # GitHub configuration
├── node_modules/       # Dependencies (not committed)
└── Configuration files:
    ├── package.json           # Project dependencies and scripts
    ├── tsconfig.json         # TypeScript compiler options
    ├── tsconfig.test.json    # TypeScript config for tests
    ├── jest.config.js        # Jest testing configuration
    ├── eslint.config.mjs     # ESLint linting rules
    ├── .prettierrc          # Prettier formatting rules
    └── .gitignore           # Git ignore patterns
```

### Important Configuration Details

**TypeScript Configuration**:
- Compiles to CommonJS modules targeting ES2020
- Source maps and declarations enabled
- Strict mode enabled for better type safety
- Separate configuration for test files

**Testing Setup**:
- Jest with ts-jest preset for TypeScript support
- Tests located in `tests/` directory
- Coverage collection enabled for `src/` files
- Test files use `*.test.ts` naming convention

**Code Quality**:
- ESLint with TypeScript support and recommended rules
- Prettier for consistent code formatting
- Pre-configured rules that work together without conflicts

## Timing Expectations and Timeouts

Based on validation testing, use these timeout values:

- **npm install**: 30-60 seconds (set timeout: 120+ seconds)
- **npm run build**: 1-2 seconds (set timeout: 60+ seconds)  
- **npm test**: 2-3 seconds (set timeout: 120+ seconds)
- **npm run lint**: 1-2 seconds (set timeout: 60+ seconds)
- **npm run format:check**: <1 second (set timeout: 60+ seconds)
- **Complete validation workflow**: 10-15 seconds (set timeout: 300+ seconds)

**NEVER CANCEL** any of these commands. They complete quickly but allow adequate timeout buffers.

## Common Tasks

### Adding New Source Files
1. Create TypeScript files in `src/` directory
2. Update `src/index.ts` to export new functionality if needed
3. Run `npm run build` to verify compilation
4. Always create corresponding test files in `tests/`

### Adding New Dependencies
```bash
npm install <package-name>              # Production dependency
npm install --save-dev <package-name>   # Development dependency
```

### Troubleshooting Build Issues
- Check TypeScript errors: `npm run build`
- Check linting issues: `npm run lint`
- Check formatting issues: `npm run format:check`
- View test failures: `npm test`

If build fails, the error messages are typically self-explanatory. Most common issues:
- TypeScript compilation errors (fix in source files)
- ESLint rule violations (run `npm run lint:fix` or fix manually)
- Prettier formatting issues (run `npm run format`)

## Pre-commit Checklist
Before committing any changes, ALWAYS:

1. Run complete validation workflow: `npm run clean && npm run lint && npm run format:check && npm test && npm run build && npm start`
2. Verify manual validation scenarios work correctly
3. Check that no build artifacts are committed (dist/, coverage/, *.js, *.d.ts files in src/)
4. Ensure .gitignore is properly excluding generated files

## Frequently Run Commands Output

### Repository Root Structure
```
$ ls -la
.git/
.github/
.gitignore
.prettierrc
README.md
eslint.config.mjs
jest.config.js
node_modules/
package-lock.json
package.json
src/
tests/
tsconfig.json
tsconfig.test.json
```

### Package.json Scripts
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js", 
    "dev": "ts-node src/index.ts",
    "watch": "nodemon --exec ts-node src/index.ts",
    "clean": "rm -rf dist",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write src/**/*.ts", 
    "format:check": "prettier --check src/**/*.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

This template provides a solid foundation for TypeScript development with all essential tooling pre-configured and validated.