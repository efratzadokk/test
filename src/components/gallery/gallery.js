import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
// import { addImgToSlider, uploadImage, addImgToGallery } from "../../redux/actions/funnel.action"
import {actions} from '../../redux/actions/funnel-try.action'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Hidden from '../gallery_hidden/gallery_hidden';
import { MDBRipple } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal'

// import ConfirmImgModal from '../../../modals/confirmImgModal'
import {
    Row,
    Col,
    Container
} from "reactstrap";
import './gallery.css'
function Gallery(props) {
    const [currentPic, setCurrentPic] = useState(null)
    const [files, setFiles] = useState(props.myFiles)
    const [myImage, setMyImage] = useState(null);
    const [modal, setModal] = useState(false);
    const [ok, setOk] = useState(false);
    const [show, setShow] = useState(true)
    const [pressRemove, setPressRemove] = useState(false)
    const inputFile = useRef(null)

    function handlerLogo(event) {
        // debugger
        // if (ok) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setMyImage(reader.result)
            }
            reader.readAsDataURL(event)
            let img = props.myFiles.filter(f => {
                return f.name === event.name
            })
            if (!img || !img[0]) {
                var url = URL.createObjectURL(event)
                props.addImgToGallery(event, url)
            }
            // props.uploadImage(event);

            // props.uploadImage({ file: event, func: props.functionSetImage });

            // props.uploadImageNameAction({ func: props.functionSetImage, img: reader.result })

            // }
            // setOk(false)
        }

        // setOk(false)
        // }
    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    
    useEffect(() => {
        setCurrentPic(props.myFiles[0])
        // props.getAllImagesOfUser()
    }, [])

    useEffect(() => {
        // debugger
        setCurrentPic(props.myFiles[0])
        // props.getAllImagesOfUser()
    }, [myImage])
    useEffect(() => {
        
        setCurrentPic(props.myFiles[0])

    },[pressRemove])
    const chooseImg = (e) => {

    }
    const select = (img) => {
        // debugger
        
        console.log("get!!")
        props.handleClose();
        props.setSelectedImg(img)
    }
    const images = props.myFiles.map((image, index) => {
        return (
            <>
                {currentPic === image
                    ? <div className="upload-my-file-div" style={{ borderBottom: '2px solid #F77062' }} onClick={() => { setCurrentPic(image); }}>
                        {/* <MDBRipple
                            className='bg-image hover-overlay shadow-1-strong rounded'
                            style={{ maxWidth: '22rem' }}
                            rippleTag='div'
                            rippleColor='light'
                        > */}
                        <img onDoubleClick={() => select(image)} key={index} src={image.url} style={{ height: '100%', cursor: 'pointer' }} />
                        <a href='#!'>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        </a>
                        {/* </MDBRipple> */}
                    </div>
                    : <div className="upload-my-file-div" onClick={() => { setCurrentPic(image); }}>
                        <img key={index} src={image.url} style={{ height: '100%', cursor: 'pointer' }} />
                    </div>
                }
            </>
        )
    });

    return (
        <>
            <div>
                {/* <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                > */}
                <Row md="12" style={{ padding: '1% 2%' }}>

                    <Col className="p-0 col-gallery" md="9">
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="d-flex justify-content-between container__head" style={{ padding: '5% 0 1%', margin: '0' }}>
                                <div className="container__title crud_title title_md">Image Gallery</div>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10" className="d-flex justify-content-between" style={{ padding: "0" }}>
                                <div className="my-file" data-spy="scroll" style={{ display: "block" }}>
                                    <div
                                        id="upload-id"
                                        style={{
                                            backgroundColor: "rgb(243 243 243)", display: "inline-block !important",
                                            cursor: 'pointer', textAlign: 'center', cursor: 'pointer', position: 'relative', top: '4.5%',
                                        }}
                                        className="upload-my-file-div d-flex justify-content-center align-items-center" >
                                        <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={(e) => handlerLogo(e.target.files[0])} />
                                        <div onClick={onButtonClick} className="">
                                            <div md="12" className="d-flex justify-content-center align-items-center" style={{
                                                border: 'dashed 1px rgb(171, 171, 171)',
                                                borderRadius: '50%',
                                                height: '45px',
                                                width: '45px',
                                                alignItems: 'center',
                                                margin: '20% 30% 5%'
                                            }}>
                                                <FontAwesomeIcon className="d-flex justify-content-center align-items-center" style={{
                                                    fontSize: "large", color: '#ABABAB', display: 'block',

                                                }} icon={['fas', 'plus']}></FontAwesomeIcon>
                                            </div>
                                            <div md="12" className="d-flex justify-content-center align-items-center" style={{ color: '#ABABAB' }}><span>Upload</span></div>
                                        </div>
                                    </div>

                                    {/* <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={(e) => handlerLogo(e.target.files[0])} />
                                <div className="upload-my-file-div" onClick={onButtonClick} style={{ cursor: 'pointer', display: "inline-block !important", background: 'transparent linear-gradient(to top left, #FE5196 20%,  #FC894D 100%) 0% 0% no-repeat padding-box', textAlign: 'center', paddingTop: '10px', cursor: 'pointer', position: 'relative', top: '11%' }}>
                                    <div className="" style={{ position: 'absolute', top: '22%', right: '22%' }}>
                                        <FontAwesomeIcon className="icon-upload-my-file"
                                            icon={['fas', 'plus']}>
                                        </FontAwesomeIcon>
                                        <div><p className="word-icon-upload-my-file">Upload</p></div>
                                    </div>
                                </div> */}
                                    {images}
                                </div>
                            </Col>
                        </Row>
                    </Col >
                    {/* <Col className="p-0" md="1"></Col> */}
                    < Col className="p-0 col-display-pic" md="3" >
                        {currentPic ? <Hidden className="ml-4" imgA={currentPic} setPressRemove={setPressRemove}></Hidden> : <Hidden imgA={props.myFiles[0]}></Hidden>
                        }
                    </Col >
                </Row >
                {/* </Modal> */}
            </div>
            {/* <ConfirmImgModal modal={modal} setModal={setModal} setOk={setOk}></ConfirmImgModal> */}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        // objectFields: state.storeReducer.objectFields,
        // myFiles: state.mediaGalleryReducer.myFiles,
        myFiles: state.funnel.imgsGallery,
        // functionSetImage: state.uploadImageReducer.functionSetImage,
        // imageLocation: state.uploadImageReducer.ImageLocation,
    }
}
const mapDispatchToProps = (dispatch) => ({
    // setTitleBySideBar: (e) => dispatch(actions.setTitleBySideBar(e)),
    // getAllImagesOfUser: (e) => dispatch(actions.getAllImagesOfUser(e)),
    // uploadImage: (e) => dispatch(actions.uploadImage(e)),
    uploadImage: (e) => { dispatch(actions.uploadImage(e)) },
    addImgToGallery: (file, url) => { dispatch(actions.addImgToGallery({ file: file, url: url })) },
    addImgToSlider: (img) => { dispatch(actions.addImgToSlider(img)) }


})
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
