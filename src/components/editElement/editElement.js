
// import React from 'react';
// import { connect } from 'react-redux';
// import { removeSection } from '../../redux/actions/funnel.action'
// import EditHtmlElement from '../editHtmlElement/editHtmlElement';
// import EditVideo from '../editVideo/editVideo'
// import EditImg from '../editImage/editImg'
// import EditForm from '../editForm/editForm';
// import Editbutton from '../editButton/editbutton';
// import EditTitle from '../editTitle/editTitle'
// import EditSpacing from '../editSpacing/editSpacing'
// import EditIcon from '../editIcon/editIcon'
// import './editElement.css'
// function EditElement(props) {
//     const {elementInEditing}=props
//     return (
//         <div className="card button_collapse p-0" style={{width:'100%'}}>
//                             {/* <div className="card-header p-0" id="headingTwo">
//                                 <h5 className="m-0">
//                                     <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
//                                         data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                         Editing {elementInEditing.type} <span className="material-icons align-middle arrow-collapse">
//                                             keyboard_arrow_right
//                                     </span>
//                                     </button>
//                                 </h5>
//                             </div> */}
//                             <div id="collapseTwo" className="collapse show" name="1" aria-labelledby="headingTwo"
//                                 data-parent="#accordion" style={{width:'100%'}}>
//                                 <div id="EditingElement-body" className="card-body p-2 " style={{width:'100%'}} >
//                                    {elementInEditing.type=="Video"&& <EditVideo videoOnEdit={elementInEditing}></EditVideo>}
//                                    {elementInEditing.type=="Image"&& <EditImg ImgOnEdit={elementInEditing}></EditImg>}
//                                    {elementInEditing.type=="Title"&& <EditTitle titleOnEdit={elementInEditing} ></EditTitle>}
//                                    {elementInEditing.type=="Paragraph"&& <EditTitle titleOnEdit={elementInEditing}></EditTitle>}                                   
//                                    {elementInEditing.type=="Gallery"&& <EditImg ImgOnEdit={elementInEditing}></EditImg>}
//                                    {elementInEditing.type=="Button"&& <Editbutton BtnOnEdit={elementInEditing}></Editbutton>}  
//                                    {elementInEditing.type=="Spacer"&& <EditSpacing SpacerOnEdit={elementInEditing}></EditSpacing>}                                   
//                                    {elementInEditing.type=="Icon"&& <EditIcon IconOnEdit={elementInEditing}></EditIcon>}                                   
//                                    {elementInEditing.type=="Html"&& <EditHtmlElement HtmlOnEdit={elementInEditing}></EditHtmlElement>}
//                                    {elementInEditing.type=="Form"&& <EditForm FormOnEdit={elementInEditing}></EditForm>}
// {/*                                 
//                                     aaaabbb */}
//                                  {/* <p>{elementInEditing.type}</p> */}
//                                  {/* {editinigElement && <div>  <input type="color" value={elementInEditing.settings.style.color}></input>
//                                         <input value={elementInEditing.value}></input></div> 
//                                         }*/}
//                                 </div>
//                             </div>
//                         </div>
// )
// }
// export default connect(
//     (state) => {
//         return {
//             elementInEditing: state.funnel.elementInEditing
//         }
//     }
//     ,
// )(EditElement)


import React from 'react';
import { connect } from 'react-redux';
import { removeSection } from '../../redux/actions/funnel.action'
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
        <div className="card button_collapse p-0" style={{width:'100%'}}>
                           
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