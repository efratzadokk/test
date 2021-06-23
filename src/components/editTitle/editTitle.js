

// import React, { Component } from 'react'
// import {Container,Row,Col} from 'react-bootstrap'
// import fontFamilies from './fontFamily'
// import textSize from '../../assets/textSize.svg'
// import dropper from '../../assets/dropper.svg'
// import alignLeft from '../../assets/align-left.png'
// import alignMid from '../../assets/align-mid.png'
// import alignRight from '../../assets/align-right.png'


// import { setValueElement,setValueMe ,elementInEditing} from '../../redux/actions/funnel.action'
// import { connect } from 'react-redux';
// import Grid  from '@material-ui/core/Grid';
// import { Box, Slider, TextField } from '@material-ui/core';
// import Font from './font'



// function mapStateToProps(state) {
//     return {
//         //titleEdit: state.funnel.elementInEditing.value
//         elementInEditing: state.funnel.elementInEditing,
//         // titleEdit:state.funnel.elementInEditing.settings
//         newTitle: state.funnel.newElementTypeAndValue
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {           
//         setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
//         setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
//         elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },




//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) ( function EditTitle(props) 
// {
//     const {elementInEditing}=props
//     // console.log(titleEdit)
//     // console.log(titleEdit.value)
//  //   console.log(titleEdit.value.textContent)

//     console.log(elementInEditing)
//   console.log(elementInEditing.value)
// //    const b= elementInEditing.value
// //    const d=b
// //    console.log(newTitle)
// //    console.log(newTitle.value)


//  //  console.log(d.indexOf('>') )
//   // console.log(d.indexOfSecond('<'))
//  //  console.log(d.slice(1, 1))
//   // console.log(d.textContent)
//   const setValue = (newValue) => {
    
//    // console.log(newValue.target)
//    // console.log(newValue);
//    // console.log(newValue.target.value)

//  //  onEnterElement()
 
//    props.setValueElement(newValue)


// }

//   const changeVal= (newValue,type) => {
//     debugger
//    // console.log(newValue.target)
//    // console.log(newValue);
//    // console.log(newValue.target.value)

//  //  onEnterElement()
//   // console.log(currentKey);
//  //  console.log(id)


// console.log(newValue)
// console.log(type)
//    props.setValueMe(newValue,type)
  
//    props.elementInEditing1(elementInEditing.id)

//  console.log(elementInEditing)

//   }

  

//     const arrfont=fontFamilies
//     console.log(arrfont[0].family)
//     return (

//         <>

//         <Container>

        
// <Row style={{fontSize:"17px" , color:'#4169E1', fontWeight:'bold' }}>
//     Heading
// </Row>
// <hr/>

//          <b style={{ fontSize: "14px" }}>Content</b>

//     <textarea    placeholder='title' value={elementInEditing.value} style={{backgroundColor:'transparent' ,color:'black', border :'none', width:'100%', height:'100%'}} onChange={e=>{setValue(e.target.value)}}>
//     </textarea>
//     {/* {elementInEditing} value={elementInEditing.value} */}
//     {/* {elementInEditing.value} */}
//   {/* {elementInEditing} */}
    
//     <hr/>

//     <b style={{ fontSize: "14px", }}>Font</b>

//     <Row >
//     <Grid container direction="row" style={{height:"22px"}} >
//     <Grid item md={1}/>
    
//     <Grid item md={11}><Font/></Grid>

        
//     </Grid>

//     {/* <select className="form-select" style={{width:'150px' , marginLeft:'15px'}} >
//      {/* <option selected>Select Font</option> */}
//         {/* {arrfont.map(item=>
//             <option value={item.family} key={item.family} >{item.family}</option>
//         )}
//          */}
//     {/* </select> */} 



//     </Row>
//     <hr/>
//     <b style={{ fontSize: "14px" }}>Size</b>

//     {/* <Row>
//         <Col sm='1'><img src={textSize}></img></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col>
//     </Row> */}

// <Grid container direction="row" style={{height:"13px"}}>
//                 <Grid item sm={2}> <img style={{ alignItems: "right" }} src={textSize}></img> </Grid>
//                 <Grid item sm={7}> < Box  style={{marginLeft:'10px'}}flexDirection="row" display="flex" justifyContent="space-between" >
//                     <Box width={'100%'} >
//                         <Slider
//                             // defaultValue={item.fontSize}
//                             step={1}
//                             marks
//                             min={15}
//                             max={64}
//                             valueLabelDisplay="auto"
//                             defaultValue={elementInEditing.fontSize}
//                             onClick={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//                             onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//                            //  onHover={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//                         />

//                     </Box>
//                 <Grid item md={1}/>

//                <Grid item md={2} sm={2} xm={2}> <p style={{position:'fixed', buttom:'0px'}}>{elementInEditing.fontSize? elementInEditing.fontSize+'px':"" }</p> </Grid>
                    
//                 </Box>
                
//                 </Grid>
                
                
//                 </Grid>
//     <hr/>

//     <b style={{ fontSize: "14px" }}>Color</b>

//     {/* <Grid container direction="row" >
//                 <Grid item sm={3}> <p >Fill</p></Grid>
//                 <Grid item sm={5}><input type='range' min="16" max="100"/></Grid>
//         {/* <Col sm='2'><p>Fill</p></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col> */}
//     {/* </Grid> */} 


//     <Grid container direction="row" style={{height:"15px"}} >
//                 <Grid item sm={2}> <p >Fill</p></Grid>
//                 <Grid item md={5}/>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={dropper}></img></Grid>
//                 <Grid item sm={3}><input type="color" onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
//                   //  onChange={(e) => setItem(e.target.value, "color", index)}
//                     // value={item.color}
                    
//                     />
                    
//                     </Grid>
//     </Grid>

//     {/* /////////////////////// BORDER */}

//     {/* <Grid container direction="row" >
//                 <Grid item sm={3}> <label>border</label></Grid>
//                 <Grid item sm={1}>
//                 </Grid>
//                 <Grid item sm={6}><input type='range' min="16" max="100"/></Grid>
//         {/* <Col sm='2'><p>Fill</p></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col> */}
//     {/* </Grid>  */}

// {/* 
//     <Row>
//         <Col sm='2'><lable>Border</lable></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col>
//     </Row> */}
    
//     <hr/>

//     <b style={{ fontSize: "14px" }}>Alignement</b>

//     <Grid container direction="row" style={{height:"10px"}} >
//                 {/* <Grid item md={1}/> */}
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignLeft} onClick={e => {changeVal('left','textAlign')}}></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignMid} onClick={e=> changeVal('center','textAlign')}></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignRight} onClick={e=> changeVal('right','textAlign')}></img></Grid>




