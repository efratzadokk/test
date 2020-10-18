import React from "react";
import { Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
import AgentDetails from './AgentDetails'
import SocialMedia from './SocialMedia'
import VcardStyle from './VcardStyle'
import { Collapse } from 'reactstrap';

import '../Css/Nav.css'

function mapStateToProps(state) {
    return {
        collapse: state.card.collaps,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setAgentDetailsToggle: () => dispatch(actions.setAgentDetailsToggle()),
        setSocialMediaToggle: () => dispatch(actions.setSocialMediaToggle()),
        setvCardStyleToggle: () => dispatch(actions.setvCardStyleToggle()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(function Nav(props) {
    const {collapse, setAgentDetailsToggle, setSocialMediaToggle, setvCardStyleToggle } = props;

    return (
        <div className="container-fluid mt-3 navbar-expand-lg " id="nav">
            <div className="row">
                <div className="col container w-100">

                    {/* Agent Detail */}
                    {/* <Link to={`${match.url}/agentDetails`}> */}
                    <div className="row p-1" onClick={setAgentDetailsToggle}>
                        <button className="col container" >
                            <div className="row">

                                <label className="col-9">Details</label>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124">
                                        <g fill="#ebeaea">
                                            <path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" />
                                        </g></svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    {<Collapse isOpen={collapse.agentDetailsOpen}>
                        <div className="row">
                            < AgentDetails></AgentDetails>
                        </div>
                    </Collapse>
                    }
                    {/* </Link> */}

                    {/* Social Media */}

                    {/* <Link to={`${match.url}/socialMedia`}> */}

                    <div className="row p-1 rounded" onClick={setSocialMediaToggle}>
                        <button className="col container" >
                            <div className="row">
                                <label className="col-9">Know Me Links</label>
                                <div className="col d-flex justify-content-end align-items-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124">
                                        <g fill="#ebeaea">
                                            <path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" />
                                        </g></svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* </Link> */}

                    {
                        <Collapse isOpen={collapse.socialMediaOpen}>
                            <div className="row">
                                <SocialMedia></SocialMedia>
                            </div>
                        </Collapse>
                    }

                    {/* vcardStyle */}

                    {/* <Link to={`${match.url}/vCardStyle`}> */}
                    <div className="row p-1" onClick={setvCardStyleToggle} >
                        <button className="col container" >
                            <div className="row">

                                <label className="col-9">Page Style</label>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124">
                                        <g fill="#ebeaea">
                                            <path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" />
                                        </g></svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    {
                        <Collapse isOpen={collapse.vCardStyleOpen}>
                            <div className="row">
                                <VcardStyle></VcardStyle>
                            </div>
                        </Collapse>
                    }
                    {/* </Link> */}
                    <Switch>

                        {/* <Route path={`${match.path}/agentDetails`}>
                            <div className="row">
                                < AgentDetails {...allChildProps}></AgentDetails>
                            </div>
                        </Route> */}

                        {/* <Route path={`${match.path}/socialMedia`}>
                            <div className="row">
                                <SocialMedia></SocialMedia>
                            </div>
                        </Route> */}

                        {/* <Route path={`${match.path}/vCardStyle`}>
                            <div className="row">
                                <VcardStyle></VcardStyle>
                            </div>
                        </Route> */}
                    </Switch>
                </div>

            </div>
        </div >
    );
});
