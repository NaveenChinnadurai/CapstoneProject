import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import BookingPage from './pages/bookingPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import PageUnderWork from './pages/pageUnderWork'
import ConfirmPage from './components/bookingPage/confirmPage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/bookingpage' element={<BookingPage />}/>
        <Route path='/confirmPage' element={<ConfirmPage/>} />
        <Route path='/*' element={<PageUnderWork />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
