import Configurator from '../configurator/configurator';
import Top_frame from '../top_frame/top_frame';
import Sidebar_left from '../sidebar_left/sidebar_left';
import WrapCenter from '../wrap_center/wrap_center';
import React, { useState, useEffect } from 'react';
import whatsapp from '../../assets/icons8-whatsapp.gif'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllFunnels from '../allFunnels/allFunnels'
export default function WrapAll(){
    return(
        <>
        <Switch>
               <Route path='/admin/:userName/:funnel/all'>
                        <AllFunnels></AllFunnels>
                    </Route>
                   
                    <Route path='/'>
             
                    </Route>
        </Switch>
        <Configurator></Configurator>
              <Top_frame></Top_frame>
              <Sidebar_left></Sidebar_left>
              <WrapCenter></WrapCenter>

              
        </>
        
    )
}
// src="https://guerrilla.co.il/wp-content/uploads/2021/03/whatsapp-1.svg"