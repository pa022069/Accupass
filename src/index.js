import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from './Layout/Layout'

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout />
            </Switch>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));
