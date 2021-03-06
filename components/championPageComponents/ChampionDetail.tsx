import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { championInterface, championsJsonType } from '../../types/dataTypes';
import { convertString, getBorderColor } from '@utils/utilityFunctions';
import champions from '@tftdata/champions.json';
import Champion from '@components/dataComponents/Champion';

interface ChampionDetailProps {
	champion: championInterface;
}

const ChampionDetail: React.FC<ChampionDetailProps> = ({ champion }) => {
	const championsWithSameTrait = champion.traits.map((trait) => {
		return champions.filter((champ) => champ.traits.includes(trait));
	});

	console.log(championsWithSameTrait);

	return (
		<Box p={6} marginLeft={4} marginTop={2} border='1px solid #4A5568'>
			{convertString('TFT4_', champion.championId, 'TFT4b_') === 'ChoGath' ? (
				<Image
					src='https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128457/champions/TFT4_ChoGath_yw3hag.png'
					alt='champ-image'
					border='2px solid'
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
					border='2px solid'
					borderColor={getBorderColor(champion.cost - 1)}
					borderRadius='full'
				/>
			)}
			<Divider orientation='horizontal' p={1} m={1} />
			<Text fontWeight='semibold'>Name: {champion.name}</Text>
			<Text fontWeight='semibold'>Cost: {champion.cost}</Text>
			<Divider orientation='horizontal' p={1} m={1} />
			<Text fontWeight='semibold'>Synergies</Text>
			<Divider orientation='horizontal' p={1} m={1} />
			{championsWithSameTrait.map((champs, i) => {
				//champion.traits[i]
				return (
					<Box>
						<Image
							src={
								champion.traits[i].includes('Set4_')
									? `https://rerollcdn.com/icons/${convertString(
											'Set4_',
											champion.traits[i]
									  )}.png`
									: `https://rerollcdn.com/icons/${champion.traits[
											i
									  ].toLowerCase()}.png`
							}
							alt='Logo'
							borderRadius='md'
							width='30px'
							p={1}
						/>
						<Box display='inline-flex'>
							{champs.map((champ: championsJsonType, i) => (
								<Box p={1}>
									<Champion unitJson={champ} key={i} />
								</Box>
							))}{' '}
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default ChampionDetail;
