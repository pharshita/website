import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import Experience_form from './Experience_form';
import Sample_Experience from './Sample_Experience';

export default function Experience() {
   
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
                                            <i className="fa fa-user" style={{ fontSize: "22px", color: "white" }}></i><Link to="/user"><a className='personalnav'>Personal</a></Link>
                                        </li>
                                        <li >
                                            <i className="fa fa-graduation-cap" style={{ fontSize: "22px", color: "white" }}></i> <Link to="/education"><a className='personalnav'>Education</a></Link>
                                        </li>
                                        <li >
                                            <i className="fa fa-cogs" style={{ fontSize: "22px", color: "white", marginRight: "30px" }}></i> <Link to="/skill"><a className='skillnav'>Skills</a></Link>
                                        </li>
                                        <li className='current'>
                                            <i className="fa fa-history" style={{ fontSize: "22px" }}></i> <Link to="/experience"><a className='personalnav'>Experience</a></Link>

                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className='col-sm-10 text-center ' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                            <h3 className='text-center header'>Resume Submission Form</h3>
                            <div className=' text-center' style={{ marginTop: "50px", color: "#3c3440" }}>

                                <h4 >Fill Your Work Experience</h4>
                            </div>
                            <div>
                                {/* <Experience_form /> */}
                                <Sample_Experience/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
