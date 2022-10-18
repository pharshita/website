import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import Navbar from "../Navbar";
import "./style.css"
import Footer from "../Footer"
import { margin } from "@mui/system";




class Gallery extends Component {
  render() {
    var data = [
      {
        url:
          `${require('../../Assets/Images/Gallary/1.jpg')}`,
        thumbUrl:
        `${require('../../Assets/Images/Gallary/1.jpg')}`
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/2.jpg')}`,
        title: "Cyclist competition",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/2.jpg')}`,
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/3.jpg')}`,
        title: "Cyclist competition",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/3.jpg')}`,
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/4.jpg')}`,
        title: "Drops",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/4.jpg')}`,
      },

      {
        url:
         `${require('../../Assets/Images/Gallary/5.jpeg')}`,
        title: "Bird",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/5.jpeg')}`
      },
    
      {
        url:
        `${require('../../Assets/Images/Gallary/7.jpg')}`,
        title: "Mountains",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/7.jpg')}`
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/6.jpg')}`,
        title: "Blue river",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/6.jpg')}`
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/8.JPG')}`,
        title: "Blue river",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/8.JPG')}`
      },
      {
        url:
        `${require('../../Assets/Images/Gallary/9.jpg')}`,
        title: "Blue river",
        thumbUrl:
        `${require('../../Assets/Images/Gallary/9.jpg')}`
      },
    ];

    const styles = {
        Navbar: {
          background: 'linear-gradient(60deg,#523FFF 0%,#750ED5 100%)',
          height: 'auto'
        }
      }

    return (
        <>
        <div className="navbr" style={styles.Navbar}>
        <Navbar />
        </div>
      <div className="gallerydata" >
        <DztImageGalleryComponent images={data} />
      </div>
      <div>
        <Footer />
      </div>
        </>
    );
  }
}
export default Gallery  