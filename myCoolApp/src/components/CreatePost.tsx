import React, { useState } from 'react';
import '../CreatePost.css';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() === '') {
      alert('Please enter some text before submitting.');
      return;
    }
    console.log('New post submitted:', content);
    alert(`Post submitted: ${content}`);
    setContent('');
  };

  return (
    <div className="new-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="new-post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
