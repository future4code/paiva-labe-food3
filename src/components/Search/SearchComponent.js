import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSearch } from '../../routes/coordinator'
import { ContainerSearch, SearchInput } from './styled'
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

export default function SearchComponent() {
    const history = useHistory();
    return (
        <>
            <form variant="outlined" onClick= {()=>goToSearch(history)} >
                <ContainerSearch>
                    <SearchInput>


                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        <input type="text"

                            placeholder="Restaurante" />
                    </SearchInput>

                </ContainerSearch>
            </form>

        </>

    )
}
