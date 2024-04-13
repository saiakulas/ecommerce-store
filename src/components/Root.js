import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from './Nav'
import store from '../store/store'
import { Provider } from 'react-redux'
import Footer from './Footer'
import AboutUs from './Aboutus'
function Root() {
  return (
    <div>
      <Provider store={store}>
       <Navbars/>
       <main>
        <Outlet/>
    </main>
    <AboutUs/>
    <Footer/>
    </Provider>
    </div>
   
  )
}

export default Root