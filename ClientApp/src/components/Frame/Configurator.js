import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import Nav from '../Nav'
import '../../Css/NewWrap.css'
import { actions } from "../../Redux/actions/Action";

class Configurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Create New Card",
        };
    }

    setHeader = (header) => {
        this.setState({ header: header });
    }

    render() {
        return (
            <div className="container-fluid configurator_container " >
                {/* header */}
                <header className="row configurator_header ">
                    <div className="col-1">
                        <FontAwesomeIcon icon='cog' />
                    </div>
                    <div className="col configurator_header_title">{this.state.header}</div>
                    <div className="col-1 d-flex justify-content-end">
                        <FontAwesomeIcon icon='adjust' />
                    </div>
                </header>

                {/* contaner */}
                <div className="row configurator_main ">
                    <Switch>
                        {this.props.currentCard ?
                            <Route path="/card">
                                <Nav></Nav>
                            </Route> : ""
                        }
                        <Route path="/">
                            <Nav></Nav>
                        </Route>
                    </Switch>
                </div>

                {/* footer */}
                <footer className="row configurator_footer  ">
                    {/* mobile */}
                    <div className="col-1 mt-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.854" height="22.69" viewBox="0 0 19.854 22.69" onClick={()=>this.props.setScreenSize(0)}>
                            <g fill="#c7c7c7"><path d="M17.726,0H2.127A2.128,2.128,0,0,0,0,2.127V20.563A2.128,2.128,0,0,0,2.127,22.69h15.6a2.128,2.128,0,0,0,2.127-2.127V2.127A2.128,2.128,0,0,0,17.726,0Zm-7.8,21.272a1.418,1.418,0,1,1,1.418-1.418A1.417,1.417,0,0,1,9.927,21.272Zm7.8-4.786a.533.533,0,0,1-.532.532H2.659a.533.533,0,0,1-.532-.532V2.659a.533.533,0,0,1,.532-.532H17.195a.533.533,0,0,1,.532.532Z" /></g></svg>
                    </div>

                    {/* desktop */}
                    <div className="col-1  mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.82" height="22.69" viewBox="0 0 25.82 22.69" onClick={()=>this.props.setScreenSize(1)} >
                            <g fill="#fff"><path d="M23.668,0H2.152A2.14,2.14,0,0,0,0,2.127V16.308a2.14,2.14,0,0,0,2.152,2.127h8.607l-.717,2.127H6.814a1.064,1.064,0,1,0,0,2.127H19.006a1.064,1.064,0,1,0,0-2.127H15.779l-.717-2.127h8.607a2.14,2.14,0,0,0,2.152-2.127V2.127A2.14,2.14,0,0,0,23.668,0Zm-.717,15.6H2.869V2.836H22.951Z" /></g></svg>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center ">

                        <button className="publish rounded-pill m-1" onClick={()=>this.props.publishStatus===0?this.props.addNewCurrentCard():this.props.updateCard()}>
                            <FontAwesomeIcon icon='caret-right' className="mr-2" />Publish
                        </button>
                    </div>
                </footer>


            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        currentCard: state.card.currentCard,
        publishStatus:state.card.publishStatus
    };
}
const mapDispatchToProps = (dispatch) => ({
    setScreenSize:(status)=>dispatch(actions.setScreenSize(status)),
    addNewCurrentCard: () => dispatch(actions.saveCard()),
    updateCard:()=>dispatch(actions.updateCard())
})

export default connect(mapStateToProps,mapDispatchToProps)(Configurator);







