import React, { useEffect, useState, useRef } from 'react';
import JsonToHtml from '../convertJsonToHtmk/jsonToHtml'
import { connect } from 'react-redux';
import fileFolderfoorlook from '../../assets/fileFolderfoorlook.svg'
import { createBrowserHistory } from 'history'
import NoTemplates from '../../assets/No templates found.svg'
import createTemplate from '../../assets/createTemplate.svg'

// import "../../assets/webfonts"
 import "./noFunnels.css";




 export  default function NoFunnels(props) {

    let url = window.location;
    const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""

    var userName = (url.pathname.split('/')[1]);
        let { history } = props;

    history = createBrowserHistory({ forceRefresh: true })
    const createNewFunnel = () => {
        userName = (url.pathname.split('/')[2]);
        //         console.log("aaaaaaaa"+c)
        history.push(`/admin/${userName}/new`)
    }
    return (
        <div style={{ height:"100% ",backgroundColor:"white"}}>
    <div style={{textAlign:'center',marginTop:'20vh'}}>
    <img  style={{width:"15%", marginTop:"2vh"}} src={fileFolderfoorlook}></img>
       {/* <img src={NoTemplates}></img> */}
        <p style={{ marginTop:"2vh",color: "black",opacity:1, fontSize:"5vh",background: "transparent url('img/No templates found.png') 0% 0% no-repeat padding-box"}}>You Have No Templates</p>         
   {/* <button onClick={()=>createNewFunnel()} style={{ color:"white",fontSize:"3vh", border:"none",background: "transparent url('img/Component 740.png') 0% 0% no-repeat padding-box", backgroundColor:"rgb(95, 95, 247)" */}
  {/* , opacity: 1}}>Start Creating </button> */}
                    {/* <JsonToHtml json= {e.json}></JsonToHtml> */}
<img src={createTemplate} style={{ marginTop:"4vh"}} onClick={()=>createNewFunnel()}></img>
                   

                      
</div>
</div>
)
}