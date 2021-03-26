import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import champions from '@tftdata/champions.json';
import { championInterface, championsJsonType } from '../../types/dataTypes';
import { useRouter } from 'next/router';
import Champion from '@components/dataComponents/Champion';

interface ChampionsContainerProps {
	setChampion: React.Dispatch<React.SetStateAction<championInterface>>;
}

const ChampionsContainer: React.FC<ChampionsContainerProps> = ({
	setChampion,
}) => {
	const router = useRouter();
	return (
		<Box
			border='1px solid #4A5568'
			display='flex'
			flexWrap='wrap'
			p={1}
			w={{
				base: '20vw',
				sm: '20vw',
			}}>
			{champions.map((champ: championsJsonType) => {
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
						<Champion unitJson={champ} />
						<Text
							fontSize='smaller'
							display={{ base: 'none', lg: 'flex', md: 'flex' }}>
							{champ.name}
						</Text>
					</Box>
				);
			})}
		</Box>
	);
};

export default ChampionsContainer;
