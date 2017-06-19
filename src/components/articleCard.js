import React from 'react'
import './articleCard.css'
import { Col, Button, Collapsible, CollapsibleItem } from 'react-materialize'
// import { Link } from 'react-router-dom'


export default class ArticleCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      art: []
    }
  }

  handleClick(event){
    this.setState({
      art: event
    }, () => this.props.selectArticle(this.state.art))
  }

  render(){

    return (
      <Col s={4}>
      <Collapsible popout>
	      <CollapsibleItem className ="headText" header={this.props.article.headline.slice(0, 25)+ "..."}>
	    	<div className="card parentCard">
         <span className="card-title">
          <a href={this.props.article.web_url}  target="_blank" rel="noopener noreferrer"><h5 className="card-title">{this.props.article.headline}</h5></a>
        </span>
        <div className="articleText">
          {this.props.article.lead_paragraph}
        </div >
        <div className="card-action buttonCard">
          Published: {this.props.article.pub_date} <Button className="blue wide" waves='light' onClick={event => this.handleClick(this.props.article)}>add</Button>
        </div>
      </div>
	      </CollapsibleItem>
      </Collapsible>
  </Col>

    )
  }
}
