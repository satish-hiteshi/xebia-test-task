import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { Menu } from './Menu';

describe('Menu', () => {
  it('should show the UserIcon', () => {
    act(() => {
      render(<Menu visible={false} />);
    });
    expect(screen.getByTestId('usericon')).toBeInTheDocument();
  });
});
