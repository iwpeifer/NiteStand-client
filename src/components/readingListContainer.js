import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import ReadingList from './readingList'
import NewReadingListForm from'./newReadingListForm'
import { Collection, CollectionItem, Button } from 'react-materialize'
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
        <Switch>
          <Route exact path="/" render={ () => <NewReadingListForm title={this.state.title} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClear={this.handleClear}/>}/>
          <Route exact path="/:id" render={ (RouterProps) => <ReadingList readingList={this.props.readingLists.find(readingList => readingList.id == RouterProps.match.params.id)} deleteReadingList={this.props.deleteReadingList} />} />
        </Switch>
        <Collection>
          {this.props.selectedArticles.map(article => <CollectionItem href={article.web_url} target="_blank" rel="noopener noreferrer" key={article.id}>{article.headline}</CollectionItem> )}
        </Collection>
        <Collection>
          {this.props.readingLists.map(readingList => <CollectionItem key={readingList.id}><Link to={`/${readingList.id}`} key={readingList.id}>{readingList.title}</Link></CollectionItem>)}
        </Collection>
      </div>
    )
  }
}

// {this.props.readingLists.map(readingList => <CollectionItem header={readingList.title} href="#" key={readingList.id}><Button className="blue" waves="light">▲ Add to List</Button>{this.renderReadingList(readingList)}</CollectionItem>)}
