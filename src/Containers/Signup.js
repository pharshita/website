import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../config'
import signup_banner from '../images/signup_banner.png'


export default function Signup(props) {
    const [name, setName] = useState("")

    const [lname, setlName] = useState("")
    const [num, setnum] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    // const[clear,setclear]=useState({
    // name:false,
    // lname:false,
    // num:false,
    // pass1:false,
    // pass2:""

    // })

    function nameHandler(e) {
        setName(e.target.value)
    }
    // console.log(name)
    function lnameHandler(e) {
        setlName(e.target.value)
    }
    function userHandler(e) {
        setUsername(e.target.value)
    }

    function emailhandler(e) {
        setEmail(e.target.value)
    }
    function numHandler(e) {
        setnum(e.target.value)
    }
    // console.log(num)
    function pass1Handler(e) {
        setPass1(e.target.value)
    }
    function pass2Handler(e) {
        setPass2(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();

        if (pass1 !== pass2) {
            document.getElementById("pass2").style.display = "block";
            document.getElementById("pass2").style.color = "red";
        }
      
        else {
            document.getElementById("pass2").style.display = "none";
            // setclear(clear.pass2="a")
            // debugger
            let data = new FormData()
            // let url="http://127.0.0.1:8000"

            // debugger
            // let ngrok = "https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
            data.append('first_name', name)
            data.append('last_name', lname)
            data.append('username', username)
            data.append('email', email)
            data.append('mobile_no', num)
            data.append('password', pass2)
            axios.post(`${BASE_URL}/api/registers/`, data)
                // axios.post(`${ngrok}/api/registers/`,data)
                .then((res) => {
                    window.localStorage.setItem('id', JSON.stringify(res.data.id));
                    window.location.href = "/signin";

                }).catch((err) => {
                    console.log(err)
                })
        }
    }
    function ValidateEmail() {
        var email1 = document.getElementById("txtEmail").value;
        var lblError = document.getElementById("lblError");
        lblError.innerHTML= "";
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (!expr.test(email1)) {
            lblError.innerHTML = "Invalid email please use @gmail.com.";
        }
        
       

    }
    function Validatephone() {
        var phoneError = document.getElementById("phoneError");
        if(num.length!=10){
            phoneError.innerHTML = "Please put 10 digit mobile number";
        }
    
        else{
            phoneError.innerHTML = "";

        }
    }
    return (
        <div className='signupbg'>
            <div className="col-sm-12 s" >
           
           <div className="col-lg-6 col-md-6 col-sm-12" style={{display:'flex',justifyContent:'center',alignItems:'center',background:'rgb(87 89 255 / 51%)'}}>
            <h1 style={{fontFamily:'sans-serif',fontSize:'9vw',fontWeight:700,lineHeight:1,color:'#ffd69a'}}>BUILD YOUR RESUME</h1>
           </div>
            <div className='col-lg-6 col-md-6 col-sm-12 signupform' >
                    <div className='row signup_containt' >
                  

                        {/* <div  style={{ textAlign: "center" }}>
                            <h2 style={{fontFamily:"Montserrat",paddingTop:"10px"}}>Sign Up</h2>
                        </div> */}
                        <div className='sign'>
                            <form className='formdata'>
                            <div>
                                <h4>SIGNUP</h4>
                            </div>
                                <div className='row mt-5'>

                                    <div className='col-sm-6'>
                                        <label>Firstname</label>
                                        <input className='form-control' type="text" style={{ width: "auto" }} value={name} onChange={nameHandler}></input>

                                    </div>
                                    <div className='col-sm-6'>
                                        <label>Lastname</label>
                                        <input className='form-control' type="text" style={{ width: "auto" }} value={lname} onChange={lnameHandler}></input>

                                    </div>
                                </div>
                                <div style={{ marginTop: "10px" }} >
                                    <label>Username</label>
                                    <input className='form-control' type="text" value={username} onChange={userHandler}></input>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <label>Email</label>
                                    <input className='form-control' type="text" value={email} onChange={emailhandler} onKeyUp={ValidateEmail} id="txtEmail" autoComplete='off'></input>
                                    <p style={{color:"red",fontSize:"15px" }} id="lblError"></p>

                                </div>

                                <div style={{ marginTop: "10px" }}>
                                    <label>Mobile number</label>
                                    <input className='form-control' type="number" value={num} onChange={numHandler} onKeyUp={Validatephone} ></input>
                                    <p style={{color:"red",fontSize:"15px" }} id="phoneError"></p>

                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <label>Password</label>
                                    <input className='form-control' type="password" value={pass1} onChange={pass1Handler}></input>
                                    <p style={{ display: "none", margin: "5px 10px" }} id="pass1">please enter valid password</p>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <label>Confirm Password</label>
                                    <input className='form-control' type="password" value={pass2} onChange={pass2Handler}></input>
                                    <p style={{ display: "none", margin: "5px 10px",fontSize:"15px" }} id="pass2">password not match</p>
                                </div>
                                <div className='mt-4 signbtn'>
                                    <button className='btn btn-outline-dark' onClick={submitHandler}>Signup</button>
                                </div>
                        <div style={{justifyContent:"center",display:"flex",padding:'0px'}} >
                            <p style={{marginTop:20,fontFamily:'"Montserrat",sans-serif',marginLeft: "0px"}} className="have">Already Have An Account?<Link to="/signin" style={{ textDecoration: "none",textAlign:"center" }}><span style={{ color: "#743e31", textDecoration: "none" ,fontSize:"20px"}}> Sign in </span></Link></p>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
                
        </div>
    )
}
