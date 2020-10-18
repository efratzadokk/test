import React, { Component } from "react";
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';

import StyleInputCard from './helpComponents/StyleInputCard'
import IconShapStyle from './helpComponents/IconShapStyle'
import '../Css/Nav.css'




class VcardStyleSocialMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
   
    render() {
        return (
            <div className="container-fluid mt-2 " >
                <div className="row m-1">
                    <label className="title">Know Me Links Style</label>
                </div>
                <div className="row m-1">
                    <StyleInputCard
                        title="Title Style"
                        background={this.props.vCardStyle.mobileIconTitleColor}
                        onchangeColor={this.props.changeTitleIconColor}
                        color={this.props.screenSize===0?this.props.vCardStyle.socialMediaTitleIconColor:this.props.vCardStyle.socialMediaTitleIconColorDesktop}
                    > </StyleInputCard>
                </div>

                <div className="row m-1">
                    <StyleInputCard
                        title="Icon Style"
                        background={this.props.vCardStyle.socialMediaIconColor}
                        onchangeColor={this.props.changeIconColor}
                        color={this.props.screenSize===0?this.props.vCardStyle.socialMediaIconColor:this.props.vCardStyle.socialMediaIconColorDesktop}

                    > </StyleInputCard>
                </div>

                <div className="row m-1">
                    <IconShapStyle
                        changShapRadius={this.props.changShapRadius}
                        changShapSquared={this.props.changShapSquared}
                        changShapRound={this.props.changShapRound}
                    ></IconShapStyle>
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
    changeTitleIconColor: (color) => dispatch(actions.setTitleIconColor(color)),

    changeIconColor: (color) => dispatch(actions.setIconColor(color)),

    changShapRadius: () => dispatch(actions.setShapRadius()),

    changShapSquared: () => dispatch(actions.setShapSquared()),

    changShapRound: () => dispatch(actions.setShapRound()),

})
export default connect(mapStateToProps, mapDispatchToProps)(VcardStyleSocialMedia);