import { greet } from '../src/index';

describe('greet function', () => {
    test('should return greeting message', () => {
        const result = greet('World');
        expect(result).toBe('Hello, World!');
    });

    test('should handle empty string', () => {
        const result = greet('');
        expect(result).toBe('Hello, !');
    });
});
