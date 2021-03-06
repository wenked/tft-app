import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { getPlacementColor } from '@utils/utilityFunctions';

interface placementsBoxProps {
	placementsArray: Number[];
}

function getSum(total, num) {
	return total + num;
}

const PlacementsBox: React.FC<placementsBoxProps> = ({ placementsArray }) => {
	const averagePlacement =
		placementsArray.reduce(getSum, 0) / placementsArray.length;

	return (
		<Box m={3}>
			<Flex>
				<Box p={2}>
					<Text fontWeight='semibold'> Avg.Rank: {averagePlacement}</Text>
				</Box>
				{placementsArray.map((placement, i) => (
					<Box
						key={i}
						m={1}
						border='2px solid'
						borderColor={getPlacementColor(placement)}
						p={3}
						borderRadius='5px'
						height='50px'>
						<Text p='3px' fontSize='md' fontWeight='semibold' color='gray.400'>
							{placement}
						</Text>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default PlacementsBox;
