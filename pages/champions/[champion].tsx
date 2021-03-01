import React from 'react';
import champions from '../../tftdata/champions.json';
import { Text, Box, Flex, Image, Stack, SimpleGrid } from '@chakra-ui/react';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';

interface championInterface {
	name: string;
	championId: string;
	cost: number;
	traits: string[];
}

const Champion: React.FC = () => {
	const [champion, setChampion] = React.useState<championInterface>({
		name: 'Aatrox',
		championId: 'TFT4_Aatrox',
		cost: 4,
		traits: ['Culitst', 'Set4_Vanguard'],
	});

	return (
		<Box display='flex'>
			<Box
				display='flex'
				flexWrap='wrap'
				p={1}
				w={{
					base: '20vw',
					sm: '20vw',
				}}>
				{champions.map((champ) => {
					return (
						<Box
							cursor='pointer'
							flexDirection='column'
							p={1}
							flexWrap='wrap'
							w='20%'
							onClick={() => {
								setChampion(champ);
							}}>
							{convertString('TFT4_', champ.championId, 'TFT4b_') ===
							'ChoGath' ? (
								<Image
									src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
									alt='champ-image'
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
									alt='champ-image'
									border='1px solid'
									borderColor={getBorderColor(champ.cost - 1)}
								/>
							)}
							<Text fontSize='smaller'>{champ.name}</Text>
						</Box>
					);
				})}
			</Box>
			<Box m={4}>
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
				<Box display='inline-flex'>
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
		</Box>
	);
};

export default Champion;
