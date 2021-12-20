import { render, screen } from '@testing-library/react';
import TestUnitStart from './TestUnitStart';

test('renders learn react link', () => {
  render(<TestUnitStart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
