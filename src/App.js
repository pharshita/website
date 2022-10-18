import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Home from './components/Home/Index'
import { Services } from './components/Services/Index';
import Itservices from './components/Itservices';
import Contact from './components/Contact';
import Gallery from './components/Gallery/index';
import ScrollToTop from 'react-scroll-to-top';
import Herosection from './components/Homepage/Hero-section/Index';
import Career from './components/Career';
import React,{useEffect} from 'react';
import SigninWithGoogle from './components/SigninWithGoogle/SigninWithGoogle';
import OpeningsDetails from './components/Career/OpeningDetails';


import Newfile from './Containers/Newfile';
import Education from './Containers/Education';
import SideNav from './Containers/Sidenav';
import Date from './Containers/Date';
import Skill from './Containers/Skill';
import Experience from './Containers/Experience';
import Resume1 from './Containers/Resume1';
import All_Resume from './Containers/All_Resume';
import Resume2 from './Containers/Resume2';
import Education_form from './Containers/Education_form';
import Signin from './Containers/Signin';
import Signup from './Containers/Signup';
import Resume3 from './Containers/Resume3';
import Resume4 from './Containers/Resume4';
import Resume5 from './Containers/Resume5';
import Resume6 from './Containers/Resume6';
import Resume7 from './Containers/Resume7';
import Basic from './Containers/Basic';
import Professional from './Containers/Professional';
import Tamplates from './Containers/Tamplates';
import Resume8 from './Containers/Resume8';
import Resume9 from './Containers/Resume9';
import Resume10 from './Containers/Resume10';
import Resume11 from './Containers/Resume11';
import Education2 from './Containers/Education2';
import Page1 from './Containers/Page1';
import Forgot_pass from './Containers/Forgot_pass';
import Change_password from './Containers/Change_password';
import Verify_code from './Containers/Verify_code';

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/itservice' element={<Itservices />}/>
          <Route path='/Contact-us' element={<Contact />}/>
          <Route path='/Gallery' element={<Gallery />}/>
          <Route path='/Herosection' element={<Herosection />}/>
          <Route path='/Career' element={<Career />}/>
          <Route path='/login' element={<SigninWithGoogle />}/>
          <Route path='/Opening_Details' element={<OpeningsDetails />}/>

          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/user' element={<SideNav />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/date' element={<Date />}></Route>
          <Route path='/skill' element={<Skill />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/all_resume' element={<All_Resume />}></Route>
          <Route path='/resume1' element={<Resume1 />}></Route>
          <Route path='/resume2' element={<Resume2 />}></Route>
          <Route path="/resume3" element={<Resume3 />}></Route>
          <Route path="/resume4" element={<Resume4 />}></Route>
          <Route path="/resume5" element={<Resume5 />}></Route>
          <Route path="/resume6" element={<Resume6 />}></Route>
          <Route path="/resume7" element={<Resume7 />}></Route>
          <Route path="/resume8" element={<Resume8 />}></Route>
          <Route path="/resume9" element={<Resume9 />}></Route>
          <Route path="/resume10" element={<Resume10 />}></Route>
          <Route path="/resume11" element={<Resume11 />}></Route>
          <Route path="/basic" element={<Basic />}></Route>
          <Route path="/profession" element={<Professional />}></Route>
          <Route path="/tamplates" element={<Tamplates />}></Route>
          <Route path="/education2" element={<Education2/>}></Route>
          <Route path="/Welcome_page" element={<Page1/>}></Route>
          <Route path="/forgot_password" element={<Forgot_pass/>}></Route>
          <Route path="/change_password" element={<Change_password/>}></Route>
          <Route path="/verify" element={<Verify_code/>}></Route>
          
        </Routes>
      </Router>
      <ScrollToTop smooth color="#6f00ff" />
    </>
  );
}


export default App;
