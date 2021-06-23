

// import React, { Component } from 'react'
// import {Container,Row,Col} from 'react-bootstrap'
// // import fontFamilies from './fontFamily'
// import textSize from '../../assets/textSize.svg'
// import dropper from '../../assets/dropper.svg'



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

// export default connect(mapStateToProps, mapDispatchToProps) ( function EditSpacing(props) 
// {
//     const {elementInEditing,SpacerOnEdit}=props
    

// console.log(elementInEditing)
//   const changeVal= (newValue,type) => {

// props.elementInEditing1(elementInEditing.id)

//    props.setValueMe(newValue,type)
  
//    props.elementInEditing1(elementInEditing.id)

//  console.log(elementInEditing)

//   }

  

   
//     return (

    

//       <Container>

        
// <Row style={{fontSize:"17px", color:'#4169E1', fontWeight:'bold' }}>
//     Spacer
// </Row>
// <hr/>

        
//     <b style={{ fontSize: "14px" }}>Height</b>

//     {/* <Row>
//         <Col sm='1'><img src={textSize}></img></Col>
//         <Col sm='10' ><input type='range' min="16" max="100"/></Col>
//     </Row> */}

//             {/* ----------- */}
//             <Grid container direction="row" style={{height:"15px"}}>
//         <Grid item sm={1}  md={1}> <BorderLeftIcon style={{ alignItems: "right" }}></BorderLeftIcon></Grid>
//         <Grid item sm={1} md={1}></Grid>
//         <Grid item sm={8} md={8}> <Box flexDirection="row" display="flex" justifyContent="space-between">
//           <Box width={'100%'} >
//             <Slider
//               defaultValue={SpacerOnEdit.height}
//               step={0.5}
//               marks
//               min={2}
//               max={30}
//               valueLabelDisplay="auto"
//               onChange={(e) => changeVal(e.target.ariaValueNow, "height")}
//               onClick={(e) => changeVal(e.target.ariaValueNow, "height")}
//             />
//           </Box>

//           <Grid item md={1} sm={1} />

//     <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{SpacerOnEdit.height}</p> </Grid>


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
//                 <Grid item sm={3}><input type="color" defaultValue={SpacerOnEdit.color} onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none", width: "100%" }}
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

//         {/* <hr/> */}
//         </Container>       



//     )
// }
// )





import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
// import fontFamilies from './fontFamily'
import textSize from '../../assets/textSize.svg'
import dropper from '../../assets/dropper.svg'



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

export default connect(mapStateToProps, mapDispatchToProps) ( function EditSpacing(props) 
{
    const {elementInEditing,SpacerOnEdit}=props
    

console.log(elementInEditing)
  const changeVal= (newValue,type) => {

props.elementInEditing1(elementInEditing.id)

   props.setValueMe(newValue,type)
  
   props.elementInEditing1(elementInEditing.id)

 console.log(elementInEditing)

  }

  

   
    return (

    

      <Container>

        
<Row style={{fontSize:"1.5vw", color:'#4169E1', fontWeight:'bold' }}>
    Spacer
</Row>
<hr/>

        
    <b style={{ fontSize: "1vw" }}>Height</b>

   

            {/* ----------- */}
            <Grid container direction="row" style={{height:"7vh",textAlign:'center',alignItems:'center'}}>
        <Grid item sm={2}  md={2}> <BorderLeftIcon style={{ alignItems: "right", width:'80%',height:'90%' }}></BorderLeftIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={6} md={6}> <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
          <Box width={'100%'} >
            <Slider
              defaultValue={SpacerOnEdit.height}
              step={0.5}
              marks
              min={2}
              max={30}
              valueLabelDisplay="auto"
              onChange={(e) => changeVal(e.target.ariaValueNow, "height")}
              onClick={(e) => changeVal(e.target.ariaValueNow, "height")}
            />
          </Box>
   </Box></Grid>
          <Grid item md={1} sm={1} />

    <Grid item md={2} sm={2} > <p style={{alignItems:'left', fontSize:'1vw'}}>{SpacerOnEdit.height}</p> </Grid>


     </Grid>
    <hr/>

  
    <b style={{ fontSize: "1vw" }}>Color</b>

    <Grid container direction="row" style={{height:"7vh" ,textAlign:'center'}} >
                <Grid item zeroMinWidth={2}> <p style={{ fontSize: "1vw",alignItems:'left' }}>Fill</p></Grid>
                <Grid item md={5}/>
                <Grid item md={2}>  <img style={{ alignItems: "right",width:'80%', height:'25%' }} src={dropper}></img></Grid>
                <Grid item md={3}><input type="color" defaultValue={SpacerOnEdit.color} onChange={e=>{changeVal(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none",  width: "60%" ,height:'45%' }}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid>

     
        </Container>       



    )
}
)



