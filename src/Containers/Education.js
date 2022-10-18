import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Date from './Date';
import axios from 'axios';
import Education_form from './Education_form';
import Education2 from './Education2';




export default function Education() {

    return (
        <div>

            <div>
                <div className=' text-center'>
                    <div className='row block'  >
                        <div className='col-sm-2 new text-center' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                            <nav>
                                <div>
                                    <ul>
                                        <li>
                                            <i class="fa fa-user" style={{ fontSize: "22px", color: "white" }}></i><Link to="/user"> <a className='personalnav'>Personal</a></Link>
                                        </li>
                                        <li className='current'>
                                            <i class="fa fa-graduation-cap" style={{ fontSize: "22px" }}></i> <Link to="/education"> <a className='personalnav'>Education</a></Link>
                                        </li>
                                        <li >
                                            <i class="fa fa-cogs" style={{ fontSize: "22px", color: "white", marginRight: "30px" }}></i><Link to="/skill"><a className='skillnav' >Skills</a></Link>
                                        </li>
                                        <li>
                                            <i class="fa fa-history" style={{ fontSize: "22px", color: "white" }}></i> <Link to="/experience"><a className='personalnav'>Experience</a></Link>

                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className='col-sm-10 text-center ' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                            <h3 className='text-center header'>Resume Submission Form</h3>
                            <div className=' text-center'>

                                <h4 style={{ margin: "50px", color: "#3c3440" }}>Fill Your Education Details</h4>
                            </div>
                           
                            <div >
                                {/* <Education_form/> */}
                                <Education2/>
                                    
                                    
                              
                            </div>

                           
                        </div>
                            {/* <hr></hr> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
