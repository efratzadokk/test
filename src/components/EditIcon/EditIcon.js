// import React from 'react';
// // import { useDropzone, onDragOver } from 'react-dropzone'
// import { connect } from 'react-redux';
// // import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
// import { setSizeIcon } from '../../redux/actions/funnel.action'
// import { setValueElement,setStyleIcon, elementInEditing } from '../../redux/actions/funnel.action'

// // import { setStyleIcon } from '../../redux/actions/funnel.action'


// import './EditIcon.css'

// function EditIcon(props) {
//     const {styleIcon,element,IconOnEdit,setValueElement,setStyleIcon}=props

//     const setSizeIcon = (value)=>{
//         console.log('I am in setSizeIcon!!!!')
//         setStyleIcon('width',value+'px')
// console.log("width:",value);
//         console.log('I set styleIcon !!!!')
//         setStyleIcon('height',value+'px')

//         //  console.log(value)
//     }
//     // const setHeightIcon =(value)=>{
//     //     setStyleIcon('height',value+'px')
//     // }
   
//     const setColorIcon=(value)=>{
//         setStyleIcon('color',value) 
//     }
//     const setLinkIcon=(value)=>{
//         setStyleIcon('link',value)
//     }

    
//     return (
//         <>
//         <label for="">size Icon</label>
//           <input type="range" className="slider" defaultValue={styleIcon.width}
//         //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
//            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//            onChange={(e) => setSizeIcon(e.target.value)}
//             min="0" max="100" step="1" />

//                <label for="">color Icon</label>
//           <input type="color" className="form-control input" data-toggle="tooltip" 
//         //   defaultValue={styleImage.height.replace('px','')}
//            id=""  data-placement="bottom" placeholder="" 

           
//            onChange={(e) => setColorIcon(e.target.value)}
//             min="0" max="800" step="1" />
//         {/* <label for="">size</label>
//         <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        
//         <label for="">link Icon</label>
//         <input type="text" id="" data-toggle="tooltip" data-placement="bottom"  defaultValue={styleIcon.co} placeholder="" min="0" max="0.99" step="0.0001"
//          onChange={(e) => setLinkIcon(e.target.value)} />
//    </>
//     )
// }

// export default connect(
//     (state) => {
//         return {
//             styleIcon: state.funnel.elementInEditing.settings
//         }
//     },
//     (dispatch) => {
//         return {           
//             //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
//         }
//     }
// )(EditIcon)

// import React from 'react';
// // import { useDropzone, onDragOver } from 'react-dropzone'
// import { connect } from 'react-redux';
// // import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
// import { setSizeIcon } from '../../redux/actions/funnel.action'
// //import { setValueElement,setStyleIcon, elementInEditing } from '../../redux/actions/funnel.action'

//  import { setValueMe , elementInEditing} from '../../redux/actions/funnel.action'

//  import Grid from '@material-ui/core/Grid';
//  import { Box, Slider } from '@material-ui/core';

//  import AlignL from '../../assets/AlignL.svg'
//  import AlignM from '../../assets/AlignM.svg'
//  import AlignR from '../../assets/AlignR.svg'
//  import {Container,Row} from 'react-bootstrap'
//  import Opacity from '../../assets/opacity.svg'
//  import BorderLeftIcon from '@material-ui/icons/BorderLeft';
//  import dropper from '../../assets/dropper.svg'


// import './editIcon.css'

// function EditIcon(props) {
//     const {styleIcon,element,IconOnEdit,setValueElement,setStyleIcon}=props

// //     const setSizeIcon = (value)=>{
// //         console.log('I am in setSizeIcon!!!!')
// //         props.setValueMe('width',value+'px')
// // console.log("width:",value);
// //         console.log('I set styleIcon !!!!')
// //         props.setValueMe('height',value+'px')

// //         //  console.log(value)
// //     }
//     // const setHeightIcon =(value)=>{
//     //     setStyleIcon('height',value+'px')
//     // }
   
