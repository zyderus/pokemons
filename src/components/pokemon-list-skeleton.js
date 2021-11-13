import React from 'react'
import styles from '../styles/skeleton.module.css'

const PokemonListSkeleton = ({ pokemonsPerPage }) => {
  return (
    <div>
      <ul>
        {[...Array(pokemonsPerPage)].map((p, idx) => (
          <li key={idx} className={`${styles.skeletonText}`}>
            &nbsp;<div className={`${styles.skeleton} ${styles.skeletonFill}`}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonListSkeleton
