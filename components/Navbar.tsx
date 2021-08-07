import React from 'react';
import {
	Box,
	Button,
	Container,
	Heading,
	HStack,
	Text,
	Avatar,
	IconButton,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';
import { FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
	headingText: string;
}

export const Navbar: React.FC<NavbarProps> = ({ headingText }) => {
	const { user } = useUser();
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Box aria-labelledby="nav-header" as="nav" bgColor="purple.500" color="white" py={4}>
			<Container>
				<HStack justify="space-between">
					<Heading id="nav-header" size="md">
						{headingText}
					</Heading>
					<Box>
						<HStack>
							{user?.name ? (
								<HStack spacing={8}>
									<HStack>
										<Avatar name={user.name} src={user.picture} />
										<VStack>
											<Text>{user.name}</Text>
											<Button
												alignSelf="flex-end"
												as="a"
												color="white"
												fontWeight="light"
												href={`/api/auth/logout?returnTo=${encodeURIComponent(
													'http://localhost:3000'
												)}`}
												size="xs"
												variant="link"
											>
												Logout
											</Button>
										</VStack>
									</HStack>
								</HStack>
							) : (
								<Button as="a" color="white" href="/api/auth/login" variant="link">
									Login
								</Button>
							)}
							<Box>
								{colorMode === 'light' ? (
									<IconButton
										aria-label="Set dark mode"
										colorScheme="purple"
										icon={<FaSun aria-hidden={true} />}
										onClick={toggleColorMode}
									/>
								) : (
									<IconButton
										aria-label="Set light mode"
										colorScheme="purple"
										icon={<FaMoon aria-hidden={true} />}
										onClick={toggleColorMode}
									/>
								)}
							</Box>
						</HStack>
					</Box>
				</HStack>
			</Container>
		</Box>
	);
};
