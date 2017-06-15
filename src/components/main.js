import React, { Component } from 'react'

import Navbar from './navbar'
import ReadingListContainer from './readingListContainer'
import ArticleCard from './articleCard'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      readingLists: []
    }

  }

  componentDidMount() {
    this.fetchArticles()
    this.fetchReadingLists()
  }

  fetchArticles(){
    const url = "http://localhost:3000/api/v1/articles"
    fetch(url)
      .then( response => response.json() )
      .then( data => this.setState({
        articles: data
      }))
  }

  fetchReadingLists(){
    const url = "http://localhost:3000/api/v1/reading_lists"
    fetch(url)
      .then( response => response.json() )
      .then( data => this.setState({
        readingLists: data
      }))
  }

  displayArticles() {
    return this.state.articles.map( article => <ArticleCard key={article.id} article={article} />)
  }

  render() {
    return (
      <div className="main-page">
        <Navbar />
        <div className="row">
          <div className="col s4">
            <ReadingListContainer readingLists={this.state.readingLists}/>
          </div>
          <div className="col s8">
            <ul>
              {this.displayArticles()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
