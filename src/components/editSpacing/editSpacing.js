
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import dropper from '../../assets/dropper.svg'
import {actions} from '../../redux/actions/funnel-try.action'
import { connect } from 'react-redux';
import Grid  from '@material-ui/core/Grid';
import { Box, Slider } from '@material-ui/core';
import BorderLeftIcon from '@material-ui/icons/BorderLeft';

function mapStateToProps(state) {
    return {
        elementInEditing: state.funnel.elementInEditing,
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
                  <Grid container direction="row" style={{height:"7vh",alignItems:'center'}}>
              <Grid item sm={2}  md={2}> <BorderLeftIcon style={{ alignItems: "right", width:'80%',height:'90%' }}></BorderLeftIcon></Grid>
              <Grid item sm={1} md={1}></Grid>
              <Grid item sm={6} md={6}> 
              
         
         <input type="range" 
                      // style={{height:'100%', width:'100%'}} 
                      className="slider" id="" data-toggle="tooltip" data-placement="bottom"  min="2" max="30" step="0.5"
               onChange={(e) => changeVal(e.target.value, "height")}
               defaultValue={SpacerOnEdit.height}
               
               />
         </Grid>
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



