interface summonerRankedData {
	leagueId: String;
	queueType: String;
	tier: String;
	rank: String;
	summonerId: String;
	summonerName: String;
	leaguePoints: Number;
	wins: Number;
	losses: Number;
	veteran: Boolean;
	inactive: Boolean;
	freshBlood: Boolean;
	hotStreak: Boolean;
}

interface TraitsType {
	name: String;
	num_units: Number;
	style: Number;
	tier_current: Number;
	tier_total: Number;
}

interface UnitsType {
	character_id: String;
	items: Number[];
	name: String;
	rarity: Number;
	tier: Number;
}

interface participantsType {
	gold_left: Number;
	last_round: Number;
	level: Number;
	placement: Number;
	players_eliminated: Number;
	puuid: String;
	time_eliminated: Number;
	traits: TraitsType[];
	units: UnitsType[];
}

interface matchDetails {
	metadata: {
		data_version: String;
		match_id: String;
		participants: String[];
		info: {
			game_datetime: number;
			game_length: number;
			game_version: String;
			participants: participantsType[];
			queue_id: Number;
			tft_mode: String;
			tft_set_number: Number;
		};
	};
}

export interface SummonerData {
	summoner: {
		id: String;
		accountId: String;
		puuid: String;
		name: String;
		profileIconId: Number;
		revisionDate: Number;
		summonerLevel: 1;
	};
	rankedData: summonerRankedData[];
	date: Date;
	matchListIds: String[];
	matchDetailsArray: matchDetails[];
	playerMatchDetail: participantsType[];
}
