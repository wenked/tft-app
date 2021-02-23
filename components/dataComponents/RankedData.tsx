import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';

interface rankedDataProps {
	rankedData: SummonerData;
}

const RankedData: React.FC<rankedDataProps> = ({ rankedData }) => {
	return (
		<Box textAlign='left' p={4}>
			<Flex direction='column'>
				<Text color='blue.900' fontSize='3xl' fontWeight='bold'>
					{rankedData.summoner.name}
				</Text>
				{rankedData.rankedData.length === 0 ? (
					<Text>Rank: Unranked</Text>
				) : (
					<>
						{' '}
						<Text fontWeight='semibold' fontSize='md'>
							Rank: {rankedData.rankedData[0].tier}
						</Text>
						<Text fontWeight='semibold' fontSize='md'>
							Points: {rankedData.rankedData[0].leaguePoints}
						</Text>
						<Text fontWeight='semibold' fontSize='md'>
							Wins: {rankedData.rankedData[0].wins}
						</Text>
					</>
				)}
			</Flex>
		</Box>
	);
};

export default RankedData;
