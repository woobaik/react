import React from 'react';

const CommentDetail = (props) => {

  console.log(props);
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.userName}</a>
        <div className="metadata">
          <div className="date">
            2 days ago
          </div>
        </div>
        <div className="text">
           {props.commentText}
        </div>
      </div>
    </div>
  )
}


export default CommentDetail
