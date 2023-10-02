import React from 'react';
import { render } from '@testing-library/react';
import NavbarPages from './NavbarPages';

test('renders', () => {
  render(<NavbarPages name={'NavbarPages'}/>);
});