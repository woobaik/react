import React from 'react';

class SearchBar extends React.Component {

  state = {term: ''};


  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term)
  }


  render() {
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="searchBar">Search Form</label>
            <input type="text"
                   id="searchBar"
                   onChange={this.onChange}
                   value={this.state.term} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
