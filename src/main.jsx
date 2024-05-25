import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from './context/StateProvider.jsx'
import { initialState } from './context/initalState.jsx'
import reducer from './context/reducer.jsx'

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
