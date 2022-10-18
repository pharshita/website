import React, { useState, useRef, useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EngineeringIcon from '@mui/icons-material/Engineering';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function Resume6() {

    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    const componentRef = useRef();
    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)

        let ngrok = "https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        let url = "http://127.0.0.1:8000"
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
    let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    let getdata12 = JSON.parse(window.localStorage.getItem('data12'))
    return (
        <div>
            <div className='container resume4' ref={componentRef} style={{ width: "70%" }}>
                <div className='row'>
                    {
                        data1.map((items) => {
                            return (
                                <>

                                    <div className='d-flex' style={{ border: "1px solid black", padding: "0px" }}>
                                        <div style={{ width: "41%" }}>
                                            <div style={{ padding: "30px 30px", backgroundColor: "#f2d8d6", height: "400px" }}>
                                                <h1>{items.first_name} {items.last_name}</h1>
                                                <h5>{items.profession}</h5>

                                                <div style={{ backgroundColor: "black", width: "15%", height: "1px", margin: "20px 0px" }}></div>
                                                <div>

                                                    <div >

                                                        <div style={{ display: "flex" }}>
                                                            <EmailIcon /> <p style={{ paddingLeft: "10px" }}>{items.email}</p>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <LocalPhoneIcon /> <p style={{ paddingLeft: "10px" }}>{items.phone_number}</p>
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <LocationOnIcon /> <p style={{ paddingLeft: "10px" }}>{items.city}, {items.country} {items.pin_code}</p>
                                                        </div>
                                                        {
                                                            items.social_links === '' ? "" :
                                                                <div style={{ display: "flex" }}>
                                                                    <LinkedInIcon /> <p style={{ paddingLeft: "10px" }}>{items.social_links}</p>
                                                                </div>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ backgroundColor: "#faefef", paddingBottom: "150px" }}>
                                                <div>

                                                    <div style={{ padding: "20px 0px 10px 20px", color: "black" }}>
                                                        <h3><EngineeringIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Skills</h3>
                                                    </div>
                                                    <ul style={{ marginLeft: "10px" }}>
                                                        {
                                                            items.skills === undefined ? "" :
                                                                items.skills.map((edu) => {
                                                                    return (
                                                                        <li>{edu}</li>
                                                                    )
                                                                })
                                                        }
                                                    </ul>
                                                </div>
                                                {
                                                    items.Experience[0] === undefined ? "" :
                                                        <div className='pt-3'>
                                                            <div style={{ padding: "20px 0px 30px 20px", color: "black", marginBottom: "0px" }}>
                                                                <h3><WorkIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Work Experience</h3>
                                                            </div>
                                                            <div style={{ paddingRight: "20px" }}>
                                                                {
                                                                    items.Experience[0] === undefined ? "" :
                                                                        <div className='pl-3' style={{ textTransform: "capitalize" }}>


                                                                            <h5>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                            <h5>{items.Experience[0].project_name}</h5>

                                                                            {/* <p>{items.Experience[0].job_discription}</p> */}
                                                                            {
                                                                                getdata === null ? <p>{items.Experience[0].job_discription}</p> :
                                                                                    getdata.map((item, key) => {
                                                                                        return (
                                                                                            <p> • {item.slice(1, item.length - 1)}</p>
                                                                                        )
                                                                                    })
                                                                            }
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                                            <p >{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>
                                                                        </div>
                                                                }

                                                                {
                                                                    items.Experience[1] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[1].job_title} in {items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[1].project_urls} target="_blank"> {items.Experience[1].project_urls} </a></p>

                                                                            <p >{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>
                                                                        </div>
                                                                }
                                                                {
                                                                    items.Experience[2] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[2].job_title} in {items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                            <h5>{items.Experience[2].project_name}</h5>

                                                                            {/* <p>{items.Experience[2].job_discription}</p> */}
                                                                            {
                                                                                getdata3 === null ? <p>{items.Experience[2].job_discription}</p> :
                                                                                    getdata3.map((item2, key) => {
                                                                                        return (
                                                                                            <p> • {item2.slice(1, item2.length - 1)}</p>
                                                                                        )
                                                                                    })
                                                                            }
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>

                                                                            <p>{items.Experience[2].start_date}to {items.Experience[2].end_date}</p>
                                                                        </div>
                                                                }
                                                                {
                                                                    items.Experience[3] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[3].job_title} in {items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>

                                                                            <p >{items.Experience[3].start_date}to {items.Experience[3].end_date}</p>
                                                                        </div>
                                                                }
                                                                {
                                                                    items.Experience[4] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[4].job_title} in {items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                            <h5>{items.Experience[4].project_name}</h5>
                                                                            {/* <p>{items.Experience[4].job_discription}</p> */}
                                                                            {
                                                                                getdata5 === null ? <p>{items.Experience[0].job_discription}</p> :
                                                                                    getdata5.map((item4, key) => {
                                                                                        return (
                                                                                            <p> • {item4.slice(1, item4.length - 1)}</p>
                                                                                        )
                                                                                    })
                                                                            }
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>

                                                                            <p >{items.Experience[4].start_date}to {items.Experience[4].end_date}</p>
                                                                        </div>
                                                                }
                                                                {
                                                                    items.Experience[5] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[5].job_title} in {items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>

                                                                            <p >{items.Experience[5].start_date}to {items.Experience[5].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[6] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[6].job_title} in {items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>

                                                                            <p >{items.Experience[6].start_date}to {items.Experience[6].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[7] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[7].job_title} in {items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
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

                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>

                                                                            <p >{items.Experience[7].start_date}to {items.Experience[7].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[8] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[8].job_title} in {items.Experience[8].Company_name} {items.Experience[8].city},{items.Experience[8].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[8].project_urls} target="_blank"> {items.Experience[8].project_urls} </a></p>

                                                                            <p >{items.Experience[8].start_date}to {items.Experience[8].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[9] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[9].job_title} in {items.Experience[9].Company_name} {items.Experience[9].city},{items.Experience[9].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[9].project_urls} target="_blank"> {items.Experience[9].project_urls} </a></p>

                                                                            <p >{items.Experience[9].start_date}to {items.Experience[9].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[10] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[10].job_title} in {items.Experience[10].Company_name} {items.Experience[10].city},{items.Experience[10].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[10].project_urls} target="_blank"> {items.Experience[10].project_urls} </a></p>

                                                                            <p >{items.Experience[10].start_date}to {items.Experience[10].end_date}</p>
                                                                        </div>
                                                                } {
                                                                    items.Experience[11] === undefined ? "" :
                                                                        <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                            <h5>{items.Experience[11].job_title} in {items.Experience[11].Company_name} {items.Experience[11].city},{items.Experience[11].country}</h5>
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
                                                                            <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[11].project_urls} target="_blank"> {items.Experience[11].project_urls} </a></p>

                                                                            <p >{items.Experience[11].start_date}to {items.Experience[11].end_date}</p>
                                                                        </div>
                                                                }
                                                                {/* {
                                                            items.Experience[12] === undefined ? "" :
                                                                <div className='pl-3 pt-4' style={{ textTransform: "capitalize" }}>

                                                                    <h5>{items.Experience[12].job_title} in {items.Experience[12].Company_name} {items.Experience[12].city},{items.Experience[12].country}</h5>
                                                                    <p>{items.Experience[12].job_discription}</p>
                                                                    <p ><strong>Project_urls:-</strong> <a style={{ paddingRight: "20px" }} href={items.Experience[12].project_urls} target="_blank"> {items.Experience[12].project_urls} </a></p>

                                                                    <p >{items.Experience[12].start_date}to {items.Experience[12].end_date}</p>
                                                                </div>
                                                        } */}

                                                            </div>
                                                        </div>
                                                }

                                            </div>
                                        </div>
                                        <div style={{ width: "59%" }}>
                                            <div style={{ backgroundColor: "#fcf7f7", height: "400px", padding: "0px 20px" }}>
                                                <div style={{ padding: "30px 20px 0px 20px" }}>
                                                    <h3><DescriptionIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;About Me</h3>
                                                </div>
                                                <div className='col-sm-12 mt-3'><p>{items.profile_summary}</p></div>
                                            </div>
                                            <div>
                                                <div style={{ padding: "20px 0px 10px 20px" }}>
                                                    <h3><SchoolIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Education</h3>
                                                </div>
                                                <div className='add_containt pr-3'>
                                                {
                                                    items.Education === undefined ? "":
                                                    items.Education.map((edu)=>{
                                                        return(

                                                            <div className='pl-3 '>
            
                                                                <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                    <div className=''>
            
                                                                        <p>{edu.degree}</p>
                                                                    </div>
                                                                    <div className=''>
                                                                        <p style={{ textAlign: "end", color: "#3f4c4d", fontWeight: "bold" }}>{edu.start_date} to {edu.end_date}</p>
            
                                                                    </div>
                                                                </div>
                                                                <p>{edu.field_of_study}</p>
                                                                <h5>{edu.school_name},{edu.school_location}</h5>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                   
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
            <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
                <ReactToPrint
                    trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    )
}
