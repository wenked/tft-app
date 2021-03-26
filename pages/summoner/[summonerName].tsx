import { SummonerData } from '../../types/dataTypes';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useQuery } from 'react-query';
import { Box, Text, Spinner } from '@chakra-ui/react';
import RankedData from '../../components/dataComponents/RankedData';
import MatchHistory from '../../components/dataComponents/MatchHistory';
import LoadingContext from '../../context/loadingContext';
import React, { useEffect } from 'react';

const fetcher = async (BASE_URL, summonerName, region) => {
	console.log(`${BASE_URL}api/${summonerName}?region=${region}`);
	const res = await axios.get(
		`${BASE_URL}/api/${summonerName}?region=${region}`
	);

	return res.data;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const SummonerPage: React.FC = () => {
	const router = useRouter();
	const { summonerName, region } = router.query;

	const { data, isLoading, error } = useQuery<SummonerData>(
		['summoner', BASE_URL, summonerName, region],
		() => fetcher(BASE_URL, summonerName, region)
	);

	const { setLoading } = React.useContext(LoadingContext);
	useEffect(() => {
		if (error) {
			console.log(error);
		}
		setLoading(isLoading);
	}, [isLoading, error]);

	return error ? (
		<Text>RIP server</Text>
	) : !isLoading ? (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			width={{ base: '100%', md: '100%', lg: '100%' }}>
			<RankedData rankedData={data} />
			<MatchHistory data={data} />
		</Box>
	) : (
		<Box display='flex' justifyContent='center'>
			<Spinner />
		</Box>
	);
};

export default SummonerPage;

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { summonerName, region } = context.query;

	console.log('oi');
	const res = await axios.get(
		`${BASE_URL}/api/${summonerName}?region=${region}`
	);

	const fetchError = res.statusText !== 'OK' ? res.statusText : false;
	console.log(res.data, 'summm');

	const data: SummonerData | { error: string; status: number } = res.data;
	console.log(fetchError);
	console.log(res.status);
	return {
		props: { data, fetchError, status: res.status },
	};
};*/
