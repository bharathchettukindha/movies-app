import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo.webp'
import Login from './Login'
import Banner from './Banner'
import Movies from './Movies'

const Home = ({ addToWatchlist }) => {
  return (
    <>
    <div className=''>
        <div className='flex flex-col justify-center h-screen w-full'>
            <Banner/>
    </div>
        </div>
       <Movies addToWatchlist={addToWatchlist} />

    </>
  )
}

export default Home