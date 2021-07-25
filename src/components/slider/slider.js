import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import $ from "jquery";
// import { uploadFiles, addImgToSlider, addElement, setValueMe, uploadOneImage, addImgToGallery, elementInEditing } from '../../redux/actions/funnel.action'
import {actions} from '../../redux/actions/funnel-try.action'

import './slider.css'
// import element from '../element/element';
import { createBrowserHistory } from 'history'
import Modal from 'react-bootstrap/Modal'
import { ImageAspectRatioSharp } from '@material-ui/icons';
import Gallery from '../gallery/gallery.js';


function Slider(props) {
    const { uploadFiles, saveUploadedImgs, addImgToSlider, jPage, elementId, addElement, setValueMe, addImgToGallery, items, sliderImg, element } = props
    // const x = [decodeURI(sliderImg[0].url), decodeURI(sliderImg[1].url)]
    let url = window.location;
    var userName = (url.pathname.split('/')[1]);
    let { history } = props;
    history = createBrowserHistory({ forceRefresh: true })
    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [images, setImages] = useState([]);

    // console.log(elementId)
    // props.elementInEditing(elementId)
    // console.log("id: -", props.elementID2)

    useEffect(() => {
        // debugger
        console.log("img: ", selectedImg)
        if (selectedImg != null) {
            // debugger
            // var url = URL.createObjectURL(selectedImg)
            props.addImgToSlider(selectedImg)//,{url:'https://picsum.photos/id/1018/1000/600/'})
            // addImgToGallery(selectedImg, url)
        }
        //    userName = (url.pathname.split('/')[2]);
        // images = state.funnel.jsonPage.elemenInEditing.images
        // SetImageGallery([])
        // console.log("hi",images)
    }, [selectedImg])
    useEffect(() => {
        // debugger
        jPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == elementId) {
                        // debugger
                        setImages(item.images)
                        console.log("imgs: ", images)
                    }
                })
            })

        })
        // console.log(jPage)
        // console.log(elementId)
        // const items = jPage[elementId]
        // console.log(items)
        // props.saveImgInArr(props.items)
    }, [jPage])
    const SetImageGallery = (value) => {
    }
    const chooseImg = (e) => {
        // debugger
        // console.log(images)
        let reader = new FileReader();
        var url = URL.createObjectURL(e)
        reader.onloadend = () => {
            // debugger
            console.log('added!!');
        }
        addImgToGallery(e, url)
        // uploadOneImage(e)
        // let x = "dfddfgk"
        // uploadOneImage(x)
        // setValueMe( url ,'gallery')
        reader.readAsDataURL(e)
    }
    // const openModal = () => {
    //     debugger
    //     return (
    //         <Modal_Gallery showModal={true}></Modal_Gallery>
    //     )
    // }
    const clickToChoose = () => {
        // debugger
        handleShow()

        // openModal()
        // history.push(`/admin/${userName}/gallery`);
        // $('#chooseImg').trigger('click')
    }
    return (
        <>
            {/* <div id="gallery"> */}

            {/* <ImageGallery id="gallery" items={x} /> */}

            {/* {images &&<ImageGallery id="gallery" items={items} />} */}
            {/* {images ?
            <ImageGallery id="gallery" items={images.images} />:
            <ImageGallery id="gallery" items={[{
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            }]} />} */}
            {/* </div> */}
            <div id={`idd${elementId}`}>
                <ImageGallery style={{maxHeight:'45vh'}} id={`gallery${elementId}`} items={images ? images : []} />
                <button onClick={() => clickToChoose()}>choose images</button>
                {/* <input   type="file" onChange={(e) => chooseImg(e.target.files[0])} style={{ display: 'none' }}></input> */}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Gallery handleClose={handleClose} setSelectedImg={setSelectedImg}></Gallery>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn" variant="primary" onClick={() => { handleClose(); uploadFiles() }}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
            {/* {chooseImg&&
            <Gallery></Gallery>
            } */}
        </>)
}

export default connect(
    (state) => {
        return {
            numElement: state.funnel.jsonPage.num_elements,
            sliderImg: state.funnel.imgsGallery,
            jPage: state.funnel.jsonPage,
            elementID2: state.funnel.elemenInEditing

            // images:state.funnel.elemenInEditing?state.funnel.elemenInEditing.images:null,
            // images: state.funnel.elemenInEditing ? state.funnel.elemenInEditing.images : [{
            //     original: 'https://picsum.photos/id/1019/1000/600/',
            //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
            // }]
            // images:state.funnel.jsonPage.elemenInEditing.images
            // images:state.funnel.jsonPage
            // iframe: state.funnel.iframe
        }
    },
    (dispatch) => {
        return {
            // changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            addElement: function (newGallery, value, section, part, numElement) {
                dispatch(actions.addElement({
                    type: newGallery, value: value, section: section, part: part, id: numElement
                }))
            },
            setValueMe: (newValue, type) => { dispatch(actions.setValueMe({ value: newValue, type: type })) },
            uploadOneImage: (file) => { dispatch(actions.uploadOneImage(file)) },
            addImgToGallery: (file, url) => { dispatch(actions.addImgToGallery({ file: file, url: url })) },
            addImgToSlider: (img) => { dispatch(actions.addImgToSlider(img)) },
            // saveImgInArr: (obj) => { dispatch(actions.saveImgInArr({images:imgs,url})) }
            elementInEditing: function (id) { dispatch(actions.elementInEditing({ id: id })) },
            uploadFiles: function () { dispatch(actions.uploadFiles()) }
        }
    },
)(Slider)