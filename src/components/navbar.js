import React from 'react'

export default function navbar() {
    return (
        <div>
            <ul className="nav bg-dark py-1 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link text-warning active" aria-current="page" href="#"><strong>Home</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">Login</a>
                </li>
            </ul>
        </div>
    )
}
