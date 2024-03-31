import React, { useState } from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom'

function Header({ setMenuClicked, setSearch }) {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='omietube__header'>
            <div className="header_section_logo">
                <button onClick={() => setMenuClicked(1)}><MenuOutlinedIcon /></button>
                <div>
                    <Link to={`./`}><img src="./Youtube_2.png" alt="" /><span>OmieTube</span></Link>
                </div>

            </div>
            <div className="header_section_search">
                <div className='header_section_search_center'>
                    <div className="searchbar">
                        <input type="text" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
                        <button onClick={() => setSearch(searchTerm)}><Link to={`./search/${searchTerm}`}><SearchIcon style={{ color: 'grey' }} /></Link></button>
                    </div>
                    <button className="voice_search">
                        <KeyboardVoiceSharpIcon style={{ color: '#000' }} />
                    </button>
                </div>


            </div>
            <div className="header_section_profile">
                <div className="profile">
                    <div>
                        <img src="profile.jpg" alt="" />
                    </div>
                    <button className='profile_icons'><NotificationsOutlinedIcon /></button>
                    <button className='profile_icons'><VideoCallOutlinedIcon /></button>
                </div>


            </div>
        </div>
    )
}

export default Header