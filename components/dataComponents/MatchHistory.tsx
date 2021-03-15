import { Box } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';
import Match from './Match';

interface MatchHistoryProps {
	data: SummonerData;
}

const MatchHistory: React.FC<MatchHistoryProps> = ({ data }) => {
	return (
		<Box width='60%'>
			{data.playerMatchDetail.map((match, i) => (
				<Match match={match} key={i} />
			))}
		</Box>
	);
};

export default MatchHistory;
