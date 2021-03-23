import { champions } from './champions';

export const rankColor = {
	IRON: 'gray.700',
	BRONZE: 'yellow.900',
	SILVER: 'gray.500',
	GOLD: 'yellow.400',
	PLATINUM: 'green.400',
	DIAMOND: 'blue.500',
	MASTER: 'pink.800',
	GRANDMASTER: 'red.400',
	CHALLENGER: 'red.500',
};

export const convertString = (
	replacer: String,
	trait: String,
	secondReplacer?: String
) => {
	if (replacer === 'Set4_') {
		if (trait.includes('Set4_')) {
			return trait.replace('Set4_', '').toLowerCase();
		}

		return trait.toLowerCase();
	}

	if (secondReplacer) {
		return trait.includes(secondReplacer as string)
			? trait.replace('TFT4b_', '')
			: trait.replace('TFT4_', '');
	}
};

export const convertNumber = (num: Number) => {
	return `${(Number(num) * 100).toFixed(1)}%`;
};

export const capitalize = (s: string) => {
	if (typeof s !== 'string') return '';
	return s.toLowerCase().charAt(0).toUpperCase() + s.slice(1);
};

export const getColor = (odd: Number) => {
	if (odd <= 0.05) {
		return 'red.500';
	}
	if (odd > 0.05 && odd <= 0.1) {
		return 'yellow.500';
	}

	return 'green.500';
};

export const getCost = (championName: String) => {
	return champions.filter((champ) => championName === champ.name)[0].cost;
};

export const getBorderColor = (tier: Number) => {
	switch (tier) {
		case 0:
			return 'gray';
		case 1:
			return 'green';
		case 2:
			return 'blue';
		case 3:
			return 'pink.400';
		case 4:
			return 'yellow.500';
	}
};

export const getTraitBackgroundColor = (traitTier: Number) => {
	switch (traitTier) {
		case 1:
			return 'yellow.700';
		case 2:
			return 'gray.500';
		case 3:
			return 'yellow.300';
		case 4:
			return 'teal.100';
	}
};

export const getPlacementColor = (placement: Number) => {
	switch (placement) {
		case 1:
			return 'green';
		case 2:
			return 'blue.400';
		case 3:
			return 'yellow';
		case 4:
			return 'yellow.500';
		default:
			return 'gray';
	}
};
