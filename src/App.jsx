import './App.css'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'

function App() {

  return (
    <>
        <Navigation/>

        <Home />

        <Login />

        <About />

        <Register />
    </>
  )
}

export default App
