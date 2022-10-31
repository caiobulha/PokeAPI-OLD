import { useEffect, useState } from 'react'
import '../Styles/Dex.css'
import PokemonList from './PokemonList'

function Dex() {
    function SetPokedex() {
        const[pokemons, setPokemons] = useState([])
        const[url, setURL] = useState()
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`, {
            'method': 'GET'
        }).then(response => response.json().then(data => {
            setURL(data.results.map(el => (
                el.url
            )))
        }))
    }
    useEffect(() => {
        SetPokedex()
    }, [])

    return(
        <div>
            {<PokemonList lista={'a'}/>}
        </div>
    )
}

export default Dex