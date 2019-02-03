import React, { Component } from 'react';
import SimpleHeadline from './SimpleHeadline'

class SimpleHeadlinesMain extends Component {
  render() {
    // let headlines = []
    return(
      <div>
      {this.props.articles.items.slice(0, 10).map((item, index) => (
          <SimpleHeadline item={item} key={index} />
      ))}
      </div>
    )
  }
}

export default SimpleHeadlinesMain
