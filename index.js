import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { PostContainerProvider } from './reducer/reducer'

ReactDOM.render(
  <PostContainerProvider>
    <Router>
      <App />
    </Router>
  </PostContainerProvider>
  , document.getElementById("root")
)