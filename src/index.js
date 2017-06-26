import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import registerServiceWorker from './common/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
