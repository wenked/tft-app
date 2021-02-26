import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/layout/NavBar';
import LoadingContext from '../context/loadingContext';

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoading, setLoading] = React.useState<boolean>(false);

	return (
		<ChakraProvider>
			<LoadingContext.Provider value={{ isLoading, setLoading }}>
				<NavBar />
				<Component {...pageProps} />
			</LoadingContext.Provider>
		</ChakraProvider>
	);
}
export default MyApp;
