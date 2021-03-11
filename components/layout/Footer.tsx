import { Box, Text, Divider } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
	return (
		<Box position='relative' bottom='0' width='100%' p={1}>
			<Box p={2} textAlign='center'>
				<Divider />
				<Text color='gray.400' p={1}>
					#wenked4040
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;
