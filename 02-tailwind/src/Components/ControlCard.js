import React from "react";

export default function ControlCard({ title }) {
  function startProgram() {
    window.alert("Program " + title + " is Start");
  }

  const restartProgram = (subtitle) => {
    window.alert("Program " + title + "is Restart" + subtitle);
  };

  const showData = () => {
    return (
      <div>
        <li>Hello</li>
        <li>World</li>
      </div>
    );
  };

  return (
    <div className='m-4 rounded-md border p-4'>
      <h4>{title}</h4>
      <div className='flex gap-2'>
        <button
          className='p-2 rounded-sm bg-green-500 text-white cursor-pointer hover:bg-green-700'
          onClick={() => startProgram()}
        >
          Start
        </button>
        <button
          className='p-2 rounded-sm bg-gray-500 text-white hover:bg-gray-700'
          onClick={() => restartProgram("world")}
        >
          Restart
        </button>
        <button className='p-2 rounded-sm bg-red-500 text-white hover:bg-red-700'>
          Down
        </button>
      </div>
      {showData()}
    </div>
  );
}
