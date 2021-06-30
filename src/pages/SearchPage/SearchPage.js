import React from 'react'
import { Search, HaderText, SearchInput, ButtonSearch } from './styled'
import search from '../../assets/search.png'
//import Footer from '../../components/Footer/Footer'

const SearchPage = () => {
    return (
        <Search>
            <HaderText>Buscar</HaderText>
            <div> </div>
            <SearchInput>
                <form>
                    <ButtonSearch src={search}></ButtonSearch>
                    <input type="text" placeholder="Restaurante" />
                </form>
            </SearchInput>
          
        </Search>

    );
}

export default SearchPage