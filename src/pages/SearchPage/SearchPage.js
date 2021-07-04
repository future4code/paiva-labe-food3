import { ContainerSearch, SearchInput, SearchPlacehoder } from './styled'
import { InputAdornment, Typography, Box, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import React, { useState, useEffect } from "react";
import { getSearch } from '../../services/search'
import useForm from '../../hooks/useForm';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'


const SearchPage = () => {

    const [restaurants, setRestaurants] = useState([])
    const { form, onChange } = useForm({
        search: ""
    });

    useEffect(() => {
        getSearch(setRestaurants)


    }, [])


    const filteredRestaurants = restaurants && restaurants.filter((restaurant) => (
        restaurant.name.toLowerCase().includes(form.search.toLowerCase())))

    const filter = { restaurants: filteredRestaurants }




    return (
        <Box ml={2} mr={2}>

            <form variant="outlined" >
                <TextField
                    autoFocus
                    name={"search"}
                    value={form.search}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    placeholder="Restaurante"
                    id="input-searchpage"
                    variant="outlined"
                    color="primaryColor"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="baseColor" />
                            </InputAdornment>
                        ),
                    }}
                />

            </form>
            {form.search === "" ? <Typography variant="h6" align="center"> Busque por nome de restaurantes </Typography> :
                <RestaurantCard restaurants={filter} />
            }
            {filteredRestaurants.length === 0 && <Typography variant="h5" align="center">Nao encontramos :(</Typography>}

        </Box>
    );
}


export default SearchPage