import React from 'react'
import '../features/posts/style.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
          <div className="navLinks">
            <Link to="/add">Add</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}