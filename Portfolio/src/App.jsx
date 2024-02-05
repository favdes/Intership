import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import DownloadResume from './pages/DownloadResume'
import MessageSent from './pages/MessageSent'

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <NavBar/> */}
    <Routes>
      <Route element ={ <NavBar/>  }>
      <Route  path='/' element ={ <Home/>}/>
      </Route>
      <Route  path='/projects' element ={ <Projects/>}/>
      <Route  path='/Contacts' element ={ <Contacts/>}/>
      <Route  path='/DownloadResume' element ={ <DownloadResume/>}/>
      <Route  path='/MessageSent' element ={ <MessageSent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App