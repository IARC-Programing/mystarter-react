import React from 'react'

export default function ControlCard({ title }) {
  function startProgram() {
    window.alert('Program ' + title + ' is Start')
  }

  const restartProgram = (subtitle) => {
    window.alert('Program ' + title + 'is Restart' + subtitle)
  }

  const showData = () => {
    return (
      <div>
        <li>Hello</li>
        <li>World</li>
      </div>
    )
  }

  return (
    <div>
      <h1>{title}</h1>
      <button className="bg-gray-500" onClick={() => startProgram()}>
        Start
      </button>
      <button onClick={() => restartProgram('world')}>Restart</button>
      <button>Down</button>
      {showData()}
    </div>
  )
}
