
import React from 'react';
import Element from '../element/element'
import { connect } from 'react-redux';
import Grid  from '@material-ui/core/Grid';
import {Container,Row,Col} from 'react-bootstrap'
import Font from '../editTitle/font'
import {actions} from '../../redux/actions/funnel-try.action'

function EditHtmlElement(props) {
    const {setValueElement,HtmlOnEdit}=props
    return (
        <Container>

        
        <Row style={{fontSize:"1vw" , color:'#4169E1', fontWeight:'bold' }}>
         Html
        </Row>
        <b style={{ fontSize: "1vw" }}>HTML code</b>
        <textarea style={{ fontSize: "1vw", }} className="form-control input" value={HtmlOnEdit.value} placeholder="Add Html Code" rows='5' id="" data-toggle="tooltip" data-placement="bottom"  onChange={(e) => setValueElement(e.target.value)}  /> 
  
        <b style={{ fontSize: "1vw", }}>Font</b>

        <Row >
        <Grid container direction="row" style={{height:"10px"}} >
        <Grid item md={1}/>

        <Grid item md={11}><Font/></Grid>
        </Grid>

        </Row>


   </Container>
    )
}
export default connect(
    (state) => {
        return {
            thisElement: state.funnel.elementInEditing,
        }
    },
    (dispatch) => {
        return {
            setValueElement:(newValue)=>{dispatch(actions.setValueElement({value:newValue}))}
                }
    }
)(EditHtmlElement)