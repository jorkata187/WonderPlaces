import { Routes, Route, BrowserRouter } from 'react-router'

import './App.css'

import UserProvider from './providers/UserProvider'

import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import ShareLocation from './components/share-location/ShareLocation'
import Explore from './components/explore/Explore'
import PlaceDetails from './components/place-details/PlaceDetails'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <ScrollToTop />
        <div id="box">
          <Navigation />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/place/:id" element={<PlaceDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/share" element={<ShareLocation />} />
            </Routes>
          </main>
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
