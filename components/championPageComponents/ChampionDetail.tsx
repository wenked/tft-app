import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { championInterface } from '../../types/dataTypes';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

interface ChampionDetailProps {
	champion: championInterface;
}

const ChampionDetail: React.FC<ChampionDetailProps> = ({ champion }) => {
	return (
		<Box m={4}>
			{convertString('TFT4_', champion.championId, 'TFT4b_') === 'ChoGath' ? (
				<Image
					src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
					alt='champ-image'
					border='1px solid'
					w='100%'
					borderColor={getBorderColor(champion.cost - 1)}
				/>
			) : (
				<Image
					src={`https://rerollcdn.com/characters/Skin/4.5/${convertString(
						'TFT4_',
						champion.championId,
						'TFT4b_'
					)}.png`}
					alt='champ-image'
					border='1px solid'
					borderColor={getBorderColor(champion.cost - 1)}
				/>
			)}
			<Box display='inline-flex' p={1}>
				{champion.traits.map((trait) => (
					<Image
						src={
							trait.includes('Set4_')
								? `https://rerollcdn.com/icons/${convertString(
										'Set4_',
										trait
								  )}.png`
								: `https://rerollcdn.com/icons/${trait.toLowerCase()}.png`
						}
						alt='Logo'
						borderRadius='md'
						width='30px'
					/>
				))}
			</Box>
			<Text>Name: {champion.name}</Text>
			<Text>Cost: {champion.cost}</Text>
		</Box>
	);
};

export default ChampionDetail;
