import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { SummonerData } from '../../types/dataTypes';
import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from 'swr';
import { Box, Flex, Text } from '@chakra-ui/react';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SummonerPage: React.FC = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const router = useRouter();
	const { summonerName, region } = router.query;

	const { data, error, isValidating } = useSWR<SummonerData>(
		`/api/${summonerName}?region=${region}`,
		fetcher,
		{
			initialData: props.data,
		}
	);

	return !isValidating ? (
		<Box textAlign='center' p={4}>
			<Flex direction='column'>
				<Text color='blue.600' fontSize='2xl'>
					{data.summoner.name}
				</Text>
				<Text>Rank: {data.rankedData[0].tier}</Text>
				<Text>Points: {data.rankedData[0].leaguePoints}</Text>
				<Text color='blue.400'>Wins: {data.rankedData[0].wins}</Text>
			</Flex>
		</Box>
	) : (
		<div>loading</div>
	);
};

export default SummonerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { summonerName, region } = context.query;

	const res = await fetch(
		`http://localhost:3000/api/${summonerName}?region=${region}`
	);
	const data: SummonerData = await res.json();

	return {
		props: { data },
	};
};
