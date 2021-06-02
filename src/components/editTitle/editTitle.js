import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'
import alignLeft from '../../assets/align-left.png'
import alignMid from '../../assets/align-mid.png'
import alignRight from '../../assets/align-right.png'


import { setValueElement,setValueMe } from '../../redux/actions/funnel.action'
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
        setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
        setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },



    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( function EditTitle(props) 
{
    const {elementInEditing}=props
    // console.log(titleEdit)
    // console.log(titleEdit.value)
 //   console.log(titleEdit.value.textContent)

    console.log(elementInEditing)
  console.log(elementInEditing.value)
//    const b= elementInEditing.value
//    const d=b
//    console.log(newTitle)
//    console.log(newTitle.value)


 //  console.log(d.indexOf('>') )
  // console.log(d.indexOfSecond('<'))
 //  console.log(d.slice(1, 1))
  // console.log(d.textContent)
  const setValue = (newValue) => {
    
   // console.log(newValue.target)
   // console.log(newValue);
   // console.log(newValue.target.value)

 //  onEnterElement()
 
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

  }

    const arrfont=fontFamilies
    console.log(arrfont[0].family)
    return (

        <>

        <Container>

        
<Row style={{fontSize:"17px"}}>
    Heading
</Row>
<hr/>

         <b style={{ fontSize: "14px", }}>Content</b>

    <textarea    placeholder={'title'} value={elementInEditing.value} style={{backgroundColor:'transparent' ,color:'white'}} onChange={e=>{setValue(e.target.value)}}>
    </textarea>
    {/* {elementInEditing} value={elementInEditing.value} */}
    {/* {elementInEditing.value} */}
  {/* {elementInEditing} */}
    
    <hr/>
    <b style={{ fontSize: "14px", }}>Font</b>

    <Row >

<Font/>
    {/* <select className="form-select" style={{width:'150px' , marginLeft:'15px'}} >
     {/* <option selected>Select Font</option> */}
        {/* {arrfont.map(item=>
            <option value={item.family} key={item.family} >{item.family}</option>
        )}
         */}
    {/* </select> */} 



    </Row>
    <hr/>
    <b style={{ fontSize: "14px" }}>Size</b>

    {/* <Row>
        <Col sm='1'><img src={textSize}></img></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col>
    </Row> */}

<Grid container direction="row" style={{height:"13px"}}>
                <Grid item sm={2}> <img style={{ alignItems: "right" }} src={textSize}></img> </Grid>
                <Grid item sm={9}> < Box  style={{marginLeft:'10px'}}flexDirection="row" display="flex" justifyContent="space-between" >
                    <Box width={'100%'} >
                        <Slider
                            // defaultValue={item.fontSize}
                            step={1}
                            marks
                            min={10}
                            max={64}
                            valueLabelDisplay="auto"
                             onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                            // onClick={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                        />
                    </Box>
                </Box></Grid></Grid>
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

    <b style={{ fontSize: "14px" }}>Alignement</b>

    <Grid container direction="row" style={{height:"10px"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignLeft} onClick={e => {changeVal('left','textAlign')}}></img></Grid>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignMid} onClick={e=> changeVal('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignRight} onClick={e=> changeVal('right','textAlign')}></img></Grid>

          
                    
    </Grid>

  
</Container>
        </>
    )
}
)