import React from 'react';
import '../../Css/Card.css'

import { openfileDialog } from '../../BL/StyleCard'
import UploadFile from '../helpComponents/UploadFile'

export default function Imag(props) {

    const { idImag,idUpload,backgroundImg, changeBackgroundImg } = props;

    return (
        <div className="container-fluid">
            <div className="row w-100">
                <UploadFile
                    id={idUpload}
                    changeCoverStyle={changeBackgroundImg}
                    idElementChange={"#"+idImag}
                ></UploadFile>
                <div className="agentPic bg-light img" id={idImag}
                    // style={{ background: backgroundImg }}
                    onClick={() => { openfileDialog("#" + idUpload) }}>
                </div>
                1
            </div>
        </div>
    );

};


