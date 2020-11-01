import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate() {
        if ( this.props.postId ) {
            if ( !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== this.props.postId ) ) {
                axios.get('/posts/' + this.props.postId)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.postId)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if ( this.props.postId ) {
            <p>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button onClick={ this.deletePostHandler } className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;