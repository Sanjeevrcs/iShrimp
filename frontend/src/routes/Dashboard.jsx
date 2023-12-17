// import React from 'react'
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
        <h1>Welcome to Dashboard route </h1>
        <Link to="/trips">Trips</Link>
        <Link to="/bots">Bots</Link>
    </div>


  )
}