import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import ReadingListContainer from './readingListContainer'
import ArticleCard from './articleCard'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      readingLists: [],
      selectedArticles: []
    }
    this.selectArticle = this.selectArticle.bind(this)
  }

  componentDidMount() {
    this.fetchArticles()
    this.fetchReadingLists()
  }

  fetchArticles(){
    axios.get("http://localhost:3000/api/v1/articles")
      .then(res => {
        const post = res.data.slice(0,30).map(url => url)
        this.setState({articles: post})
        
      })
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
    return this.state.articles.map( article => <ArticleCard key={article.id} article={article} selectArticle={this.selectArticle}/>)
  }

  selectArticle(article) {
    this.setState( prev => {
      return {
        selectedArticles: [...prev.selectedArticles, article]
      }
    })
  }

  render() {
    console.log(this.state.selectedArticles)
    return (
      <div className="main-page">
        <Navbar />
        <div className="row">
          <div className="col s3">
            <ReadingListContainer readingLists={this.state.readingLists} selectedArticles={this.state.selectedArticles}/>
          </div>
          <div className="col s9">
            <ul>
              {this.displayArticles()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
