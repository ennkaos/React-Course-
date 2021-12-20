import { render, screen } from '@testing-library/react';
import TestUnitTestAsAsync from './TestUnitTestAsAsync';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<TestUnitTestAsAsync />)

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});