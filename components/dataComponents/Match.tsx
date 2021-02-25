import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { participantsType } from '../../types/dataTypes';
import {
	convertString,
	getBorderColor,
	getPlacementColor,
	getTraitBackgroundColor,
} from '../../utils/utilityFunctions';

interface MatchProps {
	match: participantsType;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	const convertDate = new Date((match.game_datetime as number) * 1000);

	return (
		<Box p={4} m={4} border='1px solid white'>
			<Text
				fontSize='3xl'
				color={getPlacementColor(match.playerMatchDetails[0].placement)}
				fontWeight='semibold'>
				#{match.playerMatchDetails[0].placement}
			</Text>
			<Text>Date: {convertDate.toLocaleString('br-BR')}</Text>
			<Text>
				{match.playerMatchDetails[0].traits.map((traits, i) => {
					const legendaryTraits = [
						'Set4_Daredevil',
						'Boss',
						'Set4_Blacksmith',
						'Emperor',
					];

					if (!legendaryTraits.includes(traits.name as string)) {
						return (
							traits.tier_current > 0 && (
								<Flex display='inline-flex' p={2} key={i}>
									<Text>
										<Image
											src={`https://rerollcdn.com/icons/${convertString(
												'Set4_',
												traits.name
											)}.png`}
											alt='Logo'
											backgroundColor={getTraitBackgroundColor(traits.style)}
											borderRadius='md'
											width='30px'
										/>
										{traits.num_units}
									</Text>
								</Flex>
							)
						);
					}
				})}
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
