import React from 'react';
import { OnOff } from './OnOff'

import '../../Css/helpComponentCss/AgentDetail.css'
import '../../Css/Nav.css'


export default function AgentDetail(props) {
    const { title, onChange, header, cheak, onChangeOnOff, type, hiddenOnOff = true } = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <label id={title} className="title">{header}</label>
                </div>
                {hiddenOnOff ?
                    <div className="col-4 d-flex justify-content-end">
                        <OnOff idElement={header} cheak={cheak} onChangeOnOff={onChangeOnOff} typeElement={type}></OnOff>
                    </div> : ""}
            </div>
            <div className="row d-flex flex-column">
                <input id={title + "Input"} className="input ml-2 mr-2"
                    placeholder={title !== "" ? title : header}
                    value={title !== "" ? title : ""}
                    onChange={(e) => onChange(e.target.value)} type="text"></input>
            </div>
        </div>
    );
};


