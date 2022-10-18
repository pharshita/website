import React from 'react'
import Img_of_resume from './Img_of_resume'
import Types_resume from './Types_resume'

export default function All_Resume() {
  return (
    <div>
        <div className='container allresume'>
           <Types_resume/>
           <Img_of_resume/>
        </div>
    </div>
  )
}
