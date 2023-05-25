import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Overview from '../components/Overview/Overview'
import TopDeals from '../components/TopDeals/TopDeals'
import ToContact from '../components/ToContact/ToContact'
import Reviews from '../components/Reviews/Reviews'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Overview/>
        <TopDeals/>
        <ToContact/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home