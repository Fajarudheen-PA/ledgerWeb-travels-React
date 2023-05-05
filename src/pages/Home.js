import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Overview from '../components/Overview/Overview'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Overview/>
    </div>
  )
}

export default Home