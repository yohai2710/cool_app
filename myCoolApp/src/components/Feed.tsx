import { useState, useEffect } from 'react';
import '../App.css';
import CreatePost from './CreatePost.tsx';
import NewActions from './NewActions.tsx';
import Title from './Title.tsx'
import { supabase } from '../supabaseClient';

export type Post = {
    id: string;
    title: string;
    content: string;
};

const Feed = () => {
    const [postsList, setPostsList] = useState<Post[]>([
    ]);

    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select('id, title, content')
            .order('created_at', { ascending: false });
        console.log('Fetched data:', data);
        console.log('Fetch error:', error);

        if (error) {
            console.error('Error fetching posts:', error);
        } else {
            setPostsList(data);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = async (newPost: Omit<Post, 'id'>) => {
        const { data, error } = await supabase
            .from('posts')
            .insert([{ title: newPost.title, content: newPost.content }])
            .select();

        if (error) {
            console.error('Error adding post:', error);
        } else if (data && data.length > 0) {
            setPostsList([data[0], ...postsList]);
        }
    };

    const deletePost = async (id: string) => {
        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting post:', error);
        } else {
            setPostsList(postsList.filter(post => post.id !== id));
        }
    };

    return (
        <div className="content">
            <Title/>
            <NewActions />
            <CreatePost onAddPost={addPost} />
            <p>My AI Feed - See What's New in <strong>Your</strong> World</p>
            <div className="post-list">
                {postsList.map((post, index) => (
                    <div key={index} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="post-actions">
                            <div className="left-actions">
                                <button className="action-button">Like</button>
                                <button className="action-button">Comment</button>
                            </div>
                            <button className="delete-button" onClick={() => deletePost(post.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
