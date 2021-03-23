import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { SummonerData } from '../../types/dataTypes';
import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from 'swr';
import { Box, Text, Spinner } from '@chakra-ui/react';
import RankedData from '../../components/dataComponents/RankedData';
import MatchHistory from '../../components/dataComponents/MatchHistory';
import LoadingContext from '../../context/loadingContext';
import React from 'react';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const BASE_URL = process.env.BASE_URL;

const SummonerPage: React.FC = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const router = useRouter();
	const { summonerName, region } = router.query;

	const { data, isValidating, error } = useSWR<SummonerData>(
		`${BASE_URL}api/${summonerName}?region=${region}`,
		fetcher,
		{
			initialData: props.data,
			revalidateOnFocus: false,
		}
	);

	const { setLoading } = React.useContext(LoadingContext);
	setLoading(isValidating);

	return error ? (
		<Text>RIP server</Text>
	) : !isValidating ? (
		data.status === 404 ? (
			<Text>RIP summoner</Text>
		) : (
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				flexDirection='column'
				width={{ base: '200%', lg: '100%' }}>
				<RankedData rankedData={data} />
				<MatchHistory data={data} />
			</Box>
		)
	) : (
		<Spinner />
	);
};

export default SummonerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { summonerName, region } = context.query;
	console.log(BASE_URL);
	const res = await axios.get(
		`${BASE_URL}/api/${summonerName}?region=${region}`
	);
	const data: SummonerData = await res.data;

	return {
		props: { data },
	};
};
