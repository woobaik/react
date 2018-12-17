import React from 'react';

const NewsItem = (props) => {
  return (
    <div>
      <h1>{props.item.title}</h1>
      <h5>{props.item.feed}</h5>
    </div>
  )

}
export default NewsItem;
