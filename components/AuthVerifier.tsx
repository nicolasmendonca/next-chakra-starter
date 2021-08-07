import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';

export const AuthVerifier: React.FC = ({ children }) => {
	const { isLoading, error, user } = useUser();

	React.useEffect(() => {
		if (isLoading) {
			return;
		}

		if (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	}, [isLoading, error, user]);

	return isLoading ? (
		<Center py={12}>
			<Spinner color="purple" size="lg" />
		</Center>
	) : (
		<>{children}</>
	);
};
