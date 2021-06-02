import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import { setValueElement,setStyleImage } from '../../redux/actions/funnel.action'
import './editVideo.css'
import Grid  from '@material-ui/core/Grid';
import { Col, Row, Container } from "react-bootstrap";
// import Opacity from '../../assets/Opacity.svg'
import Image from '../../assets/Image.svg'


function EditVideo(props) {
    const {videoOnEdit,setStyleImage}=props


    const setWidthImage = (value)=>{
        setStyleImage('width',value+'%')
    //console.log(value)
    
    }
    const setHeightImage =(value)=>{
        setStyleImage('height',(4*value)+'px')
    }
    // const  setOpacityImage=(value)=>{
    //     setStyleImage('opacity',value)
    // }
    
    const  twoCalls = e => {
        debugger
        setWidthImage(e.target.value)
        setHeightImage(e.target.value)
      }



    return (
        <>

<Container>
  <Row>Video </Row>
  <hr/>
  <Row>
        <label for="">URL Video</label>
        <input type="text" className="form-control input urlVideo" value={videoOnEdit.value} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
  </Row>

  <hr/>

{/* <Grid container direction="row" style={{height:"15px"}} >
              {/* <Grid item md={1}/> */}
              {/* <Grid item md={1} sm={1}>  <img src={Image} style={{width:'40px', height:'30px',position:'absolute' ,left:'12px'}}></img></Grid>
              <Grid item md={2} sm={2} ></Grid>
              <Grid item md={9} sm={9}>  
              <input type="range" className="slider" data-toggle="tooltip" data-placement="bottom" 
onChange={twoCalls} min="0" max="100" step="1" /></Grid>
              </Grid>
                 <hr/>
              */} 


           





  </Container>
   </>

    )
}
export default connect(
    
    null
    ,
    (dispatch) => {
        return {
            setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))},
            setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) },

                }
    }
)(EditVideo)






// import React, { useState, useRef } from 'react';
// import { useDropzone, onDragOver } from 'react-dropzone'
// import { connect } from 'react-redux';
// import { setValueElement } from '../../redux/actions/funnel.action'
// import './editVideo.css'

// function EditVideo(props) {
//     const {videoOnEdit,setValueElement}=props
//     return (
//         <>
//         <label for="">Fill Video</label>
//         <input type="text" className="form-control input urlVideo" value={videoOnEdit.value} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
//    </>
//     )
// }
// export default connect(
//     undefined,
//     (dispatch) => {
//         return {
//             setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
//                 }
//     }
// )(EditVideo)