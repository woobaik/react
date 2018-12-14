import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:00PM"
          content="HMM..."
          avatar= {faker.image.avatar()}
          />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4:15PM"
        content="I agree with your post"
        avatar= {faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 8:15PM"
        content="I hate this post"
        avatar= {faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Joungwoo"
        timeAgo="Today at 8:17PM"
        content="I Like your Post!"
        avatar= {faker.image.avatar()}
        />
    </ApprovalCard>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'));
