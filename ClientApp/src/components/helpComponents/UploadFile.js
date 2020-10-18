import React from 'react';
import { onChangeHandlerImage } from '../../BL/StyleCard'


export default function UploadFile(props) {
    const { id,changeCoverStyle,idElementChange } = props;
    return (
        <div className="container-fluid">

            <input
                type="file" id={id} name="files" title="Load File" hidden
                accept="image/png, image/jpeg"
                onChange={e => onChangeHandlerImage(e.target.files[0],changeCoverStyle, idElementChange)}
            />
        </div >
    );
};


