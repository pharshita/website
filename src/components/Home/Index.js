import React from 'react'
import Aboutus from '../Aboutus'
import BuisnessDesign from '../BuisnessPlan/Index'
import Footer from '../Footer'
import Itservices from '../Itservices'
import Navbar from '../Navbar'
import Other_box from '../Other_box'
import Testimonials from '../Testimonials/index'
import Herosection from "../Homepage/Hero-section/Index"
import Works from '../Works'
import Form from '../Form'
import "./style.css"
import { Zoom } from 'react-reveal'

const Home = () => {
    const styles = {
        Navbar: {
            background: 'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
            // height: '100vh'
        }
    }
    

    return (
        <>
            <div className='navbarHome' style={styles.Navbar}>
                <Navbar />
                <Herosection />
            </div>
            <Itservices />
            <Zoom>
            <Works />
            </Zoom>
            <Other_box />
            <Zoom>
            <BuisnessDesign />
            </Zoom>
            <Testimonials />
            <Zoom>
            <Form />
            </Zoom>
            <Footer />
        </>
    )
}
export default Home
