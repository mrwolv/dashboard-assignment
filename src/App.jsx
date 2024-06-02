
import React from 'react'
import Navbar from './components/Navbar'
import { BackgroundGradientAnimation } from './components/ui/BackgroundAnimation'

import ChartData from './components/ChartData'


export default function App() {

 


  return (

    <BackgroundGradientAnimation>
      <main className="absolute mt-10 z-50 inset-0 w-full flex items-center justify-between   text-white font-bold px-4  ">
        <div className='w-full h-screen text-white'>
          <div className='grid grid-flow-row md:grid-flow-col'>
            <div className='col-span-2'>

              <Navbar />
            </div>

            <ChartData/>
          </div>
        </div>
      </main>
    </BackgroundGradientAnimation>
  )
}
