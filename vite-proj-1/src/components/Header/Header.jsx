import React from 'react'
import {Link,NavLink} from 'react-router-dom';

function Header() {
  return (
    <header className='bg-gray-800 text-white p-4'>
        <nav className='flex justify-between'>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <NavLink to="/" className={({isActive}) => (isActive? "text-orange-500" :"text-gray-700")}>
                    Home
                </NavLink>
                <NavLink to="/" className={({isActive}) => (isActive? "text-orange-500" :"text-gray-700")}>
                    About
                </NavLink>
                <NavLink to="/" className={({isActive}) => (isActive? "text-orange-500" :"text-gray-700")}>
                    Contact
                </NavLink>
            </div>
        </nav>

    </header>
  )
}

export default Header
