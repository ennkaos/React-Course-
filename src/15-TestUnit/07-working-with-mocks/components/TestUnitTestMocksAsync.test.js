import { render, screen } from '@testing-library/react';
import TestUnitTestMocksAsync from './TestUnitTestMocksAsync';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<TestUnitTestMocksAsync />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
