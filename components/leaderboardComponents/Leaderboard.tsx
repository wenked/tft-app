import React from 'react';
import useSWR from 'swr';
import { leaderboardType } from '../../types/dataTypes';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import RegionButtons from './RegionButtons';

const BASE_URL = process.env.BASE_URL;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Leaderboard: React.FC = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const [selectedRegion, setSelectedRegion] = React.useState('br1');

	const { data, isValidating } = useSWR<leaderboardType>(
		`/api/leaderboard?region=${selectedRegion}`,
		fetcher,
		{
			initialData: props.data,
			revalidateOnFocus: false,
		}
	);

	return (
		<Box>
			<RegionButtons setSelectedRegion={setSelectedRegion} />
			<Box width='50%' display='flex' margin='0 auto' border='1px solid white'>
				<Table variant='simple' size='sm'>
					<Thead>
						<Tr>
							<Th>Placement</Th>
							<Th>Name</Th>
							<Th>Tier</Th>
							<Th>LeaguePoints</Th>
							<Th>Wins</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data?.entries.map((summoner, i) => {
							return (
								<Tr key={i}>
									<Td>{i + 1}.</Td>
									<Td>{summoner.summonerName}</Td>
									<Td>{data.tier}</Td>
									<Td>{summoner.leaguePoints}</Td>
									<Td>{summoner.wins}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
};

export default Leaderboard;

const getServerSideProps: GetServerSideProps = async (context) => {
	const { region } = context.query;
	const res = await axios.get(
		`/api/leaderboard?region=${region === undefined ? 'br1' : region}`
	);
	const data = await res.data.leaderBoard;

	return {
		props: { data },
	};
};
