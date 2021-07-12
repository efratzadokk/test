import './App.css';
import Ex from './components/ex'
import Configurator from './components/configurator/configurator';
import ProtectedRoute from './components/protectedRoutes/protectedRoutes';
import Top_frame from './components/top_frame/top_frame';
import Sidebar_left from './components/sidebar_left/sidebar_left';
import WrapCenter from './components/wrap_center/wrap_center';
import Stage from './components/stage/stage';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import WrapAll from './components/wrapAll/wrap_all'
import MyGallery from './components/image_gallery/imageGallery'
import ListPapers from './components/listPapers/listPapers';
import {actions} from './redux/actions/funnel-try.action'


function App(props) {
  const [flag, setFlag] = useState(true);
  const [aaa, setaaa] = useState(true)
  const { flagCon,getAllFunnel, getFunnel, flagAllFunnels, editMode } = props
  const { getUid } = props
  useEffect(() => {
    if (flag) {
      getUid()
      // getFunnel()
      // getAllFunnel()
      setFlag(false)
    }
  })
  {
  
}
  // let TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
  //   .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;

  return (

    <div id="body" className="App">
    {aaa?
      <div className="asd" ></div>:null}
          <div   onClick={()=>setaaa(false)}>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route path='/stage/:userName/:funnel'>
              <div className="pt-5" style={{ minHeight: '100vh' }}>
                <Stage edit={true}></Stage>
              </div>
            </Route>
            <Route path='/admin/:userName/listPapers'>
              <div>
                <ListPapers></ListPapers>
              </div>
            </Route>
            <Route path='/admin/:userName/:funnel/listPapers'>
              <div>
                <ListPapers></ListPapers>
              </div>
            </Route>
              {/* </div> */}
            {/* </Route> */}
            {/* <ProtectedRoute path='/admin/:userName/:funnel' user={TokenToString} component={WrapAll}>
            </ProtectedRoute> */}
            <Route path='/admin/:userName/:funnel'>
            {/* <MyGallery></MyGallery> */}
            {/* <ProtectedRoute path='/admin/:userName/:funnel' user={TokenToString} component={WrapAll}> */}

              <Configurator></Configurator>
              <Top_frame></Top_frame>
              <Sidebar_left></Sidebar_left>
              {aaa?<div style={{width:"100vw",height:"100vh"}}></div>: 
              <WrapCenter></WrapCenter>}
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
  

    </div></div>
  );
}

export default connect(
  (state) => {
    return {
      flagCon: state.funnel.isOpenConfigurator,
      flagAllFunnels: state.funnel.isOpenAllFunnels,
      editMode: state.funnel.editMode

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
