import { useEffect, useState } from 'react'
import '../Styles/Dex.css'
import PokemonList from './PokemonList'

function Dex() {
    const[pokemons, setPokemons] = useState([])
    function SetPokedex() {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`, {
            'method': 'GET'
        }).then(response => response.json().then(data => {
            const pokemonsArray = []
            for (const pokemon of data.results){
                fetch(pokemon.url, { 
                    'method': 'get'
                }).then(pokeResponse => pokeResponse.json().then(data =>{
                    pokemonsArray.push(data)
                }))
            }
            console.log(pokemonsArray)
            setPokemons(pokemonsArray)
        }))
    }
    useEffect(() => {
        SetPokedex()
    }, [])
    return(
        <div>
            {pokemons && <PokemonList lista={pokemons}/>}
        </div>
    )
}

export default Dex