import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestUnitTestAsyncGreeting from './TestUnitTestAsyncGreeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<TestUnitTestAsyncGreeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<TestUnitTestAsyncGreeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<TestUnitTestAsyncGreeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
     // Arrange
     render(<TestUnitTestAsyncGreeting />);

     // Act
     const buttonElement = screen.getByRole('button');
     userEvent.click(buttonElement)
 
     // Assert
     const outputElement = screen.queryByText('good to see you', { exact: false });
     expect(outputElement).toBeNull();
  });
});
