import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import reducers from './reducer'
import thunk from 'redux-thunk'
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom'
import App from "./App";
import Home from "./component/Home";
import Register from "./component/Register";


const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/register" component={Register}/>
                <Route path="/" exact={true} component={Home}/>
            </App>

        </BrowserRouter>

    </Provider>


    , document.getElementById('root'));


serviceWorker.unregister();
