import React, { useEffect } from 'react'
import "./style.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import logo from "../../Assets/Logo/logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank');
  };
  

  const navigate = useNavigate()
  return (
    <>
      <section className='foot'>
          <div className='footer'>
            <div className='container'>
              <div className="row footer_containt" >
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <div className='headerlogo'>
                    <img src={logo} style={{marginTop:10}} width={80} height={80}></img>
                   <h3>Bridgefix <br />
                   Technology
                   </h3>
                  </div>
                  <div>
                    <div className='about_footer'>BridegeFix is a global software development company helping companies to achieve their goals with world-class industry-specific software solutions.</div>
                    <div className="icons">
                     <GoogleIcon onClick={() => openInNewTab('https://bridgefix.co/')}/>
                     <LinkedInIcon onClick={()=>openInNewTab('https://in.linkedin.com/company/bridgefix')}/>
                     <FacebookOutlinedIcon onClick={() => openInNewTab('https://www.facebook.com/bridgefixtechnology')}/> 
                     <TwitterIcon onClick={()=>openInNewTab('https://twitter.com/BridgefixTech')}/>
                     <InstagramIcon onClick={() => openInNewTab('https://www.instagram.com/bridgefix/')}/>
                    </div>
                   
                  </div>

                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <h3>Our Services</h3>
                  <div className='our_services'>
                    <p><KeyboardArrowRightOutlinedIcon/>&nbsp;&nbsp;&nbsp;Software Development</p>
                    <p ><KeyboardArrowRightOutlinedIcon/>&nbsp;&nbsp;&nbsp;Website Development</p>
                    <p ><KeyboardArrowRightOutlinedIcon/>&nbsp;&nbsp;&nbsp;Digital Marketing</p>
                    <p ><KeyboardArrowRightOutlinedIcon/>&nbsp;&nbsp;&nbsp;Website Designr</p>
                   <Link to="/Services"> <p onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More Services...</p></Link>
                  </div>

                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                <h3>Important Link</h3>
                  <div className='our_services' >
                  <Link to="/Home"> <p  onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardArrowRightOutlinedIcon />&nbsp;&nbsp;&nbsp;Home</p> </Link>
                  <Link to="/Services">  <p onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardArrowRightOutlinedIcon />&nbsp;&nbsp;&nbsp;Services</p></Link>
                  <Link to="/aboutus">  <p onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardArrowRightOutlinedIcon />&nbsp;&nbsp;&nbsp;Aboutus</p></Link>
                  <Link to="/Career">  <p onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardArrowRightOutlinedIcon />&nbsp;&nbsp;&nbsp;Career</p></Link>
                  <Link to="/Contact-us">  <p onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><KeyboardArrowRightOutlinedIcon />&nbsp;&nbsp;&nbsp;Contact</p></Link>
                  </div>

                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                <h3>Contact Info</h3>
                  <div className='contact_info'>
                    <p style={{display:"flex"}}><LocationOnOutlinedIcon className='icon'/> 388,1st Floor, Pu4, Scheme Number 54,In front of Retina Spaciality Hospital, Vijay Nagar, Indore, Madhya Pradesh, 452010</p>
                    <p style={{display:"flex"}}><WifiCalling3OutlinedIcon className='icon'/> <a href="tel:+919425960946">+91 9425960946</a></p>
                    <p style={{display:"flex"}}><DraftsOutlinedIcon className='icon'/><a href="mailto:hr@bridgefix.co"> hr@bridgefix.co </a></p>
                    
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bottom-area'>
            <div className='container'>
              <div className='row' style={{padding:"22px 0px"}}>
                <div className='col-sm-12 text-center'>
                  <div>© 2022 BridgeFix. All Rights Reserved </div>

                </div>
              </div>
            </div>
          </div>


      </section>
    </>
  )
}
export default Footer
