import React from 'react';

function PostHeader({ author, date, content }) {
  return (
    <>
      <h2>{author.name}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </>
  );
}

function PostComments({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li>{comment.content}</li>
      ))}
    </ul>
  );
}

export default function PostItem(props) {
  return (
    <div className="post">
      <PostHeader {...props} />
      <PostComments {...props} />
    </div>
  );
}
