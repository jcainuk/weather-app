import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../../components/SearchForm';

describe('It renders correctly', () => {
  const validProps = {
    searchText: 'Liverpool',
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };
  it('renders as expected', () => {
    const { asFragment } = render(<SearchForm {...validProps} />);
    expect(asFragment).toMatchSnapshot();
  });
  it('button fires the search event', () => {
    const { getByRole } = render(<SearchForm {...validProps} />);
    const button = getByRole('button');
    userEvent.click(button);
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