//     </Grid>

  
// </Container>
//         </>
//     )
// }
// )


import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'
import alignLeft from '../../assets/align-left.png'
import alignMid from '../../assets/align-mid.png'
import alignRight from '../../assets/align-right.png'


import { setValueElement,setValueMe ,elementInEditing} from '../../redux/actions/funnel.action'
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
        elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },




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
    
    <Grid item sm={10} md={10} style={{width:'80%', height:'80%',marginTop:'10px', marginBottom:'5px'}}><Font/></Grid>

        
    </Grid>

    {/* <select className="form-select" style={{width:'150px' , marginLeft:'15px'}} >
     {/* <option selected>Select Font</option> */}
        {/* {arrfont.map(item=>
            <option value={item.family} key={item.family} >{item.family}</option>
        )}
         */}
    {/* </select> */} 



    </Row>
    <hr/>
    <b style={{ fontSize: "1vw" }}>Size</b>

    {/* <Row>
        <Col sm='1'><img src={textSize}></img></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col>
    </Row> */}

<Grid container direction="row" style={{height:"7vh",alignItems:'center'}}>
                <Grid item md={2} sm={2}> <img style={{ alignItems: "right" ,height:'85%',width:'50%'}} src={textSize}></img> </Grid>
                <Grid item md={7} sm={7}> < Box  style={{marginLeft:'10px',alignItems: "center",height:'100%',width:'100%' }}flexDirection="row" display="flex" justifyContent="space-between" >
                    <Box width={'100%'} >
                        <Slider
                            // defaultValue={item.fontSize}
                            step={1}
                            marks
                            min={15}
                            max={64}
                            valueLabelDisplay="auto"
                            defaultValue={elementInEditing.fontSize}
                            onClick={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                            onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                           //  onHover={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
                        />

                    </Box>    
                    </Box>
                
                </Grid>
                <Grid item md={1}/>

               <Grid item md={2} sm={2} > <p style={{alignItems:'right',fontSize: "1vw"}}>{elementInEditing.fontSize? elementInEditing.fontSize+'px':"" }</p> </Grid>
                    
            
                
                
                </Grid>
    <hr/>

    <b style={{ fontSize: "1vw" }}>Color</b>

    {/* <Grid container direction="row" >
                <Grid item sm={3}> <p >Fill</p></Grid>
                <Grid item sm={5}><input type='range' min="16" max="100"/></Grid>
        {/* <Col sm='2'><p>Fill</p></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col> */}
    {/* </Grid> */} 


    <Grid container direction="row" style={{height:"6vh"}} >
                <Grid item md={2}> <p style={{fontSize:'1vw',alignItems: "right"}}>Fill</p></Grid>
                <Grid item md={5}/>
                <Grid item md={2}>  <img style={{ alignItems: "right",width:'80%', height:'25%'  }} src={dropper}></img></Grid>
                <Grid item md={3}><input type="color" onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "70%" ,height:'40%' }}
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

