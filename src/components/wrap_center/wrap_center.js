import Stage from '../stage/stage';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css } from 'styled-components';

// import Emulator from '../Elementone'
function WrapCenter(props) {
    const [flag, setFlag] = useState(true);
    const { flagCon,myComputer } = props
    const WrapCenter = myComputer=='a'? 
    styled.div`
margin-left:4% ;
height: calc(100vh - 40px);
width: ${props => (props.flagCon ? '79%' : '95%')};
`: myComputer=='b'?
styled.div`
margin-left:10% ;
height: calc(100vh - 40px);
width: ${props => (props.flagCon ? '65%' : '95%')};`
:styled.div`
margin-left:19% ;
height: calc(100vh - 40px);
width: ${props => (props.flagCon ? '50%' : '95%')};`
    return (
 <WrapCenter flagCon={flagCon}>
            <div className="row" style={{marginTop:'10%'}} >
                <Switch>
                    {/* <Route path='/admin/:userName/:funnel/all'>
                        <AllFunnels></AllFunnels>
                    </Route> */}
                    <Route path='/:userName/:funnel'>
                        {/* <Menu ></Menu> */}
                        {/* <Emulator> */}
                        <Stage edit={true}></Stage>
                        {/* </Emulator> */}
                    </Route>
                </Switch> </div>
        </WrapCenter>
    );
}
export default connect(
    (state) => {
        return {
            flagCon: state.funnel.isOpenConfigurator,
            flagAllFunnels: state.funnel.isOpenAllFunnels,
            editMode: state.funnel.editMode,
            myComputer: state.funnel.myComputer
        }
    },
    (dispatch) => {
        return {
        }
    }
)(WrapCenter);
