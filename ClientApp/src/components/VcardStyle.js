import React, { Component } from "react";
import { connect } from 'react-redux';
import VcarsStyleAgentDetails from './VcarsStyleAgentDetails'
import VcardStyleSocialMedia from './VcardStyleSocialMedia'
import VcardCoverStyle from './VcardCoverStyle'
import '../Css/SocialMedia.css'
import '../Css/ComponentNav.css'



class VcardStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container-fluid mt-2 " >
                <div className="row">
                    <VcarsStyleAgentDetails></VcarsStyleAgentDetails>
                </div>

                <div className="row mt-2">
                    <VcardStyleSocialMedia></VcardStyleSocialMedia>
                </div>

                <div className="row mt-3">
                    <VcardCoverStyle></VcardCoverStyle>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {

        vCardStyle: state.card.currentCard.vCardStyle
    };
}

const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(VcardStyle);