import React from 'react'
import ArticleCard from './articleCard'
import { Collection, CollectionItem, Collapsible, CollapsibleItem, Button } from 'react-materialize'
// import { Link } from 'react-router-dom'

export default class ReadingListContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderReadingList = this.renderReadingList.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const title = this.state.title
    this.props.createReadingList(title)
    this.setState({
      title: ""
    })
  }

  handleClear(event) {
    event.preventDefault()
    this.props.clearSelectedList()
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    })

  }

  renderReadingList(readingList) {
    return <Collection>{readingList.articles.map(article => <CollectionItem href="#" key={article.id}>{article.headline}</CollectionItem>)}<Button className="red" waves='light' onClick={() => {this.props.deleteReadingList(readingList.id)}}>Delete List</Button></Collection>
  }

  render() {
    return (
      <div>
        <h3 className='ReadingListContainer-text'>My Reading Lists</h3>
        <Collection>
          <CollectionItem>

                  <form>
                    <input type="text" value={this.state.title} placeholder="Name Your Reading List" id="titleField" onChange={this.handleChange}/>
                    <Button className="blue" waves="light" onClick={this.handleSubmit}> ▼ New Reading List</Button> <Button className="red right" waves="light" onClick={this.handleClear}>Clear Articles</Button>
                  </form>

          </CollectionItem>
        </Collection>
        <Collection>
          {this.props.selectedArticles.map(article => <CollectionItem href="#" key={article.id}>{article.headline}</CollectionItem> )}
        </Collection>
        <Collapsible>
            {this.props.readingLists.map(readingList => <CollapsibleItem header={readingList.title} href="#" key={readingList.id}><Button className="blue" waves="light">▲ Add to List</Button>{this.renderReadingList(readingList)}</CollapsibleItem>)}
        </Collapsible>
      </div>
    )
  }
}
