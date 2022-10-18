import React from 'react'
import './style.css'

const BuisnessDesign = () => {

    const styles = {
        p: {
            color: '#646464',
            fontWeight: 400,
            textAlign: 'justify',
            marginBottom: 40,
           
        },
        contentt: {
            color: '#444',
            fontWeight: 500,
            fontSize: '1.125rem',
            fontStyle: 'italic',
        },
        button:{
            width:'150px',
            height:'50px',
            display:'flex',
            justifyContent:"center",
            alignItems:'center',
            background:'linear-gradient(60deg,#5a49f8 0%,#7a64f2 100%)'
        },
        list:{
            color: '#646464',
            fontWeight: 400,
            textAlign: 'justify',
            marginBottom: 40,
            marginTop:-10,
            marginLeft:0,
            paddingLeft:14,
            listStyle:'none'
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row p-2">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={require('../../Assets/Images/PNG/buisness1.png')} width="100%" alt="" srcset="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ flexDirection: 'column',paddingLeft:20 }}>
                        <div className="heading1" style={{ flexDirection: 'column' }}>
                            <h1 className='mb-4'>
                            We Consultant to Get Business Plan
                            </h1>
                            <h5 style={styles.contentt}>
                            A business plan is the cornerstone of any successful company, regardless of size or industry. This step-by-step guide provides information on writing a business plan for organizations at any stage.
                            </h5>
                        </div>
                        <div className="subHeading">
                            <p style={styles.p}>
                            A business plan is a document that communicates a company’s goals and ambitions, along with the timeline, finances, and methods needed to achieve them. Additionally, it may include a mission statement and details about the specific products or services offered.
                            </p>
                        </div>
                        <div className="list">
                            <ul style={styles.list}>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Product goals and deadlines for each month.</li>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Monthly financials for the first two years.</li>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Profit and loss statements for the first three to five years.</li>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Balance sheet projections for the first three to five years.</li>
                            </ul>
                        </div>
                        {/* <div className="readmore">
                            <div className="btn btn-primary" style={styles.button}> 
                                Read More
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div class="indicator-container has-animation active-animation">
				<div class="indicator-wrap">
					<svg class="dash-left" width="675" height="206">
					<g fill="none" stroke-width="2">
					<path class="dashed1" stroke="grey" stroke-dasharray="6, 6" stroke-linecap="butt" stroke-linejoin="miter" d="M3.000,0.995 L3.000,100.997 L673.000,101.994 L673.000,207.995"></path>
					<path class="dashed2" stroke="grey" stroke-dasharray="6, 6" stroke-linecap="butt" stroke-linejoin="miter" d="M3.000,0.995 L3.000,100.997 L673.000,101.994 L673.000,207.995"></path>
					</g>
					</svg>
					<div class="indicator-img-right">
						<div class="translate-top-50 opacity-animation transition-100 transition-delay-2500">
							<img width="42px" height="53px" loading="lazy" src="https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/themes/digeco/assets/element/element2.png" alt="element" />
						</div>
					</div>
				</div>
			</div>
            <div className="container">
            <div className="row data1">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="headingg" style={{ flexDirection: 'column',marginTop:-20 }}>
                            <h1 className='mb-4' style={{fontSize:'2.6rem',fontWeight:700}}>
                            Our Strength is Cross Boundary Teamwork Done.
                            </h1>
                        </div>
                        <div className="subHeading">
                            <p style={styles.p}>
                            A cross-boundary team creates a unique working environment.A cross-boundary team is one consisting of experts from diverse disciplines.The primary challenge in merging such a team for innovation is blurring the knowledge barriers they may have.
                            </p>
                        </div>
                        <div className="list">
                            <ul style={styles.list}>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Cross-boundary teams bring people from diverse disciplines, backgrounds, countries, cultures, languages together to achieve a common goal.</li>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Frequently cross-boundary teams do not achieve the expected results because they are not able to integrate. </li>
                                <li> <img src={require("../../Assets/PNG/right.png")} width="4%" alt="" srcset="" style={{marginRight:6}} />Team mental models and transactive memory are factors in building a cross-functional team</li>
                            </ul>
                        </div>
                        {/* <div className="readmore">
                            <div className="btn btn-primary" style={styles.button}> 
                                Read More
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 buisness2" style={{ flexDirection: 'column'}}>
                    <img src={require('../../Assets/Images/PNG/buisness2.png')} width="100%" alt="" srcset="" />
                    </div>
                </div>
            </div>

            <div class="indicator-container has-animation active-animation">
				<div class="indicator-wrap">
					<svg class="dash-right" width="675" height="206">
					<g fill="none" stroke-width="2">
					<path class="dashed1" stroke="grey" stroke-dasharray="6, 6" stroke-linecap="butt" stroke-linejoin="miter" d="M673.000,0.995 L673.000,100.996 L3.000,101.996 L3.000,207.996"></path>
					<path class="dashed2" stroke="grey" stroke-dasharray="6, 6" stroke-linecap="butt" stroke-linejoin="miter" d="M673.000,0.995 L673.000,100.996 L3.000,101.996 L3.000,207.996"></path>
					</g>
					</svg>
					<div class="indicator-img-left">
						<div class="translate-top-75 opacity-animation transition-100 transition-delay-2500">
							<img width="42px" height="53px" loading="lazy" src="https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/themes/digeco/assets/element/element2.png" alt="element" />
						</div>
					</div>
				</div>
			</div>

            <div className="container mb-4 pb-4">
                <div className="row p-2 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={require('../../Assets/Images/PNG/buisness3.png')} width="90%" alt="" srcset="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ flexDirection: 'column',paddingLeft:20 }}>
                        <div className="heading1" >
                            <h1 className='mb-2'>
                            Work Planing
                            </h1>
                        </div>
                        <div className="subHeading">
                            <p style={styles.p}>
                            Work plans show all the tasks involved in a project, who is responsible for each task, and when the tasks will be completed. Once your project has started the work plan is used as a monitoring tool to check whether your project is on-track.Project plans help us strategize a path to project success, allowing us to consider the factors that will impact our project, from stakeholders to budget to schedule delays, and plan how to maximize or mitigate these factors.
                            </p>
                        </div>
                        <div className="licontent mb-4" style={{marginTop:-10}}>
                            <h5 style={{fontWeight:700}}>
                          <img src={require("../../Assets/PNG/check.png")} width="4%" alt="" srcset="" />  Establish Project Scope And Metrics
                            </h5>
                            {/* <p className='px-4'>
                            Clearly define your project’s scope or overall purpose.
                            </p> */}
                            <h5 style={{fontWeight:700}}>
                            <img src={require("../../Assets/PNG/check.png")} width="4%" alt="" srcset="" />  Identify Key Stakeholders 
                            </h5>
                            {/* <p className='px-4'>
                            List individuals or groups who will be impacted by the project.
                            </p> */}
                            <h5 style={{fontWeight:700}}>
                            <img src={require("../../Assets/PNG/check.png")} width="4%" alt="" srcset="" />  Outline Deliverables 
                            </h5>
                            {/* <p className='px-4'>
                            Clearly outline your project’s concrete and tangible deliverables or outcomes.
                            </p> */}
                            <h5 style={{fontWeight:700}}>
                            <img src={require("../../Assets/PNG/check.png")} width="4%" alt="" srcset="" />  Develop Tasks
                            </h5>
                            {/* <p className='px-4'>
                            List any resources you will need to accomplish these tasks.
                            </p> */}
                            <h5 style={{fontWeight:700}}>
                            <img src={require("../../Assets/PNG/check.png")} width="4%" alt="" srcset="" />  Assign Tasks And Deadlines
                            </h5>
                            {/* <p className='px-4'>
                            Highlight dates that are inflexible and factor in task dependencies. Add in milestones or checkpoints to monitor progress and celebrate successes.
                            </p> */}
                        </div>
                        {/* <div className="readmore">
                            <div className="btn btn-primary" style={styles.button}> 
                                Read More
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default BuisnessDesign
