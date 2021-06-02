// // const Spacer = require('react-spacer')
// // const React = require('react')
// // const { render } = require('react-dom')
// import * as React from 'react'
// import Spacer from 'react-spacer'
// import { connect } from 'react-redux';

// // import  { useEffect, useState, useRef } from 'react';
// // import { connect } from 'react-redux';
// // import {  setValueElement } from '../../redux/actions/funnel.action'
// import $ from "jquery";
// // import { actions } from '../Redux/Action/action';



// // const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
// // const { element, user } = props

// // import React from 'react';

// // export default function WrapAll(){
// //     return(
// //         <>
// //         <Configurator></Configurator>
// //               <Top_frame></Top_frame>
// //               <Sidebar_left></Sidebar_left>
// //               <WrapCenter></WrapCenter>
// //         </>
// //     )
// // }



//  function header(props){ 
//   const { allFunnels} = props

//     return (
// <>
//   {/* <div style={{ display: 'flex' }}> */}
//     {/* <div>MyApp</div> */}
//     {/* <Spacer grow='78' /> */}
//     {/* <div>Login</div><br/> */}
//     <Spacer width='200px' height='100px' ><p>{allFunnels}</p><p>I am spacer!</p><p>edit me</p></Spacer>
//     {/* <div>Sign up</div> */}
//   {/* </div> */}

//   </>
//     )

// }
// export default connect(
//   (state) => {
//       return {
//            allfunnels: state.allFunnels,
        
          
//           // iframe: state.funnel.iframe
//       }
//   },
//   )(headerSpacer)

// // export default connect(
// //     (state) => {
// //         return {
// //             styleSpacer: state.funnel.elementInEditing.settings
// //         }
// //     },
// //     (dispatch) => {
// //         return {      
// //           setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },     
// //              setStyleSpacer: (property, newValue) => { dispatch(setStyleSpacer({ property: property, value: newValue })) }}
// //     }
// //   )(HeaderSpacer)


import * as React from 'react'
import Spacer from 'react-spacer'
import { connect } from 'react-redux';

// import  { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
 import {  allFunnels } from '../../redux/actions/funnel.action'
import $ from "jquery";
import { Directions } from '@material-ui/icons';
// import { actions } from '../Redux/Action/action';



// const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
// const { element, user } = props

// import React from 'react';

// export default function WrapAll(){
//     return(
//         <>
//         <Configurator></Configurator>
//               <Top_frame></Top_frame>
//               <Sidebar_left></Sidebar_left>
//               <WrapCenter></WrapCenter>
//         </>
//     )
// }



 function headerSpacer(props){ 
  const { allFunnels} = props
 const p=()=>{
  console.log("ffffffff" +{allFunnels})
}
    return (
<>
  {/* <div style={{ display: 'flex' }}> */}
    {/* <div>MyApp</div> */}
    {/* <Spacer grow='78' /> */}
    {/* <div>Login</div><br/> */}
    <Spacer onClick={p()} width='200px' height='100px'><p>{allFunnels}</p><p>I am spacer!</p><p>edit me</p></Spacer>
    {/* <div>{allFunnels.toString()}</div> */}
    {/* <div>Sign up</div> */}
  {/* </div> */}

  </>
    )

}
export default connect(
  (state) => {
      return {
           allFunnels: state.allFunnels,
        
          
          // iframe: state.funnel.iframe
      }
  },
  )(headerSpacer)

// export default connect(
//     (state) => {
//         return {
//             styleSpacer: state.funnel.elementInEditing.settings
//         }
//     },
//     (dispatch) => {
//         return {      
//           setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },     
//              setStyleSpacer: (property, newValue) => { dispatch(setStyleSpacer({ property: property, value: newValue })) }}
//     }
//   )(HeaderSpacer)
