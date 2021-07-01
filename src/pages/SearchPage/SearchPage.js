import React from 'react'
import { ContainerSearch, SearchInput, ButtonSearch } from './styled'
import search from '../../assets/search.png'
//import Footer from '../../components/Footer/Footer'

const SearchPage = () => {
    return (
        <ContainerSearch>
            <SearchInput>
                <form>
                    <ButtonSearch src={search}></ButtonSearch>
                    <input type="text" placeholder="Restaurante" />
                </form>
            </SearchInput>

        </ContainerSearch>

    );
}

export default SearchPage