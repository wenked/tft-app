import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/layout/NavBar';
import LoadingContext from '../context/loadingContext';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoading, setLoading] = React.useState<boolean>(false);

	return (
		<ChakraProvider>
			<LoadingContext.Provider value={{ isLoading, setLoading }}>
				<QueryClientProvider client={client}>
					<Box display='flex' flexDirection='column'>
						<Box flex='1'>
							<NavBar />
							<Component {...pageProps} />
							<Footer />
						</Box>
					</Box>
				</QueryClientProvider>
			</LoadingContext.Provider>
		</ChakraProvider>
	);
}
export default MyApp;
