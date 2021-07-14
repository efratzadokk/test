
import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import './editLogo.css'
import AlignB from '../../assets/AlignB.svg'
import AlignL from '../../assets/AlignL.svg'
import AlignM from '../../assets/AlignM.svg'
import AlignR from '../../assets/AlignR.svg'
import AlignT from '../../assets/AlignT.svg'
import AMid from '../../assets/AMid.svg'
import Image from '../../assets/Image.svg'
import Opacity from '../../assets/opacity.svg'
import Grid  from '@material-ui/core/Grid';
import Cloud from '../../assets/cloud.png'
import $ from "jquery";
import dropper from '../../assets/dropper.svg'
import FormControl from '@material-ui/core/FormControl';
import { Select } from '@material-ui/core';
import { Col, Row, Container } from "react-bootstrap";
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import {actions} from '../../redux/actions/funnel-try.action'
function EditLogo(props) {

    const {styleImage,element,ImgOnEdit,setStyleImage,elementInEditing,elementInEditing1}=props
    const arrBorders=["solid","dotted","dashed","double","groove","ridge","inset","outset","none"];
    const [oneBorder, setoneBorder] = useState(arrBorders[0]);
    
    console.log(elementInEditing)
    console.log(ImgOnEdit)

    const setWidthImage = (value)=>{
        setStyleImage('width',value+'%')


   }
    const setHeightImage =(value)=>{
        setStyleImage('height',(value)+'%')
    }
    const  setOpacityImage=(value)=>{
        setStyleImage('opacity',value)
    }

   const  twoCalls = e => {
        setWidthImage(e.target.value)
        setHeightImage(e.target.value)
      }

   

    const changePic=(e)=>
    {
        $(`#inputFileImg${ImgOnEdit.id}`).trigger('click')  
    }

  
    const setBColor=(c ,typei)=>{
        props.elementInEditing1(ImgOnEdit.id)
        console.log(c)
        props.setStyleImage(typei,c)
       
        props.elementInEditing1(ImgOnEdit.id)
    }

    function HavingBorder(e) {
        debugger
        let c = e.target.checked;
        props.elementInEditing1(ImgOnEdit.id)

        props.setValueMe(c,'border')
       
        props.elementInEditing1(ImgOnEdit.id)
     
      console.log(elementInEditing)
      console.log(ImgOnEdit)

    }

    return (
        <>
<Container>
  <Row style={{fontSize:"1.5vw",color:'#4169E1', fontWeight:'bold'}} >Logo </Row>
  <hr/>
  <Row style={{width:'100%' ,height:'11vh' , marginRight:'4%'}} >
  {ImgOnEdit.value ? 
        <div id='mycon'>
     <img  onDoubleClick={changePic} style={{ width: "80%", height: "100%", margin: "0 15%" }} id="editI" src={ImgOnEdit.value}  alt="Image"   />
      
        
        <div class="moi">
        <img src={Cloud} id='mcloud' alt='cloud'/>
        </div>
        
        </div>
  : 
  <div onDoubleClick={changePic} style={{textAlign:'center', width: "100%", height: "100%"}}>
      <span class="material-icons-outlined" style={{textAlign:'center', width: "100%", height: "100%", fontSize: '5rem', marginLeft: 'auto', marginRight: 'auto'}} >
          panorama
        </span>
      {/* <p className="m-0 text-center">Drag & Drop files here or click to upload</p> */}
  </div>


}
{/* <Row style={{marginBottom:'10px'}}><img onDoubleClick={changePic} style={{width:'10%', height:'80%' ,marginLeft:'20px' ,alignItems:'left'}}src={Cloud} alt='cloud'/>
 </Row> */}

  </Row>

<Grid container direction='row'>
    <Grid item></Grid>
</Grid>
  <hr/>
  
<b style={{ fontSize: "1vw" }}>Size</b>

  <Grid container direction="row" style={{height:"6vh", alignItems:'center'}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2} sm={2}>  <img src={Image} style={{width:'100%', height:'100%',alignItems:'right'}}></img></Grid>
                <Grid item md={1} sm={1} ></Grid>
                <Grid item md={6} sm={6}>  
                <input type="range" className="slider" data-toggle="tooltip" 
              defaultValue='100'
              onChange={twoCalls} min="10" max="100" step="1"  /></Grid>
               <Grid item md={1}/>


        <Grid item md={2} sm={2} > <p style={{fontSize:'1vw',alignItems:'left'}}>{ImgOnEdit.settings.height? ImgOnEdit.settings.height.slice(0,-1) : "" }</p> </Grid>


     
    </Grid>
 

  <hr/>

<b style={{ fontSize: "1vw" }}>Alignement</b>



<Grid container direction="row" style={{height:"5vh",alignItems:'center'}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2}>  <img style={{width:'50%', height:'20%'}} src={AlignL} onClick={e=> props.setValueMe('left','textAlign')} ></img></Grid>
                <Grid item md={2}>  <img style={{width:'50%', height:'20%'}} src={AlignM} onClick={e=> props.setValueMe('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img style={{width:'50%', height:'20%'}} src={AlignR} onClick={e=> props.setValueMe('right','textAlign')}></img></Grid>

          
                    
    </Grid>


<hr/>

<b style={{ fontSize: "1vw" }}>Opacity</b>

<Grid container direction="row" style={{height:"7vh", alignItems:'center'}} >
            
                <Grid item md={2} sm={2}>  <img src={Opacity} style={{width:'66%', height:'100%',alignItems:'right'}}></img></Grid>
                <Grid item md={1} sm={1} ></Grid>
                <Grid item md={6} sm={6}>  
                <input type="range" 
                // style={{height:'100%', width:'100%'}} 
                className="slider" id="" data-toggle="tooltip" data-placement="bottom" value={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.01"
         onChange={(e) => setOpacityImage(e.target.value)}/>
              </Grid>
               <Grid item md={1}/>

        <Grid item md={2} sm={2} > <p style={{alignItems:'left',fontSize:'1vw'}}>{ImgOnEdit.settings.opacity? ImgOnEdit.settings.opacity : "" }</p> </Grid>
     
    </Grid>

<hr/>

<Grid container direction="row" style={{height:"3vh"}}  >
<Grid item md={2} sm={2} style={{marginTop:'0px'}}><input style={{width:'60%',height:'90%',}} type="checkbox" id="imgBorder"  onClick={(e) => HavingBorder(e)} /> </Grid>
<Grid item md={10} sm={10} style={{marginTop:'0px',textAlign:'center',alignItems:'center'}} >  <label  for="imgBorder" style={{color:'grey' ,marginTop:'0px',fontSize:'1vw',textAlign:'center'}}>Border</label> </Grid>
{
    ImgOnEdit.border?<> 
    
    <Grid container direction="row" style={{height:"5vh"}} >
               
               <Grid item md={9} sm={9}>   

                <FormControl  style={{width:"100%",height:'100%'}}>
                <Select style={{width:"100%",height:'100%', border:'none',fontSize:'1vw'}} 
                onChange={(event) => 
                    {setBColor(event.target.value,"borderStyle")
                ;setoneBorder(event.target.value);console.log(event.target.value)}
            }
            defaultValue={setBColor(oneBorder,'borderStyle')} 
                    labelId="demo-customized-select-label"s
                    id="demo-customized-select"
                    value={oneBorder}
                    

                    >
                    {arrBorders.map((border) =>
            
             <MenuItem  id="optionBorder" 
                 value={border} key={border} style={{width:'100%'}}>
                <img  style={{border:border,width:'90%',height:'6px'}}/>
            </MenuItem>        
            )}                 
                    </Select>
                </FormControl>




                   </Grid>
                   <Grid item md={1} sm={1} /> 

                   <Grid item md={2} sm={2} > <input type='text' placeholder='px'
                    style={{ height:'100%', width:'100%', border:'none' , color:'grey',fontSize:'1vw'}}
                    onChange={(e)=> setBColor(`${e.target.value}px`,'borderWidth')}
                    /></Grid>
               </Grid>
               
    <Grid container direction="row" style={{height:"4vh"}} >
                <Grid item sm={4}> <p style={{fontSize:'1vw',alignItems:'left'}} >Color</p></Grid>
                <Grid item md={2}/>
                <Grid item md={2}>  <img style={{ alignItems: "right",width:'80%', height:'45%'  }} src={dropper}></img></Grid>
                <Grid item sm={3}><input type="color" 
                 onChange={e=>{setBColor(e.target.value,'borderColor')}}
                 style={{ backgroundColor: "transparent", border: "none", width: "70%",height:'70%' }}
                  //  onChange={(e) => setItem(e.target.value, "color", index)}
                    // value={item.color}
                    
                    />
                    
                    </Grid>
    </Grid>


    
    
    </> : setBColor('none','borderStyle') 
}

</Grid>

</Container>
    
          

   </>
    )
}

export default connect(
    (state) => {
        return {
            styleImage: state.funnel.elementInEditing.settings,
            elementInEditing: state.funnel.elementInEditing,

        }
    },
    (dispatch) => {
        return {           
             setStyleImage: (property, newValue) => { dispatch(actions.setStyleImage({ property: property, value: newValue })) },
            setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
            elementInEditing1: function (id) { dispatch(actions.elementInEditing({ id: id })) },

        }
    }
)(EditLogo)