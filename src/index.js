import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// Import the App container component
import App from './containers/app/app'

// Import the reducer and create a store
import { reducer } from './containers/app/todoListRedux'

const store = createStore(reducer);


// Pass the store into the app container
render(<App store={store} />, document.querySelector('#root'));