import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './gallery_hidden.css';
import { connect } from 'react-redux';
// import { downloadFile, removeFile, delImgGallery } from "../../redux/actions/funnel.action"
import {actions} from '../../redux/actions/funnel-try.action'
import { Link } from "react-router-dom";
import { BiTrash } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'
import {
    Row,
    Col,
    Container
} from "reactstrap";
import { RedditIcon } from 'react-share';

function Hidden(props) {

    const { downloadFile, removeFile, imgA } = props;
    async function removeImg() {
        await removeFile(imgA);
        setTimeout(()=>{props.setPressRemove(true)},1000)        
    }
    return (
        <>
            <Col>
                <Row>
                    <Col md="1" style={{ padding: '0' }}></Col>
                    <Col md="10" style={{ padding: '0' }}>
                        <Link to={props.imageLocation}>
                            <div className="back-to-page d-flex justify-content-center align-items-center">
                                <BsDownload onClick={() => { downloadFile(imgA) }} style={{ marginRight: '3px' }}></BsDownload>
                                <BiTrash style={{ backgroundColor: "red" }} onClick={() => removeImg()}></BiTrash>
                                <FontAwesomeIcon className="fas fa-arrow-right al"
                                    icon={['fas', 'arrow-right']}
                                ></FontAwesomeIcon>
                            </div>
                        </Link>
                        <div className="hidden-win">
                            {!imgA || !imgA.name ?
                                null
                                : <div className="frame-hidden-win">
                                    <img className="display-picture" src={imgA.url} />
                                    <div className="hidden-win-p-div">
                                        <p className="hidden-win-p pic-name">{imgA.name.split('.').slice(0, -1).join('.')}</p>
                                        <p className="hidden-win-p">type: <a style={{ color: 'rgb(151, 150, 150)' }}>{imgA.name.split('.').pop()}</a></p>
                                        <p className="hidden-win-p">size: <a style={{ color: 'rgb(151, 150, 150)' }}>{imgA.size}</a></p>
                                    </div>
                                </div>}
                            <div style={{ margin: "10%" }} className="">
                                {/* <div className="icons-hidden-win"> */}
                                {/* <Link to="../../../../assets/tlush.PDF" target="_blank" download>
                        <FontAwesomeIcon className="icon-hidden-win"
                            icon={['fas', 'download']}
                        >
                        </FontAwesomeIcon>
                    </Link> */}
                                {/* <div>
                                    <FontAwesomeIcon className="icon-hidden-win"
                                        icon={['fas', 'trash-alt']}
                                        onClick={() => { props.deleteImage(imgA); }}
                                    >

                                    </FontAwesomeIcon>
                                </div> */}


                                <Link to={props.imageLocation} className="done-image-link">
                                    <button
                                        className="btnDonePic"
                                        onClick={() => props.uploadImageNameAction({ func: props.functionSetImage, img: imgA.url })}
                                    >
                                        Done
                                    </button>

                                    {/* <button onClick={() => props.uploadImageNameAction({ func: props.functionSetImage, img: imgA.url })}>done</button> */}
                                </Link>

                            </div>
                        </div>
                    </Col>
                    <Col md="1" style={{ padding: '0' }}></Col>
                </Row>
            </Col>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        // functionSetImage: state.uploadImageReducer.functionSetImage,
        // imageLocation: state.uploadImageReducer.ImageLocation,

    }
}
const mapDispatchToProps = (dispatch) => ({
    deleteImage: (e) => { dispatch(actions.delImgGallery(e)) },
    removeFile: (file) => { dispatch(actions.removeFile(file)) },
    downloadFile: (file) => { dispatch(actions.downloadFile(file)) },
    // deleteImage: (e) => dispatch(actions.deleteImage(e)),
    // uploadImageNameAction: (e) => dispatch(actions.uploadImageNameAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Hidden);