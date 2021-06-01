import React, { useState } from 'react';
import { connect } from 'react-redux';
import {ImageGallery} from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import $ from "jquery";
import { addElement } from '../../redux/actions/funnel.action'
import './image_gallery.css'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
];

function Gallery(props) {
    const { addElement } = props
    const chooseImg = (e) => {
        debugger
        let reader = new FileReader();
        var url = URL.createObjectURL(e)

        reader.onloadend = () => {
            debugger
            console.log('added!!');
            images.push({ original: url, thumbnail: url })
        }
        reader.readAsDataURL(e)
    }
    const clickToChoose = () => {
        debugger
        $('#chooseImg').trigger('click')
    }
    return (
        <>
            {/* <div id="gallery"> */}
                <ImageGallery id="gallery" items={images}/>
            {/* </div> */}
            <button onClick={() => clickToChoose()}>choose images</button>
            <input id='chooseImg' type="file" onChange={(e) => chooseImg(e.target.files[0])} style={{ display: 'none' }}></input>
        </>)
}

export default connect(
    (state) => {
        return {
            numElement: state.funnel.jsonPage.num_elements,
            // iframe: state.funnel.iframe
        }
    },
    (dispatch) => {
        return {
            // changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },

            addElement: function (newGallery, value, section, part, numElement) {
                dispatch(addElement({
                    type: newGallery, value: value, section: section, part: part, id: numElement
                }))
            },
        }
    },
)(Gallery)
