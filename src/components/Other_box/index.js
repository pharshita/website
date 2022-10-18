import React from 'react'
import { Parallax , Background } from 'react-parallax';
import parallax1 from '../../Assets/PNG/parallax1.png'
import "./style.css"
import discovery from "../../Assets/PNG/discover.png"
import Design from "../../Assets/PNG/web-design (1).png"
import develop from "../../Assets/PNG/develop.png"
import letter from "../../Assets/PNG/letter.png"


function Other_box(props) {
  return (
    
    <div className='box'>
      <Parallax bgImage={parallax1}  strength={500}>
        <div className='container-fluid'>
        <div className='row box_containt'>
         <div className='col-sm-12 col-lg-5 col-md-5 text-center' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <h4>TOGETHER, WE COMBINE TECHNICAL CRAFT AND DESIGN.</h4>
         </div>
         <div className='col-sm-12 col-lg-7 col-md-7 setbutton'>
          <div className='row'>

         <div className="col-sm-12 col-md-3 col-lg-3 border-rht">
         <div className="pentagon">
					<img src={discovery} width={40} height={40}></img>
								</div>
								<h5>Discover</h5>
							</div>
              <div className="col-sm-12 col-md-3 col-lg-3 border-rht">
         <div className="pentagon">
					<img src={Design} width={40} height={40}></img>
								</div>
								<h5>Design</h5>
							</div>
              <div className="col-sm-12 col-md-3 col-lg-3 border-rht">
         <div className="pentagon">
					<img src={develop} width={40} height={40}></img>
								</div>
								<h5>Develop</h5>
							</div>
              <div className="col-sm-12 col-md-3 col-lg-3 border-rht">
         <div className="pentagon">
					<img src={letter} width={40} height={40}></img>
								</div>
								<h5>Deliver</h5>
							</div>
          </div>
           {/* <button className='pera'>Join Us</button> */}
         </div>
        </div>
        </div>
        </Parallax>
    </div>
 
  )
}
export default Other_box;