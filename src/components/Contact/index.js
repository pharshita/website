import React from "react"
import Footer from "../Footer"
import SimpleMap, { MapContainer } from "../GoogleMap"
import GMap from "../Map/GMap"
import Navbar from "../Navbar"
import './style.css'
import axios from "axios"
import { BASE_URL } from "../../config"
import Swal from 'sweetalert2';


const Contact = () => {

    const [fullName, setFullname] = React.useState(null)
    const [Email, setEmail] = React.useState(null)
    const [Contact, setContact] = React.useState(null)
    const [msg, setmsg] = React.useState(null)
    const [IsLoading, setIsLoading] = React.useState(false)

    function handleSubmit() {
        setIsLoading(true)
        const form2 = new FormData()
        form2.append('name', fullName)
        form2.append('email', Email)
        form2.append('phone_number', Contact)
        form2.append('message', msg)
    
    
        axios.post(`${BASE_URL}/newapp/contect/`, form2).then((res) => {
          console.log(res)
          setIsLoading(false)
          Toast.fire({
            icon: 'success',
            title: 'Submitted Successfully'
          })
        }).catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
      }
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const styles = {
        Navbar:{
          background:'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
          height:'auto'
        }
    
      }
  return (
    <>
    <div className="Contact entry-banner" style={styles.Navbar}>
         <Navbar />
         
         <div className="heading">
         <h1 className='text-light justify-content-center d-flex align-items-center'>Our Contact</h1>
         </div>
    </div>
    <div className="container">
        <div className="row contactRow">
            <div className="col-sm-12 col-lg-4 col-md-4 p-2">
                <div className="contact_div mt-5">
                    <div className="img">
                        <img src={require('../../Assets/PNG/email.png')} alt="" height="40%" srcset="" />
                    </div>
                    <div className="data">
                        <h4>
                            Email & Phone
                        </h4>
                        <p>
                            hr@bridgefix.co
                        </p>
                        <p>
                        +91 9425960946
                        </p>
                    </div>
                </div>
                <hr />
                <div className="contact_div mt-5">
                    <div className="img">
                        <img src={require('../../Assets/PNG/placeholder.png')} alt="" height="40%" srcset="" />
                    </div>
                    <div className="data">
                        <h4>
                        Our Location
                        </h4>
                        <p>
                        388, 1st Floor, Pu4, Scheme Number 54,
                        </p>
                        <p>
                        In front of Retina Spaciality Hospital, 
                        </p>
                        <p>
                        Vijay Nagar, Indore, Madhya Pradesh, 452010
                        </p>
                    </div>
                </div>
                <hr />
                <div className="contact_div mt-5 mb-5">
                    <div className="img">
                        <img src={require('../../Assets/PNG/globe.png')} alt="" height="40%" srcset="" />
                    </div>
                    <div className="data">
                        <h4>
                            Get in Touch
                        </h4>
                        <p>
                           <a className="a" href="http://www.bridgefix.co"> www.bridgefix.co </a>
                        </p>
                       
                    </div>
                </div>

            </div>
            <div className="col-lg-8 col-lg-8 col-sm-12 form_containt" style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <div className="row fillform" >
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text"  size="40" className=" form-control" aria-required="true" aria-invalid="false" placeholder="Full Name*" onChange={(e) => setFullname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="E-mail Address*" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                <div className="form-group">
                                    <input type="number" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Phone Number*" onChange={(e) => setContact(e.target.value)}/>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <textarea name="textarea-652" cols="40" rows="5" className="form-control" aria-invalid="false" placeholder="Message" onChange={(e) => setmsg(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className=" text-left">
                                    <button type="submit" onClick={handleSubmit} className="button-gradient">{IsLoading === true ? 'Submitting...' : 'Submit Now'}</button>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
   {/* <SimpleMap /> */}
   <div className="mt-5 mb-5" >
   <GMap />

   </div>
   <Footer />
    </>
  )
}
export default Contact
