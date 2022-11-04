import { useEffect, useState } from 'react'
import '../Styles/Dex.css'
import PokemonList from './PokemonList'
import waterI from '../assets/types/water_type.png'
import bugI from '../assets/types/bug_type.png'
import darkI from '../assets/types/dark_type.png'
import dragonI from '../assets/types/dragon_type.png'
import eletricI from '../assets/types/eletric_type.png'
import fairyI from '../assets/types/fairy_type.png'
import fightingI from '../assets/types/fighting_type.png'
import fireI from '../assets/types/fire_type.png'
import flyingI from '../assets/types/flying_type.png'
import ghostI from '../assets/types/ghost_type.png'
import grassI from '../assets/types/grass_type.png'
import groundI from '../assets/types/ground_type.png'
// import iceI from '../assets/types/ice_type.png'
import normalI from '../assets/types/normal_type.png'
import poisonI from '../assets/types/poison_type.png'
import psychicI from '../assets/types/psychic_type.png'
import rockI from '../assets/types/rock_type.png'
import steelI from '../assets/types/steel_type.png'

function Dex() {
    const[pokemons, setPokemons] = useState([])
    
    const typesTranslator = {
        'fire': fireI,
        'water': waterI,
        'dark': darkI,
        'dragon': dragonI,
        'fight': fightingI,
        'flying': flyingI,
        'ghost': ghostI,
        'ice': ghostI,
        'grass': grassI,
        'psychic': psychicI,
        'ground': groundI,
        'stone': rockI,
        'normal': normalI,
        'steel': steelI,
        'fairy': fairyI,
        'bug': bugI,
        'poison': poisonI,
        'electric': eletricI
    }

    const typeHandler = (types) => {
        if(types[1]) {
            var tipo = []
            tipo.push(<img src={typesTranslator[types[0].type.name]} key='1' alt='Icon' className='icon'></img>) //Um elemento em react precisa de uma key
            tipo.push(<img src={typesTranslator[types[1].type.name]} key='2' alt='Icon' className='icon'></img>)
            return tipo
        } else {
            var tipo = <img src={typesTranslator[types[0].type.name]} alt='Icon' className='icon'></img> //Um elemento em react precisa de uma key
            return tipo
        }
    }

    function SetPokedex() {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`, {
            'method': 'GET'
        }).then(response => response.json().then(data => {
            setPokemons((previousPokemon) => {
                const newPokemons = [...previousPokemon]
                for (const pokemon of data.results) {
                    fetch(pokemon.url).then(dataResponse => dataResponse.json().then(dexData => {
                        newPokemons.push(<div key={dexData.name}>{dexData.name}</div>)
                    }))
                }
                return newPokemons
            })
            // setPokemons(e => {
            //     fetch(e.url).then(dataResponse => dataResponse.json().then(dexData => {
            //         e.push(<div key={dexData.name}>{dexData.name}</div>))
            //     })
            //     return e
            // })
        }))
    }
    useEffect(() => {
        SetPokedex()
    }, [])
    return(
        <div>
            {<PokemonList lista={pokemons}/>}
        </div>
    )
}

export default Dex