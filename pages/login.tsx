import React from 'react';
import { Button, Center, Container } from '@chakra-ui/react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<Container py={4}>
			<Center>
				<Button as="a" colorScheme="purple" href="/api/auth/login">
					Login
				</Button>
			</Center>
		</Container>
	);
};

export default LoginPage;
