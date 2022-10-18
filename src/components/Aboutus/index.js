import React from 'react'
import "./style.css"
import about2 from "../../Assets/PNG/about2.png"
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Parallax, Background } from 'react-parallax';
import parallax1 from '../../Assets/PNG/parallax1.png'
import "../Other_box/style.css"

function Aboutus() {
    const styles = {
        Navbar: {
            background: 'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
            height: 'auto'

        }
    }
    return (
        <div>
            <div className='container-fluid' id='AboutUsId' style={styles.Navbar}>
                <Navbar />
                </div>
                <div>
                <div className="heading" style={{display:"flex",alignItems:"center",color:"#4535a4",height:"232px"}}>
                <h1 className='justify-content-center d-flex align-items-center'>About Us</h1>
                </div>
                
            <div className='box'>
                <Parallax bgImage={parallax1} strength={500}>
                    <div className='container-fluid'>
                        <div className='row box_containt'>
                            <p style={{color:"white",fontSize:"17px"}}>Established in the year 2021, Bridgefix Technology is a software technology, consulting and development company. Our team of experienced, expertise and professionals is capable of providing high end quality solutions to our clients with the right blend of technology, domain knowledge and effective methodology. We have innovated ourselves in providing end-to-end solutions and services in various segments of industry like advertisement, education, healthcare, media and entertainment, retail, real estate, sports and fitness and more. Bridgefix Technology routinely grasps new technologies, human learning, enhancements, and training tools to provide enhanced product to our customers. Our only goal is to make the clients and customers satisfied with our valuable products and services. People loved us and connected with us happily. Clients from around the world invested in with trust. The key compelling benefits that our customers enjoy outsourcing to us are vast technical expertise, competitive pricing, much faster time-to-market, state-of-the-art project management practices, superior quality management, optimized processes for uncertainty management and most importantly the distinguished comfort level.
                            </p>
                        </div>
                    </div>
                </Parallax>
            </div>
                <div className="row aboutus" style={{ justifyContent: 'space-evenly' }}>
                    <div className='col-lg-5 col-md-6 col-sm-12 aboutimg' >

                        <img src={about2} className="aboutImage" width="100%" height="100%" data-aos="fade-right" data-aos-duration="3000"></img>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 aboutcontaint' >
                        <h2 className='pb-3' data-aos="fade-right" data-aos-duration="3000">Who We Are!</h2>
                        <p data-aos="fade-left" data-aos-duration="3000">BridegeFix Technologies is a digital engineering company focused on delivering expert services and products to help enterprises achieve their transformation goals.</p>
                        <div className='setimg' data-aos="fade-left" data-aos-duration="3000">
                            <p><i className="fa fa-check icon"></i>&nbsp;&nbsp;We believe in delivering remarkable experiences to both our customers as well as team members.</p>
                            <p><i className="fa fa-check icon"></i>&nbsp;&nbsp;We have done great number of projects successfully and providing enormous services to our clients.</p>
                            <p><i className="fa fa-check icon"></i>&nbsp;&nbsp; We recognize for our excellent quality service, best teamwork, informative environment and much more facilities.</p>
                            <p><i className="fa fa-check icon"></i>&nbsp;&nbsp; We connect with our customers and employees like friends to develop deeper connection and see things with greater clarity. </p>
                        </div>
                        <div className='setimg'></div>


                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default Aboutus
