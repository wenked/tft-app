import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Button,
	Image,
	Text,
} from '@chakra-ui/react';
import SearchBar from '../components/loadedDiceComponents/SearchBar';
import { getOddsOfDesiredChamps, loadedDiceOdds } from '../utils/getOdds';
import { convertNumber, getColor } from '../utils/utilityFunctions';

const Loadeddice: React.FC = () => {
	const [odds, setOdds] = React.useState<loadedDiceOdds[]>();

	return (
		<div>
			<SearchBar setOdds={setOdds} />
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Champion</Th>
						<Th>Level 1</Th>
						<Th>Level 2</Th>
						<Th>Level 3</Th>
						<Th>Level 4</Th>
						<Th>Level 5</Th>
						<Th>Level 6</Th>
						<Th>Level 7</Th>
						<Th>Level 8</Th>
						<Th>Level 9</Th>
					</Tr>
				</Thead>
				<Tbody>
					{odds?.map((champ, i) => {
						return (
							<Tr key={i}>
								<Td display='inline-flex' alignItems='center'>
									<Button
										variant='unstyled'
										onClick={() =>
											setOdds(getOddsOfDesiredChamps(champ.champion))
										}>
										<Image
											src={`https://rerollcdn.com/characters/Skin/4.5/${champ.champion.replace(
												/\s/g,
												''
											)}.png`}
											alt='champion icon'
											w='50px'
										/>
									</Button>
									<Text m={1} fontWeight='semibold'>
										{champ.champion}
									</Text>
								</Td>
								<Td color={getColor(champ.level_1)}>
									{convertNumber(champ.level_1)}
								</Td>
								<Td color={getColor(champ.level_2)}>
									{convertNumber(champ.level_2)}
								</Td>
								<Td color={getColor(champ.level_3)}>
									{convertNumber(champ.level_3)}
								</Td>
								<Td color={getColor(champ.level_4)}>
									{convertNumber(champ.level_4)}
								</Td>
								<Td color={getColor(champ.level_5)}>
									{convertNumber(champ.level_5)}
								</Td>
								<Td color={getColor(champ.level_6)}>
									{convertNumber(champ.level_6)}
								</Td>
								<Td color={getColor(champ.level_7)}>
									{convertNumber(champ.level_7)}
								</Td>
								<Td color={getColor(champ.level_8)}>
									{convertNumber(champ.level_8)}
								</Td>
								<Td color={getColor(champ.level_9)}>
									{convertNumber(champ.level_9)}
								</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</div>
	);
};

export default Loadeddice;
