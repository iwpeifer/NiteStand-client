import React from 'react'
import { Collection, CollectionItem } from 'react-materialize'
// import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <div>
      <h3>My Reading Lists</h3>
      <Collection>
        {props.readingLists.map(readingList => <CollectionItem href="#">{readingList.title}</CollectionItem> )}
      </Collection>
    </div>

  )
}
