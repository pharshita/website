import React, { useEffect, useState, useRef } from 'react'
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
import user from '../images/user.jpeg'
import { BASE_URL } from '../config';

export default function Resume10() {
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
    let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    let getdata12 = JSON.parse(window.localStorage.getItem('data12'))
    return (
        <div>
            <div className='container resume4 mt-4' ref={componentRef} style={{ width: "70%", padding: "0px" }}>
                <div className='row pb-5' style={{ backgroundColor: "#f1ede7" }}>
                    {
                        data1.map((items) => {
                            let image = items.profile_image
                            return (

                                <>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div style={{ width: "70%", backgroundColor: "#b3888d", borderBottomLeftRadius: "33px", borderBottomRightRadius: "33px", textAlign: "center", color: "white", paddingTop: "50px" }}>
                                            <h1 >{items.first_name} {items.last_name}</h1>
                                            <h5 >{items.profession}</h5>

                                        </div>
                                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                                            {
                                                items.profile_image === null ? <img src={user} alt='no image' style={{ height: "209px", width: "70%", borderBottomRightRadius: "33px", borderBottomLeftRadius: "33px" }}></img> : <img src={` http://127.0.0.1:8000/${image}`} style={{ height: "209px", width: "70%", borderBottomRightRadius: "33px", borderBottomLeftRadius: "33px" }}></img>

                                            }

                                        </div>

                                    </div>
                                    <div style={{ padding: "50px 100px 20px 50px" }}>
                                        <h5 style={{ fontWeight: "bold" }}><DescriptionIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Personal Detail</h5>
                                        <p style={{ fontSize: "14px" }}>{items.profile_summary}</p>
                                    </div>
                                   
                                    <div className='d-flex mt-5' style={{ justifyContent: "space-between" }}>
                                        {
                                            items.Experience[0]===undefined?"":
                                        <div style={{ width: "40%" }}>
                                            <div>

                                                <h5 style={{ fontWeight: "bold", paddingLeft: "40px" }}><WorkIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Experience</h5>
                                                {
                                                    items.Experience[0]===undefined?"":
                                                <div style={{ padding: "10px 10px 10px 50px" }}>


                                                    <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                    <h5 style={{ fontSize: "17px" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</h5>
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
                                                        items.Experience[0].project_urls===undefined?"":
                                                        <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                    }

                                                </div>
                                                }
                                                {
                                                    items.Experience[1] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }

                                                {
                                                    items.Experience[2] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[2].job_title} in {items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[3] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[3].job_title} in {items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</h5>
                                                                <p style={{ paddingLeft: "20px" }}>{items.Experience[3].job_discription}</p> <h5>{items.Experience[3].project_name}</h5>

                                                                {/* <p>{items.Experience[3].job_discription}</p> */}

                                                                {
                                                                    getdata4 === null ? <p>{items.Experience[3].job_discription}</p> :
                                                                        getdata4.map((item3, key) => {
                                                                            return (
                                                                                <p> • {item3.slice(1, item3.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[4] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[4].job_title} in {items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[5] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[5].job_title} in {items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[5].start_date} to {items.Experience[5].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[6] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[6].job_title} in {items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[6].start_date} to {items.Experience[6].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[7] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[7].job_title} in {items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[7].start_date} to {items.Experience[7].end_date}</h5>
                                                                <h5>{items.Experience[7].project_name}</h5>

                                                                {/* <p>{items.Experience[6].job_discription}</p> */}

                                                                {
                                                                    getdata8 === null ? <p>{items.Experience[7].job_discription}</p> :
                                                                        getdata8.map((item7, key) => {
                                                                            return (
                                                                                <p> • {item7.slice(1, item7.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[8] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[8].job_title} in {items.Experience[8].Company_name} {items.Experience[8].city},{items.Experience[8].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[8].start_date} to {items.Experience[8].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[8].project_urls} target="_blank"> {items.Experience[8].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[9] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[9].job_title} in {items.Experience[9].Company_name} {items.Experience[9].city},{items.Experience[9].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[9].start_date} to {items.Experience[9].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[9].project_urls} target="_blank"> {items.Experience[9].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[10] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[10].job_title} in {items.Experience[10].Company_name} {items.Experience[10].city},{items.Experience[10].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[10].start_date} to {items.Experience[10].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[10].project_urls} target="_blank"> {items.Experience[10].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[11] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[11].job_title} in {items.Experience[11].Company_name} {items.Experience[11].city},{items.Experience[11].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[11].start_date} to {items.Experience[11].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[11].project_urls} target="_blank"> {items.Experience[11].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                            </div>
                                            <div>
                                                <h5 style={{ fontWeight: "bold", paddingLeft: "40px", marginTop: "50px" }}><EngineeringIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Skills</h5>

                                                <div style={{ padding: "10px 10px 10px 80px" }}>
                                                   {
                                                    items.skills===undefined?"":
                                                    items.skills.map((skl)=>{
                                                      return(
                                                          <p style={{ marginBottom: "0px" }}>{skl}</p>

                                                      )
                                                    })
                                                   }
                                                    
                                                   


                                                </div>

                                            </div>

                                        </div>
                                        }
                                        <div style={{ width: "40%" }}>


                                            <div>

                                                <h5 style={{ fontWeight: "bold" }}><SchoolIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Education</h5>
                                               
                                                {
                                                    items.Education === undefined ? "" :
                                                    items.Education.map((edu)=>{
                                                     return(
                                                         <div style={{ padding: " 10px" }}>
                                                             <h5 style={{ fontSize: "17px" }}>{edu.school_name},{edu.school_location}</h5>
                                                             <p style={{ fontSize: "14px" }}>({edu.start_date} to {edu.end_date})</p>
                                                             <p>{edu.degree}</p>
                                                             <p>{edu.field_of_study}</p>
                                                         </div>

                                                     )
                                                    })
                                                       

                                                }

                                                


                                            </div>
                                            <div>
                                                <div style={{ backgroundColor: "#d5c7b4", padding: "50px", marginRight: "-10px", borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                                    <h5 style={{ fontWeight: "bold", paddingBottom: "20px" }}><ContactMailIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Contact</h5>
                                                    <p>{items.city}, {items.country} {items.pin_code}</p>
                                                    <p>{items.phone_number}</p>
                                                    <p>{items.email}</p>
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
                    trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon /> Download</button>}
                    content={() => componentRef.current}
                />
            </div>

        </div>
    )
}
