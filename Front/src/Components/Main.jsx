import '../Styles/Main.css'
import Header from './Header'
import Aside from './Aside'
import Home from './Home'
import Search from './Search'
import Dex from './Dex'
import Content from './Content'
import { useState, useEffect } from 'react'
import MiniCard from './MiniCard'


function Main() {
    var x = 0;
    const [pokemons, setPokemons] = useState()
    const [actualPage, setActualPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const[names, setNames] = useState()
    var newPokemons = []
    var newNames = []

    const typeHandler = (types) => {
        if (types[1]) {
          var tipo = [];
          tipo.push(`${types[0].type.name} |`); //Um elemento em react precisa de uma key
          tipo.push(` `, types[1].type.name);
          return tipo;
        } else {
          var tipo = (types[0].type.name); //Um elemento em react precisa de uma key
          return tipo;
        }
      };
    function SetPokedex() {
        let limit = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898'
        fetch(limit, {
            method: "GET",
        }).then((response) =>
            response.json().then((data) => {
                for (const pokemon of data.results) {
                    fetch(pokemon.url).then((dataResponse) =>
                        dataResponse
                            .json()
                            .then((dexData) => {
                                newNames.push(dexData.name)
                                newPokemons.push(<MiniCard nome={dexData.name} img={dexData.sprites.front_default} key={dexData.name} peso={dexData.weight} num={dexData.id} tipo={typeHandler(dexData.types)} shiny={dexData.sprites.front_shiny} altura={dexData.height}/>)
                                newPokemons.length == limit.split(`=`)[2] && setLoading(false)
                            }
                            )
                    );
                }
                setNames(newNames)
                setPokemons(newPokemons)
            })
        );
    }

    useEffect(() => {
        SetPokedex();
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="contentWrapper">
                <Aside content={
                    <ul>
                        <li><button onClick={() => setActualPage(0)} >Home</button></li>
                        <li><button onClick={() => setActualPage(1)}>Search</button></li>
                        <li><button onClick={() => setActualPage(2)} >Dex</button></li> {/*Enquanto loading for true, ele fica desabilitado*/}
                    </ul>}
                />
                <Content content={
                    actualPage === 0 ? <Home /> : actualPage === 1 ? <Search data={names} loading={loading}/> : actualPage === 2 ? <Dex data={pokemons} loading={loading} /> : x++
                } />
            </div>
        </div>
    )
}

export default Main