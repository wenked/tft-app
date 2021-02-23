import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';
import Match from './Match';

interface MatchHistoryProps {
	data: SummonerData;
}

const MatchHistory: React.FC<MatchHistoryProps> = ({ data }) => {
	return (
		<Box>
			{data.playerMatchDetail.map((match) => (
				<Match match={match} />
			))}
		</Box>
	);
};

export default MatchHistory;
