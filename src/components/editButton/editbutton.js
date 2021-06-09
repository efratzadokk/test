// import React, { useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import { setHrefButton } from '../../redux/actions/funnel.action'

// function EditButton(props) {
//     const {formOnEdit,setHrefButton}=props
//     return (
//         <>
//         <label for="">add url</label>
//         <input type="text" className="form-control input " id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setHrefButton(e.target.value)}  /> 
//    </>
//     )
// }

// export default connect(
//     undefined,
//     (dispatch) => {
//         return {
//             setHrefButton:(newValue)=>{dispatch(setHrefButton({value:newValue}))}
//                 }
//     }
// )(EditButton)

// import React, { useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import { setHrefButton } from '../../redux/actions/funnel.action'

// function EditButton(props) {
//     const {formOnEdit,setHrefButton}=props
//     return (
//         <>
//         <label for="">add url</label>
//         <input type="text" className="form-control input " id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setHrefButton(e.target.value)}  /> 
//    </>
//     )
// }

// export default connect(
//     undefined,
//     (dispatch) => {
//         return {
//             setHrefButton:(newValue)=>{dispatch(setHrefButton({value:newValue}))}
//                 }
//     }
// )(EditButton)


import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
// import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'
import alignLeft from '../../assets/align-left.png'
import alignMid from '../../assets/align-mid.png'
import alignRight from '../../assets/align-right.png'


