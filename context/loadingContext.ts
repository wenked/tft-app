import React from 'react';

interface contextInterface {
	isLoading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = React.createContext<contextInterface | null>(null);

export default LoadingContext;
