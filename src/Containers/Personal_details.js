import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, NGROK_URL } from '../config';

export default function Personal_details() {

    const[selectfile,setselectfile]=useState("")
    const [file, setFile] = useState();
   

    const [ProfileData, setProfileData] = useState({
        first_name: '',
        last_name: '',
        profession: '',
        city: '',
        country: '',
        pin_code: '',
        email: '',
        social_links: '',
        profile_summary: '',
        phone_number:''

    })

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setProfileData({ ...ProfileData, [name]: value });
      });

      const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }      }
       
    const SavePersonalData = async () => {
        let data = new FormData()


        data.append('profile_image',selectfile)
        data.append('first_name',ProfileData.first_name)
        data.append('last_name',ProfileData.last_name)
        data.append('profession',ProfileData.profession)
        data.append('city',ProfileData.city)
        data.append('country',ProfileData.country)
        data.append('pin_code',ProfileData.pin_code)
        data.append('email',ProfileData.email)
        data.append('social_links',ProfileData.social_links)
        data.append('profile_summary',ProfileData.profile_summary)
        data.append('phone_number',ProfileData.phone_number)
// debugger
     axios.post(`${BASE_URL}/api/user/`, data, config)
        // await axios.post(`${NGROK_URL}/api/user/`, data, config)
       
        .then((res) => {
        window.localStorage.setItem('id', JSON.stringify(res.data.id))
        // document.getElementById("savebtnid").style.display = "none"
        // document.getElementById("nextbtnid").style.display = "block"
        window.location.href = "/education";
        }).catch((err) => {
            console.log(err)
        })
        console.log(data)
    }
 const handlefilesubmite=(e)=>{
    
    setselectfile(e.target.files[0])
    setFile(URL.createObjectURL(e.target.files[0]));
 }

//  console.log(ProfileData)
//  console.log(selectfile)
function ValidateEmail() {
    var email1 = document.getElementById("txtEmail");
    var lblError = document.getElementById("lblError");
    lblError.innerHTML= "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!expr.test(ProfileData.email)) {
        lblError.innerHTML = "Invalid email please use @gmail.com.";
    }
}

function Validatephone() {
    var phoneError = document.getElementById("phoneError");
    if(ProfileData.phone_number.length!=10){
        phoneError.innerHTML = "Please put 10 digit mobile number";
    }
    
    else{
        phoneError.innerHTML = "";

    }
}
function Validatepincode() {
    var pinerror = document.getElementById("pinerror");
    if(ProfileData.pin_code.length!=6){
        pinerror.innerHTML = "Please put 6 digit pin code";
    }
    
    else{
        pinerror.innerHTML = "";

    }
}

    return (
        <>
            <div className=' text-center'>

                <h4 style={{ margin: "50px 0px", color: "#3c3440c" }}>Fill Your Personal Information</h4>
            </div>
            <div className=' text-center navtab '>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                </Box>
                <div className='row namedata' >
                <div className='col-lg-12 col-md-12 col-sm-12 d-flex '>
                <input type="file" className='' onChange={handlefilesubmite} name="profile_image"></input>
                <img src={file} />
                 </div>
                </div>

                <div className='row namedata d-flex' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Full Name:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-12 mb-2 '>
                        <TextField id="outlined-basic" label="Enter first name" value={ProfileData.first_name} onChange={handleOnChange} name="first_name" variant="outlined"
                            autoComplete="off"
                        />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-12'>
                        <TextField id="outlined-basic" label="Enter Last name" value={ProfileData.last_name} onChange={handleOnChange} name="last_name" variant="outlined"
                            autoComplete="off"
                        />

                    </div>
                </div>

                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Summary:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 '>
                        <textarea className='form-control' value={ProfileData.profile_summary} onChange={handleOnChange} name="profile_summary" autoComplete="off"></textarea>

                    </div>

                </div>
                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Email:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 '>
                        <input className='form-control' value={ProfileData.email} onChange={handleOnChange} name="email" autoComplete="off" onKeyUp={ValidateEmail}></input>
                        <p style={{color:"red" }} id="lblError"></p>
                    </div>

                </div>
                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Social Link:</h5>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 '>
                        <input className='form-control' value={ProfileData.social_links} onChange={handleOnChange} name="social_links" autoComplete="off"/>
                    </div>

                </div>

                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'> Profession:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 '>
                        <TextField id="outlined-basic" value={ProfileData.profession} onChange={handleOnChange} label="profession" variant="outlined" name='profession'
                            autoComplete="off"
                        />
                    </div>

                </div>

                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Phone:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                   
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" onKeyUp={Validatephone}  className="txtphone"
                            value={ProfileData.phone_number} name="phone_number" onChange={handleOnChange} autoComplete="off" 
                        />
                    <p style={{color:"red" }} id="phoneError"></p>
                    </div>
                </div>
                 
                 <div className='row namedata' >
                 <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Pin Code:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                 <div className='col-lg-4 col-md-4 col-sm-12 '>
                        <TextField id="outlined-basic" label="Pin Code" variant="outlined" onKeyUp={Validatepincode}
                            value={ProfileData.pin_code} onChange={handleOnChange} name="pin_code" autoComplete="off"
                        />
                        <p style={{color:"red" }} id="pinerror"></p>
                    </div>
                 </div>


                <div className='row namedata' >
                    <div className='col-lg-2 col-md-2 col-sm-12 d-flex' >
                        <h5 className='mt-2'>Country:</h5><i className="fa fa-snowflake-o Tabicons"></i>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 mb-2' >

                        <select id="country" value={ProfileData.country} name="country" onChange={handleOnChange}  class="form-control" style={{ width: "281px", height: "57px" }}>
                            <option value="value" selected>Select Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <TextField id="outlined-basic" value={ProfileData.city} onChange={handleOnChange} label="City" variant="outlined"
                            name="city" autoComplete="off"
                        />
                    </div>
                </div>
              
              
                <div className='btn col-lg-9 col-sm-12' >

                    <button onClick={SavePersonalData} id="savebtnid" style={{ display: "block", padding:" 10px 20px",backgroundColor: "#6426ea",border: "none",color: "white",marginRight: "-30px" }}>Save</button>
                    {/* <Link to="/education"><button id="nextbtnid" style={{ display: "none", padding:" 10px 20px",backgroundColor: "#353232",border: "none",color: "white",marginRight: "-30px" }} className="nextbtn">Next</button></Link> */}
                </div>
               </div>
        
        </>
    )
}
