import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Education from './Education';
import Personal_details from './Personal_details';
import Sidenav from './Sidenav';
import React from 'react'

export default function Newfile() {
    return (
        <>
        
            <Tabs>
                <div className='row'>
                    <div className='col-sm-2'>
                        <TabList className="new">
                            <Tab>Personal</Tab>
                            <Tab>Education</Tab>
                            <Tab>Skills</Tab>
                            <Tab>Experience</Tab>
                        </TabList>
                    </div>
                    <div className='col-sm-10'>
                        <div className='header'>
                            <h2>Resume Submission Form</h2>
                            <hr></hr>
                        </div>
                        {/* <Sidenav/> */}
                        <TabPanel>
                            <Personal_details />
                        </TabPanel>
                        <TabPanel>
                            <Education/>
                            <h1>Education</h1>
                        </TabPanel>
                    </div>
                </div>


            </Tabs>
        </>
    )
}