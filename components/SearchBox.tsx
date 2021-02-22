import {
	Box,
	Textarea,
	Button,
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Flex,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

const SearchBox: React.FC = () => {
	//const [searchBoxText, setSearchBoxText] = React.useState('');
	const [selectOption, setSelectOption] = React.useState('');
	const [inputText, setInputText] = React.useState('');
	//const [selectForm, setSelectForm] = React.useState('');
	const router = useRouter();

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		//setSearchBoxText(inputText);
		//setSelectForm(selectOption);
		//console.log(searchBoxText, selectOption);
		router.push(`/summoner/${inputText}?region=${selectOption}`);
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	const onChangeSelectHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectOption(event.target.value as string);
	};

	return (
		<Box p={4}>
			<form onSubmit={onSubmitHandler}>
				<FormControl>
					<FormLabel>Summoner name</FormLabel>
					<Input
						onChange={onChangeHandler}
						size='lg'
						placeholder='Type summoner name'
						value={inputText}
					/>
					<FormControl>
						<FormLabel mt={2}>Region</FormLabel>
						<Select
							placeholder='Region'
							isFullWidth={false}
							maxWidth='100px'
							onChange={onChangeSelectHandler}>
							<option value='br1'>BR</option>
							<option value='euw1'>EUW</option>
							<option value='na1'>NA</option>
							<option value='la1'>LA</option>
							<option value='eun1'>EUN</option>
							<option value='ru1'>RU</option>
							<option value='tr1'>TR</option>
						</Select>
					</FormControl>
					<Button mt={2} type='submit'>
						Search
					</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default SearchBox;
