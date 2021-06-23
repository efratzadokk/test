
// import React, { Component } from 'react'
// import {Container,Row,Col} from 'react-bootstrap'
// // import fontFamilies from './fontFamily'
// import textSize from '../../assets/textSize.svg'
// import dropper from '../../assets/dropper.svg'
// import alignLeft from '../../assets/align-left.png'
// import alignMid from '../../assets/align-mid.png'
// import alignRight from '../../assets/align-right.png'


// import { setValueElement,setValueMe ,elementInEditing} from '../../redux/actions/funnel.action'
// import { connect } from 'react-redux';
// import Grid  from '@material-ui/core/Grid';
// import { Box, Slider, TextField } from '@material-ui/core';
// // import Font from './font'
// import BorderStyleIcon from '@material-ui/icons/BorderStyle';
// import BorderLeftIcon from '@material-ui/icons/BorderLeft';
// import AlignL from '../../assets/AlignL.svg'
// import AlignM from '../../assets/AlignM.svg'
// import AlignR from '../../assets/AlignR.svg'

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

// export default connect(mapStateToProps, mapDispatchToProps) ( function EditButton(props) 
// {
//     const {elementInEditing,BtnOnEdit}=props
   

//     console.log(elementInEditing)
//   console.log(BtnOnEdit)

//   // console.log(d.textContent)
//   const setValue = (newValue) => {
    
  
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
  
//    props.elementInEditing1(BtnOnEdit.id)

 

//   }

  

   
//     return (

//         <>

//         <Container>

        
// <Row style={{fontSize:"17px",color:'#4169E1', fontWeight:'bold'}}>
//     Button
// </Row>
// <hr/>

//     <Grid container direction="row" ><b style={{ fontSize: "14px", }}>Content</b></Grid> 

//     <textarea    placeholder={'button'} value={BtnOnEdit.value} style={{backgroundColor:'transparent' ,color:'black',border:'none', }} onChange={e=>{setValue(e.target.value)}}>
//     </textarea>
//     {/* {elementInEditing} value={elementInEditing.value} */}
//     {/* {elementInEditing.value} */}
//   {/* {elementInEditing} */}
    
//     <hr/>
//     {/* <b style={{ fontSize: "14px", }}>Font</b>

//     <Row >
// {/* 
// <Font/> */}
//     {/* <select className="form-select" style={{width:'150px' , marginLeft:'15px'}} >
//      {/* <option selected>Select Font</option> */}
//         {/* {arrfont.map(item=>
//             <option value={item.family} key={item.family} >{item.family}</option>
//         )}
//          */}
//     {/* </select> */} 



//     {/* </Row> */} 
//     {/* <hr/> */}
//     <b style={{ fontSize: "14px" }}>Size</b>

//     {/* <Row>
//         <Col sm='1'><img src={textSize}></img></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col>
//     </Row> */}

// <Grid container direction="row" style={{height:"13px"}}>
//                 <Grid item sm={1} md={1}> <img style={{ alignItems: "right" ,height:'13px' }} src={textSize}></img> </Grid>
//                 <Grid item sm={1} md={1}></Grid>
//                 <Grid item sm={8} md={8}> 
//                 < Box flexDirection="row" display="flex" justifyContent="space-between" >
//                     <Box width={'100%'} >
//                         <Slider
//                           key={`fontSize-${BtnOnEdit.id}`}
//                             defaultValue={BtnOnEdit.fontSize}
//                             step={1}
//                             marks
//                             min={10}
//                             max={40}
//                             valueLabelDisplay="auto"
//                             //draggable='false'
//                          //  onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//                            onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "fontSize")}

                           
//                         />
//                     </Box>
//                 <Grid item md={1} sm={1} />

//                <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.fontSize? BtnOnEdit.fontSize+'px':""}</p> </Grid>
                    
//                 </Box>
                
//                 </Grid>
                
                
//                 </Grid>




