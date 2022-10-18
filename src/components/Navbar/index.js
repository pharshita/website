import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../Navbar/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';


const Navbar = (props) => {

    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const openInNewTab = url => {
        window.open(url, '_blank');
    };

    const styles = {
        logo: {
            height: 60,
            width: 60,
            marginRight: 20
        },
        nav_list_ul: {
            display: 'flex',
            listStyleType: 'none'
        },
        nav_list_li: {
            paddingTop: 40,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: 600
        },
        nav_list_li1: {
            paddingTop: 30,
            paddingBottom: 10,
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: 25,
            fontWeight: 600
        },
        logoMain: {
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            // justifyContent: 'flex-end'
        },
        rightButton: {
            paddingTop: 0,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%'
        },
        rightButtonDiv: {
            height: 50,
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
            marginTop: '-10px'
        },
        rightButtonDiv1: {
            height: 50,
            width: '100%',
        },
        midDiv: {
            display: 'flex',
            justifyContent: 'end'
        }



    }

    return (
        <>
            <div className="container-fluid navbarMain">
                <div className="container">
                    <div className="row text-light">
                        <div className="col-lg-2 col-md-2 col-sm-2" style={styles.logoMain} onClick={() => navigate('/Home')}>
                            <div>
                                <img src={require('../../Assets/Logo/logo.png')} className="logo" alt="Loading..." style={styles.logo} />
                            </div>
                            <div className='text-logo'>
                                <h2 className='mt-2' style={{ cursor: 'pointer' }}>
                                    BridgeFix
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12" style={styles.midDiv}>
                            <div className="nav-list">
                                <ul style={{ display: `flex`, listStyleType: 'none' }}>
                                    <Link to="/Home"><li style={styles.nav_list_li}>Home </li></Link>
                                    <Link to="/Services"><li style={styles.nav_list_li}>Services</li></Link>
                                    {/*<Link to="/Gallery"><li style={styles.nav_list_li}>Gallery </li></Link>*/}
                                    <Link to="/Career"><li style={styles.nav_list_li}>Careers</li></Link>
                                    <Link to="/aboutus"><li style={styles.nav_list_li}>About Us </li></Link>
                                    <Link to="/Contact-us"><li style={styles.nav_list_li}>Contact</li></Link>
                                    <li style={styles.nav_list_li1}>|</li>
                                    <li style={styles.nav_list_li}><GoogleIcon onClick={() => openInNewTab('https://bridgefix.co/')} /></li>
                                    <li style={styles.nav_list_li}><LinkedInIcon onClick={() => openInNewTab('https://in.linkedin.com/company/bridgefix')} /></li>
                                    <li style={styles.nav_list_li}><FacebookOutlinedIcon onClick={() => openInNewTab('https://www.facebook.com/bridgefixtechnology')} /> </li>
                                    <li style={styles.nav_list_li}><TwitterIcon onClick={() => openInNewTab('https://twitter.com/BridgefixTech')} /></li>
                                    <li style={styles.nav_list_li}><InstagramIcon onClick={() => openInNewTab('https://www.instagram.com/bridgefix/')} /></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className='btn btn-outline-light'>
                <div className="col-lg-2 col-md-2 col-sm-12 quote mt-3" style={{display:`flex`}}>
                    <div className="buttonMain" style={styles.rightButton}>
                        <div className="" style={styles.rightButtonDiv}>
                        Get Quote
                        <Link to="/signin"> <div className='btn btn-warning'>Login</div></Link>
                        </div>
                    </div>
                </div>
                            </div> */}
                    </div>
                </div>
            </div>

            <div className="container-fluid navbarMainMob">
                <div className="container">
                    <div className="row text-light">
                        <div className="col-lg-2 col-md-2 col-sm-2" style={styles.logoMain}>
                            <div>
                                <img src={require('../../Assets/Logo/logo.png')} onClick={() => navigate('/Home')} className="logo" alt="Loading..." style={styles.logo} />
                            </div>
                            <div className='text-logo'>
                                <h2 className='mt-2' onClick={() => navigate('/Home')}>
                                    BridgeFix
                                </h2>
                            </div>
                            <div className="menu" style={{ position: 'absolute', right: 15, top: 30 }}>
                                {visible === false ? <MenuIcon className='menuicon' onClick={() => setVisible(true)} /> : <CloseIcon className='menuicon' onClick={() => setVisible(false)} />}
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12" style={styles.midDiv}>
                            <div className="nav-list">
                                <ul style={{ display: `${visible === false ? 'none' : 'flex'}`, listStyleType: 'none' }}>
                                    <li style={styles.nav_list_li}><Link to="/Home"><KeyboardArrowRightIcon /> Home </Link></li>
                                    <li style={styles.nav_list_li}><Link to="/Services"><KeyboardArrowRightIcon /> Services</Link></li>
                                    <li style={styles.nav_list_li}><Link to="/Career"><KeyboardArrowRightIcon /> Careers</Link></li>
                                    <li style={styles.nav_list_li}><Link to="/aboutus"><KeyboardArrowRightIcon /> About Us</Link></li>
                                    <li style={styles.nav_list_li}><Link to="/Contact-us"><KeyboardArrowRightIcon /> Contact</Link></li>
                                    <li style={styles.nav_list_li}><GoogleIcon onClick={() => openInNewTab('https://bridgefix.co/')} /></li>
                                    <li style={styles.nav_list_li}><LinkedInIcon onClick={() => openInNewTab('https://in.linkedin.com/company/bridgefix')} /></li>
                                    <li style={styles.nav_list_li}><FacebookOutlinedIcon onClick={() => openInNewTab('https://www.facebook.com/bridgefixtechnology')} /> </li>
                                    <li style={styles.nav_list_li}><TwitterIcon onClick={() => openInNewTab('https://twitter.com/BridgefixTech')} /></li>
                                    <li style={styles.nav_list_li}><InstagramIcon onClick={() => openInNewTab('https://www.instagram.com/bridgefix/')} /></li>
                                    </ul>
                            </div>
                        </div>
                        {/* <div  className="btn btn-outline-light mb-3" style={styles.rightButtonDiv1} onClick={() => openInNewTab('https://in.linkedin.com/company/bridgefix')}>
                <div className="col-lg-2 col-md-2 col-sm-12 quote" style={{display:`${visible === false ? 'none' : 'flex'}`}}>
                    <div className="buttonMain">
                            Get A Quote
                            <div className='btn btn-warning' style={{width:"100%",margin:"0px",padding:"10px 0px"}}>
                            Login
                                </div>
                                </div>
                                </div>
                        </div><br/> */}
                    </div>
                </div>
            </div>

        </>

    )
}
export default Navbar