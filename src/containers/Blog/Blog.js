import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={{
                                    pathname: '/posts/'
                                }} exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={ () => <h1>Home</h1> } /> */}
                <Switch>
                    <Route path="/new-post" component={ AsyncNewPost } />
                    <Route path="/posts/" component={ Posts } />
                    {/* <Route render={ () => <h1>Not Found</h1> } /> */}
                    <Redirect from="/" to="/posts/" />
                </Switch>
            </div>
        );
    }
}

export default Blog;