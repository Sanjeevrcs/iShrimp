// import React from 'react'
import { Link } from "react-router-dom";

export default function Bots() {
  return (
    <div>
        <h1>Welcome to Bots route </h1>
        <Link to="/trips">Trips</Link>
        <Link to="/">Dashboard</Link>
    </div>


  )
}