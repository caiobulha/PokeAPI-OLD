import { useEffect, useRef, useState } from 'react'
import '../Styles/Search.css'
import Card from './Card'
import pika from '../assets/pikachu.gif'
import mimi from '../assets/mimikyu.gif'
import images from './Images'

function Search() {
    const[pokeName, setPokeName] = useState()
    const[res, setRes] = useState()
    const[mimikyu, setMimikyu] = useState()
    const[pikachu, setPikachu] = useState()
    const resultado = useRef()
    const typesTranslator = {
        'fire': images.fireI,
        'water': images.waterI,
        'dark': images.darkI,
        'dragon': images.dragonI,
        'fight': images.fightingI,
        'flying': images.flyingI,
        'ghost': images.ghostI,
        'ice': images.ghostI,
        'grass': images.grassI,
        'psychic': images.psychicI,
        'ground': images.groundI,
        'stone': images.rockI,
        'normal': images.normalI,
        'steel': images.steelI,
        'fairy': images.fairyI,
        'bug': images.bugI,
        'poison': images.poisonI,
        'electric': images.eletricI
    }

    function Error() {
        setPikachu(false)
        setMimikyu(true)
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

    function insertInfo(data, dataSpecies) {
        var card = <Card name={data.name} description={dataSpecies.flavor_text_entries[0].flavor_text} weight={data.weight} height={data.height} captureRate={dataSpecies.capture_rate} img={data.sprites.front_default} bg={data.types[0].type.name} type={typeHandler(data.types)} num={data.id} shiny={data.sprites.front_shiny} legendary={dataSpecies.is_legendary} highQuality={data.sprites.other[`official-artwork`].front_default} hp={data.stats[0].base_stat} attack={data.stats[1].base_stat} spAttack={data.stats[2].base_stat} spDefence={data.stats[3].base_stat} speed={data.stats[4].base_stat}/>
        setRes(card)
    }

    function PokeAPI() {
        setPikachu(true)
        var pokemon = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
        fetch(pokemon, {
            "method": "GET"
        }).then((response) => {
            response.json().then((data) => {
                var species = data.species.url
                fetch(species).then(response => response.json().then(dataSpecies => {
                    insertInfo(data, dataSpecies)
                    setPikachu(false)
                }))
            }).catch( () => {
                Error()
            })
        })
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
    }, [])

    const handleKey = (e) => {
        e.key == 'Escape' && setRes(false)
        e.key == 'Enter' && PokeAPI()
    }

    return(
        <div className='search'>
            <h1>Search Area</h1>
            <span>Try by the <span style={{color: 'blue'}}>number</span> or the <span style={{color: 'red'}}>name</span></span>
            <input type="text" name="Pokemon" id="pokemon" placeholder='Search Here...' onChange={(e) => setPokeName(e.target.value)}></input>
            <button onClick={PokeAPI}>Go!</button>
            {pikachu ? <img src={pika} style={{width: "200px", height: "90px"}}></img> : mimikyu ? <img src={mimi} style={{width: "200px", height: "90px"}}></img> : false}
            <div className="resWrapper" style={{transform: res? 'translateY(10%)': 'translateY(-1000px)'}} ref={resultado}>{res}</div>
        </div>
    )
}

export default Search