//             {/* ----------- */}
//             <Grid container direction="row" style={{height:"15px", marginTop:'5px'}}>
//         <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right",height:'20px' }}></BorderLeftIcon></Grid>
//         <Grid item sm={1} md={1}></Grid>
//         <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//           <Box width={'100%'} >
//             <Slider
//              key={`width-${BtnOnEdit.id}`}
//               defaultValue={BtnOnEdit.width}
//               step={1}
//               marks
//               min={45}
//               max={100}
//               valueLabelDisplay="auto"
//              // onChange={(e) => changeVal(e.target.ariaValueNow, "width")}
//              onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "width")}
//             />
//           </Box>
//           <Grid item md={1} sm={1} />

//           <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.width}</p> </Grid>
     
//         </Box>
//         </Grid>
//         </Grid>
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


//     <Grid container direction="row" style={{height:"15px"}} >
//                 <Grid item sm={6}> <p>Background</p></Grid>
//                 <Grid item md={1}/>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={dropper}></img></Grid>
//                 <Grid item sm={3}><input type="color" onChange={e=>{changeVal(e.target.value,'backgroundColor')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
        
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

//     {/* <b style={{ fontSize: "14px" }}>Alignement</b>

//     <Grid container direction="row" style={{height:"10px"}} >
//                 {/* <Grid item md={1}/> */}
//                 {/* <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignLeft} onClick={e => {changeVal('left','textAlign')}}></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignMid} onClick={e=> changeVal('center','textAlign')}></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={alignRight} onClick={e=> changeVal('right','textAlign')}></img></Grid>




//     </Grid> */} 

//       <b >Border</b>

//       <Grid container direction="row"  style={{height:"10px"}}>
//         <Grid item sm={1} md={1}> <BorderStyleIcon style={{ alignItems: "right" ,height:'20px' }}></BorderStyleIcon></Grid>
//         <Grid item sm={1} md={1}></Grid>
//         <Grid item sm={8}  md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//           <Box width={'100%'} >
//             <Slider
//              key={`opac-${BtnOnEdit.id}`}
//               defaultValue={BtnOnEdit.borderRadius}
//               step={0.1}
//               marks
//               min={0}
//               max={10}
//               valueLabelDisplay="auto"
//            //   onChange={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
//            onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
//             />
//           </Box>

//           <Grid item sm={1}  md={1}/>

//           <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{BtnOnEdit.borderRadius}</p> </Grid>

//         </Box></Grid></Grid>



//         <hr/>
// <div>
//     Alignement
// </div>


// <Grid container direction="row" style={{height:"10px"}} >
//                 {/* <Grid item md={1}/> */}
//                 <Grid item md={2}>  <img  src={AlignL} onClick={e=> props.setValueMe('left','textAlign')} ></img></Grid>
//                 <Grid item md={2}>  <img  src={AlignM} onClick={e=> props.setValueMe('center','textAlign')}></img></Grid>
//                 <Grid item md={2}>  <img  src={AlignR} onClick={e=> props.setValueMe('right','textAlign')}></img></Grid>

          
                    
//     </Grid>


  
// </Container>
//         </>



//     )
// }
// )




