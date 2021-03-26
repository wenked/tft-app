import React from 'react';
import {
	InputGroup,
	InputRightElement,
	IconButton,
	Input,
	Box,
	FormControl,
	Select,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import LoadingContext from '../../context/loadingContext';
import { useRouter } from 'next/router';

const NavBarSearchBox: React.FC = () => {
	const { isLoading, setLoading } = React.useContext(LoadingContext);
	const [selectOption, setSelectOption] = React.useState('');
	const [inputText, setInputText] = React.useState('');

	const router = useRouter();
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

	return (
		<Box float='right'>
			<form onSubmit={onSubmitHandler}>
				<FormControl isRequired display='inline-flex'>
					<Box>
						<FormControl isRequired>
							<Select
								size='sm'
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
					</Box>
					<Box>
						<InputGroup size='sm'>
							<Input
								placeholder='Summoner name'
								onChange={onChangeHandler}
								value={inputText}
							/>
							<InputRightElement>
								<IconButton
									aria-label='Search'
									icon={<SearchIcon />}
									type='submit'
									isLoading={isLoading}
									size='sm'
								/>
							</InputRightElement>
						</InputGroup>
					</Box>
				</FormControl>
			</form>
		</Box>
	);
};

export default NavBarSearchBox;
