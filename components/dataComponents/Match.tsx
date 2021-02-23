import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';

interface MatchProps {
	match: participantsType;
}

const convertString = (trait: String) => {
	if (trait.includes('Set4_')) {
		return trait.replace('Set4_', '').toLowerCase();
	}

	return trait.toLowerCase();
};

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
							<img
								src={`https://rerollcdn.com/icons/${convertString(
									traits.name
								)}.png`}
								alt='Logo'
							/>
							{traits.name} {traits.num_units}
						</Text>
					);
				})}
			</Text>
		</Box>
	);
};

export default Match;
