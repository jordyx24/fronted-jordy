import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className='nav-wrapper'>
            <NavLink to="/thoughs-box">This is part of you</NavLink>
        </div>
    )
}