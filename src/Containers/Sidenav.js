// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import React from 'react'

// export default function Sidenav() {
//     return (
//         <>
        
//                 <div className='row'>
//                     <div className='col-sm-2'>
//                         <TabList className="new">
//                             <Tab>Personal</Tab>
//                             <Tab>Education</Tab>
//                             <Tab>Skills</Tab>
//                             <Tab>Experience</Tab>
//                         </TabList>
//                     </div>
//                     <div className='col-sm-10'>
//                         <div className='header'>
//                             <h2>Resume Submission Form</h2>
//                             <hr></hr>
//                         </div>
//                     </div>
//                 </div>


//         </>
//     )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import Personal_details from './Personal_details'
// import axios from 'axios'
// import Data from './Data'

export default function SideNav() {

    // const [tableData, setTableData] = React.useState([])

    // React.useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //         debugger
    //         setTableData(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])
    // const tableHandler = () => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //         debugger
    //         setTableData(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }


    return (<>
    
        <div>
            <div className=' text-center'>
                <div className='row block' >
                    <div className='col-sm-2 new text-center' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                        <nav>
                            <div>
                                <ul> 
                                <li className='current'> 
                              <i class="fa fa-user" style={{fontSize:"22px"}}></i>  <Link to="/user"><a className='personalnav'>Personal</a></Link>
                                </li>
                                <li>
                                <i class="fa fa-graduation-cap"  style={{fontSize:"22px",color:"white"}}></i> <Link to="/education"><a className='personalnav' >Education</a></Link> 
                                </li>
                                <li >
                                <i class="fa fa-cogs" style={{fontSize:"22px",color:"white",marginRight:"30px"}}></i><Link to="/skill"><a className='skillnav' >Skills</a></Link>
                                </li>
                                <li>
                                <i class="fa fa-history"  style={{fontSize:"22px",color:"white"}}></i> <Link to="/experience"><a className='personalnav'>Experience</a></Link>
                                </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                    <div className='col-sm-10 text-center' style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                     <h3 className='text-center header'>Resume Submission Form</h3>
                        <Personal_details/>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}
