import React from 'react';
import { connect } from 'react-redux';
import EditHtmlElement from '../editHtmlElement/editHtmlElement';
import EditVideo from '../editVideo/editVideo'
import EditImg from '../editImage/editImg'
import EditForm from '../editForm/editForm';
import Editbutton from '../editButton/editbutton';
import EditTitle from '../editTitle/editTitle'
import EditSpacing from '../editSpacing/editSpacing'
import EditIcon from '../EditIcon/EditIcon'
import EditGallery from '../editGallery/editGallery'

import './editElement.css'
function EditElement(props) {
    const {elementInEditing}=props
    return (
        <div className="card button_collapse p-0" style={{width:'100%',height:'90%'}}>
                           
                            <div id="collapseTwo" className="collapse show" name="1" aria-labelledby="headingTwo"
                                data-parent="#accordion" style={{width:'100%',height:'100%'}}>
                                <div id="EditingElement-body" className="card-body p-2 " style={{width:'100%',height:'100%'}} >
                                   {elementInEditing.type=="Video"&& <EditVideo videoOnEdit={elementInEditing}></EditVideo>}
                                   {elementInEditing.type=="Image"&& <EditImg ImgOnEdit={elementInEditing}></EditImg>}
                                   {elementInEditing.type=="Title"&& <EditTitle titleOnEdit={elementInEditing} ></EditTitle>}
                                   {elementInEditing.type=="Paragraph"&& <EditTitle titleOnEdit={elementInEditing}></EditTitle>}                                   
                                   {elementInEditing.type=="Gallery"&& <EditGallery GalleryOnEdit={elementInEditing}></EditGallery>}
                                   {elementInEditing.type=="Button"&& <Editbutton BtnOnEdit={elementInEditing}></Editbutton>}  
                                   {elementInEditing.type=="Spacer"&& <EditSpacing SpacerOnEdit={elementInEditing}></EditSpacing>}                                   
                                   {elementInEditing.type=="Icon"&& <EditIcon IconOnEdit={elementInEditing}></EditIcon>}                                   
                                   {elementInEditing.type=="Html"&& <EditHtmlElement HtmlOnEdit={elementInEditing}></EditHtmlElement>}
                                   {elementInEditing.type=="Form"&& <EditForm FormOnEdit={elementInEditing}></EditForm>}
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