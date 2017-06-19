import React from 'react'
import { Collection, CollectionItem, Button } from 'react-materialize'

export default (props) => {
  return (
      <Collection>
        <CollectionItem>
          <form>
            <input type="text" value={props.title} placeholder="Name Your Reading List" id="titleField" onChange={props.handleChange}/>
            <Button className="blue" waves="light" onClick={props.handleSubmit}> ▼ New Reading List</Button> <Button className="orange right" waves="light" onClick={props.handleClear}>Clear Articles</Button>
          </form>
        </CollectionItem>
      </Collection>
  )
}
