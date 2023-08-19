import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import BookingPage from './pages/bookingPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/bookingpage' element={<BookingPage />} />
        <Route path='/' element={<HomePage/>}/>1
      </Routes>
      <Footer />
    </div>
  )
}

export default App
