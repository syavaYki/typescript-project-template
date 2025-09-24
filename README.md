# TypeScript Project Template

A comprehensive, production-ready TypeScript project template with essential development tools, linting, formatting, testing, and pre-commit hooks.

## ✨ Features

- **TypeScript**: Latest TypeScript with strict configuration
- **ESLint**: Comprehensive linting with TypeScript-specific rules
- **Prettier**: Automatic code formatting with consistent style
- **Jest**: Testing framework with TypeScript support
- **Husky**: Git hooks for automated code quality checks
- **lint-staged**: Run linters on staged files only
- **VS Code**: Optimized settings and recommended extensions
- **Path Mapping**: Clean imports with `@/` aliases
- **npm Scripts**: Convenient commands for common tasks

## 🚀 Quick Start

### Prerequisites

- Node.js (>= 16.0.0)
- npm (>= 8.0.0)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd typescript-project-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Initialize Husky (if needed)**

   ```bash
   npm run prepare
   ```

4. **Start development**

   ```bash
   npm run dev
   ```

## 📁 Project Structure

typescript-project-template/
├── .husky/ # Git hooks
│ └── pre-commit # Pre-commit hook script
├── .vscode/ # VS Code configuration
│ ├── extensions.json # Recommended extensions
│ ├── settings.json # Workspace settings
│ └── tasks.json # Build tasks
├── src/ # Source code
│ ├── types/ # TypeScript type definitions
│ │ ├── common.ts # Common types
│ │ ├── user.ts # User types
│ │ └── index.ts # Type exports
│ ├── utils/ # Utility functions
│ │ ├── calculator.ts # Calculator class example
│ │ ├── greeting.ts # Greeting utilities
│ │ ├── helpers.ts # Helper functions
│ │ └── index.ts # Utility exports
│ └── index.ts # Main entry point
├── tests/ # Test files
│ ├── calculator.test.ts # Calculator tests
│ └── greeting.test.ts # Greeting tests
├── dist/ # Compiled output (auto-generated)
├── coverage/ # Test coverage (auto-generated)
├── .eslintrc.json # ESLint configuration
├── .gitignore # Git ignore rules
├── .prettierrc # Prettier configuration
├── .prettierignore # Prettier ignore rules
├── jest.config.js # Jest configuration
├── package.json # Project configuration
├── tsconfig.json # TypeScript configuration
└── README.md # This file

```bash
typescript-project-template/
├── .husky/                    # Git hooks
│   └── pre-commit            # Pre-commit hook script
├── .vscode/                  # VS Code configuration
│   ├── extensions.json       # Recommended extensions
│   ├── settings.json         # Workspace settings
│   └── tasks.json           # Build tasks
├── src/                      # Source code
│   ├── types/               # TypeScript type definitions
│   │   ├── common.ts        # Common types
│   │   ├── user.ts          # User types
│   │   └── index.ts         # Type exports
│   ├── utils/               # Utility functions
│   │   ├── calculator.ts    # Calculator class example
│   │   ├── greeting.ts      # Greeting utilities
│   │   ├── helpers.ts       # Helper functions
│   │   └── index.ts         # Utility exports
│   └── index.ts             # Main entry point
├── tests/                   # Test files
│   ├── calculator.test.ts   # Calculator tests
│   └── greeting.test.ts     # Greeting tests
├── dist/                    # Compiled output (auto-generated)
├── coverage/                # Test coverage (auto-generated)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Prettier ignore rules
├── jest.config.js          # Jest configuration
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# Build the project
npm run build

# Build and watch for changes
npm run build:watch

# Check TypeScript types without emitting
npm run typecheck
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is formatted
npm run format:check

# Run pre-commit checks manually
npm run pre-commit
```

### Running Tests

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Utility

```bash
# Clean build directory
npm run clean

# Start the built application
npm start
```

## 🔧 Configuration

### TypeScript Configuration

The `tsconfig.json` is configured with:

