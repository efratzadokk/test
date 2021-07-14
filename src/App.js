import './App.css';
// import Ex from './components/ex'
import Configurator from './components/configurator/configurator';
// import ProtectedRoute from './components/protectedRoutes/protectedRoutes';
import Top_frame from './components/top_frame/top_frame';
import Sidebar_left from './components/sidebar_left/sidebar_left';
import WrapCenter from './components/wrap_center/wrap_center';
import Stage from './components/stage/stage';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import styled from 'styled-components';
// import WrapAll from './components/wrapAll/wrap_all'
// import MyGallery from './components/slider/slider'
import ListPapers from './components/listPapers/listPapers';
import {actions} from './redux/actions/funnel-try.action'
import NoFunnels from './components/noFunnels/noFunnels';

function App(props) {
  const [flag, setFlag] = useState(true);
  // const [aaa, setaaa] = useState(true)
  const { 
    // flagCon,getAllFunnel, getFunnel, flagAllFunnels,
     editMode,allFunnels } = props
  const { getUid } = props
  useEffect(() => {
    if (flag) {
      getUid()
      setFlag(false)
    }
  })
  {
  
}
  
  return (

    <div id="body" className="App">

    <Router>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path='/stage/:userName/:funnel'>
            <div className="pt-5" style={{ minHeight: '100vh' }}>
              <Stage edit={true}></Stage>
            </div>
          </Route>


          {/* <Route path='/admin/:userName/listPapers'>
            <div>
              
{ (allFunnels.length) ?
              <ListPapers/>
              :
              <NoFunnels/>
}
            </div>
          </Route> */}
          <Route path='/admin/:userName/:funnel/listPapers' >
            {/* <div>
              <ListPapers></ListPapers>
            </div> */}
            { (allFunnels.length) ?
              <ListPapers/>
              :
              <NoFunnels/>
}
          </Route>


          
          <Route path='/admin/:userName/:funnel'  >
        
            <Configurator></Configurator>
            <Top_frame></Top_frame>
            <Sidebar_left></Sidebar_left>
            <WrapCenter></WrapCenter>
          {/* </ProtectedRoute> */}
          </Route>

          
          <Route path='/:userName/:funnel'>
            <div className={editMode && "pt-5"} style={{ minHeight: '100vh' }}>
              <Stage edit={false}></Stage>
            </div>
          </Route>

        </Switch>
      </DndProvider>
    </Router>
 

  </div>
  );
}

export default connect(
  (state) => {
    return {
      flagCon: state.funnel.isOpenConfigurator,
      flagAllFunnels: state.funnel.isOpenAllFunnels,
      editMode: state.funnel.editMode,
      allFunnels: state.funnel.allFunnels

    }
  },
  (dispatch) => {
    return {
      getUid: () => { dispatch(actions.getUid()) },
      getFunnel: () => { dispatch(actions.getFunnel()) },
      getAllFunnel: () => { dispatch(actions.getAllFunnel()) },

    }
    
  }
)(App);
