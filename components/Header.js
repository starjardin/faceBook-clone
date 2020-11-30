import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h2>Feed</h2>
      </Link>
      <Link to="/addPost">
        <h2>Add post</h2>
      </Link>
      <Link to="options">
        <h2>Options</h2>
      </Link>
    </div>
  )
}