- **Strict mode**: Enabled for maximum type safety
- **Path mapping**: Use `@/` for clean imports from `src/`
- **Modern target**: Compiles to ES2022
- **Declaration files**: Automatically generated
- **Source maps**: Enabled for debugging

### ESLint Configuration

ESLint is configured with:

- TypeScript-specific rules
- Prettier integration
- Import sorting
- Unused variable detection
- Test file overrides

### Prettier Configuration

Prettier enforces:

- Single quotes for strings
- Semicolons
- 2-space indentation
- Trailing commas (ES5)
- 80 character line width

### Jest Configuration

Jest is set up with:

- TypeScript support via `ts-jest`
- Path mapping support
- Coverage collection
- Test environment: Node.js

## 🎯 Usage Examples

### Basic Usage

```typescript
import { greet } from '@/utils/greeting';
import { Calculator } from '@/utils/calculator';
import type { User } from '@/types/user';

// Use greeting utility
console.log(greet('World'));

// Use calculator
const calc = new Calculator();
const result = calc.add(5, 3);
console.log(`Result: ${result}`);

// Work with types
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true,
};
```

### Adding New Features

1. **Create new utilities**

   ```typescript
   // src/utils/myUtility.ts
   export function myFunction(): string {
     return 'Hello from my utility!';
   }
   ```

2. **Export from index**

   ```typescript
   // src/utils/index.ts
   export * from './myUtility';
   ```

3. **Add tests**

   ```typescript
   // tests/myUtility.test.ts
   import { myFunction } from '../src/utils/myUtility';

   describe('myFunction', () => {
     it('should return expected string', () => {
       expect(myFunction()).toBe('Hello from my utility!');
     });
   });
   ```

## 🎨 VS Code Integration

### Recommended Extensions

The template includes recommendations for essential VS Code extensions:

- **TypeScript and JavaScript**: Enhanced language support
- **ESLint**: Real-time linting
- **Prettier**: Code formatting
- **Error Lens**: Inline error display
- **TODO Tree**: Track TODO comments
- **Code Spell Checker**: Spell checking

### Workspace Settings

Pre-configured settings include:

- Format on save
- Auto-fix ESLint issues
- Organize imports automatically
- Consistent indentation
- File exclusions for cleaner explorer

## 🔄 Git Hooks

### Pre-commit Hook

Automatically runs before each commit:

1. **Lint staged files**: ESLint fixes
2. **Format staged files**: Prettier formatting
3. **Type checking**: Ensures no TypeScript errors

### Customizing Hooks

Edit `.husky/pre-commit` or `package.json` lint-staged configuration to modify the pre-commit workflow.

## 📚 Best Practices

### Code Organization

- Keep utilities in `src/utils/`
- Define types in `src/types/`
- Use barrel exports (`index.ts`) for clean imports
- Follow consistent naming conventions

### Type Safety

- Use strict TypeScript configuration
- Prefer `interface` over `type` for object shapes
- Use `readonly` for immutable data
- Leverage utility types (`Partial`, `Pick`, `Omit`)

### Testing

- Write tests for all utilities and business logic
- Use descriptive test names
- Group related tests with `describe` blocks
- Test both happy paths and error cases

### Import Organization

- Use path mapping (`@/`) for internal imports
- Organize imports: external, internal, relative
- Use explicit imports/exports when possible

## 🚨 Troubleshooting

### Common Issues

#### 1. TypeScript errors on import

```bash
# Clear TypeScript build info
npm run clean
npm run build
```

#### 2. ESLint/Prettier conflicts

```bash
# Check configuration
npm run lint
npm run format:check
```

#### 3. Pre-commit hook failures

```bash
# Run manually to debug
npm run pre-commit
```

#### 4. Test failures

```bash
# Run with verbose output
npm run test -- --verbose
```

### Getting Help

- Check the error messages carefully
- Ensure all dependencies are installed: `npm install`
- Clear caches: `npm run clean`
- Check VS Code problems panel
- Review configuration files for syntax errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Related Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Husky Documentation](https://typicode.github.io/husky/)

---

Happy coding! 🎉
