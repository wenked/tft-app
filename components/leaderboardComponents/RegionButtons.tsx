import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface RegionButtonsProps {
	setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const RegionButtons: React.FC<RegionButtonsProps> = ({ setSelectedRegion }) => {
	const router = useRouter();

	return (
		<Box
			display='flex'
			flexDirection='row'
			margin='0 auto'
			justifyContent='center'
			alignItems='center'
			p={3}>
			<Button
				onClick={() => {
					setSelectedRegion('br1');
					router.push(`/leaderboards?region='br1'`);
				}}>
				BR
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('na1');
					router.push(`/leaderboards?region='na1'`);
				}}>
				NA
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('euw1');
					router.push(`/leaderboards?region='euw1'`);
				}}>
				EUW
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('eun1');
					router.push(`/leaderboards?region='eun1'`);
				}}>
				EUNE
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('oc1');
					router.push(`/leaderboards?region='oc1'`);
				}}>
				OCE
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('jp1');
					router.push(`/leaderboards?region='jp1'`);
				}}>
				JP
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('kr');
					router.push(`/leaderboards?region='kr'`);
				}}>
				KR
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('tr1');
					router.push(`/leaderboards?region='tr1'`);
				}}>
				TR
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('la1');
					router.push(`/leaderboards?region='la1'`);
				}}>
				LAN
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('la2');
					router.push(`/leaderboards?region='la2'`);
				}}>
				LAS
			</Button>
			<Button
				onClick={() => {
					setSelectedRegion('ru');
					router.push(`/leaderboards?region='ru'`);
				}}>
				RU
			</Button>
		</Box>
	);
};

export default RegionButtons;
