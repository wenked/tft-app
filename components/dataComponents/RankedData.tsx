import { Box, Flex, Text, Image } from '@chakra-ui/react';
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
					<Box>
						<Flex flexDirection='column'>
							{' '}
							<Text fontWeight='semibold' fontSize='md'>
								<Image
									alt='tier'
									src={`https://rerollcdn.com/ui/rank-${rankedData.rankedData[0].tier.toLowerCase()}.png`}
									boxSize='150px'
								/>
								{rankedData.rankedData[0].tier}
							</Text>
							<Text fontWeight='semibold' fontSize='md'>
								{rankedData.rankedData[0].leaguePoints} LP
							</Text>
							<Text fontWeight='semibold' fontSize='md'>
								Wins: {rankedData.rankedData[0].wins}
							</Text>
						</Flex>
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default RankedData;
