import React, { useState } from 'react';
import '../CreatePost.css';
import { Post } from './Feed';

type CreatePostProps = {
  onAddPost: (post: Omit<Post, 'id'>) => void;
};

const CreatePost = ({ onAddPost }: CreatePostProps) => {
  const [post, setPost] = useState<Omit<Post, 'id'>>({ title: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post.title.trim() === '' || post.content.trim() === '') {
      alert('Please enter both a title and content before submitting.');
      return;
    }
    onAddPost(post);
    setPost({ title: '', content: '' });
  };

  return (
    <div className="new-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="new-post-input"
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Post title"
        />
        <textarea
          className="new-post-textarea"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="What's on your mind?"
        />
        <button className="new-post-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
