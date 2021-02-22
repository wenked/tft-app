import Head from 'next/head';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';
import React from 'react';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
	return (
		<>
			<NavBar />
			<Flex align='center' justifyContent='center'>
				<Head>
					<title>TFT APP</title>
				</Head>

				<Box width='full' maxWidth='500px' px={4}>
					<Flex flexDirection='column'>
						<Heading as='h1' fontSize='2xl' textAlign='center'>
							TFT-APP
						</Heading>
						<SearchBox />
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default Home;
