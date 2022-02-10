import { Button, Input, Box, Container, HStack, List, ListItem } from '@chakra-ui/react';
import React, { FormEvent } from 'react';

import { Navbar } from './Navbar';

interface ITodoAppProps {}

const TodoApp: React.FC<ITodoAppProps> = () => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const [todos, setTodos] = React.useState<string[]>([]);
	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		const newTodo = inputValue.trim();

		if (!newTodo || todos.includes(newTodo)) return;

		setTodos([...todos, newTodo]);
		setInputValue('');
	};

	const handleRemoveTodo = (todoIndexToRemove) => {
		setTodos(todos.filter((_, idx) => todoIndexToRemove !== idx));
	};

	return (
		<Box className="TodoApp">
			<Navbar headingText="next-chakra-starter" />
			<Container py={8}>
				<HStack as="form" onSubmit={handleFormSubmit}>
					<Input
						aria-label="Task description"
						autoFocus={true}
						name="todo"
						placeholder="Add a new task!"
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Button colorScheme="purple" type="submit">
						Save
					</Button>
				</HStack>

				<List my={4}>
					{todos.map((todo, todoIndex) => (
						<ListItem key={todo} listStyleType="disc" maxW="sm" mx="auto" my={4}>
							<HStack gap={4} justify="space-between">
								<span>{todo}</span>
								<Button
									aria-label={`Delete ${todo}`}
									colorScheme="red"
									id={`todo-${todoIndex}`}
									size="xs"
									onClick={() => handleRemoveTodo(todoIndex)}
								>
									Delete
								</Button>
							</HStack>
						</ListItem>
					))}
				</List>
			</Container>
		</Box>
	);
};

export default TodoApp;
