import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';
import {
	convertString,
	getBorderColor,
	getPlacementColor,
	getTraitBackgroundColor,
} from '../../utils/utilityFunctions';
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
			p={4}
			m={4}
			border='1px solid white'
			borderLeftColor={placementColor}
			borderLeftWidth='thick'>
			<Text fontSize='3xl' color={placementColor} fontWeight='semibold'>
				#{match.playerMatchDetails[0].placement}
			</Text>
			<Text>Date: {convertDate.toLocaleString('br-BR')}</Text>
			<Text>
				<Box>
					{match.playerMatchDetails[0].traits.map((traits, i) => {
						return <TraitsBox key={i} traits={traits} />;
					})}
				</Box>
				<Box>
					{match.playerMatchDetails[0].units.map((unit, i) => {
						return (
							<Box display='inline-block' p={2} key={i}>
								{convertString('TFT4_', unit.character_id, 'TFT4b_') ===
								'ChoGath' ? (
									<Image
										src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
										alt='champ-image'
										boxSize='50px'
										border='1px solid'
										borderColor={getBorderColor(unit.rarity)}
									/>
								) : (
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
								)}

								<Box display='inline-flex'>
									{unit.items.map((item) =>
										item >= 10 ? (
											<Image
												alt='item-img'
												src={`https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128530/items/${item}.png`}
												boxSize='15px'
											/>
										) : (
											<Image
												alt='item-img'
												src={`https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128530/items/0${item}.png`}
												boxSize='15px'
											/>
										)
									)}
								</Box>
							</Box>
						);
					})}
				</Box>
			</Text>
		</Box>
	);
};

export default Match;
