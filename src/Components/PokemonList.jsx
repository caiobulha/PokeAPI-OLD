import React from 'react' //rfc

export default function PokemonList({name}) {
  return (
    <div>
      {lista.map((el, index) => (
        <div key={index}>{el.name}</div>
      ))}
    </div>
  )
}