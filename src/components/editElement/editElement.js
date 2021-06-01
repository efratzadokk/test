import React from 'react';
import { connect } from 'react-redux';
import { removeSection } from '../../redux/actions/funnel.action'
import EditHtmlElement from '../editHtmlElement/editHtmlElement';
import EditVideo from '../editVideo/editVideo'
import EditImg from '../editImage/editImg'
import EditForm from '../editForm/editForm';
import Editbutton from '../editButton/editbutton';

function EditElement(props) {
    const {elementInEditing}=props
    return (
        <div className="card button_collapse p-0">
                            <div className="card-header p-0" id="headingTwo">
                                <h5 className="m-0">
                                    <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Editing {elementInEditing.type} <span className="material-icons align-middle arrow-collapse">
                                            keyboard_arrow_right
                                    </span>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse show" name="1" aria-labelledby="headingTwo"
                                data-parent="#accordion">
                                <div id="EditingElement-body" className="card-body p-2 ">
                                   {elementInEditing.type=="Video"&& <EditVideo videoOnEdit={elementInEditing}></EditVideo>}
                                   {elementInEditing.type=="Image"&& <EditImg ImgOnEdit={elementInEditing}></EditImg>}
                                   {elementInEditing.type=="Html"&& <EditHtmlElement></EditHtmlElement>}
                                   {elementInEditing.type=="Form"&& <EditForm></EditForm>}
                                   {elementInEditing.type=="Button"&& <Editbutton></Editbutton>}          
                                   {elementInEditing.type=="Spacer"&& <editSpacing></editSpacing>}          


{/*                                 

                                    aaaabbb */}
                                 {/* <p>{elementInEditing.type}</p> */}
                                 {/* {editinigElement && <div>  <input type="color" value={elementInEditing.settings.style.color}></input>
                                        <input value={elementInEditing.value}></input></div> 
                                        }*/}
                                </div>
                            </div>
                        </div>
)
}
export default connect(
    (state) => {
        return {
            elementInEditing: state.funnel.elementInEditing
        }
    }
    ,
)(EditElement)