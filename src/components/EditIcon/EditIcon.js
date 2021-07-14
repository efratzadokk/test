

import React from 'react';
import { connect } from 'react-redux';

 import {actions} from '../../redux/actions/funnel-try.action'
 import Grid from '@material-ui/core/Grid';
 import { Box, Slider } from '@material-ui/core';

 import AlignL from '../../assets/AlignL.svg'
 import AlignM from '../../assets/AlignM.svg'
 import AlignR from '../../assets/AlignR.svg'
 import {Container,Row} from 'react-bootstrap'
 import Opacity from '../../assets/opacity.svg'
 import BorderLeftIcon from '@material-ui/icons/BorderLeft';
 import dropper from '../../assets/dropper.svg'


import './EditIcon.css'

function EditIcon(props) {
    const {styleIcon,IconOnEdit}=props



    
  const changeVal= (newValue,type) => {

    props.elementInEditing1(IconOnEdit.id)
    

       props.setValueMe(newValue,type)
      
       props.elementInEditing1(IconOnEdit.id)
    
    
      }
console.log(IconOnEdit)
    return (
        <div style={{width:'100%'}}>
        
        
        <Container style={{width:'100%'}}>

        
        <Row style={{fontSize:"1.5vw",color:'#4169E1', fontWeight:'bold'}} >Emoji </Row>

        
    <b style={{ fontSize: "1vw",alignItems:'center' }}>Height</b>

            <Grid container direction="row" style={{height:"7vh",alignItems:'center'}}>
            <Grid item sm={2} md={2}> <BorderLeftIcon style={{ alignItems: "right", width: "80%" ,height:'100%' }}></BorderLeftIcon></Grid>
            <Grid item sm={1} md={1}></Grid>
            <Grid item sm={6} md={6}> 
            {/* <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
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
</Box> */}
 <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="100" step="1"
         onChange={(e) => changeVal(e.target.value, "fontSize")}
         defaultValue={IconOnEdit.fontSize}
         
         />
</Grid>
          <Grid item md={1} sm={1} />

          <Grid item md={2} sm={2} > <p style={{textAlign:'left',fontSize:'1vw',margin:'0px', paddingRight:'0px'}}>{IconOnEdit.fontSize}</p> </Grid>


        </Grid>
   
    {/* <hr/>

    <b style={{ fontSize: "1vw" }}>Color</b>



    <Grid container direction="row" style={{height:"5vh",textAlign:'center',alignItems:'center'}} >
                <Grid item md={2} sm={2}  style={{fontSize:'1vw',alignItems: "right"}}> Fill</Grid>
                <Grid item md={5} sm={5}/>
                <Grid item md={2} sm={2} > <img style={{ alignItems: "right" ,width:'50%', height:'100%'}} src={dropper}></img></Grid>
                <Grid item md={3} sm={3} style={{height:'90%',width:'100%'}}><input type="color" onChange={e=>{props.setValueMe(e.target.value,'color')}} style={{ backgroundColor: "transparent", border: "none",  width: "80%" ,height:'85%',alignItems:'center',textAlign:'center'}}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid> */}


 <hr/>
    <b style={{ fontSize: "1vw"  }}>Opacity</b>
    
    <Grid container direction="row" style={{height:"7vh",alignItems:'center'}}>
      <Grid item sm={2} md={2}> <img style={{ alignItems: "right" ,height:'80%',width:'58%' }} src={Opacity}></img></Grid>
      <Grid item md={1} sm={1} />
      <Grid item sm={6} md={6}>
         {/* <Box flexDirection="row" display="flex" justifyContent="space-between" style={{ alignItems: "center",height:'100%',width:'100%' }}>
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
         </Box> */}
          <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="1" step="0.1"
         onChange={(e) => changeVal(e.target.value, "opacity")}
         defaultValue={IconOnEdit.opacity}
         
         />
         </Grid>

        <Grid item md={1} sm={1} />
<Grid item md={2} sm={2} > <p style={{textAlign:'left',fontSize:'1vw'}}>{IconOnEdit.opacity}</p> </Grid>


     </Grid>
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
            setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
            elementInEditing1: function (id) { dispatch(actions.elementInEditing({ id: id })) },
            

        }
    }
)(EditIcon)