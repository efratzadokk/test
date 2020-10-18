import React, { Component } from "react";
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';
import StyleInputCard from './helpComponents/StyleInputCard'

import { openfileDialog } from '../BL/StyleCard'
import '../Css/Nav.css'
import '../Css/Card.css'





class VcardCoverStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="container-fluid mt-2 " >
                <div className="row m-1">
                    <label className="title">Card Style</label>
                </div>

                <div className="row h-50 d-flex justify-content-around">

                    <div className="col-3 agentPic border"
                        id="navCaver"
                        onClick={() => { openfileDialog("#fileLoaderCover") }}
                        style={{ background: this.props.vCardStyle.coverImg }}
                    ></div>
                    <div className="col-3 cardLogo border"
                        style={{ background: this.props.vCardStyle.logoImg }}
                        onClick={(e) => {  openfileDialog( "#fileLoaderLogo") }}
                    ></div>
                    <div className="col-3 cardProfile border"
                        style={{
                            background: this.props.vCardStyle.profileImg,
                            backgroundSize:"cover !importent"}}
                        onClick={(e) => {  openfileDialog("#fileLoaderProfile") }}
                    ></div>

                </div>
                <div className="row m-1">
                    <StyleInputCard
                        title="Background"
                        background={this.props.vCardStyle.fullNametitleColor}
                        onchangeColor={this.props.changeBodyColor}
                        color={this.props.screenSize===0?this.props.vCardStyle.bodyColor:this.props.vCardStyle.bodyColorDesktop}
                    > </StyleInputCard>
                </div>


            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        vCardStyle: state.card.currentCard.vCardStyle,
        screenSize:state.card.screenSize
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeBodyColor: (color) => dispatch(actions.setBodyColor(color)),
    changeCoverStyle: (style) => dispatch(actions.setCovercardStyle(style)),

    // changeRuleColor: (color) => dispatch(actions.setRuleColor(color)),

})
export default connect(mapStateToProps, mapDispatchToProps)(VcardCoverStyle);