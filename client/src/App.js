import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios
            .get(`${process.env.REACT_APP_API}/posts`)//grabs URL
            .then(response => {
                // console.log(response);
                setPosts(response.data);
            })
            .catch(error => alert('Error fetching posts'));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    //one click will execute this function and pass the slug as a parameter
    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this post?');//Browser native alert 
        if (answer) {
            deletePost(slug);//using axios to make a delete request to our server so we can delete this post.
        }
    };

    //using axios to make a delete request to our server so we can delete this post.
    const deletePost = slug => {
        axios
            .delete(`${process.env.REACT_APP_API}/post/${slug}`,)
            .then(response => {
                alert(response.data.message);//deleted post no longer in the DB
                fetchPosts();//make git request to get on the post and wont see deleted post anymore.
            })
            .catch(error => alert('Error deleting post'));// erro handler
    };

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>NOTE PAD CRUD</h1>
            <hr />
            {posts.map((post, i) => (
                <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
                    <div className="col pt-3 pb-2">
                        <div className="row">
                            <div className="col-md-10">
                                <Link to={`/post/${post.slug}`}>
                                    <h2>{post.title}</h2>
                                </Link>
                                <p className="lead">{post.content.substring(0, 100)}</p>
                                <p>
                                    Author <span className="badge">{post.user}</span> Published on{' '}
                                    <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                                </p>
                            </div>

                            <div className="col-md-2">
                                <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                                    Update
                                </Link>
                                <button  onClick={() => deleteConfirm(post.slug)} className="btn btn-sm btn-outline-danger ml-1">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
