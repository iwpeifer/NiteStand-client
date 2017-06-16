import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import Search from './search'
import ReadingListContainer from './readingListContainer'
import ArticleCard from './articleCard'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      readingLists: [],
      selectedArticles: [],
      filteredArticles: []
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
        const post = res.data.slice(0,3000).map(url => url)
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
    if (this.state.filteredArticles.length > 0)
    {
          return this.state.filteredArticles.map( article => <ArticleCard key={article.id} article={article} selectArticle={this.selectArticle}/>)
    }
    else {
          return this.state.articles.map( article => <ArticleCard key={article.id} article={article} selectArticle={this.selectArticle}/>)

    }
  }

  selectArticle(article) {
    this.setState( prev => {
      return {
        selectedArticles: [...prev.selectedArticles, article]
      }
    })
  }
  search(searchTerm){
    let initArticles = this.state.articles
    let filtered = initArticles.filter( (data) => (data.headline.toLowerCase().includes(searchTerm.toLowerCase()) ))
      this.setState({
        filteredArticles: filtered
      })
  }

  render() {
    console.log(this.state.filteredArticles)
    return (
      <div className="main-page">
        <Navbar />
        <div className="row">
          <Search search={this.search.bind(this)}/> 
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
