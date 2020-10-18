import React,{Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
import Imag from './helpComponents/Imag'

class UploadNavImg extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
             <div className="container-fluid">
                <div className="row">
                    
                <div className="col w-50 h-50 " id="imgCaver">
                    <Imag
                        idImag={"caver"}
                        idUpload={"uploadcaver"}
                        backgroundImg={this.props.vCardStyle.coverImg}
                        changeBackgroundImg={this.props.changeCoverStyle}
                    ></Imag>
                </div>
        
                <div className="col w-50 h-50">
                    <Imag
                        idImag={"logo"}
                        idUpload={"uploadlogo"}
                        backgroundImg={this.props.vCardStyle.logoImg}
                        changeBackgroundImg={this.props.changeLogoStyle}
                    ></Imag>
                </div>
        
                <div className="col w-50 h-50">
                    <Imag
                        idImag={"profil"}
                        idUpload={"uploadprofil"}
                        backgroundImg={ this.props.vCardStyle.profileImg}
                        changeBackgroundImg={this.props.changeProfileStyle}
                    ></Imag>
                </div>
        
             </div>
         </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {  
        vCardStyle: state.card.currentCard.vCardStyle
    };
}

const mapDispatchToProps = (dispatch) => ({

    changeCoverStyle: (style) => dispatch(actions.setCovercardStyle(style)),

    changeLogoStyle: (style) => dispatch(actions.setLogocardStyle(style)),

    changeProfileStyle: (style) => dispatch(actions.setProfilecardStyle(style)),

})
export default connect(mapStateToProps, mapDispatchToProps)(UploadNavImg);



