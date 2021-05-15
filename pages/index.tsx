import React from 'react';
import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';

const Home: React.FC = () => {
	return (
		<Box>
			<Head>
				<title>Create Next App</title>
				<link href="/favicon.ico" rel="icon" />
			</Head>

			<Heading>Hola</Heading>
		</Box>
	);
};

export default Home;
