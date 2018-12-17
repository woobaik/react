import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Component
import Header from './components/Header'
import NewsList from './components/News_list'

//database
import JSON from './db.json'

class App extends Component {

  state = {
    news: JSON,
    filtered:[]

  }
  getKeyword = (event) => {
    let filtered = this.state.news.filter((item) => {
      return item.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({filtered: filtered})
  }

  render() {
    console.log(this.state.keyword)
    return (
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList newsFeed={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}>
        </NewsList>
      </div>
    )
  }
};


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
