
import Login from './components/Login/Login'
import { ContentPage } from './pages/ContentPage'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ContentPage' element={<ContentPage/>}/>
      </Routes>
      </BrowserRouter>
  )
}


export default App