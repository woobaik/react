import React from 'react';
import NewsItem from './News_list_item'

const NewsList = (props) => {



  const items = props.newsFeed.map((item) => {

    return (
        <NewsItem key={item.id} item={item}/>
    )
  });


  return (
    <div>
      {props.children}
      {items}
    </div>
  )

};


export default NewsList
