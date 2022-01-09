import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const searchReducer = (state=false, action) => {
  switch(action.type) {
    case 'start':
      return true
    case 'done':
      return false
    default:
      break
  }
  return state
}

const moviesReducer = (state=[], action) => {
  let _state = [...state]

  switch(action.type) {
    case 'setMovies':
      if (action.payload.item) {
        _state = action.payload.item
      }      
      break
    default:
      break
  }
  return _state
}

const store = createStore(combineReducers({searchReducer, moviesReducer}))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
