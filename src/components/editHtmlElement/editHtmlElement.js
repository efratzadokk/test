import React from 'react';
import Element from '../element/element'
import { connect } from 'react-redux';
import { setValueElement } from '../../redux/actions/funnel.action'

function EditHtmlElement(props) {
    const {setValueElement,thisElement}=props
    return (
        <>
        <label for="">HTML code</label>
        <textarea className="form-control input" value={thisElement.value} rows='5' id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
   </>
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