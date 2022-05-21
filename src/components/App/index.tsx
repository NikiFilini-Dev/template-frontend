import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.module.css'

function App() {
  return (
    <BrowserRouter>
      <div styleName="app">
        <div styleName="content">
          <Routes>
            <Route index element={<div>Hello, world!</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
