import React from 'react'
import { Collection, CollectionItem } from 'react-materialize'
// import { Link } from 'react-router-dom'

export default (props) => {
  console.log(props)
  return (
    <div>
      <h3>My Reading Lists</h3>
      <Collection>
        {props.selectedArticles.map(article => <CollectionItem href="#" key={article.id}>{article.headline}</CollectionItem> )}
      </Collection>
    </div>

  )
}
