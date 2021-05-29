import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Container, HStack, List, ListItem } from '@chakra-ui/layout';
import React, { FormEvent } from 'react';

import { Navbar } from '../components/Navbar';

interface ITodoAppProps {}

const TodoApp: React.FC<ITodoAppProps> = () => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const [todos, setTodos] = React.useState<string[]>([]);
	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		const newTodo = inputValue?.trim() || '';

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
						<ListItem key={todo} listStyleType="disc">
							{todo}
							<span> </span>
							<Button
								colorScheme="red"
								size="xs"
								variant="ghost"
								onClick={() => handleRemoveTodo(todoIndex)}
							>
								X
							</Button>
						</ListItem>
					))}
				</List>
			</Container>
		</Box>
	);
};

export default TodoApp;
