import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Content />, document.getElementById('app'));
registerServiceWorker();
