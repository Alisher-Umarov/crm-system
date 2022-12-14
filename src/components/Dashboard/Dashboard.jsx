import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import setting from '../../assets/icon/setting.png'
import dashicon1 from '../../assets/icon/dashicon11.svg'
import dashicon2 from '../../assets/icon/dashicon2.png'
import dashicon3 from '../../assets/icon/dashicon3.png'
import dashicon4 from '../../assets/icon/dashicon4.png'
import dashicon5 from '../../assets/icon/dashicon5.png'
import dashicon6 from '../../assets/icon/dashicon6.png'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className='dashboard_wrapper'>
            <div className='dashboard_wrapper_title'>
                <img src={setting} alt="icon" />
                <h1><Link to='/'>Dashboard</Link></h1>
            </div>

            <div className='dashboard_table'>
                <Link to={'/'}>
                    <div className='dashboard_table_table purple'>
                        <img src={dashicon1} alt="icon" />
                        <h3>Dashboard</h3>
                    </div>
                </Link>
                <Link to={'/guruhlar'}>
                    <div className='dashboard_table_table'>
                        <img src={dashicon2} alt="icon" />
                        <h3>Guruhlar</h3>
                    </div>
                </Link>
                <Link to={'/oquvchilar'}>
                    <div className='dashboard_table_table'>
                        <img src={dashicon3} alt="icon" />
                        <h3>O’quvchilar</h3>
                    </div>
                </Link>
                <Link to={'bugalteriya'}>
                    <div className='dashboard_table_table'>
                        <img src={dashicon4} alt="icon" />
                        <h3>Bug’alteriya</h3>
                    </div>
                </Link>
                <Link to={'sozlamalar'}>
                    <div className='dashboard_table_table'>
                        <img src={dashicon5} alt="icon" />
                        <h3>Sozlamalar</h3>
                    </div>
                </Link>
                <Link to={'yordam'}>
                    <div className='dashboard_table_table'>
                        <img src={dashicon6} alt="icon" />
                        <h3>Yordam</h3>
                    </div>
                </Link>
            </div>
            <div className='time_wrap'>
                <h1 className='time'>14 : 38 : 15</h1>
            </div>

            <div className='prof_set'>
                <img style={{ borderRadius: '50%' }} src="https://picsum.photos/42/42" alt="" />
                <div className='prof_set_titles'>
                    <p className='prof_set_titles_title'>Turdiyev Sheroz</p>
                    <p className='prof_set_titles_text'>Frontend o’qituvchi</p>
                </div>
                <span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Dashboard