import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Date from './Date';
import { Chip } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../config';


export default function Skill() {

    const [skilldata, setskilldata] = useState(null)
    const [inputData, setInputData] = useState([])
    const newarr = []
    const openBox = () => {
        //    newarr.push(skilldata)
        //    setInputData([...inputData,newarr])
        // debugger

        setInputData([...inputData, skilldata])
        setskilldata(document.getElementsByClassName("removedata").value = "")


    }
    // console.log(dataremove)

    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }      }

    const saveskilldata = () => {
        const id = window.localStorage.getItem('id')

        let data = new FormData()
        data.append('id', id)
        data.append('skills', inputData)

        let url="http://127.0.0.1:8000"
        let ngrok="https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        axios.post(`${BASE_URL}/api/skills/`, data,config)
        // axios.post(`${ngrok}/api/skills/`, data,config)
            .then((res) => {
                console.log(res)
                // document.getElementById("nextbtnid").style.display = "block"
                // document.getElementById("savebtnid").style.display = "none"
                window.location.href="/experience"
            })
            .catch((err) => { console.log(err) })

    }
    const handlechangedata = (e) => {
        setskilldata(e.target.value)

    }
    console.log(newarr)
    console.log(typeof (inputData))
    console.log(typeof (skilldata))
    return (
        <div>

            <div>
                <div className=' text-center'>
                    <div className='row block' >
                        <div className='col-sm-2 new text-center' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                            <nav>
                                <div>
                                    <ul>
                                        <li>
                                            <i className="fa fa-user" style={{ fontSize: "22px", color: "white" }}></i><Link to="/user"> <a className='personalnav'>Personal</a></Link>
                                        </li>
                                        <li >
                                            <i className="fa fa-graduation-cap" style={{ fontSize: "22px", color: "white" }}></i> <Link to="/education"> <a className='personalnav'>Education</a></Link>
                                        </li>
                                        <li className='current'>
                                            <i className="fa fa-cogs" style={{ fontSize: "22px", marginRight: "30px" }}></i><Link to="/skill"><a className='skillnav' >Skills</a></Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-history" style={{ fontSize: "22px", color: "white" }}></i> <Link to="/experience"><a className='personalnav'>Experience</a></Link>

                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className='col-sm-10 text-center' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                            <h3 className='text-center header'>Resume Submission Form</h3>
                            <div className=' text-center'>

                                <h4 style={{ margin: "50px", color: "#3c3440" }}>Fill Your Skills</h4>
                            </div>
                            <div >
                                <div className='row namedata' id='newskill' style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                                    <div className='col-lg-2 col-md-2 col-sm-12 skilllable'  >
                                        <h5 className='mt-2'>Skills:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                                    </div>
                                    <div className='col-lg-3 col-md-5 col-sm-12 ' id='skills'>
                                        <TextField id="outlined-basic" className="removedata" label="Skills " variant="outlined" onChange={handlechangedata} value={skilldata} autoComplete="off"
                                            sx={{ width: "280px" }}
                                        />
                                        <div className="skills mt-3 text-left mb-3">

                                            {
                                                skilldata === null ? <h6 >Enter Skills</h6> :
                                                    inputData.map((items, key) => {
                                                        return (
                                                            <Chip className='mr-2 mt-3 chip' key={key} label={items} />
                                                        )
                                                    })
                                            }
                                        </div>

                                    </div>

                                    <div className='col-lg-2 col-md-2 col-sm-12 ' >
                                        <button onClick={openBox} style={{backgroundColor: "#cbb78d",border:"none",padding:"10px 20px"}}>Add More</button>
                                    </div>
                                </div>

                            </div>

                            <div className='navtab'>
                                <div className='btn1 col-sm-12' >

                                <button onClick={saveskilldata} id="savebtnid" style={{ display: "block" }} >Save</button>
                                {/* <Link to="/experience"><button id="nextbtnid" style={{ display: "none" }} className="nextbtn">Next</button></Link> */}
                                    {/* <button onClick={SavePersonalData} id="savebtnid" style={{ display: "block", padding: " 10px 20px", backgroundColor: "#353232", border: "none", color: "white", marginRight: "-30px" }}>Save</button> */}
                                    {/* <Link to="/education"><button id="nextbtnid" style={{ display: "none", padding: " 10px 20px", backgroundColor: "#353232", border: "none", color: "white", marginRight: "-30px" }} className="nextbtn">Next</button></Link> */}
                                </div>

                            </div>

                            <div style={{ display: "flex", justifyContent: "center" }} className="col-sm-12 btn">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
