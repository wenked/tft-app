import React from 'react';
import champions from '../../tftdata/champions.json';
import { Text, Box, Image } from '@chakra-ui/react';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';
import { championInterface } from '../../types/dataTypes';
import ChampionDetail from '../../components/championPageComponents/ChampionDetail';
import { useRouter } from 'next/router';

const Champion: React.FC = () => {
	const [champion, setChampion] = React.useState<championInterface>({
		name: 'Aatrox',
		championId: 'TFT4_Aatrox',
		cost: 4,
		traits: ['Culitst', 'Set4_Vanguard'],
	});
	const router = useRouter();
	const { championName } = router.query;

	React.useEffect(() => {
		const teste = champions.filter((champ) => champ.name === championName);
		setChampion(teste[0]);
	}, [championName]);

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
								router.push(`/champions/${champ.name}`);
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
			{champion !== undefined && <ChampionDetail champion={champion} />}
		</Box>
	);
};

export default Champion;
