import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/_nullstyles.scss';
import 'index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);