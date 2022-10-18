import React from 'react'
import './style.css'

 const ServiceCards = (props) => {
  return (

    <>
                    
                    <div className=" col-lg-4 col-md-4 col-12 cards mb-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card_containt" style={{width:"100%"}}>
                          <div className="carddetails" >
                            <div style={{textAlign:"center"}}>
                          <img src={props.logo} width={50}></img>
                            </div>
                            <h2 className='mt-3 mb-3'>{props.title}</h2>
                            <p className='mt-3 mb-3 content'>{props.data} </p>
                          </div>
                            {/* <div>
                            <p style={{color:"#5149f8"}}>Discover Now &nbsp;&nbsp;<i class="fa fa-long-arrow-right"></i></p>
                            </div> */}
                        </div>
                    </div>
                   
                
                
                
    </>
  )
}
export default ServiceCards
