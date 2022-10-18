import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Verify_code() {
  return (
    <section style={{justifyContent:"center",display:"flex"}}>
    <div className='col-sm-12 col-lg-7 forgot1' >
       
        <div className="text-center pt-2 pb-2">We need your email to verify before resetting your password.</div>
           
            <div class="col-xs-4 col-xs-offset-4">
            <div className='col-xs-4 col-xs-offset-4 mt-3'>
                    <TextField id="outlined-basic" label=" Verify_code" variant="outlined"
                       autoComplete="off"
                    />
                </div>
               
            </div>
           <Link to="/change_password"><button className='btn_1'>Verify </button></Link> 

          

    </div>
 
</section>
  )
}
