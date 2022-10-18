import React from 'react'
import { Link } from 'react-router-dom'
import resume4 from "../images/resume4.png"
import resume9 from "../images/resume9.png"
import resume3 from "../images/resume3.png"
import resume11 from "../images/resume11.png"
import resume5 from "../images/resume5.png"
import resume6 from "../images/resume6.png"
import resume2 from "../images/resume2.png"
import resume1 from "../images/resume1.png"



export default function Img_of_resume() {
  return (
    <div>
          <div className='row' style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
            <div className='col-sm-3'>
            <Link to="/resume4"><img src={resume4}/></Link> 


            </div>
            <div className='col-sm-3'>
           <Link to="/resume9"><img src={resume9}/></Link> 

            </div>
            <div className='col-sm-3'>
            <Link to="/resume3"><img src={resume3}/></Link> 


            </div>
            <div className='col-sm-3'>
             <Link to="/resume11"><img src={resume11}/></Link> 
            </div>
           </div>
           <div className='row' style={{display:"flex",justifyContent:"left",marginTop:"80px"}}>
            <div className='col-sm-3'>
            <Link to="/resume5"><img src={resume5}/></Link> 

            </div>
            <div className='col-sm-3'>
            <Link to="/resume6"><img src={resume6}/></Link> 


            </div>
            <div className='col-sm-3'>
            <Link to="/resume2"><img src={resume2}/></Link> 


            </div>
            <div className='col-sm-3'>
            <Link to="/resume1"><img src={resume1}/></Link> 


            </div>

           
           </div>
    </div>
  )
}
