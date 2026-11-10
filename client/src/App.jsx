import { Routes, Route } from 'react-router'
import { ToastContainer } from 'react-toastify'

import './App.css'

import UserProvider from './providers/UserProvider'

import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import Explore from './components/explore/Explore'
import PlaceDetails from './components/place-details/PlaceDetails'
import ShareLocation from './components/share-location/ShareLocation'

function App() {

  return (
    <UserProvider>

      <ScrollToTop />
      <ToastContainer />

      <div id="box">
        <Navigation />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/place/:id" element={<PlaceDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/share" element={<ShareLocation />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  )
}

export default App
