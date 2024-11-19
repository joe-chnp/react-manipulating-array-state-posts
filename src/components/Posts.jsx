import { useState } from 'react';
import postsData from '../assets/postsData';

function Posts() {
  const [posts, setPosts] = useState(postsData);
  const handleLike = (postId) => {
    const newPosts = [...posts];
    newPosts[postId - 1].likes = newPosts[postId - 1].likes + 1;
    setPosts(newPosts);
  };
  const handleDislike = (postId) => {
    const newPosts = [...posts];
    if (newPosts[postId - 1].likes > 0) {
      newPosts[postId - 1].likes = newPosts[postId - 1].likes - 1;
    };
    setPosts(newPosts);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post) => {
          return (
            <div key={post.id} class="post-item">
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">
                {post.content}
              </p>
              <div class="post-actions">
                <button class="like-button" onClick={() => {handleLike(post.id)}}>Like</button>
                <button class="dislike-button" onClick={() => {handleDislike(post.id)}}>Dislike</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Posts;
