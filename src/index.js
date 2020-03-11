import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(<HashRouter basename={window.location.pathname || ''}>
                    <Provider store={store}><App /></Provider>
                </HashRouter>, document.getElementById('root'));
// serviceWorker.register();
