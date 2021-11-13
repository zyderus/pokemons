import { useState, useEffect } from 'react'
import { PokemonList, Pagination, PokemonListSkeleton, Modal } from '../components'

const Pokemons = () => {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [pokemonsCount, setPokemonsCount] = useState(null)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(8)
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    let cancelled = false
    const getData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${currentPageUrl}?limit=${pokemonsPerPage}`)
        const data = await res.json()
        if (cancelled) return
        setPokemonsCount(data.count)
        setNextPageUrl(data.next)
        setPrevPageUrl(data.previous)
        setPokemons(data.results)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getData()

    // handle race condition
    return () => (cancelled = true)
  }, [currentPageUrl, pokemonsPerPage])

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  const showPokemon = pokemon => {
    fetch(pokemon)
      .then(res => res.json())
      .then(pokemon => {
        setIsModalOpen(true)
        setPokemon(pokemon)
      })
  }

  return (
    <>
      <h1>Pokemons</h1>
      {loading ? (
        <PokemonListSkeleton pokemonsPerPage={pokemonsPerPage} />
      ) : (
        <PokemonList pokemons={pokemons} showPokemon={showPokemon} />
      )}
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)} pokemon={pokemon}>
        <h4>Your pokemon:</h4>
      </Modal>
    </>
  )
}

export default Pokemons
