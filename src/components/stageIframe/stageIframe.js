import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './stageIframe.css'
import $ from "jquery";
import 'jquery-ui-bundle';

function StageIframe(props) {
    const { urlPage,userName,name,setIframe } = props
    //////////אני  יירקתי
    // useEffect(() => {
    //       setIframe(document.getElementById('iframe'))
    //     })

    return (
        <>
   <div id="stageIframe" className="col-md-9 d-flex p-0 m-auto" >
       <iframe id="iframe" src={`${urlPage}/stage/${userName}/${name}/`} className="col-md-12 d-flex p-0" frameBorder="0" ></iframe>
       </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
         urlPage:state.funnel.urlPage,
         userName:state.user.userName,
        name:state.funnel.name,
        }
    },
    (dispatch) => {
        return {
            setIframe: function (iframe) {dispatch({type: '[funnel] SET_IFRAME',payload: iframe })},
        }
    }
)(StageIframe)
