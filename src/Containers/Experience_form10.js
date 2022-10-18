import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
import { Chip } from '@mui/material';
import Experience_form11 from './Experience_form11';
import { BASE_URL, NGROK_URL } from '../config';
// import Editor from 'material-ui-editor'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from 'draft-js';
export default function Experience_form10() {

    const [discriptionData, setdiscriptionData] = useState(null)
    const [inputData, setInputData] = useState([])
    // const newarr = []
    const openBox = () => {
        // debugger

        // console.log([...inputData,newarr])
        // newarr.push(discriptionData)
        var myJsonString = JSON.stringify(discriptionData);
        // console.log(myJsonString)
        setInputData([...inputData, myJsonString])

        setdiscriptionData(document.getElementsByClassName("removedata").value = "")


    }
    const handlechangedata = (e) => {
        setdiscriptionData(e.target.value)
    }
    // console.log(inputData)
    // console.log(typeof(myJsonString))


    // const [editorState, setEditorState] = useState(EditorState.createEmpty())
    // const [values, setValues] = useState()

    // console.log(editorState)




    const [addeducations, setaddeducations] = useState(false)
    const opennewbox = () => {
        setaddeducations(true)
        document.getElementById("addmorebtn").style.display = "none"
        document.getElementById("nextbtnid").style.display = "none"

    }
    const [Workdata, setWorkdata] = useState({
        job_title: '',
        Company_name: '',
        city: '',
        country: '',
        start_date: '',
        end_date: '',
        job_discription: '',
        project_name: '',
        project_urls: '',

    })


    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setWorkdata({ ...Workdata, [name]: value });
    });


    // const onEditorStateChange = useCallback((rawcontent) => {
    //     // debugger

    //     setEditorState(rawcontent.blocks[0].text);

    // },
    //     [editorState]
    // );


    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const savedata = () => {
        const id = window.localStorage.getItem('id')
        let data = new FormData()
        data.append('user', id)
        data.append('job_title', Workdata.job_title)
        data.append('Company_name', Workdata.Company_name)
        data.append('city', Workdata.city)
        data.append('country', Workdata.country)
        data.append('start_date', Workdata.start_date)
        data.append('end_date', Workdata.end_date)
        data.append('job_discription', inputData)
        data.append('project_urls', Workdata.project_urls)
        data.append('project_name', Workdata.project_name)
        // http://127.0.0.1:8000/admin/

        axios.post(`${BASE_URL}/api/experience/`, data, config)
            // axios.post(`${NGROK_URL}/api/experience/`, data, config)

            .then((res) => {
                // console.log(res)
                window.localStorage.setItem('data10', JSON.stringify(inputData))
                document.getElementById("nextbtnid").style.display = "block"
                document.getElementById("addmorebtn").style.display = "block"
                document.getElementById("savebtnid").style.display = "none"
            }).catch((err) => {
                console.log(err)
            })
    }
    // debugger

    // const handleReturn = (e)=>{
    //     // setEditorState(e.target.innerText)

    //     let n=e.target.firstChild.lastChild.childElementCount
    //     setValues(editorState+ "\n" +e.target.firstChild.lastChild.innerText)    
    // }

    // e.target.firstChild.lastChild.firstChild.nextElementSibling.innerText
    // e.target.firstChild.lastChild.childElementCount
    return (
        <div>
            {
                addeducations ? <Experience_form11 /> : ""
            }
            <div className='ml-5'>

                <div className='row namedata' style={{ textAlign: "left" }}>

                    <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
                        <TextField id="outlined-basic" label=" job_title" variant="outlined" className='formate1'
                            value={Workdata.job_title} onChange={(e) => handleOnChange(e)} name="job_title" autoComplete="off"
                        />
                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-12 mt-3">
                        <TextField id="outlined-basic" label=" Company_name" variant="outlined" className='formate1'
                            value={Workdata.Company_name} onChange={handleOnChange} name="Company_name" autoComplete="off"
                        />
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3'>
                        <TextField id="outlined-basic" label=" Project Name" variant="outlined" className='formate1'
                            value={Workdata.project_name} onChange={handleOnChange} name="project_name" autoComplete="off"
                        />
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3'>
                        <TextField id="outlined-basic" label=" url" variant="outlined" className='formate1'
                            value={Workdata.project_urls} onChange={handleOnChange} name="project_urls" autoComplete="off"
                        />
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3'>
                        <TextField id="outlined-basic" label="City" variant="outlined" className='formate1'
                            value={Workdata.city} onChange={handleOnChange} name="city" autoComplete="off"
                        />
                    </div>


                </div>

                {/*  */}

                <div className='row namedata ' style={{ textAlign: "left", marginTop: "30px" }}>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3' >

                        <select id="country" value={Workdata.country} onChange={handleOnChange} name="country" className="form-control formate1" style={{ height: "57px" }}>
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
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3'>

                        <div className='dateformate'>
                            <input type="date" value={Workdata.start_date} onChange={handleOnChange} name="start_date" style={{ paddingLeft: "15px", paddingRight: "15px" }} autoComplete="off" />
                            <p style={{ margin: "10px 10px" }}>Start date</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3'>
                        <div className='dateformate'>
                            <input type="date" value={Workdata.end_date} onChange={handleOnChange} name="end_date" style={{ paddingLeft: "15px", paddingRight: "15px" }} autoComplete="off" />
                            <p style={{ margin: "10px 10px" }}>End date</p>

                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12 mt-3'>
                        <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className=''>
                                <TextField id="outlined-basic" className="removedata" label="Your Roles" variant="outlined" onChange={handlechangedata} value={discriptionData} autoComplete="off"
                                    sx={{ width: "230px" }} />
                            </div>
                            <div className=' mt-2'>
                                <button onClick={openBox} style={{ backgroundColor: "#cbb78d", border: "none", padding: "7px 10px", color: "black" }}>Add More Points</button>
                            </div>

                        </div>
                        <div className='points col-lg-7  col-md-7  col-sm-12  mt-3 text-left mb-3'>

                            {

                                inputData.map((items, key) => {
                                    return (
                                        <p key={key} >*&nbsp;{items.slice(1, items.length - 1)}</p>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>



                <div className='row' style={{ textAlign: "left" }}>
                    <div className='navtab1 d-flex mt-3 ml-3' >

                        <div className='btn2'>
                        <Link to="/all_resume"><button id="nextbtnid" style={{ display: "none",backgroundColor:"#6a1de2" }} className="nextbtn">Show Resume</button></Link>

                            <button onClick={savedata} id="savebtnid" style={{ display: "block" }}>Submit Form</button>

                        </div>
                        <div className='btn'>
                        <button onClick={opennewbox} id="addmorebtn" className='btn btn-primary' style={{ display: "none", backgroundColor: "#cbb78d",color:"black" }}>+</button>

                        </div>


                    </div>



                </div>
                <hr style={{ height: "1px", backgroundColor: "#49444385" }}></hr>
                {/*  */}
            </div>


        </div>
    )
}
