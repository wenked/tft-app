import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';
import { getPlacementColor } from '@utils/utilityFunctions';
import ChampionsBox from './ChampionsBox';
import TraitsBox from './TraitsBox';

interface MatchProps {
	match: participantsType;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	const convertDate = new Date((match.game_datetime as number) * 1000);
	const placementColor = getPlacementColor(
		match.playerMatchDetails[0].placement
	);

	return (
		<Box
			w={[600, 700, 800]}
			p={4}
			m={4}
			border='1px solid #4A5568'
			borderLeftColor={placementColor}
			borderLeftWidth='thick'>
			<Text fontSize='3xl' color={placementColor} fontWeight='semibold'>
				#{match.playerMatchDetails[0].placement}
			</Text>
			<Text color='gray.500'>Date: {convertDate.toLocaleString('br-BR')}</Text>
			<Box>
				<Box>
					<TraitsBox traits={match.playerMatchDetails[0].traits} />
				</Box>
				<Box>
					<ChampionsBox units={match.playerMatchDetails[0].units} />
				</Box>
			</Box>
		</Box>
	);
};

export default Match;
