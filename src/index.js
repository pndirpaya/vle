import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import UIkit from 'uikit'
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './custom.css'
UIkit.use(Icons);


var Vle = () =>{
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<Vle />, document.getElementById('root'));
serviceWorker.unregister();