//     // const setColorIcon=(value)=>{
//     //     props.setValueMe('color',value) 
//     // }
//     // const setLinkIcon=(value)=>{
//     //     setStyleIcon('link',value)
//     // }

    
//     // return (
//     //     <>
//         {/* <label for="">size Icon</label>
//           <input type="range" className="slider" defaultValue={styleIcon.width}
//         //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
//            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//            onChange={(e) => setSizeIcon(e.target.value)}
//             min="0" max="100" step="1" />

//                <label for="">color Icon</label>
//           <input type="color" className="form-control input" data-toggle="tooltip" 
//         //   defaultValue={styleImage.height.replace('px','')}
//            id=""  data-placement="bottom" placeholder="" 

           
//            onChange={(e) => setColorIcon(e.target.value)}
//             min="0" max="800" step="1" /> */}




//         {/* <label for="">size</label>
//         <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        
//         {/* <label for="">link Icon</label>
//         <input type="text" id="" data-toggle="tooltip" data-placement="bottom"  defaultValue={styleIcon.co} placeholder="" min="0" max="0.99" step="0.0001"
//          onChange={(e) => setLinkIcon(e.target.value)} /> */}
//    {/* </>
//     ) */}

    
//   const changeVal= (newValue,type) => {

//     props.elementInEditing1(IconOnEdit.id)
    

//        props.setValueMe(newValue,type)
      
//        props.elementInEditing1(IconOnEdit.id)
    
    
//       }
// console.log(IconOnEdit)
//     return (
//         <>
        
        



        
//         <Container>

        
// <Row style={{fontSize:"17px"}}>
//     Icon
// </Row>
// <hr/>

        
//     <b style={{ fontSize: "14px" }}>Height</b>

//     {/* <Row>
//         <Col sm='1'><img src={textSize}></img></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col>
//     </Row> */}

//             {/* ----------- */}
//             <Grid container direction="row" style={{height:"15px"}}>
//         <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right" }}></BorderLeftIcon></Grid>
//         <Grid item sm={1} md={1}></Grid>
//         <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//           <Box width={'100%'} >
//             <Slider
//               defaultValue={IconOnEdit.fontSize}
//               step={1}
//               marks
//               min={10}
//               max={150}
//               valueLabelDisplay="auto"
//               onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//               onClick={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
//             />
//           </Box>

//           <Grid item md={1} sm={1} />

//           <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{IconOnEdit.fontSize}</p> </Grid>


//         </Box></Grid></Grid>
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
//                 <Grid item sm={3}><input type="color" onChange={e=>{props.setValueMe(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
//                   //  onChange={(e) => setItem(e.target.value, "color", index)}
//                     // value={item.color}
                    
//                     />
                    
//                     </Grid>
//     </Grid>

//       {/* <b >Border</b>

//       <Grid container direction="row"  style={{height:"10px"}}>
//         <Grid item md={2}> <BorderStyleIcon style={{ alignItems: "right" }}></BorderStyleIcon></Grid>
//         <Grid item md={2}></Grid>
//         <Grid item md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//           <Box width={'100%'} >
//             <Slider
//               defaultValue={elementInEditing.borderRadius}
//               step={0.1}
//               marks
//               min={0}
//               max={2}
//               valueLabelDisplay="auto"
//               onChange={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
//               onClick={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
//             />
//           </Box>
//         </Box></Grid></Grid>

//  */}

//  <hr/>
//     <b style={{ fontSize: "16px" }}>Opacity</b>
    
//     <Grid container direction="row">
//       <Grid item sm={1} md={1}> <img src={Opacity}></img></Grid>
//       <Grid item md={1} sm={1} />
//       <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//         <Box width={'100%'} >
//           <Slider
//             defaultValue={IconOnEdit.opacity}
//             step={0.1}
//             marks
//             min={0}
//             max={1}
//             valueLabelDisplay="auto"
//             onChange={(e) => changeVal(e.target.ariaValueNow, "opacity")}
//             onClick={(e) => changeVal(e.target.ariaValueNow, "opacity")}
//           />
//         </Box>
        
