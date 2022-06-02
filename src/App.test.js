import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

describe('renders the login page', () => {
  test('login form should be in the document', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('Login to continue');
  });

  test('user input should have placeholder', () => {
    render(<App />);

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  });

  test('user input should accept text', () => {
    render(<App />);

    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Username'), {
        target: { value: 'admin' },
      });
    });
  });

  test('password input should have placeholder', () => {
    render(<App />);

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('sign in button is available', () => {
    render(<App />);

    expect(screen.getByRole('button')).toHaveTextContent('Sign');
  });
});
