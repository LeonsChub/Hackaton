import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './componets/Header'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path='/' element={<h1>Splash</h1>}/>
          <Route path='/calendar' element={<h1>Calendar</h1>}/>
        </Routes>

        
      </BrowserRouter>
    </div>
  )
}

export default App
