// import React from 'react';
// import Element from '../element/element'
// import { connect } from 'react-redux';
// import { setValueElement } from '../../redux/actions/funnel.action'

// function EditHtmlElement(props) {
//     const {setValueElement,thisElement}=props
//     return (
//         <>
//         <label for="">HTML code</label>
//         <textarea className="form-control input" value={thisElement.value} rows='5' id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
//    </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             thisElement: state.funnel.elementInEditing,
//         }
//     },
//     (dispatch) => {
//         return {
//             setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
//                 }
//     }
// )(EditHtmlElement)

// import React from 'react';
// import Element from '../element/element'
// import { connect } from 'react-redux';
// import { setValueElement } from '../../redux/actions/funnel.action'
// import Grid  from '@material-ui/core/Grid';
// import {Container,Row,Col} from 'react-bootstrap'
// import Font from '../editTitle/font'
// function EditHtmlElement(props) {
//     const {setValueElement,thisElement,HtmlOnEdit}=props
//     return (
//         <Container>

        
//         <Row style={{fontSize:"17px"}}>
//          Html
//         </Row>
//         <b style={{ fontSize: "14px" }}>HTML code</b>
//         <textarea className="form-control input" value={HtmlOnEdit.value} placeholder="Add Html Code" rows='5' id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
  
//         <b style={{ fontSize: "14px", }}>Font</b>

//         <Row >
//         <Grid container direction="row" style={{height:"10px"}} >
//         <Grid item md={1}/>

//         <Grid item md={11}><Font/></Grid>
//         </Grid>

//         </Row>


//    </Container>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             thisElement: state.funnel.elementInEditing,
//         }
//     },
//     (dispatch) => {
//         return {
//             setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
//                 }
//     }
// )(EditHtmlElement)

// import React from 'react';
// import Element from '../element/element'
// import { connect } from 'react-redux';
// import { setValueElement } from '../../redux/actions/funnel.action'

// function EditHtmlElement(props) {
//     const {setValueElement,thisElement}=props
//     return (
//         <>
//         <label for="">HTML code</label>
//         <textarea className="form-control input" value={thisElement.value} rows='5' id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
//    </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             thisElement: state.funnel.elementInEditing,
//         }
//     },
//     (dispatch) => {
//         return {
//             setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
//                 }
//     }
// )(EditHtmlElement)

import React from 'react';
import Element from '../element/element'
import { connect } from 'react-redux';
import { setValueElement } from '../../redux/actions/funnel.action'
import Grid  from '@material-ui/core/Grid';
import {Container,Row,Col} from 'react-bootstrap'
import Font from '../editTitle/font'
function EditHtmlElement(props) {
    const {setValueElement,thisElement,HtmlOnEdit}=props
    return (
        <Container>

        
        <Row style={{fontSize:"17px" , color:'#4169E1', fontWeight:'bold' }}>
         Html
        </Row>
        <b style={{ fontSize: "14px" }}>HTML code</b>
        <textarea className="form-control input" value={HtmlOnEdit.value} placeholder="Add Html Code" rows='5' id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
  
        <b style={{ fontSize: "14px", }}>Font</b>

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
            setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
                }
    }
)(EditHtmlElement)