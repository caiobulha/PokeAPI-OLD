import { useEffect, useState } from "react";
import "../Styles/Dex.css";
import PokemonList from "./PokemonList";
import images from "./Images";
import Card from './Card'

function Dex() {
  const [pokemons, setPokemons] = useState([]);

  const typesTranslator = {
    fire: images.fireI,
    water: images.waterI,
    dark: images.darkI,
    dragon: images.dragonI,
    fight: images.fightingI,
    flying: images.flyingI,
    ghost: images.ghostI,
    ice: images.ghostI,
    grass: images.grassI,
    psychic: images.psychicI,
    ground: images.groundI,
    stone: images.rockI,
    normal: images.normalI,
    steel: images.steelI,
    fairy: images.fairyI,
    bug: images.bugI,
    poison: images.poisonI,
    electric: images.eletricI,
  };

  const typeHandler = (types) => {
    if (types[1]) {
      var tipo = [];
      tipo.push(
        <img
          src={typesTranslator[types[0].type.name]}
          key="1"
          alt="Icon"
          className="icon"
        ></img>
      ); //Um elemento em react precisa de uma key
      tipo.push(
        <img
          src={typesTranslator[types[1].type.name]}
          key="2"
          alt="Icon"
          className="icon"
        ></img>
      );
      return tipo;
    } else {
      var tipo = (
        <img
          src={typesTranslator[types[0].type.name]}
          alt="Icon"
          className="icon"
        ></img>
      ); //Um elemento em react precisa de uma key
      return tipo;
    }
  };

  function SetPokedex() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        setPokemons(() => {
          const newPokemons = [];
          for (const pokemon of data.results) {
            fetch(pokemon.url).then((dataResponse) =>
              dataResponse
                .json()
                .then((dexData) => 
                  newPokemons.push(dexData)
                )
            );
          }
          return newPokemons;
        });
      })
    );
  }
  useEffect(() => {
    SetPokedex();
  }, []);
  return (
    <div>
      <PokemonList lista={pokemons} />
    </div>
  );
}

export default Dex;
