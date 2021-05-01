import React from 'react'

export default function Article({title, description}) {
  return (
    <div className="article">
      <h2 className="article__title">Titulo do artigo</h2>
      <p className="article__description">description do artigo...</p>
    </div>
  )
}
