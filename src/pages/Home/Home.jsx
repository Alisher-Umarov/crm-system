import React from 'react'
import rasm from '../../assets/img/over2.png'
import rasm2 from '../../assets/img/over3.png'
import './Home.css'

const Home = () => {
  return (
    <div className='home_wrapper container'>
      <div className='table1'>
        <img className='rasm1' src={rasm} alt="img" />
      </div>
      <div className='table2'>
        <img className='rasm2' src={rasm2} alt="img" />
      </div>
    </div>
  )
}

export default Home