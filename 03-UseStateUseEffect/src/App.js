import logo from './logo.svg'
import './index.css'
import React, { useState, useEffect } from 'react'

import Topbar from './Components/Topbar'
import Footer from './Components/Footer'
import axios from 'axios'

function App () {
  const url = 'https://swapi.dev/api/people/2'
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  axios.get(url).then(res => {
    console.log(res.data)
    setData(res.data)
  })

  const incrementCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <Topbar />

      <div className='container min-h-screen'>
        {/* {count}
        <br />
        <button onClick={() => incrementCount()} className='bg-green-200'>
          {' '}
          Increment Count{' '}
        </button> */}

        {data ? <>{data.name}</> : ''}
      </div>

      <Footer />
    </div>
  )
}

export default App
