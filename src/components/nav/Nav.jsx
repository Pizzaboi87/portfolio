import './nav.css'
import { useState } from 'react'

const Nav = () => {

    const checkMobile = Boolean(window.innerWidth < 1000)

    const [isActive, setActive] = useState('false')
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
        <i className={checkMobile ? 'fa-solid fa-bars menubar' : null} onClick={handleToggle}></i>
        <nav className={isActive ? null : 'mobilemenu'}>
            <ul>
                <li onClick={checkMobile ? handleToggle : null}><a href='#home'>Home</a></li>
                <li onClick={checkMobile ? handleToggle : null}><a href='#about'>About</a></li>
                <li onClick={checkMobile ? handleToggle : null}><a href='#portfolio'>Portfolio</a></li>
                <li onClick={checkMobile ? handleToggle : null}><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;