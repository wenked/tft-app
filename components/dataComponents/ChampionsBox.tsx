import { Box, Image } from '@chakra-ui/react';
import { match } from 'assert';
import React from 'react';
import { UnitsType } from '../../types/dataTypes';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

interface championsBoxProps {
	units: UnitsType[];
}

const ChampionsBox: React.FC<championsBoxProps> = ({ units }) => {
	return (
		<Box>
			{units.map((unit, i) => {
				return (
					<Box display='inline-block' p={1} key={i}>
						{convertString('TFT4_', unit.character_id, 'TFT4b_') ===
						'ChoGath' ? (
							<Image
								src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
								alt='champ-image'
								boxSize='50px'
								borderRadius='5px'
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
								borderRadius='5px'
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
	);
};

export default ChampionsBox;
