import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import MainApp from './App';
import App from './App';

test('renders learn react link', () => {
	const div = document.createElement('div');
	render(<MainApp />, div);
	unmountComponentAtNode(div)
	// let linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
