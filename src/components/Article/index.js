import React from 'react'
import styles from './styles.module.css';

export default function Article() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Titulo do artigo</h2>
      <p className={styles.content}>description do artigo...</p>
    </div>
  )
}
