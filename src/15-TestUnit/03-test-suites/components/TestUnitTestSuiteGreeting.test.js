import { render, screen } from '@testing-library/react';
import TestUnitTestSuiteGreeting from './TestUnitTestSuiteGreeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<TestUnitTestSuiteGreeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});
