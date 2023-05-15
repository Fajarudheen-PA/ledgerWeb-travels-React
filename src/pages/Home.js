import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Overview from '../components/Overview/Overview'
import TopDeals from '../components/TopDeals/TopDeals'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Overview/>
        <TopDeals/>
    </div>
  )
}

export default Home