import { setValueElement,setValueMe ,elementInEditing} from '../../redux/actions/funnel.action'
import { connect } from 'react-redux';
import Grid  from '@material-ui/core/Grid';
import { Box, Slider, TextField } from '@material-ui/core';
// import Font from './font'
import BorderStyleIcon from '@material-ui/icons/BorderStyle';
import BorderLeftIcon from '@material-ui/icons/BorderLeft';
import AlignL from '../../assets/AlignL.svg'
import AlignM from '../../assets/AlignM.svg'
import AlignR from '../../assets/AlignR.svg'

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
        setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
        setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
        elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },




    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( function EditButton(props) 
{
    const {elementInEditing,BtnOnEdit}=props
   

    console.log(elementInEditing)
  console.log(BtnOnEdit)

  // console.log(d.textContent)
  const setValue = (newValue) => {
    
  
   props.setValueElement(newValue)


}

  const changeVal= (newValue,type) => {
    debugger
   // console.log(newValue.target)
   // console.log(newValue);
   // console.log(newValue.target.value)

 //  onEnterElement()
  // console.log(currentKey);
 //  console.log(id)


console.log(newValue)
console.log(type)
   props.setValueMe(newValue,type)
  
   props.elementInEditing1(BtnOnEdit.id)

 

  }

  

   
    return (

        <>

        <Container>

        
<Row style={{fontSize:"17px"}}>
    Button
</Row>
<hr/>

         <b style={{ fontSize: "14px", }}>Content</b>

    <textarea    placeholder={'button'} value={BtnOnEdit.value} style={{backgroundColor:'transparent' ,color:'white'}} onChange={e=>{setValue(e.target.value)}}>
    </textarea>
    {/* {elementInEditing} value={elementInEditing.value} */}
    {/* {elementInEditing.value} */}
  {/* {elementInEditing} */}
    
    <hr/>
    {/* <b style={{ fontSize: "14px", }}>Font</b>

    <Row >
{/* 
<Font/> */}
    {/* <select className="form-select" style={{width:'150px' , marginLeft:'15px'}} >
     {/* <option selected>Select Font</option> */}
        {/* {arrfont.map(item=>
            <option value={item.family} key={item.family} >{item.family}</option>
        )}
         */}
    {/* </select> */} 



    {/* </Row> */} 
    {/* <hr/> */}
    <b style={{ fontSize: "14px" }}>Size</b>

    {/* <Row>
        <Col sm='1'><img src={textSize}></img></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col>
    </Row> */}

<Grid container direction="row" style={{height:"13px"}}>
                <Grid item sm={1} md={1}> <img style={{ alignItems: "right" ,height:'13px' }} src={textSize}></img> </Grid>
                <Grid item sm={1} md={1}></Grid>
                <Grid item sm={8} md={8}> 
                < Box flexDirection="row" display="flex" justifyContent="space-between" >
                    <Box width={'100%'} >
                        <Slider
                          key={`fontSize-${BtnOnEdit.id}`}
                            defaultValue={BtnOnEdit.fontSize}
                            step={1}
                            marks
                            min={10}
                            max={40}
                            valueLabelDisplay="auto"
                            //draggable='false'
                         //  onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                           onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "fontSize")}

                           
                        />
                    </Box>
                <Grid item md={1} sm={1} />

               <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.fontSize? BtnOnEdit.fontSize+'px':""}</p> </Grid>
                    
                </Box>
                
                </Grid>
                
                
                </Grid>




            {/* ----------- */}
            <Grid container direction="row" style={{height:"15px", marginTop:'5px'}}>
        <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right",height:'20px' }}></BorderLeftIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Box width={'100%'} >
            <Slider
             key={`width-${BtnOnEdit.id}`}
              defaultValue={BtnOnEdit.width}
              step={1}
              marks
              min={45}
              max={100}
              valueLabelDisplay="auto"
             // onChange={(e) => changeVal(e.target.ariaValueNow, "width")}
             onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "width")}
            />
          </Box>
          <Grid item md={1} sm={1} />

          <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.width}</p> </Grid>
     
        </Box>
        </Grid>
        </Grid>
    <hr/>

    <b style={{ fontSize: "14px" }}>Color</b>

    {/* <Grid container direction="row" >
                <Grid item sm={3}> <p >Fill</p></Grid>
                <Grid item sm={5}><input type='range' min="16" max="100"/></Grid>
        {/* <Col sm='2'><p>Fill</p></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col> */}
    {/* </Grid> */} 


    <Grid container direction="row" style={{height:"15px"}} >
                <Grid item sm={2}> <p >Fill</p></Grid>
                <Grid item md={5}/>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={dropper}></img></Grid>
                <Grid item sm={3}><input type="color" onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid>


    <Grid container direction="row" style={{height:"15px"}} >
                <Grid item sm={6}> <p>Background</p></Grid>
                <Grid item md={1}/>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={dropper}></img></Grid>
                <Grid item sm={3}><input type="color" onChange={e=>{changeVal(e.target.value,'backgroundColor')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
        
                    />
                    
                    </Grid>
    </Grid>

    {/* /////////////////////// BORDER */}

    {/* <Grid container direction="row" >
                <Grid item sm={3}> <label>border</label></Grid>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={6}><input type='range' min="16" max="100"/></Grid>
        {/* <Col sm='2'><p>Fill</p></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col> */}
    {/* </Grid>  */}

{/* 
    <Row>
        <Col sm='2'><lable>Border</lable></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col>
    </Row> */}
    
    <hr/>

    {/* <b style={{ fontSize: "14px" }}>Alignement</b>

    <Grid container direction="row" style={{height:"10px"}} >
                {/* <Grid item md={1}/> */}
                {/* <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignLeft} onClick={e => {changeVal('left','textAlign')}}></img></Grid>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignMid} onClick={e=> changeVal('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignRight} onClick={e=> changeVal('right','textAlign')}></img></Grid>




    </Grid> */} 

      <b >Border</b>

      <Grid container direction="row"  style={{height:"10px"}}>
        <Grid item sm={1} md={1}> <BorderStyleIcon style={{ alignItems: "right" }}></BorderStyleIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={1}  md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Box width={'100%'} >
            <Slider
             key={`opac-${BtnOnEdit.id}`}
              defaultValue={BtnOnEdit.borderRadius}
              step={0.1}
              marks
              min={0}
              max={10}
              valueLabelDisplay="auto"
           //   onChange={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
           onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
            />
          </Box>

          <Grid item sm={1}  md={1}/>

          <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.borderRadius}</p> </Grid>

        </Box></Grid></Grid>



        <hr/>
<div>
    Alignement
</div>


<Grid container direction="row" style={{height:"10px"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2}>  <img  src={AlignL} onClick={e=> props.setValueMe('left','textAlign')} ></img></Grid>
                <Grid item md={2}>  <img  src={AlignM} onClick={e=> props.setValueMe('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img  src={AlignR} onClick={e=> props.setValueMe('right','textAlign')}></img></Grid>

          
                    
    </Grid>


  
</Container>
        </>



    )
}
)

