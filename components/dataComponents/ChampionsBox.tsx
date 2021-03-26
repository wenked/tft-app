import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { UnitsType } from '../../types/dataTypes';
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
							{unit.items.map((item, i) =>
								item >= 10 ? (
									<Image
										alt='item-img'
										src={`https://res.cloudinary.com/dpq5tvqbd/image/upload/v1614128530/items/${item}.png`}
										boxSize='15px'
										key={i}
									/>
								) : (
									<Image
										key={i}
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
