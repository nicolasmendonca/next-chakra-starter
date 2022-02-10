import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoApp from './TodoApp';

test('Entering a new todo and pressing enter adds a new task to the list', () => {
	// Arrange
	render(<TodoApp />);
	const taskDescription = 'Learn about testing';
	const todoInput = screen.getByRole('textbox', { name: /task description/i });

	// Act
	userEvent.type(todoInput, taskDescription + '{enter}'); // submit the form

	// Assert
	expect(screen.getByText(taskDescription)).toBeInTheDocument();
});

test('Clicking the X button deletes the given todo', () => {
	// Arrange
	render(<TodoApp />);
	const taskDescription = 'Learn about testing';
	const todoInput = screen.getByRole('textbox', { name: /task description/i });

	userEvent.type(todoInput, taskDescription + '{enter}'); // submit the form

	// Act
	screen.getByRole('button', { name: `Delete ${taskDescription}` }).click();

	// Assert
	expect(screen.queryByText(taskDescription)).not.toBeInTheDocument();
});
