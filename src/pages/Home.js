import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/products')
    }
  return (
    <div>
    <h1>My HomePage</h1>
    <p>go to <Link to='/products'>all products </Link></p>
    <button onClick={navigateHandler}>navigate</button>
    </div>
  )
}

export default HomePage