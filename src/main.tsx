import { createElement, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import 'the-new-css-reset/css/reset.css'
import 'virtual:fonts.css'

import App from './components/App'
import './index.css'
import './maidencss/index.css'

window._jsx = createElement

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
