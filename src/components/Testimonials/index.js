import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css'

const Testimonials = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <div className="container-fluid" style={{background:'#F9FBFE'}}>
                <div className="container pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center testimonial">
                        <div className="mainHeading">
                            <h1 style={{ fontWeight: 700 }}> Clients Testimonials </h1>
                        </div>
                        {/* <div class="heading-icon mt-4 mb-4">
                            <svg class="dash-left" width="100" height="20">
                                <g fill="none" stroke-width="4">
                                    <path class="dashed1" stroke-dasharray="5, 5" d="M5 20 l215 0"></path>
                                    <path class="dashed2" stroke="blue" stroke-dasharray="5, 5" d="M5 20 l215 0"></path>
                                </g>
                            </svg>

                            <div class="rtin-icon">
                                <img src={require('../../Assets/PNG/startup.png')} style={{paddingLeft:20,paddingRight:20}} height="40px" alt="" srcset="" />
                            </div>

                            <svg class="dash-right" width="100" height="20">
                                <g fill="none" stroke-width="4">
                                    <path class="dashed1" stroke-dasharray="5, 5" d="M5 20 l215 0"></path>
                                    <path class="dashed2" stroke="blue" stroke-dasharray="5, 5" d="M5 20 l215 0"></path>
                                </g>
                            </svg>

                        </div> */}
                         <div className="line-at-bot top-0"></div>
                        {/* <div className="sub_heading_section">
                            <p className='sub-text'>  Lorem Ipsum is simply dummy text of the printing and typesetting has been <br /> the industrys standard dummy text ever since </p>
                        </div> */}
                    </div>
                </div>
                <div className="container">
                    
                </div>
                <Carousel className='react-multi-carousel-list ' responsive={responsive}>
                <div className="tesimonials_card" >
                    <div className="card-head" style={{position:'absolute'}}>
                        <img src={require('../../Assets/Images/PNG/svg1.png')} width="100%" alt="" srcset="" />
                    </div>
                    <div className="quot" >
                        <img src={require('../../Assets/PNG/quote.png')} height="100px" alt="" srcset="" />
                    </div>
                    <div className="para" >
                        <p>We thank BridgeFix for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</p>
                    </div>
                    <div className="bottom_main">
                        <div className="avtaar" style={{marginRight:20}}>
                            <img src={require('../../Assets/PNG/man.png')} height="70px"  alt="" srcset="" />
                        </div>
                        <div className="userData mt-1">
                            <h4 style={{fontWeight:700}}>
                                Shubhash Ragi
                            </h4>
                            <p style={{fontWeight:500,color:'#646464'}}>
                                20-09-2021
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tesimonials_card" > 
                    <div className="card-head" style={{position:'absolute'}}>
                        <img src={require('../../Assets/Images/PNG/svg1.png')} width="100%" alt="" srcset="" />
                    </div>
                    <div className="quot" >
                        <img src={require('../../Assets/PNG/quote.png')} height="100px" alt="" srcset="" />
                    </div>
                    <div className="para" >
                        <p>Under tight deadlines and with high expectations, BridgeFix was a pleasure to partner with, on a high profile NGO campaign website. Professional, conscientious and thoroughly competent - I wouldn't hesitate in recommending them to other agencies.</p>
                    </div>
                    <div className="bottom_main">
                        <div className="avtaar" style={{marginRight:20}}>
                            <img src={require('../../Assets/PNG/man.png')} height="70px"  alt="" srcset="" />
                        </div>
                        <div className="userData mt-1">
                            <h4 style={{fontWeight:700}}>
                                Amrinder Gill
                            </h4>
                            <p style={{fontWeight:500,color:'#646464'}}>
                                12-02-2021
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tesimonials_card" >
                    <div className="card-head" style={{position:'absolute'}}>
                        <img src={require('../../Assets/Images/PNG/svg1.png')} width="100%" alt="" srcset="" />
                    </div>
                    <div className="quot" >
                        <img src={require('../../Assets/PNG/quote.png')} height="100px" alt="" srcset="" />
                    </div>
                    <div className="para" >
                        <p>We have worked with BridgeFix on various projects, and find that they provide quality service and expertise for our programming needs. It is rare to find a service provider with such professional consistency - they are a valued service provider to our business!</p>
                    </div>
                    <div className="bottom_main" >
                        <div className="avtaar" style={{marginRight:20}}>
                            <img src={require('../../Assets/PNG/man.png')} height="70px"  alt="" srcset="" />
                        </div>
                        <div className="userData mt-1">
                            <h4 style={{fontWeight:700}}>
                                Andre Louise
                            </h4>
                            <p style={{fontWeight:500,color:'#646464'}}>
                               23-08-2021
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tesimonials_card" >
                    <div className="card-head" style={{position:'absolute'}}>
                        <img src={require('../../Assets/Images/PNG/svg1.png')} width="100%" alt="" srcset="" />
                    </div>
                    <div className="quot" >
                        <img src={require('../../Assets/PNG/quote.png')} height="100px" alt="" srcset="" />
                    </div>
                    <div className="para" >
                        <p>I just checked the app. WELL DONE guys - you made my day!!! Looks really good!</p>
                    </div>
                    <div className="bottom_main" >
                        <div className="avtaar" style={{marginRight:20}}>
                            <img src={require('../../Assets/PNG/man.png')} height="70px"  alt="" srcset="" />
                        </div>
                        <div className="userData mt-1">
                            <h4 style={{fontWeight:700}}>
                                Alix George
                            </h4>
                            <p style={{fontWeight:500,color:'#646464'}}>
                               03-05-2021
                            </p>
                        </div>
                    </div>
                </div>
            
            </Carousel>
            </div>

            
        </>
    )
}
export default Testimonials
