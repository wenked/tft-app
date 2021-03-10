import React from 'react';
import champions from '../../tftdata/champions.json';
import { Text, Box, Image, Divider } from '@chakra-ui/react';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';
import { championInterface } from '../../types/dataTypes';
import ChampionDetail from '../../components/championPageComponents/ChampionDetail';
import { useRouter } from 'next/router';
import ChampionsContainer from '../../components/championPageComponents/ChampionsContainer';

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
		const champ = champions.filter((champ) => champ.name === championName);
		setChampion(champ[0]);
	}, [championName]);

	return (
		<Box display='flex'>
			<ChampionsContainer setChampion={setChampion} />
			<Divider orientation='vertical' colorScheme='orange' />
			{champion !== undefined && <ChampionDetail champion={champion} />}
		</Box>
	);
};

export default Champion;
