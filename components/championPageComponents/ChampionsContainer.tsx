import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';
import champions from '../../tftdata/champions.json';
import { championInterface } from '../../types/dataTypes';
import { useRouter } from 'next/router';

interface ChampionsContainerProps {
	setChampion: React.Dispatch<React.SetStateAction<championInterface>>;
}

const ChampionsContainer: React.FC<ChampionsContainerProps> = ({
	setChampion,
}) => {
	const router = useRouter();
	return (
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
	);
};

export default ChampionsContainer;
