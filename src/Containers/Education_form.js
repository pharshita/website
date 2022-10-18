import React, { useState, useCallback } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL, NGROK_URL } from '../config';

export default function Education_form() {
  const [addeducations, setaddeducations] = useState(false)
  const opennewbox = () => {
    setaddeducations(true)
  }

  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }      }


  const saveEducationdata = () => {
    const id = window.localStorage.getItem('id')
    let arr = []
    let data = new FormData()



    data.append('id', id)
    data.append('user', id)
    data.append('school_name', Educationdata.school_name)
    data.append('school_location', Educationdata.school_location)
    data.append('degree', Educationdata.degree)
    data.append('field_of_study', Educationdata.field_of_study)
    data.append('start_date', Educationdata.start_date)
    data.append('end_date', Educationdata.end_date)

    // arr.append[data]
    axios.post(`${BASE_URL}/api/education/`, data,config)
    // axios.post(`${NGROK_URL}/api/education/`,data,config)
      .then((res) => {
        // console.log(res)
        document.getElementById("nextbtnid").style.display = "block"
        document.getElementById("nextbtnid").style.backgroundColor = "#32a2a8"
        document.getElementById("addmorebtn").style.display = "block"
        document.getElementById("savebtnid").style.display = "none"
      }).catch((err) => {
        console.log(err)
      })


  }
  const [Educationdata, setEducationdata] = useState({
    school_name: '',
    school_location: '',
    degree: '',
    field_of_study: '',
    start_date: '',
    end_date: "",
  })
  const handleOnChange = useCallback(event => {
    const { name, value } = event.target;
    setEducationdata({ ...Educationdata, [name]: value });
  });
  return (
    <div>
      {

        addeducations ? <Education_form /> : ""
      }
      <div className='row namedata' style={{textAlign: "left",width:"1000px",marginTop:"30px",marginLeft:"50px"}}>
        <div className='col-sm-12' style={{ textAlign: "left" }}>

        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
          <h5 className='mt-2'>School Name:</h5><i className="fa fa-snowflake-o Tabicons1"></i>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
          <TextField id="outlined-basic" label="School name" variant="outlined"
            sx={{ width: "280px" }} value={Educationdata.school_name} onChange={handleOnChange} name="school_name" autoComplete="off"
          />
        </div>

      </div>
      <div className='row namedata' style={{textAlign: "left",width:"1000px",marginTop:"30px",marginLeft:"50px"}}>
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
          <h5 className='mt-2'> Location:</h5><i className="fa fa-snowflake-o Tabicons1"></i>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
          <TextField id="outlined-basic" label=" location" variant="outlined"
            sx={{ width: "280px" }} value={Educationdata.school_location} onChange={handleOnChange} name="school_location" autoComplete="off"
          />
        </div>

      </div>
      <div className='row namedata' style={{textAlign: "left",width:"1000px",marginTop:"30px",marginLeft:"50px"}}>
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
          <h5 className='mt-2'>Degree:</h5><i className="fa fa-snowflake-o Tabicons1"></i>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>

          <select className="form-control foreducation" id="education" value={Educationdata.degree} onChange={handleOnChange} name="degree" style={{ width: "282px", height: "50px" }}>
            <option value="" selected="selected" disabled="disabled">-- select one --</option>
            <option value="No formal education">No formal education</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate or higher">Deploma  in any Field</option>
          </select>
        </div>
      </div>
      <div className='row namedata' style={{textAlign: "left",width:"1000px",marginTop:"30px",marginLeft:"50px"}}>
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
          <h5 className='mt-2'>Field:</h5><i className="fa fa-snowflake-o Tabicons1"></i>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
          <TextField id="outlined-basic" label="Field_of_study" variant="outlined"
            sx={{ width: "280px" }} value={Educationdata.field_of_study} onChange={handleOnChange} name="field_of_study" autoComplete="off"
          />
        </div>

      </div>
      <div className='row namedata' style={{textAlign: "left",width:"1000px",marginTop:"30px",marginLeft:"50px"}}>
        <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
          <h5 className='mt-2'>Date:</h5><i className="fa fa-snowflake-o Tabicons1"></i>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 '>
          <div className='dateformate'>
            <input type="date" value={Educationdata.start_date} onChange={handleOnChange} name="start_date" style={{ paddingLeft: "15px", paddingRight: "15px" }} autoComplete="off"/>
            <p style={{ margin: "10px 10px" }}>Start date</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
          <div className='dateformate'>
            <input type="date" value={Educationdata.end_date} onChange={handleOnChange} name="end_date" style={{ paddingLeft: "15px", paddingRight: "15px" }} autoComplete="off" />
            <p style={{ margin: "10px 10px" }}>End date</p>

          </div>

          <div className='navtab1 d-flex' >

            <div className='btn col-lg-9 col-sm-12' style={{ marginTop: "10px" }} >
              <button onClick={opennewbox} id="addmorebtn" className='btn btn-primary' style={{ display: "none",backgroundColor:"blue",color:"white"}}>+</button>
            </div>
            <div className='btn2 col-lg-9 col-sm-12'>
              <Link to="/skill"><button id="nextbtnid" style={{ display: "none" }} className="nextbtn">Next</button></Link>
              <button onClick={saveEducationdata} id="savebtnid" style={{ display: "block" }}>Save</button>
            </div>

          </div>
        </div>




      </div>
      <hr style={{ height: "1px", backgroundColor: "#49444385" }}></hr>


    </div>
  )
}
