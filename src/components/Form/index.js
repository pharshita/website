import React from 'react'
import "./style.css"
import form_img from "../../Assets/PNG/form_img.png"
import axios from 'axios';
import { BASE_URL } from '../../config';
import Skeleton from 'react-loading-skeleton';
import Swal from 'sweetalert2';

export default function Form() {
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
            title: 'Submitted Successfully',
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
    return (
        <div className='container'>
            <div className="row form">
                    <div className='col-lg-6 col-md-6 col-sm-12 form_containt' style={{display:'flex',flexDirection:'column'}}>

                        <h2 >How May We Help You!</h2>
                        <p>If you have any query regarding our service or If you just simply want to say hi then get in touch and I will get back to as soon as possible.</p>
                        <div className="row fillform">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text"  size="40" className=" form-control" aria-required="true" aria-invalid="false" placeholder="Full Name*" onChange={(e) => setFullname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="E-mail Address*" onChange={(e) => setEmail(e.target.value)} />
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
                                    <button type="submit" onClick={handleSubmit} className="button-gradient" >
                                    {IsLoading === true ? 'Submitting...' : 'Submit Now'}
                                    </button> 
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 formimg'>
                        <img src={form_img} width={540} height={407} />
                    </div>
            </div>
        </div>
    )
}
