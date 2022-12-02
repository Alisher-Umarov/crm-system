import React from 'react'
import rr from '../../assets/img/Earning.png'
import line from '../../assets/img/line.png'
import lit_prof_img from '../../assets/img/lit_prof_img.png'
import './Groups.css'

const Groups = () => {
  return (
    <div className='groups_wrapper'>
      <div className='groups1_table'>
        <img src={rr} alt="img" />
      </div>

      <div className='groups1_table2'>
        <div className='groups1_table2_titles'>
          <h1 className='groups1_table2_titles_title'>Guruhlar</h1>
          <p className='groups1_table2_titles_text'>Oktabr, 27</p>
        </div>

        <div className='groups1_table2_titles2'>
          <div className='groups1_table2_titles2_title'>
            <p className='groups1_table2_titles2_title_text'>7</p>
            <p className='groups1_table2_titles2_title_text2'>Faol Guruhlar</p>
          </div>
          <div className='groups1_table2_titles2_title'>
            <p className='groups1_table2_titles2_title_text'>2</p>
            <p className='groups1_table2_titles2_title_text2'>Tugatgan guruh</p>
          </div>
          <div className='groups1_table2_titles2_title'>
            <p className='groups1_table2_titles2_title_text'>9</p>
            <p className='groups1_table2_titles2_title_text2'>Umumiy guruh</p>
          </div>
        </div>
      </div>



      <div className='table_card'>
        <div className='table_card_card'>

          <div className='card'>
            <div className='card_top'>
              <p className='card_top_title'>December 20, 2022</p>
              <span style={{ cursor: 'pointer' }}>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9521 13.8746C11.9521 14.2799 11.7545 14.6686 11.4028 14.9552C11.0511 15.2418 10.574 15.4028 10.0766 15.4028C9.57923 15.4028 9.1022 15.2418 8.75048 14.9552C8.39876 14.6686 8.20117 14.2799 8.20117 13.8746C8.20117 13.4694 8.39876 13.0807 8.75048 12.7941C9.1022 12.5075 9.57923 12.3465 10.0766 12.3465C10.574 12.3465 11.0511 12.5075 11.4028 12.7941C11.7545 13.0807 11.9521 13.4694 11.9521 13.8746ZM11.9521 8.78088C11.9521 9.18616 11.7545 9.57485 11.4028 9.86143C11.0511 10.148 10.574 10.309 10.0766 10.309C9.57923 10.309 9.1022 10.148 8.75048 9.86143C8.39876 9.57485 8.20117 9.18616 8.20117 8.78088C8.20117 8.37559 8.39876 7.98691 8.75048 7.70033C9.1022 7.41375 9.57923 7.25275 10.0766 7.25275C10.574 7.25275 11.0511 7.41375 11.4028 7.70033C11.7545 7.98691 11.9521 8.37559 11.9521 8.78088ZM11.9521 3.68712C11.9521 4.0924 11.7545 4.48109 11.4028 4.76767C11.0511 5.05425 10.574 5.21525 10.0766 5.21525C9.57923 5.21525 9.1022 5.05425 8.75048 4.76767C8.39876 4.48109 8.20117 4.0924 8.20117 3.68712C8.20117 3.28183 8.39876 2.89315 8.75048 2.60657C9.1022 2.31999 9.57923 2.15899 10.0766 2.15899C10.574 2.15899 11.0511 2.31999 11.4028 2.60657C11.7545 2.89315 11.9521 3.28183 11.9521 3.68712Z" fill="black" />
                </svg>
              </span>
            </div>
            <div className='card_titles'>
              <h2 className='card_titles_titles'>Frontent 010</h2>
              <p className='card_titles_text'>Oquvchilar soni : 6</p>
              <p className='card_titles_text2'>Ortacha oz</p>
              <img src={line} alt="img" />
            </div>
            <div className='card_bottom'>
              <p className='card_bottom_title'>Oqituvchi</p>
              <img src={lit_prof_img} alt="img" />
            </div>
          </div>

          <div className='card card2'>
            <div className='card_top'>
              <p className='card_top_title'>December 20, 2022</p>
              <span style={{ cursor: 'pointer' }}>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9521 13.8746C11.9521 14.2799 11.7545 14.6686 11.4028 14.9552C11.0511 15.2418 10.574 15.4028 10.0766 15.4028C9.57923 15.4028 9.1022 15.2418 8.75048 14.9552C8.39876 14.6686 8.20117 14.2799 8.20117 13.8746C8.20117 13.4694 8.39876 13.0807 8.75048 12.7941C9.1022 12.5075 9.57923 12.3465 10.0766 12.3465C10.574 12.3465 11.0511 12.5075 11.4028 12.7941C11.7545 13.0807 11.9521 13.4694 11.9521 13.8746ZM11.9521 8.78088C11.9521 9.18616 11.7545 9.57485 11.4028 9.86143C11.0511 10.148 10.574 10.309 10.0766 10.309C9.57923 10.309 9.1022 10.148 8.75048 9.86143C8.39876 9.57485 8.20117 9.18616 8.20117 8.78088C8.20117 8.37559 8.39876 7.98691 8.75048 7.70033C9.1022 7.41375 9.57923 7.25275 10.0766 7.25275C10.574 7.25275 11.0511 7.41375 11.4028 7.70033C11.7545 7.98691 11.9521 8.37559 11.9521 8.78088ZM11.9521 3.68712C11.9521 4.0924 11.7545 4.48109 11.4028 4.76767C11.0511 5.05425 10.574 5.21525 10.0766 5.21525C9.57923 5.21525 9.1022 5.05425 8.75048 4.76767C8.39876 4.48109 8.20117 4.0924 8.20117 3.68712C8.20117 3.28183 8.39876 2.89315 8.75048 2.60657C9.1022 2.31999 9.57923 2.15899 10.0766 2.15899C10.574 2.15899 11.0511 2.31999 11.4028 2.60657C11.7545 2.89315 11.9521 3.28183 11.9521 3.68712Z" fill="black" />
                </svg>
              </span>
            </div>
            <div className='card_titles'>
              <h2 className='card_titles_titles'>Backend 001</h2>
              <p className='card_titles_text'>Oquvchilar soni : 6</p>
              <p className='card_titles_text2'>Ortacha oz</p>
              <img src={line} alt="img" />
              <p style={{display: 'flex', justifyContent: 'flex-end'}}>70%</p>
            </div>
          </div>

          <div className='card'>
            <div className='card_top'>
              <p className='card_top_title'>December 20, 2022</p>
              <span style={{ cursor: 'pointer' }}>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9521 13.8746C11.9521 14.2799 11.7545 14.6686 11.4028 14.9552C11.0511 15.2418 10.574 15.4028 10.0766 15.4028C9.57923 15.4028 9.1022 15.2418 8.75048 14.9552C8.39876 14.6686 8.20117 14.2799 8.20117 13.8746C8.20117 13.4694 8.39876 13.0807 8.75048 12.7941C9.1022 12.5075 9.57923 12.3465 10.0766 12.3465C10.574 12.3465 11.0511 12.5075 11.4028 12.7941C11.7545 13.0807 11.9521 13.4694 11.9521 13.8746ZM11.9521 8.78088C11.9521 9.18616 11.7545 9.57485 11.4028 9.86143C11.0511 10.148 10.574 10.309 10.0766 10.309C9.57923 10.309 9.1022 10.148 8.75048 9.86143C8.39876 9.57485 8.20117 9.18616 8.20117 8.78088C8.20117 8.37559 8.39876 7.98691 8.75048 7.70033C9.1022 7.41375 9.57923 7.25275 10.0766 7.25275C10.574 7.25275 11.0511 7.41375 11.4028 7.70033C11.7545 7.98691 11.9521 8.37559 11.9521 8.78088ZM11.9521 3.68712C11.9521 4.0924 11.7545 4.48109 11.4028 4.76767C11.0511 5.05425 10.574 5.21525 10.0766 5.21525C9.57923 5.21525 9.1022 5.05425 8.75048 4.76767C8.39876 4.48109 8.20117 4.0924 8.20117 3.68712C8.20117 3.28183 8.39876 2.89315 8.75048 2.60657C9.1022 2.31999 9.57923 2.15899 10.0766 2.15899C10.574 2.15899 11.0511 2.31999 11.4028 2.60657C11.7545 2.89315 11.9521 3.28183 11.9521 3.68712Z" fill="black" />
                </svg>
              </span>
            </div>
            <div className='card_titles'>
              <h2 className='card_titles_titles'>Frontent 011</h2>
              <p className='card_titles_text'>Oquvchilar soni : 6</p>
              <p className='card_titles_text2'>Ortacha oz</p>
              <img src={line} alt="img" />
              <p style={{display: 'flex', justifyContent: 'flex-end'}}>70%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Groups