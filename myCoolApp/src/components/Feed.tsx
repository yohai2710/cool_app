import { useState } from 'react';
import '../App.css';
import CreatePost from './CreatePost.tsx';

export type Post = {
    title: string;
    content: string;
};

const Feed = () => {
    const [postsList, setPostsList] = useState<Post[]>([
        { title: 'Welcome to the Feed', content: 'This is your first demo post!' },
        { title: 'Second Post', content: 'Here’s another sample post for you.' },
        { title: 'Third Post', content: 'Enjoy exploring this React feed.' },
        { title: 'Third Post', content: 'Enjoy exploring this React feed.' },
        { title: 'Third Post', content: 'Enjoy exploring this React feed.' },
    ]);

    const addPost = (newPost: Post) => {
        setPostsList([newPost, ...postsList]);
    };

    return (
        <div className="content">
            <CreatePost onAddPost={addPost} />
            <h2>Feed</h2>
            <div className="post-list">
                {postsList.map((post, index) => (
                    <div key={index} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
