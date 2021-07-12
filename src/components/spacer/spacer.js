

// import * as React from 'react'
// import Spacer from 'react-spacer'
// import { connect } from 'react-redux';

// // import  { useEffect, useState, useRef } from 'react';
// // import { connect } from 'react-redux';
// import $ from "jquery";
// import { Directions } from '@material-ui/icons';
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



//  function headerSpacer(props){ 
//   const { element} = props
// console.log(element)
//     return (
// <>
 
//    <Spacer  width='100%' height={element.height+'vh'}/>

// {/* <div style={{
//            // backgroundColor:element.color,
//             // marginTop:item.margin+"vh" ,
//             // marginBottom:item.margin+"vh" ,
//             height:element.height+'vh'
//             }}>
                
//    </div>  */}

//   </>
//     )

// }
// export default connect(
//   (state) => {
//       return {
//            allFunnels: state.allFunnels,
        
 
//       }
//   },
//   )(headerSpacer)



import * as React from 'react'
import Spacer from 'react-spacer'
import { connect } from 'react-redux';

// import  { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
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
  const { element} = props
console.log(element)
    return (
<>
 
   <Spacer  width='100%' height={element.height+'vh'}/>

{/* <div style={{
           // backgroundColor:element.color,
            // marginTop:item.margin+"vh" ,
            // marginBottom:item.margin+"vh" ,
            height:element.height+'vh'
            }}>
                
   </div>  */}

  </>
    )

}
export default connect(
  (state) => {
      return {
           allFunnels: state.allFunnels,
        
 
      
          }
  },
  )(headerSpacer)

