import React from 'react'
import moon from '../../assets/icon/moon.png'
import add from '../../assets/icon/addIcon.png'
import jingle from '../../assets/icon/jingle.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-title'>
                Salom Sheroz 👋🏼,
            </div>

            <div className='header-icons'>
                <div className='header-icons_icon'>
                    <img src={moon} alt="icon" />
                    <img src={add} alt="icon" />
                    <img src={jingle} alt="icon" />
                </div>
                <span className='input-wrapper'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input className='input' type="text" placeholder='Qidiruv' />
                </span>
            </div>
        </div>
    )
}

export default Header