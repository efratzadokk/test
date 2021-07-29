

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
import { connect } from 'react-redux';
import Grid  from '@material-ui/core/Grid';
import { Box, Slider, TextField } from '@material-ui/core';
// import Font from './font'
import BorderStyleIcon from '@material-ui/icons/BorderStyle';
import BorderLeftIcon from '@material-ui/icons/BorderLeft';
import AlignL from '../../assets/AlignL.svg'
import AlignM from '../../assets/AlignM.svg'
import AlignR from '../../assets/AlignR.svg'
import {actions} from '../../redux/actions/funnel-try.action'

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

  const changeVal= (newValue,type) => {
    // debugger
   


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
                <Grid item sm={6} md={6}> 
                {/* < Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
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
                    </Box>  </Box> */}
                           <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider"  data-toggle="tooltip" data-placement="bottom"  min="10" max="50" step="1"
         onChange={(e) => changeVal(e.target.value, "fontSize")}
         defaultValue={elementInEditing.fontSize}
         
         />
                
                </Grid>
                
                <Grid item md={1} sm={1} />

               <Grid item md={3} sm={3} > <p style={{alignItems:'left', fontSize:'1vw'}}>{BtnOnEdit.fontSize? BtnOnEdit.fontSize+'px':""}</p> </Grid>
                    
              
                
                </Grid>




            {/* ----------- */}
            <Grid container direction="row" style={{height:"5vh", marginTop:'5px'}}>
        <Grid item sm={1} md={1}> <BorderLeftIcon style={{ alignItems: "right",height:'100%',width:'100%' }}></BorderLeftIcon></Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={7} md={7}>
           {/* <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
          <Box width={'100%'} > */}
            {/* <Slider
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
          </Box> */}
                 <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="25" max="100" step="1"
         onChange={(e) => changeVal(e.target.value, "width")}
         defaultValue={BtnOnEdit.width}
         
         />
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
        <Grid item sm={7}  md={7}> 
        {/* <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
          <Box width={'100%'} >
            <Slider
             key={`opac-${BtnOnEdit.id}`}
              defaultValue={BtnOnEdit.borderRadius}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
           //   onChange={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
           onChangeCommitted={(e) => changeVal(e.target.ariaValueNow, "borderRadius")}
            />
          </Box>
</Box> */}
 <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="50" step="1"
         onChange={(e) => changeVal(e.target.value, "borderRadius")}
         defaultValue={BtnOnEdit.borderRadius}
         
         />
</Grid>
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
  <Grid item md={9}>  <input style={{fontSize:'1vw',color:'black'}} type="text" className="form-control input urlVideo" data-placement="bottom" placeholder="enter yout link" onChange={(e) => setMurl(e.target.value)}  /> {/* ,props.setValueMe(e.target.value,'click')*/}
 </Grid>
 <Grid item md={1}/> 
 <Grid item md={2}> 
 <button style={{fontSize:'1vw', border:'none',borderRadius:'45px'}} onClick={()=>murl?window.open(murl):''}>Ok</button>

 </Grid>
 
 {/* {
   murl?<Iframe url={murl}
   width="100%"
  //  height="100%"
   id="myiframe"
   display="initial"
   position="relative"/> :""
 } */}

  </Grid>

  
</Container>
        </>






    )
}
)