//         <Grid item md={1} sm={1} />

// <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{IconOnEdit.opacity}</p> </Grid>


//       </Box></Grid></Grid>
//     <hr/>

//         {/* <hr/> */}
// </Container>
       

       
         
//         {/* // </Grid> */}

//         </>
//       )



// }

// export default connect(
//     (state) => {
//         return {
//             styleIcon: state.funnel.elementInEditing.settings
//         }
//     },
//     (dispatch) => {
//         return {           
//             //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
//             setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
//             elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },
            

//         }
//     }
// )(EditIcon)

// import React from 'react';
// // import { useDropzone, onDragOver } from 'react-dropzone'
// import { connect } from 'react-redux';
// // import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
// import { setSizeIcon } from '../../redux/actions/funnel.action'
// import { setValueElement,setStyleIcon, elementInEditing } from '../../redux/actions/funnel.action'

// // import { setStyleIcon } from '../../redux/actions/funnel.action'


// import './EditIcon.css'

// function EditIcon(props) {
//     const {styleIcon,element,IconOnEdit,setValueElement,setStyleIcon}=props

//     const setSizeIcon = (value)=>{
//         console.log('I am in setSizeIcon!!!!')
//         setStyleIcon('width',value+'px')
// console.log("width:",value);
//         console.log('I set styleIcon !!!!')
//         setStyleIcon('height',value+'px')

//         //  console.log(value)
//     }
//     // const setHeightIcon =(value)=>{
//     //     setStyleIcon('height',value+'px')
//     // }
   
//     const setColorIcon=(value)=>{
//         setStyleIcon('color',value) 
//     }
//     const setLinkIcon=(value)=>{
//         setStyleIcon('link',value)
//     }

    
//     return (
//         <>
//         <label for="">size Icon</label>
//           <input type="range" className="slider" defaultValue={styleIcon.width}
//         //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
//            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//            onChange={(e) => setSizeIcon(e.target.value)}
//             min="0" max="100" step="1" />

//                <label for="">color Icon</label>
//           <input type="color" className="form-control input" data-toggle="tooltip" 
//         //   defaultValue={styleImage.height.replace('px','')}
//            id=""  data-placement="bottom" placeholder="" 

           
//            onChange={(e) => setColorIcon(e.target.value)}
//             min="0" max="800" step="1" />
//         {/* <label for="">size</label>
//         <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        
//         <label for="">link Icon</label>
//         <input type="text" id="" data-toggle="tooltip" data-placement="bottom"  defaultValue={styleIcon.co} placeholder="" min="0" max="0.99" step="0.0001"
//          onChange={(e) => setLinkIcon(e.target.value)} />
//    </>
//     )
// }

// export default connect(
//     (state) => {
//         return {
//             styleIcon: state.funnel.elementInEditing.settings
//         }
//     },
//     (dispatch) => {
//         return {           
//             //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
//         }
//     }
// )(EditIcon)

import React from 'react';
// import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
// import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
import { setSizeIcon } from '../../redux/actions/funnel.action'
//import { setValueElement,setStyleIcon, elementInEditing } from '../../redux/actions/funnel.action'

 import { setValueMe , elementInEditing} from '../../redux/actions/funnel.action'

 import Grid from '@material-ui/core/Grid';
 import { Box, Slider } from '@material-ui/core';

 import AlignL from '../../assets/AlignL.svg'
 import AlignM from '../../assets/AlignM.svg'
 import AlignR from '../../assets/AlignR.svg'
 import {Container,Row} from 'react-bootstrap'
 import Opacity from '../../assets/opacity.svg'
 import BorderLeftIcon from '@material-ui/icons/BorderLeft';
 import dropper from '../../assets/dropper.svg'


import './editIcon.css'

