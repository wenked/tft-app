import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import { SummonerData } from '../../types/dataTypes';
import Match from './Match';

interface MatchHistoryProps {
	data: SummonerData;
}

const MatchHistory: React.FC<MatchHistoryProps> = ({ data }) => {
	return (
		<Box width={['45%', '60%', '60%', '45%']}>
			<Box marginLeft={5} p={2}>
				<Text textAlign='center'>Match History</Text>
			</Box>
			<Divider />
			<Box>
				{data.playerMatchDetail.map((match, i) => (
					<Match match={match} key={i} />
				))}
			</Box>
		</Box>
	);
};

export default MatchHistory;
