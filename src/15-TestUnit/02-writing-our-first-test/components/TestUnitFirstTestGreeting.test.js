import { render, screen } from '@testing-library/react';
import TestUnitFirstTestGreeting from './TestUnitFirstTestGreeting';

test('renders Hello World as a text', () => {
  // Arrange
  render(<TestUnitFirstTestGreeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});