import React, { useState } from 'react'
import { IoCloudyNight } from 'react-icons/io5'
import { BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Navbar({ onClick, text }) {
  const [change, setChange] = useState(false)
  const getIcon = (item) => {
    onClick(item)
    setChange(!change)
  }

  return (
    <div className='navbar' >
      <Link to={'/'}>
        <h1>Where in the World ?</h1>
      </Link>

      <div className="nav_icon">
        {change ? <BsSunFill onClick={getIcon} size={30} /> :
          <IoCloudyNight onClick={getIcon} size={30} />}
        <h2>{text} Mode</h2>
      </div>

    </div>
  )
}
