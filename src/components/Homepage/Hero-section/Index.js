import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import '../Hero-section/style.css'


const Herosection = () => {

    const styles ={
        containerFluid:{
            backgroundImage:`url(${require('../../../Assets/Images/PNG/left.png')})`,
            backgroundRepeat:'no-repeat',
            backgroundPositionX:'-180px',
            backgroundPositionY:'-20px',
            paddingTop:40,
            paddingLeft:10,
            paddingRight:10,
            paddingBottom:40
        },
        container:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'auto',
        },
        heading:{
            letterSpacing:8,
            color:'white'
        },
        secondHeading:{
            fontWeight:700,
            fontSize:'55px',
            letterSpacing:2,
            lineHeight:1.3,
            marginTop:20,
            marginBottom:20,
            color:'white'
        },
        Para:{
            letterSpacing:1,
            fontWeight:500,
            lineHeight:1.4,
            fontSize:'17px',
            marginRight:'100px',
            color:'white'
        },
        rightButtonDiv: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        },
        leftTextDiv:{
            height:50,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        },
        contentMain:{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column'
        }
    }

    const navigate = useNavigate()

    return (
        <div className="container-fluid" style={styles.containerFluid}>

        <div className="container" style={styles.container}>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 text-light" style={styles.contentMain}>
                <div className="content">
                    <h5 style={styles.heading}>
                        IT Design & Consulting
                    </h5>
                    <h1 style={styles.secondHeading}>
                        Our Intelligent Technology Solution and Services
                    </h1>
                    <h4 style={styles.Para}>
                        BridegeFix is a global software development company helping companies to achieve their goals with world-class industry-specific software solutions.
                    </h4>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-12">
                    <div className="row" style={{justifyContent:"left"}}>
                        <div className="col-lg-3 col-md-3 col-sm-6 ">
                            <div className="btn btn-outline-light mt-4 servicetext" style={styles.rightButtonDiv} onClick={()=>navigate('/Services')}>
                                Our Services
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                       <Link to="/aboutus"><div className="btn btn-outline-light mt-4 servicetext" style={styles.rightButtonDiv} onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                            About Us
                        </div></Link> 
                    </div>
                       
                    </div>
                </div>
                
                </div>
                <div className="col-4 p-0 m-0 heroImage">
                    <img src={require('../../../Assets/Images/PNG/illustration1.png')} className="floating-img" height="600px"   alt="" srcset="" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Herosection
