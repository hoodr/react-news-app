import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleKeyInput = this.handleKeyInput.bind(this);
  }

  handleKeyInput = e => {
    if (e.key === 'Enter') {
      this.props.onSearch(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <input type="text" className="input" onKeyPress={this.handleKeyInput} placeholder="Search..." />
      </div>
    )
  }
}

export default SearchBar;
