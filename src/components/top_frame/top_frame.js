import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import './top_frame.css'
import { InputBase } from '@material-ui/core';
import logo from '../../assets/leader_logo.png'
import thumbtack from '../../assets/thumbtack.svg'
import $ from 'jquery'
import { FaRegCopy, FaLink } from "react-icons/all";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Alert } from '@material-ui/lab';

import { setFlagToggleCon ,setFlagthumbtack,getJson} from '../../redux/actions/funnel.action'
import{Link,useHistory,useRouteMatch}from 'react-router-dom'
import { from } from 'form-data';


function Top_frame(props) {
    const {userName}=props;
const change=()=>{
console.log("lll")
$("#button").css('background-color','blue')
}
let history=useHistory()
const {url,path}=useRouteMatch()
// const userName='sariHaizler';
// const {userName}=props;
const [copy, setCopy] = useState(false);
    return (
        <div id="top_frame" className="row d-flex justify-content-between align-items-center mx-0">
            <a id="leader_logo" href="https://lobby.leader.codes/" className="d-flex">
                <img src={logo} id="img_logo" class="m-auto"></img>
            </a>
<Link to={`${url}/listPapers`}>list paper</Link>
          <>
            <div
              className="m-auto"
              style={{ color:'black', fontSize: '17px', zIndex: 3, border: `2px solid black `, borderRadius: '4px', padding: '5px' }}>
              <span style={{ color: 'black' }}>
                https://funnel.leader.codes/{userName}/Home
           </span> &nbsp;
        <FaLink
                style={{ margin: '2px' }}
                onClick={() => window.open(`https://funnel.leader.codes/${userName}/Home`, "_blank")}
                title='open link in new window'></FaLink>
              <CopyToClipboard text={`https://funnel.leader.codes/${userName}/Home`}
                onCopy={() => setCopy(true)}>
                <FaRegCopy title='copy link to clipboard' style={{ margin: '2px' }}  ></FaRegCopy>
              </CopyToClipboard>
              {copy ?
                <Alert onClose={() => { setCopy(false) }} severity="success" style={{ zIndex: '3' }}>copied!</Alert>
                : null}
            </div>
          </>
        {/* <button id="button" onClick={()=>{change()}} className="red">onClick</button> */}
            <div className="mr-3">
                <img src={thumbtack} id="thumbtack" className={props.thumbtack?"rotateThumbtack pointer":"pointer"} onClick={() => props.changeFlagThumbtack(!props.thumbtack)} />
                <div id="menu2" className="material-icons align-middle pl-2 pointer btn btn-simple" onClick={!props.thumbtack && (() => props.changeFlagConfigurator(!props.flagCon))}>
                    menu
                </div>
        


            </div>
        </div>
    )
}
export default connect(
    (state) => {
        return {
            flagCon: state.funnel.isOpenConfigurator,
            thumbtack: state.funnel.thumbtack,
            userName:state.user.userName

        }
    },
    (dispatch) => {
        return {
            // changeFlagConfigurator: function (newFlag) {dispatch(setFlagToggleCon(newFlag))},
            changeFlagConfigurator: function (newFlag) {dispatch({type: '[funnel] SET_IS_OPEN_CON',payload: newFlag })},
            changeFlagThumbtack: function (newFlag) {dispatch(setFlagthumbtack(newFlag))},
            getJson:()=>{dispatch(getJson())}
        }
    }
)(Top_frame)