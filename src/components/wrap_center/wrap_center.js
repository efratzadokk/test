import Menu from '../menu/menu';
import Stage from '../stage/stage';
// import StageIframe from '../stageIframe/stageIframe';
// import Ex from '../iframe/iframe'
import AllFunnels from '../allFunnels/allFunnels'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css } from 'styled-components';
// import Emulator from '../Elementone'
function WrapCenter(props) {
    const [flag, setFlag] = useState(true);
    const { flagCon, getFunnel, flagAllFunnels, editMode } = props
    const { getUid } = props
    const WrapCenter = styled.div`
margin-left:4% ;
height: calc(100vh - 40px);
width: ${props => (props.flagCon ? '79%' : '95%')};
`
    return (
        <WrapCenter flagCon={flagCon}>
                {/* <Ex></Ex> */}
            <div className="row" >
                <Switch>
                    {/* <Route path='/admin/:userName/:funnel/all'>
                        <AllFunnels></AllFunnels>
                    </Route> */}
                    <Route path='/:userName/:funnel'>
                        {/* <Menu ></Menu> */}
                        {/* <Emulator> */}
                        <Stage edit={true}></Stage>
                        {/* </Emulator> */}
                        {/* <StageIframe ></StageIframe> */}
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
        }
    },
    (dispatch) => {
        return {
        }
    }
)(WrapCenter);