function EditIcon(props) {
    const {styleIcon,element,IconOnEdit,setValueElement,setStyleIcon}=props

//     const setSizeIcon = (value)=>{
//         console.log('I am in setSizeIcon!!!!')
//         props.setValueMe('width',value+'px')
// console.log("width:",value);
//         console.log('I set styleIcon !!!!')
//         props.setValueMe('height',value+'px')

//         //  console.log(value)
//     }
    // const setHeightIcon =(value)=>{
    //     setStyleIcon('height',value+'px')
    // }
   
    // const setColorIcon=(value)=>{
    //     props.setValueMe('color',value) 
    // }
    // const setLinkIcon=(value)=>{
    //     setStyleIcon('link',value)
    // }

    
    // return (
    //     <>
        {/* <label for="">size Icon</label>
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
            min="0" max="800" step="1" /> */}




        {/* <label for="">size</label>
        <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
        
        {/* <label for="">link Icon</label>
        <input type="text" id="" data-toggle="tooltip" data-placement="bottom"  defaultValue={styleIcon.co} placeholder="" min="0" max="0.99" step="0.0001"
         onChange={(e) => setLinkIcon(e.target.value)} /> */}
   {/* </>
    ) */}

    
  const changeVal= (newValue,type) => {

    props.elementInEditing1(IconOnEdit.id)
    

       props.setValueMe(newValue,type)
      
       props.elementInEditing1(IconOnEdit.id)
    
    
      }
console.log(IconOnEdit)
    return (
        <div style={{width:'100%'}}>
        
        
        <Container style={{width:'100%'}}>

        
<Row style={{fontSize:"17px", color:'#4169E1', fontWeight:'bold' }}>
    Icon
</Row>
<hr/>

        
    <b style={{ fontSize: "14px" }}>Height</b>

    {/* <Row>
        <Col sm='1'><img src={textSize}></img></Col>
        <Col sm='10' ><input type='range' min="16" max="100"/></Col>
    </Row> */}

            {/* ----------- */}
            <Grid container direction="row" style={{height:"15px"}}>
        <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right" }}></BorderLeftIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Box width={'100%'} >
            <Slider
              defaultValue={IconOnEdit.fontSize}
              step={1}
              marks
              min={10}
              max={150}
              valueLabelDisplay="auto"
              onChange={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
              onClick={(e) => changeVal(e.target.ariaValueNow, "fontSize")}
            />
          </Box>

          <Grid item md={1} sm={1} />

          <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{IconOnEdit.fontSize}</p> </Grid>


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
                <Grid item sm={3}><input type="color" onChange={e=>{props.setValueMe(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid>

      {/* <b >Border</b>

      <Grid container direction="row"  style={{height:"10px"}}>
        <Grid item md={2}> <BorderStyleIcon style={{ alignItems: "right" }}></BorderStyleIcon></Grid>
        <Grid item md={2}></Grid>
        <Grid item md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Box width={'100%'} >
            <Slider
              defaultValue={elementInEditing.borderRadius}
              step={0.1}
              marks
              min={0}
              max={2}
              valueLabelDisplay="auto"
              onChange={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
              onClick={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
            />
          </Box>
        </Box></Grid></Grid>

 */}

 <hr/>
    <b style={{ fontSize: "16px" }}>Opacity</b>
    
    <Grid container direction="row">
      <Grid item sm={1} md={1}> <img src={Opacity}></img></Grid>
      <Grid item md={1} sm={1} />
      <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
        <Box width={'100%'} >
          <Slider
            defaultValue={IconOnEdit.opacity}
            step={0.1}
            marks
            min={0}
            max={1}
            valueLabelDisplay="auto"
            onChange={(e) => changeVal(e.target.ariaValueNow, "opacity")}
            onClick={(e) => changeVal(e.target.ariaValueNow, "opacity")}
          />
        </Box>
        
        <Grid item md={1} sm={1} />

<Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{IconOnEdit.opacity}</p> </Grid>


      </Box></Grid></Grid>
    <hr/>

        {/* <hr/> */}
</Container>
       

       
         
        {/* // </Grid> */}

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
            //  setStyleIcon: (property, newValue) => { dispatch(setStyleIcon({ property: property, value: newValue })) }
            setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
            elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },
            

        }
    }
)(EditIcon)