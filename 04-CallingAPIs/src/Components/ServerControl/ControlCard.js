import React from 'react'
import axios from 'axios'
// axios.defaults.headers.common['Content-Type'] =
//   'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
// axios.defaults.headers.common['Access-Control-Allow-Methods'] =
//   'GET, POST, OPTIONS'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] =
//   'Content-Type, Authorization'

axios.defaults.headers.common['Authorization'] = 'Basic YWRtaW46ZWltaHRzajQ='

export default function ControlCard({ serverData }) {
  const url = serverData.controlURL

  const handleUpdate = () => {
    axios.post(url + '/docker/update').then((res) => {
      if (res.status === 200) {
        alert('ทำการ update สำเร็จ')
      } else {
        alert('ไม่สามารถทำการ update ได้')
      }
    })
  }

  const handleRestart = () => {
    axios.post(url + '/docker/restart').then((res) => {
      if (res.status === 200) {
        alert('ทำการ Restart สำเร็จ')
      } else {
        alert('ไม่สามารถทำการ Restart ได้')
      }
    })
  }

  const handleStop = () => {
    axios.post(url + '/docker/stop').then((res) => {
      if (res.status === 200) {
        alert('ทำการปิดสำเร็จ')
      } else {
        alert('ไม่สามารถทำการปิดได้')
      }
    })
  }
  return (
    <div className="border m-1 rounded-md p-2">
      <div className="flex">
        <div className="w-1/2">
          <h2>โปรแกรม {serverData.name} </h2>
          <h3>URL {serverData.url}</h3>
          <h3>Control URL {serverData.controlURL}</h3>
        </div>
        <div className="w-1/2 flex">
          <button
            className="rounded-md bg-green-500"
            onClick={() => handleUpdate()}
          >
            {' '}
            Update{' '}
          </button>
          <button
            className="rounded-md bg-yellow-500"
            onClick={() => handleRestart()}
          >
            {' '}
            Restart{' '}
          </button>
          <button
            className="rounded-md bg-red-500"
            onClick={() => handleStop()}
          >
            {' '}
            Stop{' '}
          </button>
        </div>
      </div>
    </div>
  )
}
