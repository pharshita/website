import React from "react";
import { Link } from "react-router-dom";

export default function Forgot_pass() {
    return (
        <section style={{justifyContent:"center",display:"flex"}}>
            <div className='col-sm-12 col-lg-7 forgot' >
               
                <div className="text-center pt-2 pb-2">We need your email to verify before resetting your password.</div>
                   
                    <div class="col-xs-4 col-xs-offset-4">
                        <div class="floating-label-group1">
                            <input type="text" id="username" class="form-control" autocomplete="off" autofocus required />
                            <label class="floating-label1">Email Address</label>
                        </div>
                       
                    </div>
                   <Link to="/verify"> <button className='btn_1'>Reset Password </button></Link>

                  

            </div>
         
        </section>
    )
}