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
import { getFunnel, getUid, getAllFunnel } from './redux/actions/funnel.action';
import styled from 'styled-components';
import WrapAll from './components/wrapAll/wrap_all'
import MyGallery from './components/image_gallery/imageGallery'
import ListPapers from './components/listPapers/listPapers';
// import whatsapp from '../../assets/icons8-whatsapp.gif'


function App(props) {
  const [flag, setFlag] = useState(true);

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
      <a
  href="https://wa.me/0556764672"
  class="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i class="fa fa-whatsapp whatsapp-icon"></i>
</a>
{/* <img src="assets\icons8-whatsapp (1).gif"></img>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 21.5">
                                <defs></defs>
                                <path className="a" d="M8,18.75A10.75,10.75,0,1,0,18.75,8,10.75,10.75,0,0,0,8,18.75Zm10.75,7.976V10.774a7.976,7.976,0,1,1,0,15.952Z" transform="translate(-8 -8)"></path>
                            </svg> */}
      {/* <Router>
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route path='/view'>
              <div className={editMode && "pt-5"} style={{ minHeight: '100vh' }}>
                <Stage edit={false}></Stage>
              </div>
            </Route>
            <Route path='/'>
              <Configurator></Configurator>
              <Top_frame></Top_frame>
              <Sidebar_left></Sidebar_left>
              <div id="wrap_center" className={flagCon ? "center_width_on_open_con row" : "center_width_on_close_con row"} >
                {!flagAllFunnels ?
                  <><Menu></Menu>
                    <Stage edit={true}></Stage></> :
                  <AllFunnels></AllFunnels>}
              </div>
            </Route>
          </Switch>
        </DndProvider>
      </Router> */}
    </div>
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
      getUid: () => { dispatch(getUid()) },
      getFunnel: () => { dispatch(getFunnel()) },
      getAllFunnel: () => { dispatch(getAllFunnel()) },

    }
    
  }
)(App);
