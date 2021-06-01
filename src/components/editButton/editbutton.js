import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setHrefButton } from '../../redux/actions/funnel.action'

function EditButton(props) {
    const {formOnEdit,setHrefButton}=props
    return (
        <>
        <label for="">add url</label>
        <input type="text" className="form-control input " id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setHrefButton(e.target.value)}  /> 
   </>
    )
}

export default connect(
    undefined,
    (dispatch) => {
        return {
            setHrefButton:(newValue)=>{dispatch(setHrefButton({value:newValue}))}
                }
    }
)(EditButton)