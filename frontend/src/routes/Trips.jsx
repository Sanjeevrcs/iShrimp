// import React from 'react'

import { Link } from "react-router-dom";


export default function Trips() {
  return (
    <div>
        <h1>Welcome to Trips route </h1>
        <Link to="/bots">Bots</Link>
        <Link to="/">Dashboard</Link>
    </div>


  )
}