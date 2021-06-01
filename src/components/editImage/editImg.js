import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
import './editImg.css'

function EditImg(props) {
    const {styleImage,element,ImgOnEdit,setValueElement,setStyleImage}=props
    const setWidthImage = (value)=>{
        setStyleImage('width',value+'%')
console.log(value)
    }
    const setHeightImage =(value)=>{
        setStyleImage('height',value+'px')
    }
    const  setOpacityImage=(value)=>{
        setStyleImage('opacity',value)
    }
    return (
        <>
        <label for="">Image width</label>
          <input type="range" className="slider" 
        //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
           id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
           onChange={(e) => setWidthImage(e.target.value)}
            min="0" max="100" step="1" />
               <label for="">Image height</label>
          <input type="range" className="slider" 
        //   defaultValue={styleImage.height.replace('px','')}
           id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
           onChange={(e) => setHeightImage(e.target.value)}
            min="0" max="800" step="1" />
        {/* <label for="">size</label>
        <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        <label for="">Image transparency</label>
        <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" defaultValue={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
         onChange={(e) => setOpacityImage(e.target.value)} />
   </>
    )
}

export default connect(
    (state) => {
        return {
            styleImage: state.funnel.elementInEditing.settings
        }
    },
    (dispatch) => {
        return {           
             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }}
    }
)(EditImg)