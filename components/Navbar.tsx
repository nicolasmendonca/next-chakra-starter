import React from 'react';
import { Box, Container, Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
	headingText: string;
}

export const Navbar: React.FC<NavbarProps> = ({ headingText }) => {
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
