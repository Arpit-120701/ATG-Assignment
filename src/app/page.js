import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/main/Navbar'
import MainContainer from './Components/main/MainContainer'
import Footer from './Components/Footer'



const page = () => {
  return (
    <div>
    <>
    <Navbar></Navbar>
    <MainContainer></MainContainer>
   <Footer></Footer>
    </>
    </div>
  )
}

export default page
