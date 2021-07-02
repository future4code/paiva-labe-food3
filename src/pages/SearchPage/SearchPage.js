import { ContainerSearch, SearchInput } from './styled'
import { InputAdornment } from '@material-ui/core';
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
       
const test = {restaurants:filteredRestaurants}
  
    console.log(filteredRestaurants)
    return (
        <>
            <form variant="outlined" >
                <ContainerSearch>
                    <SearchInput>

                        
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                       
                        <input type="text"
                            name={"search"}
                            value={form.search}
                            onChange={onChange}
                            placeholder="Restaurante" />
                    </SearchInput>

                </ContainerSearch>
            </form>
            {form.search === "" ? <p> Busque por Nome de Restaurante</p>: 
            <RestaurantCard restaurants={test}/>
            } 
            {filteredRestaurants.length === 0 && <p>Nao encontramos :( </p> }    
        </>
    );
}

export default SearchPage