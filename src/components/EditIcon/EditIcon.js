import React from 'react';
// import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
// import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
import { setSizeIcon } from '../../redux/actions/funnel.action'
import { setValueElement,setStyleIcon, elementInEditing } from '../../redux/actions/funnel.action'

// import { setStyleIcon } from '../../redux/actions/funnel.action'


import './EditIcon.css'

function EditIcon(props) {
    const {styleIcon,element,IconOnEdit,setValueElement,setStyleIcon}=props

    const setSizeIcon = (value)=>{
        console.log('I am in setSizeIcon!!!!')
        setStyleIcon('width',value+'px')
console.log("width:",value);
        console.log('I set styleIcon !!!!')
        setStyleIcon('height',value+'px')

        //  console.log(value)
    }
    // const setHeightIcon =(value)=>{
    //     setStyleIcon('height',value+'px')
    // }
   
    const setColorIcon=(value)=>{
        setStyleIcon('color',value) 
    }
    const setLinkIcon=(value)=>{
        setStyleIcon('link',value)
    }

    
    return (
        <>
        <label for="">size Icon</label>
          <input type="range" className="slider" defaultValue={styleIcon.width}
        //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
           id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
           onChange={(e) => setSizeIcon(e.target.value)}
            min="0" max="100" step="1" />

               <label for="">color Icon</label>
          <input type="color" className="form-control input" data-toggle="tooltip" 
        //   defaultValue={styleImage.height.replace('px','')}
           id=""  data-placement="bottom" placeholder="" 

           
           onChange={(e) => setColorIcon(e.target.value)}
            min="0" max="800" step="1" />
        {/* <label for="">size</label>
        <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        
        <label for="">link Icon</label>
        <input type="text" id="" data-toggle="tooltip" data-placement="bottom"  defaultValue={styleIcon.co} placeholder="" min="0" max="0.99" step="0.0001"
         onChange={(e) => setLinkIcon(e.target.value)} />
   </>
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
            //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
        }
    }
)(EditIcon)