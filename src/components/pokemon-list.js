import React from 'react'

const PokemonList = ({ pokemons, showPokemon }) => {
  return (
    <div>
      <ul>
        {pokemons.map((p, idx) => (
          <li key={idx}>
            <span onClick={() => showPokemon(p.url)}>{p.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
