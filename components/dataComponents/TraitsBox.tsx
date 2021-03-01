import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { TraitsType } from '../../types/dataTypes';
import {
	convertString,
	getTraitBackgroundColor,
} from '../../utils/utilityFunctions';

interface traitsProps {
	traits: TraitsType[];
}

const TraitsBox: React.FC<traitsProps> = ({ traits }) => {
	const legendaryTraits = [
		'Set4_Daredevil',
		'Boss',
		'Set4_Blacksmith',
		'Emperor',
	];

	return (
		<div>
			{traits.map((trait, i) => {
				if (!legendaryTraits.includes(trait.name as string)) {
					return (
						trait.tier_current > 0 && (
							<Flex display='inline-flex' p={2}>
								<Text>
									<Image
										src={`https://rerollcdn.com/icons/${convertString(
											'Set4_',
											trait.name
										)}.png`}
										alt='Logo'
										backgroundColor={getTraitBackgroundColor(trait.style)}
										borderRadius='md'
										width='30px'
									/>
									{trait.num_units}
								</Text>
							</Flex>
						)
					);
				}
				return <></>;
			})}
		</div>
	);
};

export default TraitsBox;
