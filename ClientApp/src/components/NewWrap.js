import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import AppsIcon from '@material-ui/icons/Apps';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LanguageIcon from '@material-ui/icons/Language';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import MenuIcon from '@material-ui/icons/Menu';
import CardHook from '../CardHook'
import Card from '../Card'
import Configurator from './Configurator'
import NavButton from './Navabutton'
import Logo from '../Fram/assets/logo.png'
import Menu from '../Fram/assets/menu.png'
import Load from '../helpComponents/Loading'
import Profile from '../Fram/assets/profil.png'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import '../../Css/NewWrap.css'

class NewWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configurator: false,
            navLeft: true
        };
    }
    opendAndCloseConfigurator = () => {
        this.setState({ configurator: !this.state.configurator })
    }

    opendAndCloseLeftNav = () => {
        var element = document.getElementById("leftNav");
        if (this.state.navLeft) {
            element.classList.remove("col-1");
            element.classList.add("col-2");
        }
        else {
            element.classList.remove("col-2");
            element.classList.add("col-1");
        }
        this.setState({ navLeft: !this.state.navLeft })
    }


    render() {

        return (
            <div className="container-fluid mt-2 bodyAll  " >
                {/* nav header */}
                <div className="row navHeader">
                    <div className="col container navHeader_container d-flex flex-column justify-content-center ">
                        <div className="row ">

                            {/* logo and bar */}
                            <div className="col container">
                                <div className="row">
                                    {/* stroke="#384364" stroke-linecap="round" stroke-width="1.5px" opacity="0" */}
                                    <div className="col-1 m-1" onClick={() => this.opendAndCloseLeftNav()} >
                                        <MenuIcon fontSize="large"></MenuIcon>
                                    </div>
                                    <div className="col-2 mt-1 ml-3 p-0 h-25 w-25 d-flex justify-content-center">
                                        <img src={Logo} className="img-fluid rounded-circle d-flex justify-content-center"></img>
                                    </div>
                                    <PopupState  variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <AppsIcon className="m-0 p-0 mt-1 " fontSize="large"{...bindTrigger(popupState)}>></AppsIcon>
                                                <Popover style={{ width: "20vw" }}
                                                    {...bindPopover(popupState)}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    {/*  */}
                                                    <Box p={2} style={{ width: "300px" }} className="row d-flex justify-content-around">
                                                        {/* <Typography component={'span'}  > */}
                                                        <div className="col" style={{color:"#3A405E"}}>
                                                            <LanguageIcon fontSize="large" ></LanguageIcon>
                                                            <div>Sites</div>
                                                        </div>
                                                        <div className="col" style={{color:"rgb(68, 215, 182)"}}>
                                                            <SmartphoneIcon fontSize="large"></SmartphoneIcon>
                                                            <div>Cards</div>
                                                        </div>
                                                        <div className="col" style={{color:"rgb(98, 54, 255)"}}>
                                                            <BrandingWatermarkIcon  fontSize="large"></BrandingWatermarkIcon>
                                                            <div><a href="http://104.131.70.58/">Vlogger</a></div>
                                                        </div>
                                                        {/* </Typography> */}
                                                    </Box>
                                                </Popover>
                                            </div>
                                        )}</PopupState>
                                </div>
                            </div>

                            {/* nav items */}
                            <div className="col d-flex align-items-center navButtonItem">
                                <NavButton
                                    titleNavButton="Posts"
                                ></NavButton>
                            </div>
                            <div className="col d-flex flex-column align-items-center justify-content-center navButtonItem">
                                <NavButton
                                    titleNavButton="Forms"
                                ></NavButton>
                            </div>

                            <div className="col d-flex flex-column align-items-center justify-content-center ">
                                <NavButton className="col d-flex align-items-center justify-content-center "
                                    titleNavButton="cards"
                                ></NavButton>
                            </div>
                            <div className="col  d-flex align-items-center navButtonItem">
                                <NavButton
                                    titleNavButton="life Chat"
                                ></NavButton>
                            </div>
                            <div className="col d-flex align-items-center navButtonItem">
                                <NavButton
                                    titleNavButton="Files"
                                ></NavButton>
                            </div>

                            {/* profile bar thumbtack */}
                            <div className="col container ">
                                <div className="row d-flex flex-row-reverse">
                                    <div className="col-2 mr-4 mt-1 " onClick={() => this.opendAndCloseConfigurator()}>
                                        {/* <FontAwesomeIcon icon='bars' /> */}
                                        <MenuIcon fontSize="large"></MenuIcon>
                                    </div>
                                    <div className="col-2 mt-2">
                                        {/* <FontAwesomeIcon icon='thumbtack' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.165" height="25.554" viewBox="0 0 19.165 25.554">
                                            <g fill="#3a405e"><path d="M14.874,10.694l-.611-5.9H16.37a1.2,1.2,0,0,0,1.2-1.2V1.2A1.2,1.2,0,0,0,16.37,0H2.795A1.2,1.2,0,0,0,1.6,1.2v2.4a1.2,1.2,0,0,0,1.2,1.2H4.9l-.611,5.9C1.87,11.82,0,13.838,0,16.37a1.2,1.2,0,0,0,1.2,1.2H7.985v5.191a.4.4,0,0,0,.042.179l1.2,2.4a.4.4,0,0,0,.714,0l1.2-2.4a.4.4,0,0,0,.042-.179V17.568h6.788a1.2,1.2,0,0,0,1.2-1.2C19.165,13.816,17.269,11.808,14.874,10.694Z" /></g></svg>
                                    </div>
                                    <div className="col m-0 p-0 d-flex justify-content-end">
                                        <img src={Profile} className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* box-shadow: 0px 3px 6px red; */}



                {/* body */}
                <div className="row body bg-light">
                    {/* left nav */}
                    <div className="col-1 container  navLeft " id="leftNav">
                        <div className="row d-flex justify-content-center navLeft_icon_content ">
                            <div className="col-3 container">
                                <div className="row d-flex justify-content-center" style={{ marginTop: "15px" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="27.497" height="21.998"
                                        viewBox="0 0 27.497 21.998">
                                        <g fill="#45afff">
                                            <path d="M27.5,11.343v-.687a.687.687,0,0,0-.687-.687H14.78V8.249h3.093a1.375,1.375,0,0,0,1.375-1.375v-5.5A1.375,1.375,0,0,0,17.873,0H9.624A1.375,1.375,0,0,0,8.249,1.375v5.5A1.375,1.375,0,0,0,9.624,8.249h3.093V9.968H.687A.687.687,0,0,0,0,10.655v.687a.687.687,0,0,0,.687.687H5.156v1.719H2.75a1.375,1.375,0,0,0-1.375,1.375v5.5A1.375,1.375,0,0,0,2.75,22H9.624A1.375,1.375,0,0,0,11,20.623v-5.5a1.375,1.375,0,0,0-1.375-1.375H7.218V12.03H20.279v1.719H17.873A1.375,1.375,0,0,0,16.5,15.124v5.5A1.375,1.375,0,0,0,17.873,22h6.874a1.375,1.375,0,0,0,1.375-1.375v-5.5a1.375,1.375,0,0,0-1.375-1.375H22.342V12.03H26.81A.687.687,0,0,0,27.5,11.343ZM11,5.5V2.75h5.5V5.5ZM8.249,19.248H4.125V16.5H8.249Zm15.124,0H19.248V16.5h4.125Z" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center" style={{ marginTop: "25px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g fill="#44d7b6"><path d="M19.062,0H.939A.938.938,0,0,0,.276,1.6L7.5,8.826v8.049a.938.938,0,0,0,.4.768l3.125,2.187a.938.938,0,0,0,1.475-.768V8.826L19.725,1.6A.938.938,0,0,0,19.062,0Z" transform="translate(0)" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center " style={{ marginTop: "25px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.75" height="20" viewBox="0 0 13.75 20">
                                        <g fill="#6dd400"><path d="M6.875,3.125a3.754,3.754,0,0,0-3.75,3.75.625.625,0,0,0,1.25,0,2.5,2.5,0,0,1,2.5-2.5.625.625,0,0,0,0-1.25ZM3.752,17.937a.621.621,0,0,0,.1.345l.957,1.439a.625.625,0,0,0,.52.279h3.08a.624.624,0,0,0,.52-.279l.957-1.439a.628.628,0,0,0,.1-.345l0-1.687H3.751ZM6.875,0A6.871,6.871,0,0,0,1.7,11.4,11.179,11.179,0,0,1,3.749,15v0H5.624v0a1.848,1.848,0,0,0-.084-.55,12.317,12.317,0,0,0-2.429-4.284,5,5,0,1,1,7.527,0,12.345,12.345,0,0,0-2.426,4.276A1.856,1.856,0,0,0,8.126,15v0H10v0a11.171,11.171,0,0,1,2.048-3.6A6.872,6.872,0,0,0,6.875,0Z" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center " style={{ marginTop: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
                                        <g fill="#b620e0"><path d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center" style={{ marginTop: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
                                        <g fill="#ff808b"><path d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center" style={{ marginTop: "25px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="22" viewBox="0 0 16.5 22">
                                        <g fill="#f7b500"><path d="M9.625,5.844V0H1.031A1.029,1.029,0,0,0,0,1.031V20.969A1.029,1.029,0,0,0,1.031,22H15.469A1.029,1.029,0,0,0,16.5,20.969V6.875H10.656A1.034,1.034,0,0,1,9.625,5.844Zm2.75,10.141a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219a.517.517,0,0,1,.516.516Zm0-2.75a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219a.517.517,0,0,1,.516.516Zm0-3.094v.344a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219A.517.517,0,0,1,12.375,10.141Zm4.125-4.9V5.5H11V0h.262a1.03,1.03,0,0,1,.73.3L16.2,4.512A1.028,1.028,0,0,1,16.5,5.238Z" /></g></svg>
                                </div>
                                <div className="row d-flex justify-content-center" style={{ marginTop: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.657" height="16" viewBox="0 0 26.657 16">
                                        <g fill="#6236ff"><path d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)" /></g></svg>
                                </div>
                            </div>
                            <div className="col" id="leftNavTitls" hidden={this.state.navLeft}>
                                <div className="row" style={{ color: "#3598F4" }}><a style={{ color: "#3598F4" }} href="https://box.leader.codes/simdsMrrcJdpQgta8kgXyQBdDFy2"> Leader Box</a></div>
                                <div className="row" ><a style={{ color: "#44D7B6" }}href="https://leader.codes/landingPage/rC8XjJ3sJoUfGqKmqsURsWfe3bS2/new">Leader Funnel</a></div>
                                <div className="row" ><a style={{ color: "#6DD400" }}href="https://hub.leader.codes/projects/simdsMrrcJdpQgta8kgXyQBdDFy2">Leader Hub</a></div>
                                <div className="row" ><a style={{ color: "#B620E0" }}href="https://calendar.leader.codes/">Leader Time</a></div>
                                <div className="row" ><a style={{ color: "#FF808B" }}href=" https://stories.leader.codes/bloger">Leader Stories</a></div>
                                <div className="row" ><a style={{ color: "#F7B500" }} href="https://leader.codes/forms/rC8XjJ3sJoUfGqKmqsURsWfe3bS2/new">Leader Forms</a></div>
                                <div className="row" ><a style={{ color: "#6236FF" }}href="https://qoutes.leader.codes/">Leader Quote</a></div>
                            </div>
                        </div>
                    </div>


                    {/* contain here put your component */}
                    <div className="col content rounded m-3 p-0">
                        {this.props.load ? <Load></Load> : ""}

                        <Switch>
                            {this.props.currentCard ?
                                <Route path="/card">
                                    <CardHook></CardHook>
                                </Route> : ""
                            }
                            <Route path="/">
                                <Card></Card>
                            </Route>
                        </Switch>
                        {/* <Card></Card> */}
                    </div>

                    {/* confogurator */}
                    <div className="col-2 container configurator" hidden={this.state.configurator} >
                        <Configurator></Configurator>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        currentCard: state.card.currentCard,
        load: state.card.load

    };
}

export default connect(mapStateToProps)(NewWrap);







