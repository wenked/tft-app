import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';
import PlacementsBox from './PlacementsBox';

interface rankedDataProps {
	rankedData: SummonerData;
}

const RankedData: React.FC<rankedDataProps> = ({ rankedData }) => {
	const placementsArray = rankedData.playerMatchDetail.map((match) => {
		return match.playerMatchDetails[0].placement;
	});
	console.log(placementsArray);

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
						<PlacementsBox placementsArray={placementsArray} />
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default RankedData;
