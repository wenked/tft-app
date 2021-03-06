import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';
import { rankColor } from '@utils/utilityFunctions';

import PlacementsBox from './PlacementsBox';

interface rankedDataProps {
	rankedData: SummonerData;
}

const RankedData: React.FC<rankedDataProps> = ({ rankedData }) => {
	const placementsArray = rankedData.playerMatchDetail.map((match) => {
		return match.playerMatchDetails[0].placement;
	});

	return (
		<Box
			textAlign='left'
			display='flex'
			justifyContent='center'
			border='1px solid #4A5568'
			p={6}
			m={2}
			marginRight={10}
			alignItems='center'
			width={['250%', '250%', 700, 800]}>
			<Flex direction='column' justifyContent='center'>
				<Text color='white.400' fontSize='3xl' fontWeight='bold' marginLeft={4}>
					{rankedData.summoner.name}
				</Text>
				{rankedData.rankedData.length === 0 ? (
					<Text>Rank: Unranked</Text>
				) : (
					<Box>
						<Flex flexDirection='row'>
							{' '}
							<Box>
								<Image
									alt='tier'
									src={`https://rerollcdn.com/ui/rank-${rankedData.rankedData[0].tier.toLowerCase()}.png`}
									boxSize='150px'
								/>
							</Box>
							<Box p={2}>
								<Text
									fontWeight='semibold'
									fontSize='md'
									color={`${rankColor[rankedData.rankedData[0].tier]}`}>
									{rankedData.rankedData[0].tier}{' '}
									{rankedData.rankedData[0].rank}
								</Text>
								<Text fontWeight='semibold' fontSize='md'>
									{rankedData.rankedData[0].leaguePoints} LP
								</Text>
								<Text fontWeight='semibold' fontSize='md'>
									Wins: {rankedData.rankedData[0].wins}
								</Text>
								<Text fontWeight='semibold' fontSize='md'>
									Played:{' '}
									{rankedData.rankedData[0].wins +
										rankedData.rankedData[0].losses}
								</Text>
							</Box>
						</Flex>
						<PlacementsBox placementsArray={placementsArray} />
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default RankedData;
