import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { theme } from 'theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider colorModeManager={localStorageManager} theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
