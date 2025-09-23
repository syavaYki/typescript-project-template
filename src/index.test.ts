import { createGreeting } from './index';

describe('createGreeting', () => {
  it('should create a greeting with default greeting', () => {
    const result = createGreeting({ name: 'World' });
    expect(result).toBe('Hello, World!');
  });

  it('should create a greeting with custom greeting', () => {
    const result = createGreeting({ name: 'Developer', greeting: 'Hi' });
    expect(result).toBe('Hi, Developer!');
  });

  it('should handle empty name', () => {
    const result = createGreeting({ name: '' });
    expect(result).toBe('Hello, !');
  });

  it('should handle special characters in name', () => {
    const result = createGreeting({ name: 'User@123' });
    expect(result).toBe('Hello, User@123!');
  });
});
