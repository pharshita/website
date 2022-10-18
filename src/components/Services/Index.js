import React from 'react'
import { Parallax } from 'react-parallax'
import Footer from '../Footer'
import Navbar from '../Navbar'
import '../Services/style.css'
import ServiceCards from './ServiceCards/Index'
import webicon from "../../Assets/PNG/web-design.png"
import software from "../../Assets/PNG/software.png"
import develope from "../../Assets/PNG/develope.png"
import developer from "../../Assets/PNG/developer.png"
import humanresources from "../../Assets/PNG/human-resources.png"
import ecom from "../../Assets/PNG/ecom.png"
import saving from '../../Assets/PNG/savings.png'
import badge from '../../Assets/PNG/badge.png'
import mvp from '../../Assets/PNG/mvp.png'
import Itservices from '../Itservices'

export const Services = () => {
  
  const styles = {
    Navbar: {
      background: 'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
      height: '400px'

    }
  }
  return (
    <>
      <div className="services entry-banner" id="servicesMain" style={styles.Navbar}>
        <Navbar />

        <div className="heading">
          <h1 className='text-light justify-content-center d-flex align-items-center'>Our Services</h1>
        </div>
      </div>
      <div className="container carddata">
        <div className="row cardrow mb-5">
          <ServiceCards
            logo={software}
            title="Software Development"
            data="BridgeFix develops quality software and offers related services –
        software consulting, cloud migration, app integration, and more.
        " />
          <ServiceCards
            logo={develope}
            title="Website Development"
            data="BridgeFix's web developers help brands succeed in the ever-changing
        digital landscape by creating customer-focused, customer-centric website solutions.
        " />
          <ServiceCards
            logo={developer}
            title="Full Stack Development"
            data="Full-stack developers from BridgeFix are skilled in everything from the concept and idea to the finished product.
        " />
          <ServiceCards
            logo={webicon}
            title="Website Design"
            data=" You can rely on our team of designers and developers to produce the product you are looking for across a range of platforms and devices." />
          <ServiceCards
            logo={humanresources}
            title="HR Portals"
            data="We create secure, fast, and robust HR portals using the latest technologies. Our team always finds the best solution for you." />
          <ServiceCards
            logo={ecom}
            title="E-Commerce Development"
            data="
            We offer all the skills necessary for the success of your eCommerce project under one roof with BridgeFix." />

          <ServiceCards
            logo={saving}
            title="
            Fundraising Platform"
            data=" BridgeFix is one of the leading fundraising platform development companies to provide you with readymade equity and real estate solutions.
        " />
          <ServiceCards
            logo={badge}
            title="MVP Development"
            data="BridgeFix develops your Minimum Viable Product (MVP) and gives you valuable insights into what your customers believe is viable.
        " />
          <ServiceCards
            logo={mvp}
            title="PM tools Development"
            data="BridgeFix project management solutions support small and large businesses by engrossing and automating all the projects and clients." />
        </div>
      </div>
      <div className='addsevricesec'>
        
        <Itservices />
      </div>
      <Footer />
    </>
  )
}
