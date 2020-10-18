import React, { Component } from "react";
import Contact from './helpComponents/Contact'
import { actions } from '../Redux/actions/Action';
import { connect } from 'react-redux';
import VcardStyleSocialMedia from './VcardStyleSocialMedia'
import '../Css/ComponentNav.css'
import '../Css/SocialMedia.css'


class SocialMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledContactCheaked: true
        };

    }
    componentDidMount() {

    }

    changeIconCheaked = (cheaked, socialMediaType) => {
        this.props.changeIconCheaked(cheaked, socialMediaType);
    }

    render() {
        return (
            <div className="container-fluid mt-2 " >
                {
                    this.props.socialMedias.map((socialMedia, i) => {
                        return <div className="row mb-3" key={i}>
                            <Contact
                                id={socialMedia.name}
                                key={i}
                                index={i}
                                title={socialMedia.name}
                                icon={this.props.socialMediaIcons[socialMedia.name]}
                                url={socialMedia.url}
                                cheak={socialMedia.url !== "" ? true : false}
                                onChange={this.props.attachUrlSocialMedia}
                                onChangeOnOff={this.changeIconCheaked}

                            ></Contact>
                        </div>

                    })
                }
                <div className="row mb-4">
                    <VcardStyleSocialMedia></VcardStyleSocialMedia>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        card: state.card.currentCard.socialMedia,
        socialMedias: state.card.currentCard.socialMedias,
        socialMediaIcons: state.card.socialMediaIcons,
        vCardStyle: state.card.currentCard.vCardStyle
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeIconCheaked: (cheaked, index) => dispatch(actions.setsocialIconCheaked({ index: index, value: cheaked })),

    attachUrlSocialMedia: (url, index) => dispatch(actions.setsocialMediaUrl({ index: index, url: url })),

})
export default connect(mapStateToProps, mapDispatchToProps)(SocialMedia);