import React, { useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
// import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'
import alignLeft from '../../assets/align-left.png'
import alignMid from '../../assets/align-mid.png'
import alignRight from '../../assets/align-right.png'
import Iframe from 'react-iframe'
import './editButton.css'
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
   
  const [murl, setMurl] = useState('')

    console.log(elementInEditing)
  console.log(BtnOnEdit)

  // console.log(d.textContent)
  const setValue = (newValue) => {
    
  
   props.setValueElement(newValue)


}

const goToUrl=(url)=>{



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

        <Container style={{height:'100%'}}>

        
<Row style={{fontSize:"1.5vw",color:'#4169E1', fontWeight:'bold'}}>
    Button
</Row>
<hr/>

    <Grid container direction="row" ><b style={{ fontSize: "1vw", }}>Content</b></Grid> 
    <Row container direction="row" style={{height:"4vh"}}>
    <Grid item md={1}/>
    <Grid item md={11}>  <textarea placeholder={'button'} value={BtnOnEdit.value} style={{backgroundColor:'transparent' ,color:'black',border:'none', width:'100%',fontSize:'1vw',height:'80%'}} onChange={e=>{setValue(e.target.value)}}>
    </textarea> 
    
    </Grid>
  </Row>
  <hr/>
    <b style={{ fontSize: "1vw" }}>Size</b>

<Grid container direction="row" style={{height:"5vh"}}>
                <Grid item sm={1} md={1}> <img style={{ alignItems: "right" ,height:'100%',width:'100%' }} src={textSize}></img> </Grid>
                <Grid item sm={1} md={1}></Grid>
                <Grid item sm={7} md={7}> 
                < Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
                    <Box width={'100%'}  >
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
                    </Box>  </Box>
                
                </Grid>
                
                <Grid item md={1} sm={1} />

               <Grid item md={2} sm={2} > <p style={{alignItems:'left', fontSize:'1vw'}}>{BtnOnEdit.fontSize? BtnOnEdit.fontSize+'px':""}</p> </Grid>
                    
              
                
                </Grid>




            {/* ----------- */}
            <Grid container direction="row" style={{height:"5vh", marginTop:'5px'}}>
        <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right",height:'100%',width:'100%' }}></BorderLeftIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={7} md={7}> <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
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
          </Box>
        </Grid>
          <Grid item md={1} sm={1} />

          <Grid item md={2} sm={2} > <p style={{alignItems:'left',fontSize:'1vw'}}>{BtnOnEdit.width}</p> </Grid>
     
      
        </Grid>
    <hr/>

    <b style={{ fontSize: "1vw" }}>Color</b>


    <Grid container direction="row" style={{height:"5vh"}} >
                <Grid item md={2}> <p style={{fontSize:'1vw',alignItems:'left'}} >Fill</p></Grid>
                <Grid item md={5}/>
                <Grid item md={2}>  <img style={{ alignItems: "right" ,width:'80%', height:'45%' }} src={dropper}></img></Grid>
                <Grid item md={3}><input type="color" onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "70%" ,height:'70%'}}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid>


    <Grid container direction="row" style={{height:"8vh"}} >
                <Grid item md={6}> <p style={{fontSize:'1vw',alignItems:'left'}} >Background</p></Grid>
                <Grid item md={1}/>
                <Grid item md={2}>  <img style={{ alignItems: "right" ,width:'80%', height:'30%' }} src={dropper}></img></Grid>
                <Grid item md={3}><input type="color" onChange={e=>{changeVal(e.target.value,'backgroundColor')}} style={{ backgroundColor: "transparent", border: "none", width: "70%" ,height:'45%' }}
        
                    />
                    
                    </Grid>
    </Grid>
    <hr/>

      <b style={{ fontSize: "1vw" }}>Border</b>

      <Grid container direction="row"  style={{height:"5vh"}}>
        <Grid item sm={1} md={1}> <BorderStyleIcon style={{ alignItems: "right",height:'100%',width:'100%' }}></BorderStyleIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={7}  md={7}> <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
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
</Box></Grid>
          <Grid item sm={1}  md={1}/>

          <Grid item md={2} sm={2} > <p style={{alignItems:'left', fontSize:'1vw'}}>{BtnOnEdit.borderRadius}</p> </Grid>

        </Grid>



        <hr/>


<b style={{ fontSize: "1vw" }}>Alignement</b>

<Grid container direction="row" style={{height:"5vh"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2}>  <img style={{width:'80%', height:'55%'}}  src={AlignL} onClick={e=> props.setValueMe('left','textAlign')} ></img></Grid>
                <Grid item md={2}>  <img style={{width:'80%', height:'55%'}} src={AlignM} onClick={e=> props.setValueMe('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img style={{width:'80%', height:'55%'}} src={AlignR} onClick={e=> props.setValueMe('right','textAlign')}></img></Grid>

          
                    
    </Grid>
    <hr/>

    <b style={{ fontSize: "1vw" }}>Send Link To</b>

  <Grid container direction='row' style={{height:'8vh',alignItems:'center'}}  >
  <input style={{fontSize:'1vw',color:'black'}} type="text" className="form-control input urlVideo" data-placement="bottom" placeholder="enter yout link" onChange={(e) => setMurl(e.target.value)}  /> 
 {
   murl?<Iframe url={murl}
   width="100%"
  //  height="100%"
   id="myiframe"
   display="initial"
   position="relative"/> :""
 }

  </Grid>

  
</Container>
        </>



    )
}
)

