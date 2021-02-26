import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { TraitsType } from '../../types/dataTypes';
import {
	convertString,
	getTraitBackgroundColor,
} from '../../utils/utilityFunctions';

interface traitsProps {
	traits: TraitsType;
}

const TraitsBox: React.FC<traitsProps> = ({ traits }) => {
	const legendaryTraits = [
		'Set4_Daredevil',
		'Boss',
		'Set4_Blacksmith',
		'Emperor',
	];

	if (!legendaryTraits.includes(traits.name as string)) {
		return (
			traits.tier_current > 0 && (
				<Flex display='inline-flex' p={2}>
					<Text>
						<Image
							src={`https://rerollcdn.com/icons/${convertString(
								'Set4_',
								traits.name
							)}.png`}
							alt='Logo'
							backgroundColor={getTraitBackgroundColor(traits.style)}
							borderRadius='md'
							width='30px'
						/>
						{traits.num_units}
					</Text>
				</Flex>
			)
		);
	}
	return <></>;
};

export default TraitsBox;
