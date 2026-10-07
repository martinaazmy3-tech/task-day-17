import React from 'react'

export default function Navbar() {

    return (
        <>
            <nav className="navbar bg-primary">

                <div className="container-fluid">

                    <ul className="navbar-nav flex-row">

                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">
                                Navbar
                            </a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>

            </nav>
        </>
    )
}