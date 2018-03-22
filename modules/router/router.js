/**
 * Created by lpw on 2018/3/22.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from "../container/app"
export  default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history} >
                <Route path="/" component={App}>
                    <IndexRoute component={App} />
                    {/*<Route path='/changeinto' component={changeinto}/>*/}
                </Route>
            </Router>
        )
    }
}