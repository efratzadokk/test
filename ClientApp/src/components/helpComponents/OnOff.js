import React, { Component } from "react";


export class OnOff extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

   

    render() {

        return (
            <div>
                <div className='custom-control custom-switch'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id={this.props.idElement}
                        checked={this.props.cheak}
                        onChange={(e) => { this.props.onChangeOnOff(e.target.checked,this.props.index) }}
                    />
                    <label className='custom-control-label' htmlFor={this.props.idElement}>
                    </label>
                </div>


            </div>);
    }
}
