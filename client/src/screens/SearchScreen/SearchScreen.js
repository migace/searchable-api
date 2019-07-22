import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ProvidersService from '../../services/ProvidersService';
import { SearchBarWrapper } from './styles';

export const SearchScreen = () => {
  const [ data, setData ] = useState([]);

  const onSearch = async (data) => {
    const providersService = new ProvidersService();
    const providersData = await providersService.getData(data);

    setData(providersData);
  };

  return (
    <>
      <SearchBarWrapper>
        <SearchBar onSearch={onSearch} />
      </SearchBarWrapper>
      <SearchResults data={data} />
    </>
  );
}
