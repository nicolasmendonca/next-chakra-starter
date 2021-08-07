import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { theme } from 'theme';

import { AuthVerifier } from '../components/AuthVerifier';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider colorModeManager={localStorageManager} theme={theme}>
			<UserProvider>
				<AuthVerifier>
					<Component {...pageProps} />
				</AuthVerifier>
			</UserProvider>
		</ChakraProvider>
	);
};

export default MyApp;
