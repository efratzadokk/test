import React, { Component } from "react";

import '../../Css/Nav.css'

export default class IconShapStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="container-fluid mt-2 mb-2 " >
                <div className="row">
                    <label className="title">Icon Shap</label>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col container" onClick={()=>this.props.changShapRound()}>
                        <label className="row title">Round</label>
                        <div className="row rounded-circle w-75 h-100  bg-light"></div>
                    </div>

                    <div className="col container" onClick={()=>this.props.changShapSquared()}>
                        <label className="row title">Square</label>
                        <div className="row rounded-0 w-75 h-100 bg-secondary"></div>
                    </div>

                    <div className="col container" onClick={()=>this.props.changShapRadius()}>
                        <label className="row title">Radius</label>
                        <div className="row rounded w-75 h-100 bg-secondary"></div>
                    </div>
                </div>

            </div >
        );
    }
}
