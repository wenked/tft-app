import React from 'react';
import champions from '../../tftdata/champions.json';
import { Text, Box, Flex, Image, Stack, SimpleGrid } from '@chakra-ui/react';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

const Champion: React.FC = () => {
	return (
		<SimpleGrid columns={5}>
			{champions.map((champ) => {
				return (
					<Box flexDirection='column' spacing={1}>
						{convertString('TFT4_', champ.championId, 'TFT4b_') ===
						'ChoGath' ? (
							<Image
								src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
								alt='champ-image'
								boxSize='50px'
								border='1px solid'
								borderColor={getBorderColor(champ.cost - 1)}
							/>
						) : (
							<Image
								src={`https://rerollcdn.com/characters/Skin/4.5/${convertString(
									'TFT4_',
									champ.championId,
									'TFT4b_'
								)}.png`}
								boxSize='50px'
								alt='champ-image'
								border='1px solid'
								borderColor={getBorderColor(champ.cost - 1)}
							/>
						)}
						<Text fontWeight='semibold'>{champ.name}</Text>
					</Box>
				);
			})}
		</SimpleGrid>
	);
};

export default Champion;
