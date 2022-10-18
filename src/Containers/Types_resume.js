import { display } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout';

export default function Types_resume() {
  return (
    <div>
      <div className='row '>
        <div className='row' >
        <div style={{display:"flex",justifyContent:"end"}} className="mt-4">
          <Logout/>
        </div>
        <div className='text-center col-sm-12'  >
          <h2>Types Of Resume</h2>
          <div className="dropdown">
            <button className="dropbtn">Select One</button>
            <div className="dropdown-content">
              <Link to="/basic"><a>Basic</a></Link>
              <Link to="/profession"><a>Professional</a></Link>
              <Link to="/tamplates"><a>Tamplates</a></Link>
              <Link to="/all_resume"><a>All_Resume</a></Link>
            </div>
          </div>
        </div>


        </div>


      </div>
    </div>
  )
}
