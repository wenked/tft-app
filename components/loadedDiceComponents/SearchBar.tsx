import React from 'react';
import {
	Box,
	Button,
	Select,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { champions } from '../../utils/champions';
import { Hint } from 'react-autocomplete-hint';
import { getOddsOfDesiredChamps, loadedDiceOdds } from '../../utils/getOdds';
import { capitalize } from '../../utils/utilityFunctions';

interface searchBarProps {
	setOdds: React.Dispatch<React.SetStateAction<loadedDiceOdds[]>>;
}
const SearchBar: React.FC<searchBarProps> = ({ setOdds }) => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const championOptionsName = champions.map((champ) => champ.name) as string[];

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchTerm !== null) {
			setOdds(getOddsOfDesiredChamps(capitalize(searchTerm)));
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<Box w='300px' m={4} display='inline-block'>
			<form onSubmit={onSubmitHandler}>
				<FormControl isRequired>
					<FormLabel>Champion</FormLabel>
					<Box>
						<Hint options={championOptionsName} allowTabFill>
							<input
								style={{ color: '#140101' }}
								value={searchTerm}
								onChange={onChangeHandler}
							/>
						</Hint>
					</Box>
					<Box>
						<Button mt={2} type='submit'>
							Search
						</Button>
					</Box>
				</FormControl>
			</form>
		</Box>
	);
};

export default SearchBar;
