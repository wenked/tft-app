import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { championsJsonType, UnitsType } from '../../types/dataTypes';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

interface ChampionProps {
	unit?: UnitsType;
	unitJson?: championsJsonType;
	size?: string;
}

const Champion: React.FC<ChampionProps> = ({ unit, size, unitJson }) => {
	if (unit) {
		return (
			<Box>
				{convertString('TFT4_', unit.character_id, 'TFT4b_') === 'ChoGath' ? (
					<Image
						src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
						alt='champ-image'
						boxSize={size}
						borderRadius='5px'
						border='2px solid'
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
						boxSize={size}
						border='2px solid'
						borderColor={getBorderColor(unit.rarity)}
					/>
				)}
			</Box>
		);
	}

	return (
		<Box>
			{convertString('TFT4_', unitJson.championId, 'TFT4b_') === 'ChoGath' ? (
				<Image
					src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
					alt='champ-image'
					borderRadius='5px'
					border='2px solid'
					borderColor={getBorderColor(unitJson.cost - 1)}
				/>
			) : (
				<Image
					src={`https://rerollcdn.com/characters/Skin/4.5/${convertString(
						'TFT4_',
						unitJson.championId,
						'TFT4b_'
					)}.png`}
					alt='champ-image'
					borderRadius='5px'
					border='2px solid'
					borderColor={getBorderColor(unitJson.cost - 1)}
				/>
			)}
		</Box>
	);
};

export default Champion;
