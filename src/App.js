import styles from './styles/app.module.css'
import { Routes, Route } from 'react-router-dom'
import { Test, Pokemons, Home, NotFound } from './pages'
import { Layout } from './components'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
          <Route path='pokemons' element={<Pokemons />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
