import {
	Box,
	Button,
	Select,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import LoadingContext from '../../context/loadingContext';
import NavBarSearchBox from './NavBarSearchBox';

const SearchBox: React.FC = () => {
	const [selectOption, setSelectOption] = React.useState('');
	const [inputText, setInputText] = React.useState('');
	const { isLoading, setLoading } = React.useContext(LoadingContext);
	const router = useRouter();
	const searchBoxSize = router.pathname !== '/' ? 'sm' : 'lg';

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
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

	return router.pathname === '/' ? (
		<Box p={4} display='inline-flex'>
			<form onSubmit={onSubmitHandler}>
				<FormControl isRequired>
					<FormLabel>Summoner name</FormLabel>
					<Input
						onChange={onChangeHandler}
						size={searchBoxSize}
						placeholder='Type summoner name'
						value={inputText}
					/>
					<FormControl isRequired>
						<FormLabel mt={2}>Region</FormLabel>
						<Select
							placeholder='Region'
							isFullWidth={false}
							maxWidth='100px'
							onChange={onChangeSelectHandler}>
							<option value='br1'>BR</option>
							<option value='euw1'>EUW</option>
							<option value='na1'>NA</option>
							<option value='la1'>LAN</option>
							<option value='la2'>LAS</option>
							<option value='eun1'>EUNE</option>
							<option value='ru'>RU</option>
							<option value='tr1'>TR</option>
							<option value='oc1'>OCE</option>
							<option value='jp1'>JP</option>
							<option value='kr'>KR</option>
						</Select>
					</FormControl>
					<Button mt={2} type='submit' isLoading={isLoading}>
						Search
					</Button>
				</FormControl>
			</form>
		</Box>
	) : (
		<></>
	);
};

export default SearchBox;
