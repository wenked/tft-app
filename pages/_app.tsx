import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/layout/NavBar';
import LoadingContext from '../context/loadingContext';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoading, setLoading] = React.useState<boolean>(false);

	return (
		<ChakraProvider>
			<LoadingContext.Provider value={{ isLoading, setLoading }}>
				<Box display='flex' flexDirection='column' minHeight='100vh'>
					<Box flex='1'>
						<NavBar />
						<Component {...pageProps} />
						<Footer />
					</Box>
				</Box>
			</LoadingContext.Provider>
		</ChakraProvider>
	);
}
export default MyApp;
