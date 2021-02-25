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
			return 'blue';
		case 3:
			return 'yellow';
		case 4:
			return 'yellow.500';
		default:
			return 'gray';
	}
};
