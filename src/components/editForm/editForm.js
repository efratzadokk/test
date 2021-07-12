// import React, { useState, useRef } from 'react';
// import { connect } from 'react-redux';

// function EditForm(props) {
//     const {formOnEdit,setValueElement,nameUser}=props
//     return (
//         <>
//         <label for="">Fill Form</label>
//         <input type="text" className="form-control input urlForm" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
//         <a target="_blank" href={`https://forms.dev.leader.codes/${nameUser}/new`}><button className="btn mt-3" style={{backgroundColor:"rgb(137, 140, 143)",fontSize:"0.8rem",color:''}}>Beyond the form system</button></a>
//    </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             nameUser: state.user.userName,
//         }
//     },
//     (dispatch) => {
//         return {
//             setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
//                 }
//     }
// )(EditForm)

import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/funnel-try.action'

function EditForm(props) {
    const {formOnEdit,setValueElement,nameUser}=props
    return (
        <>
        <label for="">Fill Form</label>
        <input type="text" className="form-control input urlForm" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
        <a target="_blank" href={`https://forms.dev.leader.codes/${nameUser}/new`}><button className="btn mt-3" style={{backgroundColor:"rgb(137, 140, 143)",fontSize:"0.8rem",color:''}}>Beyond the form system</button></a>
   </>
    )
}
export default connect(
    (state) => {
        return {
            nameUser: state.user.userName,
        }
    },
    (dispatch) => {
        return {
            setValueElement:(newValue)=>{dispatch(actions.setValueElement({value:newValue}))}
                }
    }
)(EditForm)