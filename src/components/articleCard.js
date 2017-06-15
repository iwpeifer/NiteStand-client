import React from 'react'
import { Col, Card } from 'react-materialize'
// import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <Col m={6} s={12}>
      <Card className='blue-grey darken-1' textClassName='white-text' title={props.article.headline} actions={[<a href={props.article.web_url} className="blue-text hoverable" target="_blank" rel="noopener noreferrer">Go to Story</a>, <a href='#' className="lime-text right hoverable" target="_blank" rel="noopener noreferrer">Add to Reading List</a>]}> {props.article.lead_paragraph.substring(0, 140) + "..."}
      </Card>
    </Col>

  )
}
