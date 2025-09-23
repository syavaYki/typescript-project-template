/**
 * Main entry point for the TypeScript project template
 */

export interface GreetingOptions {
  name: string;
  greeting?: string;
}

/**
 * Creates a personalized greeting message
 * @param options - The greeting options
 * @returns A formatted greeting string
 */
export function createGreeting(options: GreetingOptions): string {
  const { name, greeting = 'Hello' } = options;
  return `${greeting}, ${name}!`;
}

/**
 * Main function to demonstrate the template
 */
function main(): void {
  const greeting = createGreeting({ name: 'World' });
  console.log(greeting);

  const customGreeting = createGreeting({
    name: 'TypeScript Developer',
    greeting: 'Welcome',
  });
  console.log(customGreeting);
}

// Run main function if this file is executed directly
if (require.main === module) {
  main();
}