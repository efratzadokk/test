

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import './editVideo.css'
import Grid  from '@material-ui/core/Grid';
import { Col, Row, Container } from "react-bootstrap";
import Image from '../../assets/Image.svg'
import {actions} from '../../redux/actions/funnel-try.action'

function EditVideo(props) {
    const {videoOnEdit,setStyleImage,elementInEditing,setValueMe,setValueElement}=props
    const [i,setI]= useState(0)
 console.log(videoOnEdit)
console.log(elementInEditing)
    const setWidthImage = (value)=>{
        setStyleImage('width',value+'%')
     props.elementInEditing1(videoOnEdit.id)

   
    
    }
    const setHeightImage =(value)=>{
        setStyleImage('height',(value)+'%')
     props.elementInEditing1(videoOnEdit.id)

    }
  
    
    const  twoCalls = e => {
        debugger
        setWidthImage(e.target.value)
        setHeightImage(e.target.value)
      }

    const theatherMode=()=>{
        if(i==0)
        {
             setValueMe('black','backgroundColor')
             setI(1)

        }
        else{
            setValueMe('transparent','backgroundColor')
            setI(0)

        }
           
    }


    return (
        <>

<Container>
  <Row style={{color:'#4169E1', fontWeight:'bold',fontSize:'1vw'}}>Video </Row>
  <hr/>

{/* <div>
    URL Video
</div> */}
<b style={{ fontSize: "1vw" }}>URL Video</b>

  <Row >
  </Row>
  <Grid container direction='row' style={{height:'8vh',alignItems:'center'}}  >
  <input style={{fontSize:'1vw'}} type="text" style={{color:'black'}} className="form-control input urlVideo" value={videoOnEdit.value} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
 

  </Grid>

  <hr/>

<Grid container direction="row" style={{height:"7vh", alignItems:'center'}} >
              {/* <Grid item md={1}/> */}
              <Grid item md={2} sm={2}>  <img src={Image} style={{ alignItems: "right",height:'100%',width:'100%'}}></img></Grid>
              <Grid item md={1} sm={1} ></Grid>
              <Grid item md={6} sm={6}>  
              <input type="range" className="slider" data-toggle="tooltip" data-placement="bottom" 
onChange={twoCalls} min="50" max="100" step="1" defaultValue='100' width={{width: "70%" ,height:'40%',marginTop:'10px'}} /></Grid>

<Grid item md={1}/>

<Grid item md={2} sm={2} > <p style={{fontSize:'1vw', alignItems:'left'}}>{videoOnEdit.settings.width? videoOnEdit.settings.width.slice(0,-1):""}</p> </Grid>


              </Grid>
                 <hr/>


<Grid container direction="row">

<Grid item ><button style={{height:'100%',width:'100%',fontSize:'1vw'}} type="button" className="btn btn-dark" onClick={theatherMode}>Theater mode</button></Grid>


</Grid>
    
  </Container>
   </>

    )
}
export default connect(
    (state) => {
        return {
            elementInEditing: state.funnel.elementInEditing,

        }
    },
    (dispatch) => {
        return {
            setValueElement:(newValue)=>{dispatch(actions.setValueElement({value:newValue}))},
            setStyleImage: (property, newValue) => { dispatch(actions.setStyleImage({ property: property, value: newValue })) },
            setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
            elementInEditing1: function (id) { dispatch(actions.elementInEditing({ id: id })) },


                }
    }
)(EditVideo)