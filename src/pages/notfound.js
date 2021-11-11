import React from 'react'
import styles from '../styles/notfound.module.css'

const NotFound = () => {
  return (
    <div className={styles.main}>
      <span className={styles.code}>404:</span>&nbsp;Page Not Found!
    </div>
  )
}

export default NotFound
