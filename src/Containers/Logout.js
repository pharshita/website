import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
    const cliked=()=>{
        window.localStorage.clear();
        window.location.href="/signin"
       }
  return (
    <div>
          <button className='dropbtn' style={{borderRadius:"30px"}} onClick={cliked}>Logout</button>
    </div>
  )
}



// {"resume_data":
// {
// "personal":{"fname":"ssdfsd", "lname":"singh"}
// "skills":["ptyhon", "django", "Syx"]

// }
// }

// axios:
//   data = localStorage.getItem(ressume[prosnla])
//   axios.post("user", data=data, Headers=Hesre){
//     response {rue}
//     axios
//   }