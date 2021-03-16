import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const leaderBoard = async (req: NextApiRequest, res: NextApiResponse) => {
	const riotApiKey = process.env.RIOT_API_KEY;
	const AMERICAS = ['br1', 'la1', 'la2', 'na1'];
	const EUROPE = ['eun1', 'euw1', 'ru', 'tr1', 'oc1', 'jp1', 'kr'];

	const {
		query: { region },
	} = req;

	if (
		AMERICAS.includes(region as string) ||
		EUROPE.includes(region as string)
	) {
		const riotApiUrl = `https://${region}.api.riotgames.com/tft/league/v1/challenger`;

		const fetchLeaderboard = await axios.get(
			`${riotApiUrl}?api_key=${riotApiKey}`
		);
		res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

		return res.status(200).json({
			...fetchLeaderboard.data,
			entries: fetchLeaderboard.data.entries.sort(
				(a, b) => b.leaguePoints - a.leaguePoints
			),
		});
	}

	return res.status(200).json({});
};

export default leaderBoard;
