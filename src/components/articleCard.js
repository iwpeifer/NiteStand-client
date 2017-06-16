import React from 'react'
import { Col, Button } from 'react-materialize'
// import { Link } from 'react-router-dom'

// export default (props) => {
//   return (
//     <Col m={4} s={12}>
//       <Card className='container-shit blue-grey lighten-1' textClassName='white-text'
//       title={props.article.headline} actions={[<a href={props.article.web_url}
//         target="_blank" rel="noopener noreferrer">Go to Story</a>,
//         <a href='#' className="lime-text hoverable" target="_blank"
//         rel="noopener noreferrer">Add to Reading List</a>]}>
//         {props.article.lead_paragraph.substring(0, 140) + "..."}
//       </Card>
//     </Col>
//
//   )
// }

export default (props) => {
  return (
    <Col m={4} s={12}>
      <div className="card">
        <span className="card-top">
          <a href={props.article.web_url}  target="_blank" rel="noopener noreferrer"><h5 className="card-title">{props.article.headline}</h5></a>
        </span>
        <div className="card-contents">
          <p>{props.article.lead_paragraph}</p>
        </div>
        <div className="card-bottom">
          Published: {props.article.pub_date} <Button className="orange" waves='light'>add</Button>
        </div>
      </div>
    </Col>
  )
}
