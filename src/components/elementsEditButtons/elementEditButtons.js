import React from 'react';
import { connect } from 'react-redux';
import { removeSection } from '../../redux/actions/funnel.action'
import { removeElement, elementInEditing,setCollapseOpen } from '../../redux/actions/funnel.action'
import './elementEditButtons.css'

function EelementEditButtons(props) {
    const {id,removeElement, elementInEditing,setCollapseOpen}=props
    return (
        <>
        <div className="divEditButtons">
                    <span className="material-icons" onClick={() => removeElement(id)}>
                        delete
                    </span>
                    <span className="material-icons" onClick={() => setCollapseOpen('element',id)} >
                            create
                    </span></div>
        </>
    )
}
export default connect(
    undefined,
    (dispatch) => {
        return {
            removeElement: function (id) { dispatch(removeElement({ id: id })) },
            elementInEditing: function (id) { dispatch(elementInEditing({ id: id })) },
            setCollapseOpen:function (collapse,id){dispatch(setCollapseOpen(collapse,id)) }
        }
    }
)
(EelementEditButtons)