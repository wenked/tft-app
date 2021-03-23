import { Box, Image } from '@chakra-ui/react';
import { match } from 'assert';
import React from 'react';
import { UnitsType } from '../../types/dataTypes';
import { convertString, getBorderColor } from '../../utils/utilityFunctions';
import Champion from './Champion';

interface championsBoxProps {
	units: UnitsType[];
}

const ChampionsBox: React.FC<championsBoxProps> = ({ units }) => {
	return (
		<Box>
			{units.map((unit, i) => {
				return (
					<Box display='inline-block' p={1} key={i}>
						<Champion unit={unit} size='50px' />
						<Box display='inline-flex'>
							{unit.items.map((item) =>
								item >= 10 ? (
									<Image
										alt='item-img'
										src={`https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128530/items/${item}.png`}
										boxSize='15px'
									/>
								) : (
									<Image
										alt='item-img'
										src={`https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128530/items/0${item}.png`}
										boxSize='15px'
									/>
								)
							)}
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default ChampionsBox;
