// import * as React from 'react'
// import  { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import {  setValueElement } from '../../redux/actions/funnel.action'//, setStyleIcon

// import { IconPicker } from 'react-fa-icon-picker'

// import { useSelector, useDispatch } from 'react-redux';
// import { useDropzone, onDragOver } from 'react-dropzone'
// import $ from "jquery";
// // import { actions } from '../Redux/Action/action';

//  function  SelectIcon(props)  {
//   debugger

//    const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
//    const { element, setValueElement, user } = props

//    // icon="Fa"+icon;
//   // const [value, setValue] = React.useState(item.path)
//   // const dispatch = useDispatch();
//   const [value, setValue] = useState("FaSearch")
//   let styles = 
//    $(".bhdLno").addClass("iWQjhW","sc-bdvvaa","eZLagJ" )
         
 
     
   
  
//   const  local_icon=()=>{
//     console.log("yyyyyyyyyyyyyyy");
//     // setValue(v)
//     console.log("lllllllll");

//     setStyleIcon('width', '50px')
//     setStyleIcon('height', '10px')
//     setStyleIcon('color', 'green')
//     setStyleIcon('link', 'http://mailer.codes')
  
//     // setImage(url)
//   }

//   return (

//     <div>

// {/* <IconPicker value={value} onChange={(v) => setValue(v)} /> */}

//       <IconPicker className="aaa" style={styles}
       
//       value={value} onLoud={local_icon()} size={24} color="#000"
//         buttonStyles={{
//           // backgroundColor: "white",
//           // color: "black",
//           position: "relative",
//           padding: "0px !important",
//           width: "0px !important",
//           minHeight: "20px !important",
//           justifyContent: " left !important",
//           alignItems: "center !important",
//           // border: " none !important",
//           // border: "1px solid !important",
//           // borderRadius: "2px",
//           // borderColor: "black"

//         }}
//         searchInputStyles ={{
//           // color:'red'
//           fontSize:'20px',
//           fontStyle:'bold',
//           // fontFamily:'Rubik'
//         }}
//         containerStyles={{

//           maxHeight: "200px !important",
//           // border: "none !important",
//           marginLeft: "130px !important",
//           width:"14vw !important",
//           // backgroundColor: "#ffffff !important"
//         }}
//         buttonIconStyles={{
//           marginTop: "3px",
//           // // color: "green",
//           //  border: "1px paper",
//           fontSize: "60px",
//           // 
//           //  color:{element.color}
//         }}
//         onChange={(v) => setValue(v)}
//         style={element.settings.color}
//         //   dispatch(actions.setItemSignature({ index: item.index, act: "path", content: v }));
//          ></IconPicker>
//     </div>
//   )
// }

// export default connect(
//   (state) => {
//       return {
//           styleIcon: state.funnel.elementInEditing.settings
//       }
//   },
//   (dispatch) => {
//       return {      
//         setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },     
//           //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
//           }
//   }
// )(SelectIcon)





// // export default connect(
// //   (state) => {
// //       return {
// //           user: state.user
// //       }
// //   },
// //   (dispatch) => {
// //       return {
// //           // movingElement:(elementId) => { dispatch(setValueElement({ value: newValue })) },
// //           setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
// //           setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }
// //       }
// //       // uploadImage: (files) => { dispatch(uploadImage(files)) }
// //   }

// import * as React from 'react'
// import  { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import {  setValueElement } from '../../redux/actions/funnel.action'//, setStyleIcon

// import { IconPicker } from 'react-fa-icon-picker'

// import { useSelector, useDispatch } from 'react-redux';
// import { useDropzone, onDragOver } from 'react-dropzone'
// import $ from "jquery";
// // import { actions } from '../Redux/Action/action';

//  function  SelectIcon(props)  {
//   debugger

//    const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
//    const { element, setValueElement, user } = props

//   const [value, setValue] = useState("FaSearch")
//   console.log(element);

//   return (

//     <div className='d-flex flex-column align-items-center justify-content-center m-2  y' style={{width:'100%', height:'100%' ,  textAlign:'right'}} >

// {/* <IconPicker value={value} onChange={(v) => setValue(v)} /> */}

//       <IconPicker className="aaa" 
      
       
//       value={value}
 
//        size={24} color="#000"
//       //   buttonStyles={{
//       //     position: "relative",
//       //     padding: "0px !important",
//       //     minHeight: "20px !important",
//       //     justifyContent: " left !important",
//       //     alignItems: "center !important",
        


//       //  }}
//       //   searchInputStyles ={{
//       //      color:'red',
//       //     fontSize:'20px',
//       //     fontStyle:'bold',
//       //     // fontFamily:'Rubik'
//       //   }}

      
//         // containerStyles={{

//         //   maxHeight: "200px !important",
//         //   // border: "none !important",
//         //   marginLeft: "130px !important",
//         //   width:"14vw !important",
//         //   // backgroundColor: "#ffffff !important"
//         // }}
//         buttonIconStyles={{
//           marginTop: "3px",
//           // // color: "green",
//           //  border: "1px paper",
//           fontSize: element.fontSize+'px',
//           opacity:element.opacity,
//           color:element.color,
          

         
          
//           // 
//           //  color:{element.color}
//         }}
//         onChange={(v) => setValue(v)}

// //emleve le vert
//         //style={element.settings.color}



//         //   dispatch(actions.setItemSignature({ index: item.index, act: "path", content: v }));
//          ></IconPicker>
//     </div>
//   )
// }

// export default connect(
//   (state) => {
//       return {
//           styleIcon: state.funnel.elementInEditing.settings
//       }
//   },
//   (dispatch) => {
//       return {      
//         setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },     
//         //setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }


//           }
//   }
// )(SelectIcon)



import * as React from 'react'
import  { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import {  setValueElement } from '../../redux/actions/funnel.action'//, setStyleIcon

import { IconPicker } from 'react-fa-icon-picker'

import { useSelector, useDispatch } from 'react-redux';
import { useDropzone, onDragOver } from 'react-dropzone'
import $ from "jquery";
// import { actions } from '../Redux/Action/action';

 function  SelectIcon(props)  {
  debugger

   const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
   const { element, setValueElement, user } = props

  const [value, setValue] = useState("FaSearch")
  console.log(element);

  return (

    <div className='d-flex flex-column align-items-center justify-content-center m-2  y' style={{width:'100%', height:'100%' ,  textAlign:'right'}} >

{/* <IconPicker value={value} onChange={(v) => setValue(v)} /> */}

      <IconPicker className="aaa" 
      
       
      value={value}
 
       size={24} color="#000"
 
        buttonIconStyles={{
          marginTop: "3px",
          // // color: "green",
          //  border: "1px paper",
          fontSize: element.fontSize+'px',
          opacity:element.opacity,
          color:element.color,
          

         
          
          // 
          //  color:{element.color}
        }}
        onChange={(v) => setValue(v)}

//emleve le vert
        //style={element.settings.color}



        //   dispatch(actions.setItemSignature({ index: item.index, act: "path", content: v }));
         ></IconPicker>
    </div>
  )
}

export default connect(
  (state) => {
      return {
          styleIcon: state.funnel.elementInEditing.settings
      }
  },
  (dispatch) => {
      return {      
        setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },     
        //setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }


          }
  }
)(SelectIcon)






