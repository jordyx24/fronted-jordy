import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Are you ready?</h1>
            <div className="home-buttons-wrapper">
            <NavLink to="/thoughs-box">This is part of you</NavLink>
            <NavLink to="/add-to-list">Are you thinking on something?</NavLink>
            </div>
        </div>
    )
}