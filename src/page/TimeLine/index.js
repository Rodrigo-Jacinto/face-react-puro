import React from 'react';
import './timeLine-style.css';
import dados from '../../dados';
import PostItem from '../../components/PostItem';

export default class TimeLine extends React.Component {
  state = dados();

  render() {
    const { posts } = this.state;

    return (
      <main>
        {posts.map(post => {
          return <PostItem key={post.id} {...post} />;
        })}
      </main>
    );
  }
}
