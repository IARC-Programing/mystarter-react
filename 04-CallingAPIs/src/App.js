import logo from './logo.svg'
import './index.css'
import React, { useState, useEffect } from 'react'

import Topbar from './Components/Topbar'
import Footer from './Components/Footer'
import ControlCard from './Components/ServerControl/ControlCard'

const serverInfomation = [
  {
    name: 'ระบบทดสอบ Logistic',
    url: 'https://test-logistic.eappsoft.net',
    controlURL: 'https://.....ngrok.io/manage'
  },
  {
    name: 'บริษัท สินเอเชี่ยน อิมพอร์ต เอ็กซ์พอร์ต จำกัด',
    url: 'https://sinasian.eappsoft.net',
    controlURL: 'https://.....ngrok.io/manage'
  },
  {
    name: 'บริษัท ได้ดีเอ็กเพรส จำกัด',
    url: 'https://daideeexpress.eappsoft.net',
    controlURL: 'https://.....ngrok.io/manage'
  }
]

function App () {
  return (
    <div>
      <Topbar />

      <div className='container min-h-screen'>
        {serverInfomation.map((eachInformation, index) => (
          <ControlCard key={index} serverData={eachInformation} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App
