import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Overview from '../components/Overview/Overview'
import TopDeals from '../components/TopDeals/TopDeals'
import ToContact from '../components/ToContact/ToContact'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Overview/>
        <TopDeals/>
        <ToContact/>
    </div>
  )
}

export default Home