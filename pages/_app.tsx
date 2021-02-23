import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/layout/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<NavBar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
