import React from 'react'
import rr from '../../assets/img/Earning.png'
import './Learners.css'

const Learners = () => {
  return (
    <div className='learn_wrapper'>
      <div className='learn_top'>
        <img src={rr} alt="img" />
      </div>

      <div className='table_top'>
        <div className='table_top_titles'>
          <h1 className='table_top_titles__title'>Hamma O’quvchilar</h1>
          <p className='table_top_titles_text'>Faol o’quvchilar</p>
        </div>


        <div className='input-wrapper'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input className='input' type="text" placeholder='Qidiruv' />

          <select id="dates">
                <option value="yiller">Faol</option>
                <option value="oylar">Faol</option>
            </select>
        </div>

            
      </div>

      <div style={{ textAlign: 'left' }} className='table'>
        <table>
          <thead>
            <tr>
              <th>F.I.O</th>
              <th>Yo’nalish</th>
              <th>Telefon nomer</th>
              <th>To’lov</th>
              <th>Guruh</th>
              <th>Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>

            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>

            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>

            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>

            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 555-0118</td>
              <td>697 000</td>
              <td>Frontend 010</td>
              <td><button>Active</button></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Learners