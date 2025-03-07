



import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function RandomLayouts() {
  return (
    <div>
        <header>
            <nav>
                <Navbar/>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>


    </div>
  )
}

export default RandomLayouts