import React, { Component, Fragment }from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>
    return this.state.tags.map(tag => <li>{tag}</li>)
  }


  render() {
    let classes = this.getBadgeClasses();

    return (
      <Fragment>
        <span style={ { fontSize: 50} } className={classes} >Counter: { this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{ this.renderTags() }</ul>
      </Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes
  }


  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
