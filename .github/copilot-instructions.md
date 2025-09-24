# TypeScript Project Template

This is a basic TypeScript project template configured for Node.js development with comprehensive tooling for building, testing, linting, and formatting.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap, Build, and Test the Repository
1. Install dependencies: `npm install` -- takes ~1-2 seconds. NEVER CANCEL.
2. Build the project: `npm run build` -- takes ~1 second. NEVER CANCEL.
3. Run tests: `npm run test` -- takes ~2-3 seconds. NEVER CANCEL.
4. Check linting: `npm run lint` -- takes ~1 second. NEVER CANCEL.
5. Check formatting: `npm run format:check` -- takes ~0.3 seconds. NEVER CANCEL.

### Complete Development Workflow
```bash
# Full clean build and validation sequence
npm run clean && npm run build && npm run test && npm run lint && npm run format:check
```
**This complete sequence takes ~5 seconds total. NEVER CANCEL. Set timeout to 30+ seconds for safety.**

### Running the Application
- **Production mode**: `npm run start` (runs the compiled JavaScript from dist/)
- **Development mode**: `npm run dev` (runs TypeScript directly with ts-node)
- **Watch mode**: `npm run dev:watch` (automatically restarts on file changes)

### Available Scripts
All scripts are defined in package.json and have been validated to work:

- `npm run build` - Compile TypeScript to JavaScript (output in dist/)
- `npm run start` - Run the compiled application
- `npm run dev` - Run in development mode with ts-node
- `npm run dev:watch` - Run in watch mode with automatic restart
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report (~2.5 seconds)
- `npm run lint` - Lint TypeScript files with ESLint
- `npm run lint:fix` - Lint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run clean` - Remove build artifacts (dist/ and coverage/)

## Validation Requirements

### ALWAYS Run Full Validation Before Committing
1. Build must succeed: `npm run build`
2. All tests must pass: `npm run test`
3. Code must be properly linted: `npm run lint`
4. Code must be properly formatted: `npm run format:check`

### End-to-End Validation Scenario
After making any changes, ALWAYS:
1. Run the complete build sequence: `npm run clean && npm run build && npm run test && npm run lint && npm run format:check`
2. Test the application runs: `npm run start` - should output "Hello, TypeScript Template!" and "Project is running successfully!"
3. Verify development mode works: `npm run dev` - should produce the same output

## Project Structure

### Key Directories and Files
```
.
├── src/                    # TypeScript source code
│   └── index.ts           # Main application entry point
├── tests/                 # Jest test files
│   └── index.test.ts      # Tests for main functionality
├── dist/                  # Compiled JavaScript output (created by npm run build)
├── coverage/              # Test coverage reports (created by npm run test:coverage)
├── package.json           # NPM configuration and scripts
├── tsconfig.json          # TypeScript compiler configuration
├── jest.config.js         # Jest testing framework configuration
├── eslint.config.js       # ESLint v9 configuration
└── .prettierrc           # Prettier code formatting configuration
```

### Important Configuration Details
- **TypeScript**: Configured for CommonJS modules targeting ES2020, strict mode enabled
- **ESLint**: Using v9 configuration with TypeScript support and custom rules
- **Jest**: Configured with ts-jest for TypeScript testing
- **Prettier**: 4-space tabs, single quotes, semicolons required

## Development Guidelines

### Code Quality Standards
- **ALWAYS** run `npm run format` before committing
- **ALWAYS** run `npm run lint` and fix any issues before committing
- **ALWAYS** ensure all tests pass with `npm run test`
- **ALWAYS** maintain or improve test coverage

### Adding New Code
1. Add TypeScript files to `src/` directory
2. Add corresponding test files to `tests/` directory with `.test.ts` suffix
3. Import and export using CommonJS/ES module syntax
4. Follow existing code style (enforced by ESLint and Prettier)

### Dependencies
- All development dependencies are already configured
- To add runtime dependencies: `npm install <package>`
- To add development dependencies: `npm install --save-dev <package>`

## Common Tasks

### Repository Root Contents
```bash
ls -la
# Output (key files):
README.md
package.json
tsconfig.json
jest.config.js
eslint.config.js
.prettierrc
.gitignore
src/
tests/
dist/          # (created after npm run build)
node_modules/  # (created after npm install)
```

### Package.json Scripts Summary
All timing measurements validated on Node.js v20.19.5:
```json
{
  "build": "tsc",                                    // ~1 second
  "start": "node dist/index.js",                     // instantaneous
  "dev": "ts-node src/index.ts",                     // instantaneous  
  "dev:watch": "nodemon --exec ts-node src/index.ts", // continuous
  "test": "jest",                                     // ~2-3 seconds
  "test:watch": "jest --watch",                       // continuous
  "test:coverage": "jest --coverage",                 // ~2.5 seconds
  "lint": "eslint src tests --ext .ts",               // ~1 second
  "lint:fix": "eslint src tests --ext .ts --fix",     // ~1 second
  "format": "prettier --write 'src/**/*.ts' 'tests/**/*.ts'", // ~0.3 seconds
  "format:check": "prettier --check 'src/**/*.ts' 'tests/**/*.ts'", // ~0.3 seconds
  "clean": "rm -rf dist coverage"                     // instantaneous
}
```

### Expected Application Output
When running `npm run start` or `npm run dev`, the application should output:
```
Hello, TypeScript Template!
Project is running successfully!
```

### Build Artifacts
- TypeScript compilation creates `.js` and `.d.ts` files in `dist/`
- Test coverage creates HTML reports in `coverage/`
- These directories are automatically cleaned with `npm run clean`
- Build artifacts are excluded from git via `.gitignore`

## Troubleshooting

### If Build Fails
1. Ensure Node.js is installed (v16+ required)
2. Run `npm install` to ensure all dependencies are installed
3. Check TypeScript errors in the console output
4. Verify `tsconfig.json` is properly configured

### If Tests Fail
1. Check Jest configuration in `jest.config.js`
2. Ensure test files are in `tests/` directory with `.test.ts` suffix
3. Verify imports are correctly resolving to source files

### If Linting Fails
1. Run `npm run lint:fix` to auto-fix issues where possible
2. Check ESLint configuration in `eslint.config.js`
3. Address any remaining manual fixes for code style

### Performance Notes
- **CRITICAL**: Never cancel commands - they complete quickly (under 5 seconds total)
- npm install may take longer on first run (~15-30 seconds) due to dependency downloads
- All build, test, lint, and format commands are optimized for speed
- Use watch modes (`dev:watch`, `test:watch`) for iterative development