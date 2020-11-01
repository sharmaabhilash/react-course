import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    selectedPostHandler = ( id ) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post title={ post.title } key={ post.id } clicked={ () => this.selectedPostHandler(post.id) } />
        });

        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
                <section>
                    <FullPost postId={ this.state.selectedPostId } />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;