import React, { Component } from "react";
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';

import StyleInputCard from './helpComponents/StyleInputCard'
import '../Css/Nav.css'




class VcarsStyleAgentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
   
    render() {
        return (
            <div className="container-fluid mt-2 " >
                <div className="row m-1">
                    <label className="title">Details Style</label>
                </div>
                <div className="row m-1">
                    <StyleInputCard
                        title="Full Name Style"
                        background={this.props.vCardStyle.fullNametitleColor}
                        onchangeColor={this.props.changeFullNameTitleColor}
                        color={this.props.screenSize===0?this.props.vCardStyle.fullNametitleColor:this.props.vCardStyle.fullNametitleColorDesktop}
                    > </StyleInputCard>
                </div>

                <div className="row m-1">
                    <StyleInputCard
                        title="Rule Style"
                        background={this.props.vCardStyle.ruletitleColor}
                        onchangeColor={this.props.changeRuleColor}
                        color={this.props.screenSize===0?this.props.vCardStyle.ruletitleColor:this.props.vCardStyle.ruletitleColorDesktop}
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
    changeFullNameTitleColor: (color) => dispatch(actions.setFullNameTitleColor(color)),

    changeRuleColor: (color) => dispatch(actions.setRuleColor(color)),

})
export default connect(mapStateToProps, mapDispatchToProps)(VcarsStyleAgentDetails);