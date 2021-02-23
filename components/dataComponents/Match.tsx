import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

interface MatchProps {
	match: participantsType;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	const convertDate = new Date((match.game_datetime as number) * 1000);

	return (
		<Box p={4} m={4} border='1px solid white'>
			<Text>Placement: {match.playerMatchDetails[0].placement}</Text>
			<Text>Date: {convertDate.toLocaleString('br-BR')}</Text>
			<Text>
				{match.playerMatchDetails[0].traits.map((traits) => {
					return (
						<Flex display='inline-flex' p={2}>
							<Text>
								<Image
									src={`https://rerollcdn.com/icons/${convertString(
										'Set4_',
										traits.name
									)}.png`}
									alt='Logo'
									borderColor='pink.700'
								/>
								{traits.num_units}
							</Text>
						</Flex>
					);
				})}
				<Box>
					{match.playerMatchDetails[0].units.map((unit) => {
						return (
							<Box display='inline-block' p={2}>
								<Image
									src={`https://rerollcdn.com/characters/Skin/4.5/${convertString(
										'TFT4_',
										unit.character_id,
										'TFT4b_'
									)}.png`}
									alt='champ-image'
									boxSize='50px'
									border='1px solid'
									borderColor={getBorderColor(unit.rarity)}
								/>
							</Box>
						);
					})}
				</Box>
			</Text>
		</Box>
	);
};

export default Match;
