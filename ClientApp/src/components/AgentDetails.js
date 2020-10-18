import React, { Component } from "react";
import { OnOff } from './helpComponents/OnOff'
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
import AgentDetail from './helpComponents/AgentDetail'
import '../Css/AgentDetails.css'
import '../Css/Nav.css'
import '../custom.css'

class AgentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.vCardStyle.fullNameShow);
        return (
            <div className="container-fluid mt-2 " >
                <div className="row mb-3">
                    <AgentDetail
                        header="Full Name"
                        title={this.props.agentDetails.fullName}
                        onChange={this.props.changeFullName}
                        cheak={this.props.vCardStyle.fullNameShow}
                        onChangeOnOff={this.props.changeFullNameShow}
                        type={"fullName"}
                    ></AgentDetail>
                </div>

                <div className="row mb-3">
                    <AgentDetail
                        header="Rule"
                        title={this.props.agentDetails.rule}
                        onChange={this.props.changeRule}
                        cheak={this.props.vCardStyle.ruleShow}
                        onChangeOnOff={this.props.changeRuleShow}
                        type={"rule"}
                    ></AgentDetail>
                </div>

                <div className="row mb-3">
                    <AgentDetail
                        header="Mobile"
                        title={this.props.agentDetails.mobile}
                        onChange={this.props.changeMobile}
                        hiddenOnOff={false}
                    ></AgentDetail>
                </div>

                {/* mobile button text */}
                <div className="row mb-3 ">

                    {/* <div className="col-8">
                        <label id="mobileButtomText" className="agentDetails">Mobile Button Text</label>
                        <input id="mobileButtomTextInput" className="agentDetailsInput"
                            value={this.props.vCardStyle.mobiletitle !== "" ? this.props.vCardStyle.mobiletitle : null}
                            placeholder={this.props.vCardStyle.mobiletitle !== "" ? this.props.vCardStyle.mobiletitle :"Call Me" }
                            onChange={e => this.props.changeMobileTitle(e.target.value)}
                            type="text"></input>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <OnOff></OnOff>
                    </div> */}
                </div>

                <div className="row mb-3  ">
                    {/* <div className="col d-flex justify-content-end">
                        <div className="row d-flex align-items-center">
                            <input className="col-2 d-flex justify-content-end m-0" type="radio" id="RequiedCallMeButton" name="RequiedCallMeButton"></input>
                            <label className="col-10 m-0 " id="RequiedCallMeButton">Icon</label>
                        </div>
                    </div> */}
                </div>
                {/* ---------------------------------- */}

                <div className="row mb-3">
                    <AgentDetail
                        header="Personal Email"
                        title={this.props.agentDetails.personalEmail}
                        onChange={this.props.changePersonalEmail}
                        hiddenOnOff={false}
                    ></AgentDetail>

                </div>

                <div className="row">
                    <div className="col container ">
                        <div className="row">
                            <div className="col-8">
                                <label id="aboutMe" className="title">About Us</label>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <OnOff
                                ></OnOff>
                            </div>
                        </div>
                        <div className="row textAgentDetails">
                            <div className="col container" >
                                <div className="row">
                                    <div className="form-group" >
                                        <textarea className="form-control rounded " id="exampleFormControlTextarea2"
                                            onChange={(e) => this.props.setPersonalmassegeConnect(e.target.value)}
                                            value={this.props.agentDetails.personalMassegeConnect !== "" ? this.props.agentDetails.personalMassegeConnect
                                                : ""}
                                            placeholder={"About Us"}>
                                            {this.props.agentDetails.personalMassegeConnect}
                                        </textarea>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col container ">
                        <div className="row">
                            <div className="col-8">
                                <label id="fullName" className="title">About Me</label>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <OnOff></OnOff>
                            </div>
                        </div>
                        <div className="row textAgentDetails">
                            <div className="col container" >
                                <div className="row">
                                    <div className="form-group" >
                                        <textarea className="form-control rounded " id="exampleFormControlTextarea2"
                                            onChange={(e) => this.props.setAboutConnect(e.target.value)}
                                            value={this.props.agentDetails.aboutConnect !== "" ? this.props.agentDetails.aboutConnect
                                                : ""}
                                            placeholder={"About Me"}>
                                            {this.props.agentDetails.aboutConnect}
                                        </textarea>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        agentDetails: state.agentDetails.currentAgentForCard,
        vCardStyle: state.card.currentCard.vCardStyle
    };
}

const mapDispatchToProps = (dispatch) => ({

    changeFullName: (name) => dispatch(actions.setFullname(name)),
    changeFullNameShow: (cheaked, socialMediaType) => dispatch(actions.setFullnameShow(cheaked)),

    changeRule: (rule) => dispatch(actions.setRule(rule)),
    changeRuleShow: () => dispatch(actions.setRuleShow()),

    changeMobile: (mobile) => dispatch(actions.setMobile(mobile)),

    changePersonalEmail: (email) => dispatch(actions.setPersonalemail(email)),

    changeAboutTitle: (title) => dispatch(actions.setAbouttitle(title)),

    setAboutConnect: (connect) => dispatch(actions.setAboutConnect(connect)),

    setPersonalmassegeTitle: (title) => dispatch(actions.setPersonalmassegeTitle(title)),


    changeMobileTitle: (mobileTitle) => dispatch(actions.setMobiletitle(mobileTitle)),
    setPersonalmassegeConnect: (content) => dispatch(actions.setPersonalmassegeConnect(content)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AgentDetails);





