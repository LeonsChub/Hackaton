import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import CalendarPage from './components/CalendarPage'
import MyEvents from './components/MyEvents'
function App() {

  return (
    <div className="App">
      <BrowserRouter className='fixed'>
        <Header/>

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/calendar' element={<CalendarPage/>}/>
          <Route path='/myEvents' element={<MyEvents/>}/>
        </Routes>

        
      </BrowserRouter>
    </div>
  )
}

export default App
