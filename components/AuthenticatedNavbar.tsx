import React from 'react';
import { Box, Button, Container, Heading, HStack, Text, Avatar } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';

interface AuthenticatedNavbarProps {
	headingText: string;
}

export const AuthenticatedNavbar: React.FC<AuthenticatedNavbarProps> = ({ headingText }) => {
	const { user } = useUser();

	return (
		<Box aria-labelledby="nav-header" as="nav" bgColor="purple.500" color="white" px={12} py={4}>
			<Container minWidth="container.lg">
				<HStack justify="space-between">
					<Heading id="nav-header" size="md">
						{headingText}
					</Heading>
					{user?.name ? (
						<HStack spacing={8}>
							<HStack>
								<Text>{user.name}</Text>
								<Avatar name={user.name} src={user.picture} />
							</HStack>
							<Button
								as="a"
								color="white"
								href={`/api/auth/logout?returnTo=${encodeURIComponent('http://localhost:3000')}`}
								variant="link"
							>
								Logout
							</Button>
						</HStack>
					) : (
						<Button as="a" color="white" href="/api/auth/login" variant="link">
							Login
						</Button>
					)}
				</HStack>
			</Container>
		</Box>
	);
};
