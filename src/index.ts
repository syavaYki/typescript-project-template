/**
 * Entry point for the TypeScript project template
 */

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function main(): void {
    console.log(greet('TypeScript Template'));
    console.log('Project is running successfully!');
}

if (require.main === module) {
    main();
}

export { greet, main };
