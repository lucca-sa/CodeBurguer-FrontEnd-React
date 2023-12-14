import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './pages/Login'
import Register from './pages/Register'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    {/* <Login /> */}
    <Register />
    <GlobalStyles />
  </>
)
