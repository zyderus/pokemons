import ReactDOM from 'react-dom'
import styles from '../styles/modal.module.css'

const Modal = ({ open, close, pokemon, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        {children}
        <p>&nbsp;</p>
        <h2>{pokemon.name}</h2>
        <p>&nbsp;</p>
        <p>height: {Math.ceil(pokemon.height * 10)} cm</p>
        <p>weight: {pokemon.weight / 10} kg</p>
        <p>&nbsp;</p>
        <button onClick={close}>close</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
