import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Clock from '../components/Clock';
import Board from '../components/Board';

test('renders Europe/paris', () => {
  render(<Clock timeZone='Europe/Paris' city='Paris' />);
  const linkElement = screen.getByText(/Paris/i);
  expect(linkElement).toBeInTheDocument();
});


test('render clock component', () => {
    const result = render(<Board/>);
    //const element = result.container.getElementsByTagName('Clock');
    //const clockComponenmt = screen.getAllByText('clockWrapper')
    const element = result.container.getElementsByClassName('clockWrapper');
    expect(element.length).toBe(5);
});

test('render clock component', () => {
    const result = render(<Board/>);
    //const element = result.container.getElementsByTagName('Clock');
    const clockComponenmt = screen.getByText('Paris')
    expect(clockComponenmt).toBeInTheDocument();
});

test('render clock component', () => {
    const result = render(<Board/>);
    const element = result.container.getElementsByClassName('clock--container');
    expect(element.length).toBe(1);
});


