import React from 'react'
import { ContainerSearch, SearchInput } from './styled'
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from "react";
import { getSearch } from '../../services/search'
import useForm from '../../hooks/useForm';

const SearchPage = () => {

    const [restaurants, setRestaurants] = useState([])
    const { form, onChange, cleanFields } = useForm({
        search: ""
    });
    getSearch(setRestaurants)

    const handleSearch = (e) => {
        e.preventDefault()
            (e.target.value)

        const filteredRestaurants = restaurants.filter((restaurant) => (
            restaurant.name.toLowerCase().includes(search.toLowerCase())))
    }


    console.log(restaurants)
    return (
        <>
            <form variant="outlined" onSubmit={handleSearch} >
                <ContainerSearch>
                    <SearchInput>

                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        <input type="text"
                            name={"search"}
                            value={form.search}
                            onChange={onChange}
                            placeholder="Restaurante" />
                    </SearchInput>

                </ContainerSearch>
            </form>
            {filteredRestaurants}
        </>
    );
}

export default SearchPage