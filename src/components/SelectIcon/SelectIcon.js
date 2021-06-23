
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







