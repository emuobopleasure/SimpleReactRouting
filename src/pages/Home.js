import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
    <h1>My HomePage</h1>
    <p>go to <Link to='/products'>all products </Link></p>
    </div>
  )
}

export default HomePage