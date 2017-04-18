import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
 

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './main'
import Javascript from './javascript'
import AngularJS from './angularjs'
import ReactJS from './reactjs'

class Toplevel extends React.Component {

    render() {

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Javascript} />
                    <Route path="javascript" component={Javascript} />
                    <Route path="angularjs" component={AngularJS} />
                    <Route path="reactjs" component={ReactJS} />
                    <Route path="app" component={App} />
                </Route>
            </Router>
        )
    }
}


ReactDOM.render(
  <Toplevel />,
  document.getElementById('root')
);
