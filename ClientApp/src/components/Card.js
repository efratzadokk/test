import React, { Component } from "react";
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
    

import IconCard from './helpComponents/IconCard'
import { openfileDialog } from '../BL/StyleCard'
import CardDesktop from './CardDesktop'
import LogoProfile from './LogoProfile'
import UploadFile from './helpComponents/UploadFile'
import '../Css/LogoProfile.css'
import '../custom.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTextAboutMe: false,
            openTextAboutUs: false,
            agentStyle: {},
            // match:useRouteMatch(),
            numSocialMedia: 6
        };
    }

    getIconElement = (icon, title, i) => {
        return <div className="col-4 text-center " key={i}>
            <IconCard icon={icon} title={title}
                titleColor={this.props.vCardStyle.socialMediaTitleIconColor}
                background={this.props.vCardStyle.socialMediaIconColor}
                iconShap={this.props.vCardStyle.socialMediaIconShape}
            ></IconCard>
        </div>
    }

    getIconElementsBySocialMediaType = (num, rows) => {
        for (var i = 0; i < num; i++)
            rows.push(this.getIconElement(['fas', 'plus'], "Icon", i));
    }


    render() {
        var num = 4, rows = [];


        return (
            this.props.screenSize === 0 ? <div className="container-fluid d-flex justify-content-center">
                <div className="row" id="card">
                    <div className="col container">
                        {/* header */}
                        <div className="row" id="spacAbove">

                        </div>

                        <UploadFile
                            id={"fileLoaderCover"}
                            changeCoverStyle={this.props.changeCoverStyle}
                            idElementChange={"#agent"}
                        ></UploadFile>

                        <div className="row container mb-0 p-0 d-flex align-items-stretc agentPic" id="agent"
                            style={{ background: this.props.vCardStyle.coverImg, backgroundSize: "cover" }}
                            onClick={() => { openfileDialog("#fileLoaderCover", this.props.setvCardStyleToggle) }}>
                            <LogoProfile></LogoProfile>

                        </div>
                        {/* / ;" */}
                        {/* body component */}
                        <div className=" row container d-flex align-items-stretc mt-0 p-0 " id="agentDetails"
                            style={{ background: this.props.vCardStyle.bodyColor }}>
                            <div className="col container"  >
                                {/* <NavLink to={`${this.props.match.url}/agentDetails`}> */}
                                <div className="row w-100 m-0 mt-5 p-0 " onClick={this.props.setAgentDetailsToggle}>
                                    <input className="col-12 text-center m-0  p-0" id="fullNameAgent"
                                        placeholder={this.props.agentDetails.fullName !== "" ? "" : "Name"}
                                        value={this.props.agentDetails.fullName !== "" ? this.props.agentDetails.fullName : ""}
                                        onChange={(e) => this.props.changeFullName(e.target.value)}
                                        hidden={this.props.vCardStyle.fullNameShow}
                                        style={{ color: this.props.vCardStyle.fullNametitleColor }}
                                    ></input>

                                    <input className="col-12  text-center m-1 p-0" id="rule"
                                        placeholder={this.props.agentDetails.rule !== "" ? "" : "Rule"}
                                        value={this.props.agentDetails.rule !== "" ? this.props.agentDetails.rule : ""}
                                        onChange={(e) => this.props.changeRule(e.target.value)}
                                        hidden={this.props.vCardStyle.ruleShow}
                                        style={{ color: this.props.vCardStyle.ruletitleColor }}
                                    >
                                    </input>
                                </div>
                                {/* </NavLink> */}

                                <div className="row"></div>


                                {/* card socialmedia component */}

                                {/* <NavLink to={`${this.props.match.url}/socialMedia`}> */}
                                <div className="row container w-100 m-1  p-0  " id="socialMedia" >
                                    <div className="col containr w-100 m-0 p-0 ">
                                        <div className="row w-100 m-1" onClick={this.props.setSocialMediaToggle}>
                                            {this.getIconElement(['fas', 'phone-alt'], "Call Me", "Call Me")}

                                            {this.getIconElement(['fas', 'paper-plane'], "Mail", "Mail")}

                                            {
                                                this.props.socialMedias.map((socialMedia, i) => {
                                                    if (socialMedia.url !== "") {
                                                        num -= 1;
                                                        return this.getIconElement(this.props.socialMediaIcons[socialMedia.name], socialMedia.name, i);
                                                    }
                                                    return "";
                                                })
                                            }
                                            {num > 0 ? this.getIconElementsBySocialMediaType(num, rows) : ""}
                                            {rows.map((val) => { return val; })}
                                        </div>
                                    </div>
                                </div>
                                {/* </NavLink> */}
                                {/* about component */}
                                <div className="row w-100 m-0 p-0 d-flex justify-content-center " onClick={this.props.setAgentDetailsToggle}>
                                    <div className="col container border-bottom  text-left p-3" id="aboutMe">
                                        <div className="row">
                                            <label className="col-10">About Us</label>
                                            <label className="col-2" onClick={(e) => { this.setState({ openTextAboutUs: !this.state.openTextAboutUs }) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.529" height="9" viewBox="0 0 15.529 9">
                                                    <g fill="#fff" stroke="#fefefe" transform="translate(0.564 0.5)">
                                                        <g transform="translate(0 0)"><path d="M.176,117.517a.589.589,0,0,1,.848,0L7.2,123.851l6.176-6.334a.589.589,0,0,1,.848,0,.626.626,0,0,1,0,.87l-6.6,6.769a.589.589,0,0,1-.848,0l-6.6-6.769A.626.626,0,0,1,.176,117.517Z" transform="translate(0 -117.336)" /></g></g></svg>

                                            </label>
                                        </div>
                                        {this.state.openTextAboutUs ?
                                            <textarea className="row rounded" id="abuotMetext"
                                                onChange={(e) => this.props.setPersonalmassegeConnect(e.target.value)}
                                                value={this.props.agentDetails.personalMassegeConnect !== "" ? this.props.agentDetails.personalMassegeConnect
                                                    : ""}
                                                placeholder={"About Us"}
                                            >
                                            </textarea> : ""}
                                    </div>
                                </div>
                                <div className="row w-100 m-0 p-0 d-flex justify-content-center  " onClick={this.props.setAgentDetailsToggle}>
                                    <div className="col container border-bottom  text-left p-3" id="aboutMe">
                                        <div className="row">
                                            <label className="col-10">About Me</label>
                                            <label className="col-2" onClick={(e) => { this.setState({ openTextAboutMe: !this.state.openTextAboutMe }) }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.529" height="9" viewBox="0 0 15.529 9">
                                                    <g fill="#fff" stroke="#fefefe" transform="translate(0.564 0.5)">
                                                        <g transform="translate(0 0)"><path d="M.176,117.517a.589.589,0,0,1,.848,0L7.2,123.851l6.176-6.334a.589.589,0,0,1,.848,0,.626.626,0,0,1,0,.87l-6.6,6.769a.589.589,0,0,1-.848,0l-6.6-6.769A.626.626,0,0,1,.176,117.517Z" transform="translate(0 -117.336)" /></g></g></svg>

                                            </label>

                                        </div>
                                        {this.state.openTextAboutMe ?
                                            <textarea className="row rounded" id="abuotMetext"
                                                onChange={(e) => this.props.setAboutConnect(e.target.value)}
                                                value={this.props.agentDetails.aboutConnect !== "" ? this.props.agentDetails.aboutConnect
                                                    : ""}
                                                placeholder={"About Me"}
                                            >
                                            </textarea> : ""}

                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div > : <CardDesktop></CardDesktop>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        agentDetails: state.agentDetails.currentAgentForCard,
        card: state.card.currentCard,
        socialMedias: state.card.currentCard.socialMedias,
        vCardStyle: state.card.currentCard.vCardStyle,
        socialMediaIcons: state.card.socialMediaIcons,
        screenSize: state.card.screenSize,
        load: state.card.load
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeFullName: (name) => dispatch(actions.setFullname(name)),

    changeRule: (rule) => dispatch(actions.setRule(rule)),

    changeMobileTitle: (mobileTitle) => dispatch(actions.setMobiletitle(mobileTitle)),

    changeCoverStyle: (style) => dispatch(actions.setCovercardStyle(style)),

    setAboutConnect: (content) => dispatch(actions.setAboutConnect(content)),

    setPersonalmassegeConnect: (content) => dispatch(actions.setPersonalmassegeConnect(content)),

    setAgentDetailsToggle: () => dispatch(actions.setAgentDetailsToggle("card")),

    setSocialMediaToggle: () => dispatch(actions.setSocialMediaToggle("card")),

    setvCardStyleToggle: () => dispatch(actions.setvCardStyleToggle("card")),
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);
