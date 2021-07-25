// import React, { useEffect, useState, useRef } from 'react';

// import { connect } from 'react-redux';

// // import "../../assets/webfonts"
//  import "./Form.css";




//  export  default function Form() {

//     return (
//     <>
//             <div class="form_wrapper">
//                 <div class="form_container">
//                     <div class="title_container">
//                         <h2>Responsive Registration Form</h2>
//                     </div>
//                     <div class="row clearfix">
//                         <div class="">
//                             <form>
//                             {/* <a href="#" class="nav-link social-link"><i class="fas fa-envelope fa-3x"></i></a> */}
//                                 <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
//                                     <input type="email" name="email" placeholder="Email" required />
//                                 </div>
//                                 <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
//                                     <input type="password" name="password" placeholder="Password" required />
//                                 </div>
//                                 <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
//                                     <input type="password" name="password" placeholder="Re-type Password" required />
//                                 </div>
//                                 <div class="row clearfix">
//                                     <div class="col_half">
//                                         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
//                                             <input type="text" name="name" placeholder="First Name" />
//                                         </div>
//                                     </div>
//                                     <div class="col_half">
//                                         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
//                                             <input type="text" name="name" placeholder="Last Name" required />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="input_field radio_option">
//                                     <input type="radio" name="radiogroup1" id="rd1"/>
//                                         <label for="rd1">Male</label>
//                                         <input type="radio" name="radiogroup1" id="rd2"/>
//                                             <label for="rd2">Female</label>
//                           </div>
//                                         <div class="input_field select_option">
//                                             <select>
//                                                 <option>Select a country</option>
//                                                 <option>Option 1</option>
//                                                 <option>Option 2</option>
//                                             </select>
//                                             <div class="select_arrow"></div>
//                                         </div>
//                                         <div class="input_field checkbox_option">
//                                             <input type="checkbox" id="cb1"/>
//                                                 <label for="cb1">I agree with terms and conditions</label>
//             </div>
//                                             <div class="input_field checkbox_option">
//                                                 <input type="checkbox" id="cb2"/>
//                                                     <label for="cb2">I want to receive the newsletter</label>
//             </div>
//                                                 <input class="button" type="submit" value="Register" />
//         </form>
//                                         </div>
//     </div>
//                                 </div>
// </div>
//                             <p class="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p>
// </>
// )
// }


import React, { useEffect, useState, useRef } from 'react';

import { connect } from 'react-redux';

// import "../../assets/webfonts"
 import "./Form.css";




 export  default function Form() {

    return (
    <>
           
<form className='d-flex flex-column align-items-center justify-content-center m-2 divEmptyElement'>
                <h3>Form</h3>

                <div className="form-group">
                    <label>First name</label>
                    <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                {/* <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p> */}
            </form>


</>
)
}