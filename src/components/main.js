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
    this.createReadingList = this.createReadingList.bind(this)
    this.deleteReadingList = this.deleteReadingList.bind(this)
  }

  componentDidMount() {
    this.fetchArticles()
    this.fetchReadingLists()
  }

  fetchArticles(){
    axios.get("http://localhost:3000/api/v1/articles")
      .then(res => {
        const post = res.data.slice(0,100).map(url => url)
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

  createReadingList(title){
    const url = "http://localhost:3000/api/v1/reading_lists"
    axios({
      method: 'post',
      url: url,
      data: {
        title: title,
        articles: this.state.selectedArticles
      }
    }).then(response => {
      console.log(response.data)
      this.setState( prev => {
        return { readingLists: [...prev.readingLists, response.data] }
      })
    })
  }


  deleteReadingList(id){
    axios.delete(`http://localhost:3000/api/v1/reading_lists/${id}`)
      .then( () => {
        this.setState( prev => {
          return {
            readingLists: prev.readingLists.filter( readingList => {
              return readingList.id !==id
            })
          }
        })
      })
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
    return (
      <div className="main-page">
        <Navbar />
        <div className="row">
          <Search search={this.search.bind(this)}/>
          <div className="col s3">
            <ReadingListContainer readingLists={this.state.readingLists} selectedArticles={this.state.selectedArticles} createReadingList={this.createReadingList} deleteReadingList={this.deleteReadingList}/>
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
