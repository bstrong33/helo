import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Comp from './components/Comp/Comp';

export default <Switch>
    <Route path='/' component={Auth} exact/>
    <Route path='/dashboard' component={Dashboard} />
    {/* <Route path='/form' component={Form} /> */}
    <Route path='/form' component={Form} />
    <Route path='/post/:postid' component={Post} />
    <Route path='/comp' component={Comp} exact/>
    <Route path='/comp/:num' component={Comp} />
</Switch>
