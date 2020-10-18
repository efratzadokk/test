import React, { Component } from "react";
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
import IconCard from './helpComponents/IconCard'
import { openfileDialog } from '../BL/StyleCard'
import LogoProfile from './LogoProfile'
import UploadFile from './helpComponents/UploadFile'
import '../Css/CardDesktop.css'
import '../custom.css'


class CardDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTextAboutMe: false,
            agentStyle: {},
            // match:useRouteMatch(),
            numSocialMedia: 6
        };
    }

    getIconElement = (icon, title, i) => {
        return <div className="col-1 mr-3 text-center " key={i}>
            <IconCard icon={icon} title={title}
                titleColor={this.props.vCardStyle.socialMediaTitleIconColorDesktop}
                background={this.props.vCardStyle.socialMediaIconColorDesktop}
                iconShap={this.props.vCardStyle.socialMediaIconShape}
            ></IconCard>
        </div>
    }

    getIconElementsBySocialMediaType = (num, rows) => {
        for (var i = 0; i < num; i++)
            rows.push(this.getIconElement(['fas', 'plus'], "Icon", i));
    }


    render() {
        var num =1, rows = [];

        return (
            <div className="container-fluid m-0 p-0" id="cardDesktop">
                <UploadFile
                    id={"fileLoaderCover"}
                    changeCoverStyle={this.props.changeCoverStyle}
                    idElementChange={"#agentDesktop"}
                ></UploadFile>

                {/* header */}
                <div className="row container-fluid m-0 p-0 h-25 d-flex align-items-stretc" id="agentDesktop"
                    style={{ background: this.props.vCardStyle.coverImg, backgroundSize: "cover" }}
                    onClick={() => { openfileDialog("#fileLoaderCover", this.props.setvCardStyleToggle) }}>
                    <LogoProfile></LogoProfile>
                </div>

                {/* body */}
                <div className="row mt-4 h-75 d-flex justify-content-center">
                    <div className="col d-flex justify-content-center ">
                        <div className="row w-75  bodyDesktop"
                            style={{ background: this.props.vCardStyle.bodyColorDesktop }}
                        >
                            <div className="col mt-5 container">
                                <div className="row w-100 m-0 mt-5 p-0 " onClick={this.props.setAgentDetailsToggle}>
                                    <input className="col-12 text-center m-0  p-0" id="fullNameAgentDesktop"
                                        placeholder={this.props.agentDetails.fullName !== "" ? "" : "Name"}
                                        value={this.props.agentDetails.fullName !== "" ? this.props.agentDetails.fullName : ""}
                                        onChange={(e) => this.props.changeFullName(e.target.value)}
                                        hidden={this.props.vCardStyle.fullNameShow}
                                        style={{ color: this.props.vCardStyle.fullNametitleColorDesktop }}
                                    ></input>

                                    <input className="col-12  text-center m-1 p-0" id="ruleDesktop"
                                        placeholder={this.props.agentDetails.rule !== "" ? "" : "Rule"}
                                        value={this.props.agentDetails.rule !== "" ? this.props.agentDetails.rule : ""}
                                        onChange={(e) => this.props.changeRule(e.target.value)}
                                        hidden={this.props.vCardStyle.ruleShow}
                                        style={{ color: this.props.vCardStyle.ruletitleColorDesktop }}
                                    >
                                    </input>
                                </div>

                                <div className="row container body_container_desktop  ml-5 p-0 d-flex justify-content-start ">
                                    <div className="col container">
                                        <label className="row about">About Us</label>
                                        <textarea className="row rounded w-75  mb-2"
                                            onChange={(e)=>this.props.setPersonalmassegeConnect(e.target.value)}
                                            value={this.props.agentDetails.personalMassegeConnect !== "" ? this.props.agentDetails.personalMassegeConnect
                                                : `Everage Agile Frameworks To Provide A Robust Synopsis For High Level Overviews. Iterative Approaches To Corporate Strategy Foster Collaborative Thinking To Further`}>
                                        </textarea>
                                        <label className="row about">About Me</label>
                                        <textarea className="row rounded w-75  "
                                         onChange={(e) => this.props.setAboutConnect(e.target.value)}
                                         value={this.props.agentDetails.aboutConnect !== "" ? this.props.agentDetails.aboutConnect
                                         : `Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`}>
                                        </textarea>
                                        <div className="row container mt-1  p-0  " id="socialMedia" onClick={this.props.setSocialMediaToggle} >
                                            {this.getIconElement(['fas', 'phone-alt'], "Call Me", "Call Me")}

                                            {this.getIconElement(['fas', 'paper-plane'], "Mail", "Mail")}

                                            {
                                                this.props.socialMedias.map((socialMedia, i) => {
                                                    if (socialMedia.url !== "") {
                                                        num -= 1;
                                                        return this.getIconElement(this.props.socialMediaIcons[socialMedia.name], socialMedia.name, i);
                                                    }
                                                    return ""
                                                })
                                            }
                                            {num > 0 ? this.getIconElementsBySocialMediaType(num, rows) : ""}
                                            {rows.map((val) => { return val; })}
                                        </div>
                                    </div>

                                    {/* <div className="row bg-info"> gf6fdytdtrg</div> */}
                                </div>
                                <div className="row mt-1 footerDesktop mt-0 h-50 d-flex justify-content-center align-items-center"
                                    style={{ background: this.props.vCardStyle.bodyColor }}>
                                    <div className="col container">
                                        <div className="row mt-1 d-flex justify-content-center">
                                            <h1 style={{ color: this.props.vCardStyle.fullNametitleColor }}>
                                                Tell us about yourself</h1>
                                        </div>
                                        <div className="row mt-4 d-flex d-flex justify-content-between" style={{width:"87%",margin:"auto"}}>
                                            <input className="rounded border-0" style={{ width: "30%" }} placeholder="full name"></input>
                                            <input className="rounded border-0" style={{ width: "30%" }} placeholder="e mail"></input>
                                            <input className="rounded border-0" style={{ width: "30%" }} placeholder="mobile"></input>
                                        </div>

                                        <div className="row  mt-4 d-flex justify-content-around">
                                           <textarea className="rounded" style={{width:"85%"}}></textarea>
                                        </div>
                                        <div className="row  
                                        rounded d-flex justify-content-around mt-4">
                                            <div className="d-flex justify-content-center rounded " style={{
                                                width: "85%",color:"#FFFF",background:"#3A405E"}}>send</div> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}



const mapStateToProps = (state) => {
    return {
        agentDetails: state.agentDetails.currentAgentForCard,
        card: state.card.currentCard,
        socialMedias: state.card.currentCard.socialMedias,
        vCardStyle: state.card.currentCard.vCardStyle,
        socialMediaIcons: state.card.socialMediaIcons
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
export default connect(mapStateToProps, mapDispatchToProps)(CardDesktop);
