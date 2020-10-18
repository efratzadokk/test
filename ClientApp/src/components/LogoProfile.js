import React from "react";
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';
import {useEffect } from 'react';
import $ from 'jquery'
import { openfileDialog } from '../BL/StyleCard'
import UploadFile from './helpComponents/UploadFile'

import '../Css/Card.css'


const mapStateToProps = (state) => {
    return {
        vCardStyle: state.card.currentCard.vCardStyle,
        screenSize: state.card.screenSize,
        currentCard: state.card.currentCard,

    };
}

const mapDispatchToProps = (dispatch) => ({
    changeLogoStyle: (style) => dispatch(actions.setLogocardStyle(style)),

    changeProfileStyle: (style) => dispatch(actions.setProfilecardStyle(style)),

    setvCardStyleToggle: () => dispatch(actions.setvCardStyleToggle("card")),

})

export default connect(mapStateToProps, mapDispatchToProps)(function LogoProfile(props) {
    const {currentCard, screenSize, setvCardStyleToggle, vCardStyle, changeLogoStyle, changeProfileStyle } = props;

    function changeImg(event, id) {
        event.stopPropagation();
        openfileDialog(id, setvCardStyleToggle);
    }


    useEffect(function () {
        $("#iconAgent").css("background-size", "cover");
        $("#picAgent").css("background-size", "cover");
        $("#iconAgentDesktop").css("background-size", "cover");
        $("#picAgentDesktop").css("background-size", "cover");
        $("#agentDesktop").css("background-size", "cover");

    }, [currentCard]);

    return (
        <div className="container-fluid mt-2 " >
            <UploadFile
                id={"fileLoaderLogo"}
                changeCoverStyle={changeLogoStyle}
                idElementChange={screenSize === 0 ? "#iconAgent" : "#iconAgentDesktop"}
            ></UploadFile>

            <UploadFile
                id={"fileLoaderProfile"}
                changeCoverStyle={changeProfileStyle}
                idElementChange={screenSize === 0 ? "#picAgent" : "#picAgentDesktop"}
            ></UploadFile>
            <div className=" row rounded-circle mb-0" id={screenSize === 0 ? "iconAgent" : "iconAgentDesktop"} onClick={(e) => { changeImg(e, "#fileLoaderLogo") }}
                style={{ background: vCardStyle.logoImg, backgroundSize: "cover",borderColor:vCardStyle.bodyColor }} placeholder="Add Logo"
            >
                {/* images */}
                <div className=" rounded-circle mb-0" id={screenSize === 0 ? "picAgent" : "picAgentDesktop"} placeholder="Add Profile"
                    onClick={(e) => { changeImg(e, "#fileLoaderProfile") }}
                    style={{ background: vCardStyle.profileImg, backgroundSize: "cover",borderColor:vCardStyle.bodyColor}}
                    hidden={vCardStyle.profileShow}
                ></div>
            </div>

        </div >
    );
});

