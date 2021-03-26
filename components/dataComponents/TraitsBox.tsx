import { Flex, Text, Image, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { TraitsType } from '../../types/dataTypes';
import {
	convertString,
	getTraitBackgroundColor,
} from '@utils/utilityFunctions';

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
					const traitName = convertString('Set4_', trait.name);
					return (
						trait.tier_current > 0 && (
							<Flex display='inline-flex' p={2} key={i}>
								<Tooltip label={`${trait.num_units} ${traitName}`}>
									<Image
										src={`https://rerollcdn.com/icons/${traitName}.png`}
										alt='Logo'
										backgroundColor={getTraitBackgroundColor(trait.style)}
										borderRadius='md'
										width='40px'
										p={1}
									/>
								</Tooltip>
							</Flex>
						)
					);
				}
				return <React.Fragment key={i}></React.Fragment>;
			})}
		</div>
	);
};

export default TraitsBox;
