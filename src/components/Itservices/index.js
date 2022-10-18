import React from 'react'
import penicon from "../../Assets/PNG/penicon.png"
import image from "../../Assets/PNG/image.png"
import login from "../../Assets/PNG/login.png"
import digital_marketing from "../../Assets/PNG/digital-marketing.png"
import moniter from "../../Assets/PNG/moniter.png"
import innovation from "../../Assets/PNG/innovation.png"
import iconimg from "../../Assets/PNG/iconimg.png"
import "./style.css"
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ServiceCards from '../Services/ServiceCards/Index'
import { Services } from '../Services/Index'
import django from "../../Assets/PNG/django.png"
import python from "../../Assets/PNG/python.png"
import react from "../../Assets/PNG/react_js.png"
import javascript from "../../Assets/PNG/javascript.png"
import angular from "../../Assets/PNG/angular_js.png"
import redux from "../../Assets/PNG/redux.png"
import html from "../../Assets/PNG/html5.png"
import css from "../../Assets/PNG/css3.png"
import bootstrap from "../../Assets/PNG/bootstrap.png"
import ror from "../../Assets/PNG/ror.png"
import haximg from "../../Assets/PNG/hexagon.png"
function Itservices() {
  let styles = {
    backgroundImagebox : {
      backgroundImage : `url(${haximg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "contain",
      minHeight:"146px",
      minWidth:"146px",
    }
  }
  return (
    <div className='itservice'>
      <div className='container it'>
        <div className='it_containt'>
          <h2>Technologies We Work On</h2>
           <div className="line-at-bot top-0"></div>
          <div className='pera'>
            <p >We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!</p>
          </div>
        </div>
        <div >
          <div className='container' >
            <div className=" row top-cont">
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={react} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REACT JS</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={javascript} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;JAVASCRIPT</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={python} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PYTHON</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={django} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DJANGO</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={angular} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ANGULAR</h6>
                </div>
              </div>
            </div>
            <div className="row bottom-cont">
            <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<img src={redux} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REDUX</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={html} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={css} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<img src={bootstrap} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;BOOTSTRAP</h6>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 vertical-center' style={styles.backgroundImagebox}>
                <div>
                  <div>&nbsp;&nbsp;<img src={react} width={40} height={40}></img></div>
                  <h6 style={{color:"white"}}>&nbsp;&nbsp;REACT NATIVE</h6>
                </div>
              </div>
            </div>
            {/* <div className='row abc'>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={react} width={40} height={40}></img>
                    <h5>REACT JS</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={javascript} width={40} height={40}></img>
                    <h5>JAVASCRIPT</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={python} width={40} height={40}></img>
                    <h5>PYTHON</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={django} width={40} height={40}></img>
                    <h5>DJANGO</h5>
                  </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={angular} width={40} height={40}></img>
                    <h5>ANGULAR</h5>
                  </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={redux} width={40} height={40}></img>
                    <h5>REDUX</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={html} width={40} height={40}></img>
                    <h5>HTML</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={css} width={40} height={40}></img>
                    <h5>CSS</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={bootstrap} width={40} height={40}></img>
                    <h5>BOOTSTRAP</h5>
                  </div>
              </div>
              <div className='col-sm-12 col-md-2 col-lg-2 addsvg'>
                  <div className='blocks'>
                    <img src={react} width={40} height={40}></img>
                    <h5>REACT NATIVE</h5>
                  </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Itservices;