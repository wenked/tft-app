interface summonerRankedData {
	leagueId: string;
	queueType: string;
	tier: string;
	rank: string;
	summonerId: string;
	summonerName: string;
	leaguePoints: number;
	wins: number;
	losses: number;
	veteran: Boolean;
	inactive: Boolean;
	freshBlood: Boolean;
	hotStreak: Boolean;
}

export interface championInterface {
	name: string;
	championId: string;
	cost: number;
	traits: string[];
}

export interface TraitsType {
	name: string;
	num_units: number;
	style: number;
	tier_current: number;
	tier_total: number;
}

export interface UnitsType {
	character_id: string;
	chosen?: string;
	items: number[];
	name: string;
	rarity: number;
	tier: number;
}

export interface participantsType {
	game_datetime: number;
	game_length: number;
	playerMatchDetails: [
		{
			gold_left: number;
			last_round: number;
			level: number;
			placement: number;
			players_eliminated: number;
			puuid: string;
			time_eliminated: number;
			traits: TraitsType[];
			units: UnitsType[];
		}
	];
}

interface matchDetails {
	metadata: {
		data_version: string;
		match_id: string;
		participants: string[];
		info: {
			game_datetime: number;
			game_length: number;
			game_version: string;
			participants: participantsType[];
			queue_id: number;
			tft_mode: string;
			tft_set_number: number;
		};
	};
}

export interface SummonerData {
	summoner: {
		id: string;
		accountId: string;
		puuid: string;
		name: string;
		profileIconId: number;
		revisionDate: number;
		summonerLevel: 1;
	};
	rankedData: summonerRankedData[];
	date: Date;
	matchListIds: string[];
	matchDetailsArray: matchDetails[];
	playerMatchDetail: participantsType[];
	status: number;
}
