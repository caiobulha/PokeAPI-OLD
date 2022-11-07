import React from 'react' //rfc
import Card from './Card'

export default function PokemonList({lista}) {
  console.log(lista)
  return (
    <div>
      {lista.map((element, index) => <Card key={index} name={element.name}/>)}
    </div>
  )
}