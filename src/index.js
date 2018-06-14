import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
    , document.getElementById('root'));
registerServiceWorker();
