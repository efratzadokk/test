import React from 'react';
import { connect } from 'react-redux';
import './top_frame.css'
import logo from '../../assets/leader_logo.png'
import thumbtack from '../../assets/thumbtack.svg'
import $ from 'jquery'
import { setFlagToggleCon ,setFlagthumbtack,getJson} from '../../redux/actions/funnel.action'
import{Link,useHistory,useRouteMatch}from 'react-router-dom'
import { from } from 'form-data';



function Top_frame(props) {
const change=()=>{
console.log("lll")
$("#button").css('background-color','blue')
}
let history=useHistory()
const {url,path}=useRouteMatch()
const url1=window.location.pathname.split('/')
// const url1=url.split('/')

    return (
        <div id="top_frame" className="row d-flex justify-content-between align-items-center mx-0">
            <a id="leader_logo" href="https://lobby.leader.codes/" className="d-flex">
                <img src={logo} id="img_logo" class="m-auto"></img>
            </a>
<Link to={`${url}/listPapers`}>list paper</Link>
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
            thumbtack: state.funnel.thumbtack
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
