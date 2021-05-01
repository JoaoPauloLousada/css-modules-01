import React from 'react'

export default function Article({title, description}) {
  return (
    <div className="article">
      {title}
      {description}
    </div>
  )
}
