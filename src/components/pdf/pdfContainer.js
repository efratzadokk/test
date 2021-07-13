import React from 'react';
// import styled from 'styled-components'
import Doc from './doc'
// import { Icon } from '../../utility/commonComponents'

const PdfContainer = (props) => {
    const { reference ,fileName} = props;

    const createPdf = () => {
        Doc.createPdf(reference.current,fileName);
    }

    return (
       
<span className="mt-4"   onClick={() => createPdf()} >
<span  style={{ width: '25%'}} class="material-icons">download</span>
             

                            {/* <i style={{color:"red" }} class="fas fa-file-pdf fa-3x"></i> */}
                            </span>       
    )
}
export default PdfContainer;
