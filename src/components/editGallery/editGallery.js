
import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import { setValueElement,setStyleImage,setValueMe ,elementInEditing} from '../../redux/actions/funnel.action'

import Grid  from '@material-ui/core/Grid';

import Cloud from '../../assets/cloud.png'
import $ from "jquery";
import dropper from '../../assets/dropper.svg'

import { Col, Row, Container } from "react-bootstrap";
import Input from '@material-ui/core/Input';

function EditGallery(props) {

return (
    <>


    </>
)
}

export default connect(
    (state) => {
        return {
            styleImage: state.funnel.elementInEditing.settings,
            elementInEditing: state.funnel.elementInEditing,

        }
    },
    (dispatch) => {
        return {           
             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) },
            setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
            elementInEditing1: function (id) { dispatch(elementInEditing({ id: id })) },

        }
    }
)(EditGallery)