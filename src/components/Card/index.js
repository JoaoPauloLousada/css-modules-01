import React from 'react'
import styles from './styles.module.css';

export default function Card() {
  return (
    <div class={styles.wrapper}>
      <h2 className={styles.header}>Titulo do card</h2>
      <p className={styles.content}>descricao do card</p>
    </div>
  )
}
