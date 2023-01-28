import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to={"/"} className="main-text">OneSchool</Link>
        <div className='links'>
            <a>Home</a>
            <a>Courses</a>
            <a>Programs</a>
            <a>Teachers</a>
        </div>
        <Link to={"/add"} className="addbtn">ADD PAGE</Link>
    </div>
  )
}