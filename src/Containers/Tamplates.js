import React from 'react'
import Resume10 from './Resume10'
import Resume5 from './Resume5'
import Resume6 from './Resume6'
import Types_resume from './Types_resume'

export default function Tamplates() {
  return (
    <div>
    <div className='row'>
        <div>
            <Types_resume/>
        </div>
        <div className='text-center' style={{margin:"60px 0px"}}>
            <h3 className='textcolor'>Tamplates</h3>
        </div>
        <div>
            <Resume5/>
            <Resume6/>
            <Resume10/>
        </div>
    </div>
</div>
  )
}
