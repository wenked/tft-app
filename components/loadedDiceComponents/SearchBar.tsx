import React from 'react';
import {
	Box,
	Button,
	Select,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { getOddsOfDesiredChamps, loadedDiceOdds } from '../../utils/getOdds';

interface searchBarProps {
	setOdds: React.Dispatch<React.SetStateAction<loadedDiceOdds[]>>;
}
const SearchBar: React.FC<searchBarProps> = ({ setOdds }) => {
	const [searchTerm, setSearchTerm] = React.useState('');
	//const [odds, setOdds] = React.useState<loadedDiceOdds[]>();

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchTerm !== null) {
			setOdds(getOddsOfDesiredChamps(searchTerm));
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
						<Input size='lg' value={searchTerm} onChange={onChangeHandler} />
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
