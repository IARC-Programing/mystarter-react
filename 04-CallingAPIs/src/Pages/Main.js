import React from "react";
import { Link } from "react-router-dom";

export default function Main(params) {
  return (
    <div>
      <div className='container'>
        <Link to='/create'>
          <button className='bg-gray-500 p-4'> Create New Server</button>
        </Link>
      </div>
    </div>
  );
}
