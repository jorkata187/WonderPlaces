import './App.css'

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
    <>
        <Navigation/>

        <Home />

        <PlaceDetails />

        <Explore />

        <ShareLocation />

        <Login />

        <About />

        <Register />
    </>
  )
}

export default App
