import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'styles/_nullstyles.scss';
import './index.module.scss';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);