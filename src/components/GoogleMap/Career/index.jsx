import React, { useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax'
import Footer from '../Footer'
import Navbar from '../Navbar'
import SearchBar from 'react-js-search';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css'
import axios from 'axios';
import OpeningsData from '../Redux/Actions/openingsActions.js';
import { useDispatch } from 'react-redux/es/exports';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { CircularProgress, Input, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




const Career = () => {

    const [Openings, setOpenings] = React.useState(null)
    const[fullName ,setFullname] = React.useState(null)
    const[Email ,setEmail] = React.useState(null)
    const[Contact ,setContact] = React.useState(null)
    const[Files ,setFiles] = React.useState(null)
    const[IsLoading , setIsLoading] = React.useState(false)
    const[KeyWordText , setKeywordText] = React.useState([])
    const[KeyWord , setKeyword] = React.useState([])

    const Dispatch = useDispatch()

   const valueRef = useRef([])

   const navigate = useNavigate()

  
       

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
        axios.get('http://3.144.76.85/interview/jobs/')
            .then((res) => {
                setOpenings(res.data)
            }).catch((err) => {
                console.log(err)
            })
            // setKeywordText(valueRef.current.value)
        OpeningsData()
        // Dispatch(OpeningsData())
        if(
        KeyWordText === 'react js'
        || KeyWordText === 'react JS' 
        || KeyWordText === 'react' 
        || KeyWordText === 'reactjs' 
        || KeyWordText === 'frontend' 
        || KeyWordText === 'front end developer' 
        || KeyWordText === 'frontend developer'
        || KeyWordText === 'html css'
        || KeyWordText === 'html css javascript'
        || KeyWordText === 'javascript'
        || KeyWordText === 'html'
        || KeyWordText === 'css'
        || KeyWordText === 'react js for freshers'
        || KeyWordText === 'reactjs for freshers'
        || KeyWordText === 'web development'
        || KeyWordText === 'web developer'
        || KeyWordText === 'web designing'
        || KeyWordText === 'web designer'){
            setKeyword('Frontend Developer')
           }else if(
           KeyWordText === 'python'
        || KeyWordText === 'Python' 
        || KeyWordText === 'python developer' 
        || KeyWordText === 'python django' 
        || KeyWordText === 'django' 
        || KeyWordText === 'python django rest framework' 
        || KeyWordText === 'rest framework'
        || KeyWordText === 'django rest framework'
        || KeyWordText === 'python for fresher'
        || KeyWordText === 'node js'
        || KeyWordText === 'node.js'
        || KeyWordText === 'nodejs'
        || KeyWordText === 'django python'
        || KeyWordText === 'backend developer'
        || KeyWordText === 'back end developer'
        || KeyWordText === 'fullstack developer'
        || KeyWordText === 'full stack developer'
        || KeyWordText === 'python django developer'
        || KeyWordText === 'jango developer'
        || KeyWordText === 'jango python'
        || KeyWordText === 'jango'
        ){
            setKeyword('Backend Developer')
        }
    },[KeyWordText,OpeningsData])

    function handleSubmit() {
        setIsLoading(true)
        const form1 = new FormData()
        form1.append('email',Email)
        form1.append('phone_number' , Contact)
        form1.append('resume' , Files)

        console.log(Files)

        axios.post('http://3.144.76.85/interview/resume/', form1).then((res) => {
            console.log(res)
            setIsLoading(false)
              Toast.fire({
                icon: 'success',
                title: 'Submitted Successfully'
              })
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }

    const  handleKeyword = ()=>{
        setKeywordText(valueRef.current.value)
    }

    const handleDetails = (id) =>{
        console.log(id)
        localStorage.setItem('opening_id',id)
        navigate('/Opening_Details')
        
    }
    

    console.log(KeyWord)
    return (
        <>
            <Parallax bgImage={require('../../Assets/Images/careerParallax.jpg')} strength="250" >
                <div className="container-fluid p-0" style={{ background: 'linear-gradient(60deg, rgb(82 63 255 / 52%) 0%, rgb(117 14 213 / 62%) 100%)' }}>

                    <div className="Contact entry-banner" >
                        <Navbar />
                    </div>

                    <div className="container-fluid p-0">
                        <div className="heading">
                            <h1 className='text-light justify-content-center d-flex align-items-center'>Work with <br />BridgeFix Technology </h1>
                        </div>
                        <div className="row careerCards">
                            <div className="col-lg-3 col-md-3 col-sm-12 careerCard">
                                <div className="img mb-4">
                                    <img src={require('../../Assets/Images/PNG/support.png')} width="30%" alt="" srcset="" />
                                </div>
                                <h4>
                                    PROVIDING ALL THE SERVICES THAT YOU NEED
                                </h4>
                                <p>
                                    You can rely on our team of designers and developers to produce the product you are looking for across a range of platforms and devices.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 careerCard">
                                <div className="img mb-4">
                                    <img src={require('../../Assets/Images/PNG/united.png')} width="30%" alt="" srcset="" />
                                </div>
                                <h4>
                                    TRUST OUR
                                    TEAM OF PROFESSIONALS
                                </h4>
                                <p>
                                    BridgeFix keeps its words
                                    and will complete your
                                    project according to your specifications. We can help if you feel trapped by your current developer.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 careerCard">
                                <div className="img mb-4">
                                    <img src={require('../../Assets/Images/PNG/scope.png')} width="30%" alt="" srcset="" />
                                </div>
                                <h4>
                                    PROVIDING ALL THE SERVICES THAT YOU NEED
                                </h4>
                                <p>
                                    Our words are our actions. The BridgeFix team will work with you to define your scope of work and ensure it is fulfilled, making changes only as needed and according to your approval.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Parallax>
            <div className="container-fluid" style={{ background: 'white' }}>
                <div className="container">

                    <div className="col-sm-12 careerMid p-5 text-center">
                        <h3>
                            Discover the path, where passion follows
                        </h3>
                        <div className='hr line-at-bot top-0' style={{ background: 'black', height: '1px', width: '20%' }}>

                        </div>
                        <p>
                            Our team is growing fast. We come to work with energy and enthusiasm, we know how meaningful our work is to our clients, their customers and mobile industry. We’re working tirelessly to make the next century better than the last.
                        </p>
                        <a href="#openingsContainer">
                            <div className="btn btn-outline-dark mt-3">
                                Current Openings
                            </div>
                        </a>
                    </div>

                    <div className="openings mb-5"   >
                        {/* <SearchBar
                            // onSearchTextChange={ (term,hits) => {this.onSearchChange(term,hits)}}
                            // onSearchButtonClick={this.onSearchClick}
                            placeHolderText={"Search here..."}
                            
                        // data={this.state.dataObjects}
                        /> */}
            <div className="col-sm-5" style={{margin:'0 auto',display:'flex'}}>

                        <TextField label="Search by Skills" 
                        color='warning' id="SearchSkills"  
                        variant='filled' fullWidth="true"
                        placeholder='Search by Skills'
                        inputRef={valueRef} 
                         />

                         <button className='btn btn-warning' onClick={handleKeyword} style={{marginLeft:10}}>Search</button>
            </div>


                    </div>

                    <div className="openingsContainer" id='openingsContainer'>
                        <div className="row">
                        {
                            Openings === null ?
                                <div className="openingBody" style={{display:"none"}}>
                                    <div className="col-lg-8 col-md-8 col-sm-12 p-5">
                                        <div className="col-12">
                                            <div className="OpeningData">
                                                <h4>
                                                    <Skeleton />
                                                </h4>
                                                <Skeleton />
                                                <p>
                                                    <Skeleton />
                                                </p>
                                            </div>
                                            <div className="ApplyBtn">
                                                <div className='Exp'>
                                                    <p>
                                                        <Skeleton />
                                                    </p>
                                                </div>
                                                <Skeleton />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                : Openings.map((job) => {
                                    return (
                                        <div className="openingBody" key={job.id}>
                                            <div className="col-lg-8 col-md-8 col-sm-12 p-4">
                                                <div className="col-12">
                                                    <div className="OpeningData">
                                                        <h4 style={{textTransform:"uppercase"}}>
                                                            {job.job_name === null || job.job_name === '' ?"" : job.job_name}
                                                        </h4>
                                                        {job.job_description === null || job.job_description === '' ? "" :
                                                            <div className="hrOpenings"></div>
                                                        }
                                                        <p>
                                                            {job.job_description === null ? "" : job.job_description}
                                                        </p>
                                                    </div>

                                                    {job.job_description === null || job.job_description === '' ? "": <div className="ApplyBtn">
                                                        <div className='Exp'>
                                                            <p>
                                                                {job.experience_requride === null ? "" : `Experience : ${job.experience_requride} Yrs`}
                                                            </p>
                                                        </div>
                                                        <div className="btn btn-outline-dark applybtn" onClick={()=>handleDetails(job.id)}>
                                                            More Details
                                                        </div>
                                                    </div>}

                                                </div>

                                            </div>

                                        </div>
                                    )
                                })
                        }
                        </div>
                       


                    </div>

                        <div className="row ResumeRow p-5 mb-5 mt-5" style={{background: `url(${require('../../Assets/PNG/whiteline.png')})`,backgroundRepeat:'no-repeat',backgroundSize:'300px',backgroundColor:'#ffaf3e', borderRadius: '20px', boxShadow: '0px 0px 15px #918b84b5' }}>


                            <div className="col-lg-8 col-md-8 col-sm-12 " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="ResumeMain">
                                    <h1 className='text-dark' style={{ fontWeight: 700 }}>
                                        We Have Opportunities For You
                                    </h1>
                                    <p className='share'>
                                        Share Your CV With BridgeFix
                                    </p>
                                    <p className='team1'>
                                        Our Team Will Get Back To You Soon
                                    </p>
                                    <p>
                                        <EmailIcon  className='team' /> <a href="mailto:hr@bridgefix.co"> hr@bridgefix.co </a>
                                    </p>
                                    <p>
                                    <CallIcon  className='team' /> <a href="tel:+919425960946">9425960946</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="sendResume  p-4" style={{ width: '100%', boxShadow: '0px 0px 15px #00000030', borderRadius: '20px', background: 'white' }}>
                                    <div className="fullName">
                                        <input type="text" placeholder='Full Name' value={fullName} onChange={(e)=>setFullname(e.target.value)} className='form-control mt-3 mb-3' name="" id="" />
                                    </div>
                                    <div className="email">
                                        <input type="email" placeholder='xyz@sample.com' value={Email} onChange={(e)=>setEmail(e.target.value)} className='form-control mt-3 mb-3' name="" id="" />
                                    </div>
                                    <div className="mobile">
                                        <input type="tel" className='form-control mt-3 mb-3' value={Contact} onChange={(e)=>setContact(e.target.value)} placeholder='Mobile Number' name="" id="" />
                                    </div>
                                    <div className="chooseFile">
                                        <input type="file" className='form-control mt-3 mb-3' onChange={(e)=>{setFiles(e.target.files[0])}} name="" id="" />
                                    </div>
                                    <div className="btn btn-outline-dark" style={{width:'100%'}} onClick={handleSubmit}>
                                     { IsLoading === true ?  'Submitting...' :  'Submit'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            <Footer />
        </>
    )
}

export default Career
