import React, { useState, useRef, useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { BASE_URL } from '../config';

export default function Resume7() {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const componentRef = useRef();
    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)
           
        let ngrok="https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        let url="http://127.0.0.1:8000"
        // http://127.0.0.1:8000/api/resume/1/
        axios.get(` ${BASE_URL}/api/resume/${id}/`, config).then((res) => {
          // axios.get(` ${ngrok}/api/resume/${id}/`, config).then((res) => {

            setdata([res.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    let getdata = JSON.parse(window.localStorage.getItem('data'))
    let getdata2 = JSON.parse(window.localStorage.getItem('data2'))
    let getdata3 = JSON.parse(window.localStorage.getItem('data3'))
    let getdata4 = JSON.parse(window.localStorage.getItem('data4'))
    let getdata5 = JSON.parse(window.localStorage.getItem('data5'))
    // let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    // let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    // let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    // let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    // let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    // let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    // let getdata12 = JSON.parse(window.localStorage.getItem('data12'))
    return (
        <>
            <div>

                <div className='container resume4' ref={componentRef} style={{ width: "70%", border: "1px solid black", padding: "20px" }}>
                    <div className='row'>
                        {
                            data1.map((items) => {
                                return (
                                    <>
                                        <div className='col-sm-12' style={{ textTransform: "capitalize" }}>
                                            <h1 style={{ color: "#00a4bf" }}>{items.first_name} {items.last_name}</h1>
                                            <h4>{items.profession}</h4>
                                            <div style={{ backgroundColor: "#d9d9d9", height: "3px" }}></div>
                                            <h5 style={{ padding: "15px 0px", color: "#594d4d", textAlign: "end" }}>{items.city}, {items.country} {items.pin_code}</h5>
                                            <div >
                                                <h3 style={{ color: "#00a4bf" }}><DescriptionIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Professional Summary</h3>
                                                <p>{items.profile_summary}</p>
                                            </div>
                                            <div className='d-flex mt-5'>
                                                <h3 style={{ color: "#00a4bf" }}><EngineeringIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Skills</h3>
                                                <ul style={{ marginLeft: "80px" }}>

                                                    <div >

                                                        <ul>
                                                        {
                                                        items.skills === undefined ? "" : 
                                                        items.skills.map((skl)=>{
                                                            return(

                                                                <li>{skl}</li>
                                                            )
                                                        })
                                                    }
                                                         

                                                        </ul>
                                                    </div>


                                                </ul>
                                            </div>
                                            {
                                                items.Experience[0]===undefined?"":
                                            <div>
                                                <h3 style={{ color: "#00a4bf", marginTop: "50px" }}><WorkIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Work Experience</h3>
                                                <div >
                                                    {
                                                        items.Experience[0]===undefined?"":
                                                    <div className='d-flex pt-4'>
                                                        <div style={{ width: "30%" }}>
                                                            <p style={{ fontWeight: "bold" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>
                                                        </div>
                                                        <div style={{ marginLeft: "70px", width: "70%" }}>
                                                            <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{items.Experience[0].job_title}</h5>

                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                            <h5>{items.Experience[0].project_name}</h5>

                                                            {/* <p>{items.Experience[0].job_discription}</p> */}
                                                            {
                                                                getdata === null ?  <p>{items.Experience[0].job_discription}</p> :
                                                                getdata.map((item, key) => {
                                                                    return (
                                                                        <p> • {item.slice(1, item.length - 1)}</p>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                               items.Experience[0].project_urls === '' ? "" :
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                            }
                                                        </div>
                                                    </div>
                                                    }

                                                    {
                                                        items.Experience[1] === undefined ? "" :
                                                            <div className='d-flex pt-4'>
                                                                <div style={{ width: "30%" }}>
                                                                    <p style={{ fontWeight: "bold" }}>{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>
                                                                </div>
                                                                <div style={{ marginLeft: "70px", width: "70%" }}>
                                                                    <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{items.Experience[1].job_title}</h5>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
                                                                    <h5>{items.Experience[1].project_name}</h5>

                                                                    {/* <p>{items.Experience[1].job_discription}</p> */}
                                                                    {
                                                                        getdata2 === null ?  <p>{items.Experience[1].job_discription}</p> :
                                                                        getdata2.map((item1, key) => {
                                                                            return (
                                                                                <p> • {item1.slice(1, item1.length - 1)}</p>
                                                                            )
                                                                        })
                                                                    }
                                                                   {
                                                               items.Experience[1].project_urls === '' ? "" :
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[1].project_urls} target="_blank"> {items.Experience[1].project_urls} </a></p>
                                                            }
                                                                </div>
                                                            </div>
                                                    }
                                                    {
                                                        items.Experience[2] === undefined ? "" :
                                                            <div className='d-flex pt-4'>
                                                                <div style={{ width: "30%" }}>
                                                                    <p style={{ fontWeight: "bold" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</p>
                                                                </div>
                                                                <div style={{ marginLeft: "70px", width: "70%" }}>
                                                                    <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{items.Experience[2].job_title}</h5>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                    <h5>{items.Experience[2].project_name}</h5>

                                                                    {/* <p>{items.Experience[2].job_discription}</p> */}
                                                                    {
                                                                        getdata3 === null ?  <p>{items.Experience[2].job_discription}</p> :
                                                                        getdata3.map((item2, key) => {
                                                                            return (
                                                                                <p> • {item2.slice(1, item2.length - 1)}</p>
                                                                            )
                                                                        })
                                                                    }
                                                                   {
                                                               items.Experience[2].project_urls === '' ? "" :
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>
                                                            }
                                                                </div>
                                                            </div>
                                                    }
                                                    {
                                                        items.Experience[3] === undefined ? "" :
                                                            <div className='d-flex pt-4'>
                                                                <div style={{ width: "30%" }}>
                                                                    <p style={{ fontWeight: "bold" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>
                                                                </div>
                                                                <div style={{ marginLeft: "70px", width: "70%" }}>
                                                                    <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{items.Experience[3].job_title}</h5>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                    <h5>{items.Experience[3].project_name}</h5>

                                                                    {/* <p>{items.Experience[3].job_discription}</p> */}

                                                                    {
                                                                        getdata4 === null ? <p>{items.Experience[3].job_discription}</p> :
                                                                            getdata4.map((item3, key) => {
                                                                                return (
                                                                                    <p> • {item3.slice(1, item3.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                   {
                                                               items.Experience[3].project_urls === '' ? "" :
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                            }
                                                                </div>
                                                            </div>
                                                    }
                                                    {
                                                        items.Experience[4] === undefined ? "" :
                                                            <div className='d-flex pt-4'>
                                                                <div style={{ width: "30%" }}>
                                                                    <p style={{ fontWeight: "bold" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</p>
                                                                </div>
                                                                <div style={{ marginLeft: "70px", width: "70%" }}>
                                                                    <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{items.Experience[4].job_title}</h5>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                    <h5>{items.Experience[4].project_name}</h5>

                                                                    {/* <p>{items.Experience[4].job_discription}</p> */}

                                                                    {
                                                                        getdata5 === null ? <p>{items.Experience[4].job_discription}</p> :
                                                                            getdata5.map((item4, key) => {
                                                                                return (
                                                                                    <p> • {item4.slice(1, item4.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    {
                                                               items.Experience[4].project_urls === '' ? "" :
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>
                                                            }
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                            }
                                            <div>
                                                <h3 style={{ color: "#00a4bf", marginTop: "50px" }}><SchoolIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Education</h3>
                                                <div >

                                                     {
                                                  items.Education === undefined ? "" :
                                                  items.Education.map((edu)=>{
                                                    return(

                                                        <div className='d-flex pt-4'>
                                                            <div style={{ width: "30%" }}>
                                                                <p style={{ fontWeight: "bold" }}>{edu.start_date} to {edu.end_date}</p>
                                                            </div>
                                                            <div style={{ marginLeft: "70px", width: "70%" }}>
                                                                <h5 style={{ fontWeight: "bold" }}>{edu.degree}</h5>
                                                                <p >{edu.field_of_study}</p>
                                                                <h5>{edu.school_name},{edu.school_location}</h5>
                                                            </div>
                                                        </div>
                                                    )
                                                  })
                                                     }
                                                   
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
                    <ReactToPrint
                        trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button>}
                        content={() => componentRef.current}
                    />
                </div>
            </div>
        </>
    )
}
