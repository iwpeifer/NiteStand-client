import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Collection, CollectionItem } from 'react-materialize'

export default (props) => {
  return (
    <div>
      <h4 className="list-title">{props.readingList.title}</h4>
      <Collection>
        {props.readingList.articles.map(article => <CollectionItem href={article.web_url} target="_blank" rel="noopener noreferrer" key={article.id}>{article.headline}</CollectionItem>)}
      </Collection>
      <Button className="orange">Update Reading List</Button><Link to="/"><Button className="blue right">New Reading List</Button></Link>
    </div>
  )
}

// <Button className="red center" onClick={() => props.deleteReadingList(props.readingList.id)}>Delete</Button>
