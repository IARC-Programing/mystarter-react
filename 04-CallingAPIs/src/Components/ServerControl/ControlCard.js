import React from 'react'
import axios from 'axios'

export default function ControlCard ({ serverData }) {
  const url = serverData.url

  const handleStart = () => {
    axios.post(url + '/docker/start').then(res => {
      if (res.status === 200) {
        alert('ทำการเปิดสำเร็จ')
      }
    })
  }

  const handleRestart = () => {
    axios.post(url + '/docker/restart').then(res => {
      if (res.status === 200) {
        alert('ทำการ Restart สำเร็จ')
      }
    })
  }

  const handleStop = () => {
    axios.post(url + '/docker/stop').then(res => {
      if (res.status === 200) {
        alert('ทำการปิดสำเร็จ')
      }
    })
  }
  return (
    <div className='border m-1 rounded-md '>
      <h2>โปรแกรม {serverData.name} </h2>
      <h3>URL {serverData.url}</h3>
      <button className='rounded-md bg-green-500'> Start </button>
      <button className='rounded-md bg-yellow-500'> Restart </button>
      <button className='rounded-md bg-red-500'> Stop </button>
    </div>
  )
}
