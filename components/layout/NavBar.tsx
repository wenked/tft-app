import { Flex, Box, Stack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const NavBar: React.FC = () => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			w='100%'
			mb={8}
			p={4}>
			<Box display='block' flexBasis={{ base: '100%', md: 'auto' }}>
				<Stack
					spacing={8}
					align='center'
					justify={['center', 'space-between', 'flex-end', 'flex-end']}
					direction={['column', 'row', 'row', 'row']}
					pt={[4, 4, 0, 0]}>
					<DarkModeSwitch />
					<Link>
						<NextLink href='/'>
							<Text
								display='block'
								size='2xl'
								fontWeight='semibold'
								_hover={{ fontSize: '3xl' }}>
								Home
							</Text>
						</NextLink>
					</Link>
					<Link>
						<NextLink href='/'>
							<Text
								display='block'
								size='2xl'
								fontWeight='semibold'
								_hover={{ fontSize: '3xl' }}>
								Leaderboards
							</Text>
						</NextLink>
					</Link>
					<Link>
						<NextLink href='/loadeddice'>
							<Text
								display='block'
								size='2xl'
								fontWeight='semibold'
								_hover={{ fontSize: '3xl' }}>
								Loaded Dice
							</Text>
						</NextLink>
					</Link>
					<Link>
						<NextLink href='/champions/Aatrox'>
							<Text
								display='block'
								size='2xl'
								fontWeight='semibold'
								_hover={{ fontSize: '3xl' }}>
								Champions
							</Text>
						</NextLink>
					</Link>
				</Stack>
			</Box>
		</Flex>
	);
};

export default NavBar;
