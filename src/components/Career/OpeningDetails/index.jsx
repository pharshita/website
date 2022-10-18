import React, { useEffect, useState } from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import '../OpeningDetails/style.css'
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../config';

const OpeningsDetails = () => {
  const [fullName, setFullname] = React.useState(null)
  const [Email, setEmail] = React.useState(null)
  const [Contact, setContact] = React.useState(null)
  const [Files, setFiles] = React.useState(null)
  const [IsLoading, setIsLoading] = React.useState(false)
  const [Openings, setOpenings] = useState(null)
  const styles = {
    Navbar: {
      background: 'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
      height: 'auto'
    }
  }

  const id = localStorage.getItem('opening_id')
  console.log(id)


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



  useEffect(() => {
    axios.get(`${BASE_URL}/newapp/listjob/${id}/`)
      .then((res) => {
        setOpenings([res.data])
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  function handleSubmit() {
    setIsLoading(true)
    const form1 = new FormData()
    form1.append('full_name', fullName)
    form1.append('email', Email)
    form1.append('phone_number', Contact)
    form1.append('resume', Files)

    console.log(Files)

    axios.post(`${BASE_URL}/newapp/jobs/`, form1).then((res) => {
      console.log(res)
      setIsLoading(false)
      setTimeout(() => {
        window.location.href = "/Career";
      }, 1000);
      Toast.fire({
        icon: 'success',
        title: 'Submitted Successfully'
      })
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }


  function ValidateEmail() {
    var lblError = document.getElementById("lblError");
    lblError.innerHTML= "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!expr.test(Email)) {
        lblError.innerHTML = "Invalid email please use @gmail.com.";
    }
}

function Validatephone() {
    var phoneError = document.getElementById("phoneError");
    if(Contact.length!=10){
        phoneError.innerHTML = "Please put 10 digit mobile number";
    }
    else{
      phoneError.innerHTML = "";

  }
}
  return (
    <>
      <div className="navbr" style={styles.Navbar}>
        <Navbar />
      </div>

      <div className="container">
        <div className="row p-5">
          {
            Openings === null ?
              <>
                <div className="col-lg-8 col-md-8 col-sm-12 p-5">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 p-5 mt-5 JobCard text-start">
                  <Skeleton />

                  <Skeleton />
                  <Skeleton />
                  <hr style={{ color: 'white' }} />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              </>
              :
              Openings.map((job, key) => {
                // debugger
                return (
                  <>
                    <div className="col-lg-8 col-md-8 col-sm-12 job">
                      <div className="jobDescription">
                        <h4>
                          Job Description
                        </h4>
                        <p>
                          {job.job_description}
                        </p>
                      </div>
                      <div className="jobResponsiblity">
                        <h4>
                          Responsibilities
                        </h4>
                        <p>
                          {job.responsibilities}
                        </p>
                      </div>
                      <div className="perksandbenefits">
                        <h4>
                          Perks and Benefits
                        </h4>
                        <p>
                          {job.perks_and_benefits}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 p-5 mt-5 JobCard text-start">
                      <div className="jobHeading">
                        <h3>
                          {job.job_name}
                        </h3>
                      </div>

                      <div className="exper">
                        <h5>
                          <WorkIcon />  Experience
                        </h5>
                        <p>
                          {job.experience_requride} Yrs
                        </p>
                      </div>
                      <div className="expert">
                        <h5>
                          <LocationOnIcon />  Location
                        </h5>
                        <p>
                          Indore
                        </p>
                      </div>
                      <hr style={{ color: 'white' }} />
                      <div className="skills mt-4 mb-3">
                        <h5>
                          Skills Required
                        </h5>
                        <p>
                          {job.skills_required}
                        </p>
                      </div>
                      <div className="skills  mb-5">
                        <h5>
                          Total Openings
                        </h5>
                        <p>
                          {job.number_of_openings}
                        </p>
                      </div>

                      <button type="button" className="applyButton btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: '100%' }}>
                        Apply Now
                      </button>

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content" style={{ width: "85%", borderRadius: "20px", padding: "15px" }}>
                            <div className="col-lg-12 col-md-12 col-sm-12" >
                           
                              <div className="sendResume  p-4" style={{ width: '100%' }}>
                                <div className="fullName">
                                  <input type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullname(e.target.value)} className='form-control mt-3 mb-3' name="" id="" />
                                </div>
                                <div className="email">
                                  <input type="email" placeholder='xyz@sample.com' value={Email} onKeyUp={ValidateEmail} onChange={(e) => setEmail(e.target.value)} className='form-control mt-3 mb-3' name="" id="" />
                                  <p style={{color:"red" }} id="lblError"></p>
                                </div>
                                <div className="mobile">
                                  <input type="number" className='form-control mt-3 mb-3' onKeyUp={Validatephone} value={Contact} onChange={(e) => setContact(e.target.value)} placeholder='Mobile Number' name="" id="" />
                                  <p style={{color:"red" }} id="phoneError"></p>
                                </div>
                                <div className="chooseFile">
                                  <input type="file" className='form-control mt-3 mb-3' onChange={(e) => { setFiles(e.target.files[0]) }} name="" id="" />
                                </div>
                                <div className="btn btn-outline-dark mt-3" style={{ width: '100%' }} onClick={handleSubmit}>
                                  {IsLoading === true ? 'Submitting...' : 'Submit'}
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
          }
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}
export default OpeningsDetails
