import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import html2pdf from 'html2pdf.js'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import FitbitIcon from '@mui/icons-material/Fitbit';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function Resume3() {
    const componentRef = useRef();
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }


    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)

        // http://127.0.0.1:8000/api/resume/1/
        axios.get(` ${BASE_URL}/api/resume/${id}/`, config).then((res) => {
            // axios.get(` ${ngrok}/api/resume/${id}/`, config).then((res) => {

            setdata([res.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // console.log(data1)

    const datadownload = () => {

        // var element = document.getElementById('invoice');
        // debugger
        // html2pdf().from(element).save();

    }
    // debugger    
    let getdata = JSON.parse(window.localStorage.getItem('data'))
    let getdata2 = JSON.parse(window.localStorage.getItem('data2'))
    let getdata3 = JSON.parse(window.localStorage.getItem('data3'))
    let getdata4 = JSON.parse(window.localStorage.getItem('data4'))
    let getdata5 = JSON.parse(window.localStorage.getItem('data5'))
    let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    let getdata12 = JSON.parse(window.localStorage.getItem('data12'))
    return (
        <div>
            <div className='container resume3' ref={componentRef} style={{ width: "70%" }}>
                {/* id='invoice' */}
                <div className='row' style={{ padding: "30px 20px" }}>
                    {
                        data1.map((items) => {
                            return (
                                <>
                                    <div>

                                        <div className='row'>

                                            <div className="col-sm-6">

                                                <div >
                                                    <h2>{items.first_name} <span>{items.last_name}</span></h2>
                                                </div>
                                                <div >
                                                    <h4 style={{ fontSize: "25px" }}>{items.profession}</h4>
                                                </div>


                                            </div>
                                            <div className='col-sm-6' >
                                                <div style={{ display: "flex", justifyContent: "end" }}>

                                                    <h4>{items.city} ,{items.country} {items.pin_code}</h4>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "end" }}>
                                                    <h4>Contact:- {items.phone_number}</h4>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "end" }}>
                                                    <h5>{items.email}</h5>
                                                </div>

                                            </div>
                                        </div>


                                        <div className='col-sm-12' style={{ height: "2px", backgroundColor: "black", marginTop: "10px" }}></div>

                                        <div>
                                            <div className='col-sm-12 mt-5'>
                                                <h4><DescriptionIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Professional Summary</h4>
                                            </div>
                                            <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#36c4b2" }}></div>
                                            <div className='col-sm-12 mt-3'><p>{items.profile_summary}</p></div>
                                        </div>
                                        {
                                            items.Experience[0]===undefined?"":
                                        <div >
                                            <div className='col-sm-12 mt-5'>
                                                <h4><WorkIcon sx={{fontSize:"25px"}}/>&nbsp;&nbsp;Work Experience</h4>
                                            </div>
                                            <div>
                                                <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#36c4b2" }}></div>
                                                {
                                                    items.Experience[0] === undefined ? "" :
                                                        <div className='pl-3'>

                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[0].project_name}</h5>

                                                            {/* <p>{items.Experience[0].job_discription}</p> */}
                                                            {
                                                                getdata === null ?  <p>{items.Experience[0].job_discription}</p> :
                                                                    getdata.map((item, key) => {
                                                                        return (
                                                                            <p> • {item.slice(1, item.length - 1)}</p>
                                                                        )
                                                                    })
                                                                // getEx()
                                                            }
                                                            {
                                                                items.Experience[0].project_urls === '' ? "" :
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                            }
                                                        </div>
                                                }

                                                {
                                                    items.Experience[1] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[1].job_title} in {items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[1].project_name}</h5>

                                                            {/* <p>{items.Experience[1].job_discription}</p> */}
                                                            {
                                                                getdata2 === null ? <p>{items.Experience[1].job_discription}</p> :
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
                                                }

                                                {
                                                    items.Experience[2] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[2].job_title} in {items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</p>

                                                                </div>
                                                            </div>
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
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>
                                                        </div>
                                                }

                                                {
                                                    items.Experience[3] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[3].job_title} in {items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[3].project_name}</h5>

                                                            {/* <p>{items.Experience[3].job_discription}</p> */}

                                                            {
                                                                getdata4 === null ?<p>{items.Experience[3].job_discription}</p> :
                                                                    getdata4.map((item3, key) => {
                                                                        return (
                                                                            <p> • {item3.slice(1, item3.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[4] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[4].job_title} in {items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</p>

                                                                </div>
                                                            </div>
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
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[5] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[5].job_title} in {items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[5].start_date} to {items.Experience[5].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[5].project_name}</h5>

                                                            {/* <p>{items.Experience[5].job_discription}</p> */}
                                                            {
                                                                getdata6 === null ? <p>{items.Experience[5].job_discription}</p> :
                                                                    getdata6.map((item5, key) => {
                                                                        return (
                                                                            <p> • {item5.slice(1, item5.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[6] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[6].job_title} in {items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[6].start_date} to {items.Experience[6].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[6].project_name}</h5>

                                                            {/* <p>{items.Experience[6].job_discription}</p> */}

                                                            {
                                                                getdata7 === null ? <p>{items.Experience[6].job_discription}</p> :
                                                                    getdata7.map((item6, key) => {
                                                                        return (
                                                                            <p> • {item6.slice(1, item6.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[7] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[7].job_title} in {items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[7].start_date} to {items.Experience[7].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[7].project_name}</h5>

                                                            {/* <p>{items.Experience[7].job_discription}</p> */}

                                                            {
                                                                getdata8 === null ? <p>{items.Experience[7].job_discription}</p> :
                                                                    getdata8.map((item7, key) => {
                                                                        return (
                                                                            <p> • {item7.slice(1, item7.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[8] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[8].job_title} in {items.Experience[8].Company_name} {items.Experience[8].city},{items.Experience[8].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[8].start_date} to {items.Experience[8].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[8].project_name}</h5>

                                                            {/* <p>{items.Experience[8].job_discription}</p> */}

                                                            {
                                                                getdata9 === null ? <p>{items.Experience[8].job_discription}</p> :
                                                                    getdata9.map((item8, key) => {
                                                                        return (
                                                                            <p> • {item8.slice(1, item8.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[8].project_urls} target="_blank"> {items.Experience[8].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[9] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[9].job_title} in {items.Experience[9].Company_name} {items.Experience[9].city},{items.Experience[9].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[9].start_date} to {items.Experience[9].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[9].project_name}</h5>

                                                            {/* <p>{items.Experience[9].job_discription}</p> */}
                                                            {
                                                                getdata10 === null ? <p>{items.Experience[9].job_discription}</p> :
                                                                    getdata10.map((item9, key) => {
                                                                        return (
                                                                            <p> • {item9.slice(1, item9.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[9].project_urls} target="_blank"> {items.Experience[9].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[10] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[10].job_title} in {items.Experience[10].Company_name} {items.Experience[10].city},{items.Experience[10].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[10].start_date} to {items.Experience[10].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[10].project_name}</h5>

                                                            {/* <p>{items.Experience[10].job_discription}</p> */}
                                                            {
                                                                getdata11 === null ? <p>{items.Experience[10].job_discription}</p> :
                                                                    getdata11.map((item10, key) => {
                                                                        return (
                                                                            <p> • {item10.slice(1, item10.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[10].project_urls} target="_blank"> {items.Experience[10].project_urls} </a></p>
                                                        </div>
                                                }
                                                {
                                                    items.Experience[11] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[11].job_title} in {items.Experience[11].Company_name} {items.Experience[11].city},{items.Experience[11].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[11].start_date} to {items.Experience[11].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[11].project_name}</h5>

                                                            {/* <p>{items.Experience[11].job_discription}</p> */}
                                                            {
                                                                getdata12 === null ? <p>{items.Experience[11].job_discription}</p> :
                                                                    getdata12.map((item11, key) => {
                                                                        return (
                                                                            <p> • {item11.slice(1, item11.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[11].project_urls} target="_blank"> {items.Experience[11].project_urls} </a></p>
                                                        </div>
                                                }
                                                {/* {
                                                    items.Experience[12] === undefined ? "" :
                                                        <div className='pl-3'>
                                                            <div className='row pt-5'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[12].job_title} in {items.Experience[12].Company_name} {items.Experience[12].city},{items.Experience[12].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[12].start_date} to {items.Experience[12].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <p className='pt-3'>{items.Experience[12].job_discription}</p>
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[12].project_urls} target="_blank"> {items.Experience[12].project_urls} </a></p>
                                                        </div>
                                                } */}




                                            </div>
                                        </div>
                                        }

                                        <div>
                                            <div className='col-sm-12 mt-5'>
                                                <h4><EngineeringIcon sx={{fontSize:"25px"}}/>&nbsp;&nbsp;Skills</h4>
                                            </div>
                                            <div>
                                                <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#36c4b2" }}></div>
                                                <div className='col-sm-12 mt-3'>
                                                    <ul className='row '>
                                                        <div className='col-sm-6'>

                                                        {
                                                                items.skills[0] === undefined ? "" : <li>{items.skills[0]}</li>
                                                            }
                                                            {
                                                                items.skills[1] === undefined ? "" : <li>{items.skills[1]}</li>
                                                            }
                                                            {
                                                                items.skills[2] === undefined ? "" : <li>{items.skills[2]}</li>
                                                            }
                                                            {
                                                                items.skills[3] === undefined ? "" : <li>{items.skills[3]}</li>
                                                            }
                                                            {
                                                                items.skills[4] === undefined ? "" : <li>{items.skills[4]}</li>
                                                            }
                                                            {
                                                                items.skills[5] === undefined ? "" : <li>{items.skills[5]}</li>
                                                            }
                                                            {
                                                                items.skills[6] === undefined ? "" : <li>{items.skills[6]}</li>
                                                            }
                                                        </div>
                                                        <div className='col-sm-6'>
                                                            {
                                                                items.skills[7] === undefined ? "" : <li>{items.skills[7]}</li>
                                                            }
                                                            {
                                                                items.skills[8] === undefined ? "" : <li>{items.skills[8]}</li>
                                                            }
                                                            {
                                                                items.skills[9] === undefined ? "" : <li>{items.skills[9]}</li>
                                                            }
                                                            {
                                                                items.skills[10] === undefined ? "" : <li>{items.skills[10]}</li>
                                                            }
                                                            {
                                                                items.skills[11] === undefined ? "" : <li>{items.skills[11]}</li>
                                                            }
                                                            {
                                                                items.skills[12] === undefined ? "" : <li>{items.skills[12]}</li>
                                                            }
                                                            {
                                                                items.skills[13] === undefined ? "" : <li>{items.skills[13]}</li>
                                                            }
                                                        </div>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='col-sm-12 mt-5'>
                                                <h4><SchoolIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Education</h4>
                                            </div>
                                            <div>
                                                <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#36c4b2" }}></div>
                                                {
                                                    items.Education===undefined ? "":
                                                    items.Education.map((edu)=>{
                                                        return(
                                                            <div className='pl-3'>

                                                            <div className='row pt-4'>
                                                                <div className='col-sm-7'>
        
                                                                    <h5>{edu.school_name},{edu.school_location}</h5>
                                                                </div>
                                                                <div className='col-sm-5'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{edu.start_date} to {edu.end_date}</p>
        
                                                                </div>
                                                            </div>
                                                            <p>{edu.degree}</p>
                                                            <p>{edu.field_of_study}</p>
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
                {/* <button onClick={datadownload} style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button> */}
                <ReactToPrint
                    trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    )
}
