import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Input } from '@chakra-ui/input';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Container, HStack, List, ListItem } from '@chakra-ui/layout';
import React, { FormEvent } from 'react';

interface ITodoAppProps {}

const TodoApp: React.FC<ITodoAppProps> = () => {
	const { toggleColorMode, colorMode } = useColorMode();
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
		<Container className="TodoApp" py={4}>
			<HStack as="form" onSubmit={handleFormSubmit}>
				{colorMode === 'light' ? (
					<IconButton
						aria-label="Set dark mode"
						icon={<FaMoon aria-hidden={true} />}
						onClick={toggleColorMode}
					/>
				) : (
					<IconButton
						aria-label="Set light mode"
						icon={<FaSun aria-hidden={true} />}
						onClick={toggleColorMode}
					/>
				)}
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
	);
};

export default TodoApp;
