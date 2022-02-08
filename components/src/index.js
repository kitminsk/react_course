import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          content="Nice blog poxt"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and shoe it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
