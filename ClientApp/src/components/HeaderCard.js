import React, { Component } from "react";
import LogoProfile from './LogoProfile'
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';
import $ from 'jquery'

import { onChangeHandlerImage } from '../BL/StyleCard'

import '../Css/HeaderCard.css'

class HeaderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    openfileDialog = (loadId) => {
        $(loadId).click();
    }

    onChangeHandlerImageCover = (event) => {
        onChangeHandlerImage(event, this.props.changeCoverStyle, "#agent");
        $("#agent").css("background-size", "cover");
    }

    // onChangeHandlerImageCover = (event) => {
    //     onChangeHandlerImage(event, this.props.changeLogoStyle, "#iconAgent");
    // }


    render() {
        return (
            <div className="container-fluid mt-2 " >
                <div className="row" id="spacAbove"></div>
                <div className="row">
                    
                    <input
                        type="file" id="fileLoaderCover" name="files" title="Load File" hidden
                        accept="image/png, image/jpeg"
                        data-target="#agent"
                        onChange={e => this.onChangeHandlerImageCover(e.target.files[0])}
                    />
                    <div className="row container mb-0 p-0 d-flex align-items-stretc" id="agent"
                        style={{ background: this.props.vCardStyle.coverImg }}
                        onClick={() => { this.openfileDialog("#fileLoaderCover") }}>
                        <LogoProfile ></LogoProfile>
                    </div>
                </div>

            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        card: state.card.currentCard.socialMedia,
        vCardStyle: state.card.currentCard.vCardStyle
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeCoverStyle: (style) => dispatch(actions.setCovercardStyle(style)),

    changeLogoStyle: (style) => dispatch(actions.setCovercardStyle(style)),
    
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderCard);
