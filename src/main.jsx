import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import Context from './components/Context';
import AddEvent from './components/AddEvent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App/>
    </Context>
  </React.StrictMode>,
)
