import React from 'react'

export default function Change_password() {
  return (
    <section style={{justifyContent:"center",display:"flex"}}>
    <div className='col-sm-12 col-lg-7 forgot'  >
       
        <div className="text-center pt-2 pb-2">Please Enter your new password password.</div>
           
            <div class="col-xs-4 col-xs-offset-4" style={{textAlign:"left"}}>
                <div class="floating-label-group1">
                    <input type="password"  class="form-control" autocomplete="off" autofocus required />
                    <label class="floating-label1">New password</label>
                </div>
                <div class="floating-label-group1 mt-3">
                    <input type="password"  class="form-control" autocomplete="off" autofocus required />
                    <label class="floating-label1">Re-type password</label>
                </div>
               
            </div>
            <button className='btn_1'>SUBMIT </button>

          

    </div>
 
</section>
  )
}
