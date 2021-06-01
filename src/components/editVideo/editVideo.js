import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import { setValueElement } from '../../redux/actions/funnel.action'
import './editVideo.css'

function EditVideo(props) {
    const {videoOnEdit,setValueElement}=props
    return (
        <>
        <label for="">Fill Video</label>
        <input type="text" className="form-control input urlVideo" value={videoOnEdit.value} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setValueElement(e.target.value)}  /> 
   </>
    )
}
export default connect(
    undefined,
    (dispatch) => {
        return {
            setValueElement:(newValue)=>{dispatch(setValueElement({value:newValue}))}
                }
    }
)(EditVideo)