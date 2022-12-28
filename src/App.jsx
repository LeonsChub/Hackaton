import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import CalendarPage from './components/CalendarPage'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/calendar' element={<CalendarPage/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
