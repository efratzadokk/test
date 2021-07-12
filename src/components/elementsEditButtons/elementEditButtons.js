import React from 'react';
import { connect } from 'react-redux';
import './elementEditButtons.css'
import {actions} from '../../redux/actions/funnel-try.action'

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
            removeElement:  (id) =>{ dispatch(actions.removeElement({ id: id })) },
            elementInEditing:  (id)=> { dispatch(actions.elementInEditing({ id: id })) },
            setCollapseOpen: (collapse,id)=>{dispatch(actions.setCollapseOpen({collapse:collapse,id:id})) }
        }
    }
)
(EelementEditButtons)