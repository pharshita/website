import React from 'react'
import Types_resume from './Types_resume'
import Resume4 from './Resume4'
import Resume2 from './Resume2'
import Resume8 from './Resume8'
import Resume9 from './Resume9'
import Resume11 from './Resume11'

export default function Professional() {
  return (
    <div>
        <div className='row'>
            <div>
                <Types_resume/>
            </div>
            <div className='text-center' style={{margin:"60px 0px"}}>
                <h3 className='textcolor'>Professional Resume</h3>
            </div>
            <div>
           {/* <Resume8/> */}
          {/* <Resume11/> */}
           <Resume9/>
           <Resume4/>
           <Resume2/>
            </div>
        </div>
    </div>
  )
}
