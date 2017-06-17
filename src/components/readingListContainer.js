import React from 'react'
import { Collection, CollectionItem,Button, Collapsible, CollapsibleItem } from 'react-materialize'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class ReadingListContainer extends React.Component {
  constructor(props){
    super(props)
  }


  handleClick(selArt){
    console.log(selArt)
  }

  postReadingList(){
    axios.get("http://localhost:3000/api/v1/articles")
      .then(res => {
        const post = res.data.slice(0,3000).map(url => url)
        this.setState({articles: post})
        
      })

  }
      render() {
        return (
        <div>
          <h3>My Reading Lists</h3>
          <Collapsible popout>
	        <CollapsibleItem header='First' icon='filter_drama'>
		      <Collection>
            {this.props.selectedArticles.map(article => <CollectionItem href="#" key={article.id}>{article.headline}</CollectionItem> )}
          </Collection>
	        </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		      Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		      Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
          </Collapsible>
      </div>
  )
      }
 
}
