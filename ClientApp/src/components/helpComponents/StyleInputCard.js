import React from 'react';

import Color from '../helpComponents/DatePickerColor'
import '../../Css/Nav.css'
// import '../../Css/helpComponentCss/Contact.css'

export default function StyleInputCard(props) {
    const { title,background,onchangeColor,color} = props;
    return (
        <div className="container-fluid">
            <div className="row mb-3 title">
                    {title}
            </div >

            <div className="row  d-flex flex-column">
               <Color background={background} onchangeColor={onchangeColor} color={color}></Color>
            </div >
        </div>
    );
};


