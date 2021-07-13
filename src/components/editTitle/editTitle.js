
import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'
import alignLeft from '../../assets/align-left.png'
import alignMid from '../../assets/align-mid.png'
import alignRight from '../../assets/align-right.png'
import {actions} from '../../redux/actions/funnel-try.action'
import { connect } from 'react-redux';
import Grid  from '@material-ui/core/Grid';
import { Box, Slider, TextField } from '@material-ui/core';
import Font from './font'



function mapStateToProps(state) {
    return {
        //titleEdit: state.funnel.elementInEditing.value
        elementInEditing: state.funnel.elementInEditing,
        // titleEdit:state.funnel.elementInEditing.settings
        newTitle: state.funnel.newElementTypeAndValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {           
        setValueElement: (newValue) => { dispatch(actions.setValueElement({ value: newValue })) },
        setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
        elementInEditing1: function (id) { dispatch(actions.elementInEditing({ id: id })) },




    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( function EditTitle(props) 
{
    const {elementInEditing}=props
    // const Font = lazy(() => import(`./font`))
 
     console.log(elementInEditing)
   //console.log('hereee'+elementInEditing.fontSize)
   
 
 
   const setValue = (newValue) => {
    props.setValueElement(newValue)
 }
 
   const changeVal= (newValue,type) => {
     debugger
  
 
 console.log(newValue)
 console.log(type)
    props.setValueMe(newValue,type)
   
    props.elementInEditing1(elementInEditing.id)
 
  console.log(elementInEditing)
 
   }
 
   
 
     const arrfont=fontFamilies
     console.log(arrfont[0].family)
     return (
 
         <>
 
         <Container>
 
         
 <Row style={{fontSize:"1.5vw" , color:'#4169E1', fontWeight:'bold' }}>
     Heading
 </Row>
 <hr/>
 
          <b style={{ fontSize: "1vw" }}>Content</b>
     <Row container direction="row" style={{height:"10vh"}}>
     <Grid item md={1}/>
     <Grid item md={11}>  <textarea    placeholder='title' value={elementInEditing.value} style={{backgroundColor:'transparent' ,color:'black', border :'none', width:'100%', height:'100%',fontSize: "1vw"}} onChange={e=>{setValue(e.target.value)}}>
     </textarea> </Grid>
    
  </Row>   
     <hr/>
 
     <b style={{ fontSize: "1vw", }}>Font</b>
 
     <Row style={{height:"7vh"}}  >
     <Grid container direction="row" >
     <Grid item sm={1} md={1}/>
     
     <Grid item sm={10} md={10} style={{width:'80%', height:'80%',marginTop:'10px', marginBottom:'5px'}}>
         
        
         {/* <Suspense fallback={<div>Loading</div>}> */}
        <Font/>
       {/* </Suspense> */}
         
         </Grid>
 
         
     </Grid>
     </Row>
     <hr/>
     <b style={{ fontSize: "1vw" }}>Size</b>
 
 
 <Grid container direction="row" style={{height:"7vh",alignItems:'center'}}>
                 <Grid item md={2} sm={2}> <img style={{ alignItems: "right" ,height:'85%',width:'50%'}} src={textSize}></img> </Grid>
                 <Grid item md={6} sm={6}> 
                 
                      <input type="range" 
                 className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="50" step="1"
          onChange={(e) => changeVal(e.target.value, "fontSize")}
          defaultValue={elementInEditing.fontSize}
          
          />
                 
                 </Grid>
                 <Grid item md={1}/>
 
                <Grid item md={3} sm={3} > <p style={{alignItems:'right',fontSize: "1vw"}}>{elementInEditing.fontSize? elementInEditing.fontSize+'px':"" }</p> </Grid>
                     
                 </Grid>
     <hr/>
 
     <b style={{ fontSize: "1vw" }}>Color</b>
 
     <Grid container direction="row" style={{height:"6vh"}} >
                 <Grid item md={2}> <p style={{fontSize:'1vw',alignItems: "right"}}>Fill</p></Grid>
                 <Grid item md={5}/>
                 <Grid item md={2}>  <img style={{ alignItems: "right",width:'80%', height:'40%'  }} src={dropper}></img></Grid>
                 <Grid item md={3}><input type="color" onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "70%" ,height:'60%' }}
            
                     
                     />
                     
                     </Grid>
     </Grid>
 
     
     <hr/>
 
     <b style={{ fontSize: "1vw"  }}>Alignement</b>
 
     <Grid container direction="row" style={{height:"5vh",marginTop:'10px'}} >
                 {/* <Grid item md={1}/> */}
                 <Grid item md={2}>  <img style={{ alignItems: "right" ,width:'80%', height:'55%' }} src={alignLeft} onClick={e => {changeVal('left','textAlign')}}></img></Grid>
                 <Grid item md={2}>  <img style={{ alignItems: "right" ,width:'80%', height:'55%' }} src={alignMid} onClick={e=> changeVal('center','textAlign')}></img></Grid>
                 <Grid item md={2}>  <img style={{ alignItems: "right" ,width:'80%', height:'55%' }} src={alignRight} onClick={e=> changeVal('right','textAlign')}></img></Grid>
 
 
 
 
     </Grid>
 
   
 </Container>
         </>
     )
 }
)

