import React from 'react';
import { OnOff } from './OnOff'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../Css/Nav.css'
import '../../Css/helpComponentCss/Contact.css'

export default function Contact(props) {
    const {title,icon,url,onChange,cheak,index,onChangeOnOff} = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2  ">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="col-5 title">
                    {title}
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <OnOff idElement={title} cheak={cheak} onChangeOnOff={onChangeOnOff} index={index}></OnOff>
                </div>
            </div>
            <div className="row  d-flex flex-column">
                    <input
                        id={title}
                        className="input ml-2 mr-2 "
                        placeholder="Attach URL"
                        type="text"
                        value={url ? url : ""}
                        onChange={(e)=>onChange(e.target.value,index)}
                    ></input>
                </div>
        </div>
    );
};


