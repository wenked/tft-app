import Head from 'next/head';
import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import SearchBox from '../components/layout/SearchBox';
import React from 'react';

const Home: React.FC = () => {
	return (
		<>
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
