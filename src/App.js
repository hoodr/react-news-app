import React, { Component } from 'react';
import './App.css';
import SimpleHeadlinesMain from './components/Headlines/SimpleHeadlinesMain';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  onSearch = query => {
    console.log(query);
    fetch('https://newsapi.org/v2/everything?q=' + query + '&apiKey=d2423f4d8f5b4f3396988699d9c92b84')
      .then(res => res.json())
      .then(body => {
        const currState = this.state;
        currState.items = body.articles;
        this.setState(currState);
      });
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchBar items={this.state.items} onSearch={this.onSearch} />
        </div>

        <div className="Headline-Section">
          <SimpleHeadlinesMain articles={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
