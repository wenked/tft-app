// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const summonerName = async (req: NextApiRequest, res: NextApiResponse) => {
	const riotApiKey = process.env.RIOT_API_KEY;

	const AMERICAS = ['br1', 'la1', 'la2', 'na1'];
	const EUROPE = ['eun1', 'euw1', 'ru', 'tr1'];

	const testDate = new Date();
	let regionString = '';

	const {
		query: { summoner, region },
	} = req;
	const riotApiUrl = `https://${region}.api.riotgames.com/tft`;

	const fetchSummoner = await axios.get(
		`${riotApiUrl}/summoner/v1/summoners/by-name/${summoner}?api_key=${riotApiKey}`
	);

	if (fetchSummoner.status === 404) {
		return res.status(200).json({
			summoner: {},
			rankedData: {},
			date: testDate.toUTCString(),
			matchListIds: {},
			matchDetailsArray: [],
			playerMatchDetail: [],
			status: fetchSummoner.status,
		});
	}

	const summonerResponse = await fetchSummoner.data;
	const fetchRankedData = await axios.get(
		`${riotApiUrl}/league/v1/entries/by-summoner/${summonerResponse.id}?api_key=${riotApiKey}`
	);

	const rankedDataResponse = fetchRankedData.data;

	if (AMERICAS.includes(region as string)) {
		regionString = 'americas';
	} else if (EUROPE.includes(region as string)) {
		regionString = 'europe';
	} else {
		regionString = 'asia';
	}

	const fetchMatchListData = await axios.get(
		`https://${regionString}.api.riotgames.com/tft/match/v1/matches/by-puuid/${summonerResponse.puuid}/ids?count=10&api_key=${riotApiKey}`
	);

	const matchListDataResponse = fetchMatchListData.data;

	const matchDetailsArray = await Promise.all(
		matchListDataResponse.map(async (matchId: String) => {
			const matchDetail = await axios.get(
				`https://${regionString}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${riotApiKey}`
			);
			return matchDetail.data;
		})
	);

	const playerMatchDetail = matchDetailsArray.map((match: any) => {
		return {
			game_datetime: match.info.game_datetime,
			game_length: match.info.game_length,
			playerMatchDetails: match.info.participants.filter(
				(player) => player.puuid === summonerResponse.puuid
			),
		};
	});

	res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

	return res.status(200).json({
		summoner: summonerResponse,
		rankedData: rankedDataResponse,
		date: testDate.toUTCString(),
		matchListIds: matchListDataResponse,
		matchDetailsArray,
		playerMatchDetail,
		status: fetchSummoner.status,
	});
};

export default summonerName;
