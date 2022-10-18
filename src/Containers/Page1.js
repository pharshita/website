import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL} from '../config';
import Logout from './Logout';
import welcome from '../images/welcompage.png'
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

export default function Page1() {

  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const [data1, setdata] = useState([])
    const [Status, setStatus] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/alldata/`, config).then((res) => {
          setdata(res.data)
        }).catch((err) => {
          
            console.log(err)
        })
    }, [])
      // console.log(data1)

    function getID(e){
      localStorage.setItem("id", parseInt(e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML))
    }
    
    function Deletedata(e){
      let deletid=parseInt(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
      axios.delete(`http://127.0.0.1:8000/api/resume/${deletid}/`,config)
      .then(() =>
      setStatus('Delete successful'));
        window.location.reload(false);
    }
  return (
    <>
        <div className='logoutpage1'>
       <Logout/>
       </div>
    {
      data1.length===0?
      <div style={{textAlign:"center"}}>
        <h1 className='textcolor'>Welcome to Resume Builder</h1>
        <p style={{fontSize:"17px"}}>Fill in the blanks, choose a template,and download your resume instantly.</p>
        <img src={welcome} alt="" className='imgpage1'/>
      </div>
      
      :
      
    <div>
    <div className="container text-center" style={{display:"flex",justifyContent:"center"}}>
        <div className='row'>
            <div className='col-sm-12'>
        <h1 className='textcolor' style={{color:"black"}}>Your Previous Filled data</h1>


            <table border="2" className='tab'>
                <thead>
                    <tr className='head'>
                        <th>Name</th>
                        <th style={{display:"none"}}>id</th>
                        <th>Email</th>
                        <th>profession</th>
                        <th>Mobile</th>
                        <th>country</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data1.map((item,key)=>
                    {
                      return (
                        <>
                       <tr style={{border:"1px solid black"}} id="datas">
                       <td key={key}>{item.first_name} {item.last_name}</td>
                       <td key={key} style={{display:"none"}}>{item.id}</td>
                       <td key={key}>{item.email}</td>
                       <td key={key}>{item.profession}</td>
                       <td key={key}>{item.phone_number}</td>
                       <td key={key}>{item.country}</td>
                       <td key={key}>{item.city},{item.pin_code}</td>
                       <div style={{display:"flex",marginTop:"27px"}}>
                        <Link to="/all_resume" style={{textDecoration:"none"}}><p style={{padding:"2px"}} onClick={getID}><i class="fa fa-download" style={{fontSize:"22px", marginTop:"3px",color:"#1bcd1b"}}></i></p></Link>
                         {/* <button style={{padding:"2px",paddingLeft:"10px"}} onClick={Deletedata}>Delete</button> */}
                         <p style={{padding:"2px",paddingLeft:"10px"}} onClick={Deletedata}><i class="fa fa-trash"style={{fontSize:"22px",color:"red"}}></i></p>
                       </div>

                       </tr>
                       
                       </>
                       )
                    })
                  }
                   
                    

                </tbody>
                 
            </table>
            </div>

        </div>

        </div>

    </div>
    }

    <div className='createbtnpage1'>
       <Link to="/user"><button className='dropbtn2' >Create New Resume</button></Link> 
    </div>
    
    </>
  )
}
