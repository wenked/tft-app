import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';

interface MatchProps {
	match: participantsType;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	return (
		<Box p={4}>
			<Text>Placement: {match.playerMatchDetails[0].placement}</Text>
			<Text>Date: {match.game_datetime}</Text>
			<Text>
				Comp:
				{match.playerMatchDetails[0].traits.map((traits) => {
					return (
						<Text>
							{traits.name} {traits.num_units}
						</Text>
					);
				})}
			</Text>
		</Box>
	);
};

export default Match;
