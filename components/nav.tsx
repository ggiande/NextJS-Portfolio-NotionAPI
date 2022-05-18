import React from 'react'
import Link from "next/link"

export default function nav() {
  return (
    <div>
      <header className="header_container">
      {/* <!-- Headers can come in different sizes, all the way from h1 to h6 --> */}
      <Link href="/">
        <a className="nav_links">
          <h1>Portfolio</h1>
        </a>
      </Link>
      </header>

      <nav className="nav_container">
        <Link href="/blog" passHref>
          <a className="nav_links">My Timeline</a>
        </Link>

        <Link href="/about" passHref>
          <a className="nav_links">About</a>
        </Link>

        <Link href="/projects" passHref>
          <a className="nav_links">Projects</a>
        </Link>

        <Link href="https://github.com/ggiande" passHref>
          <a className="nav_links">Github</a>
        </Link>
      </nav>
    </div>
  )
}