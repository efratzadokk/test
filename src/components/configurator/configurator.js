import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './configurator.css'
import EditPage from '../editPage/editPage'
import EditSection from '../editSection/editSection'
import EditElement from '../editElement/editElement'
import {  Route, withRouter } from 'react-router-dom'
import html2canvas from 'html2canvas';
import Grid  from '@material-ui/core/Grid';
import Grids from '../grids/grids';
import {actions } from '../../redux/actions/funnel-try.action'
import { FaDesktop, FaTabletAlt ,FaMobileAlt} from "react-icons/fa";
import {FiSettings} from 'react-icons/fi'
import {CgScreen} from 'react-icons/cg'
import {BsEye} from 'react-icons/bs'

function Configurator(props) {

    const [flag, setFlag] = useState(false);
    const {setMyComputer, history, saveOrUpdate,setFlagAllFunnnels, userName,updatingFunnel, funnelName, flagCon, collapseIsOpen, elementInEditing, chageEditMode, jsonPage, creatFunnel, getAllFunnel, save, updateFunnel, removeFunnel, idPage, nameFunnel, nameUser, uploadFile, urlPage, sectionInEditing, setCollapseOpen ,setMonIndex,monindex} = props
  
    // function changeColor(co) {
    //     elementInEditing.settings.style.color = co;
    // }
    const clickAllFunnels = () => {
        if (window.location.pathname.includes('all'))
            history.push(`/${userName}/${funnelName}`)
        else
            history.push(`/${userName}/${funnelName}/all`)
        getAllFunnel();
        setFlagAllFunnnels()
    }
    const clickView = () => {

       // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "move to view", params: jsonPage }), '*')
        // changeMessage()
        // localStorage.setJsonPagePage));
        // window.open(`${urlPage}/${nameUser}/${nameFunnel}`)

    }
    const saveOrUpdatefunnel = () => {
        
        let eventRegristration = document.querySelector('#landingPage_edit');
        html2canvas(eventRegristration).then((canvas) => {
            let imgData = canvas.toDataURL();
            console.log(imgData);
            var funnelImage = dataURLtoFile(imgData, 'event.png');
            console.log(funnelImage);
            const myFile = new FormData()
            myFile.append("file", funnelImage[0])
            save(funnelImage)
     
        });
    }
    const updatefunnel2 = () => {
        
        let eventRegristration = document.querySelector('#landingPage_edit');
        html2canvas(eventRegristration).then((canvas) => {
            let imgData = canvas.toDataURL();
            console.log(imgData);
            var funnelImage = dataURLtoFile(imgData, 'event.png');
            console.log(funnelImage);
            const myFile = new FormData()
            myFile.append("file", funnelImage[0])
            updatingFunnel(funnelImage)
        });
    }
    const dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    const changeTable= (v)=>{
        // debugger
  console.log('here')
  console.log(monindex)
  console.log(v)
     setMonIndex(v)

    }

    console.log(monindex)
  
    return (
        <> 
            {  flagCon &&
                <>
                    <div id="wrap-configurator" className="pt-4 px-2">
                        {/* <div id="head-configurator" className="row d-flex justify-content-between m-0 mb-3 mt-1">
                                 <span className="material-icons pointer" onClick={() => clickAllFunnels()}>
                                settings
                 </span>
                            
                        </div> */}
                       


                        <div id="accordion" style={{height:'100%'}}>
                           
                            <Grid container direction="row" style={{height:"6vh", color:'grey',textAlign:'center', fontSize:'15px'}}>

                          
                                
                              <Grid item sm={6} md={6}> <button  id={monindex?'bl':''} className='b1' onClick={()=>changeTable(1)} style={{fontSize:"1.5vw"}}>Design</button> </Grid>
                              <Grid item sm={6} md={6} > <button  id={monindex?'':'bl'} className='b2' onClick={()=>changeTable(0)} style={{fontSize:"1.5vw"}}>Grid</button> </Grid>
                                
                            </Grid>
                              
                         
                             <Grid container direction ='row'id='gdm' style={{height:'100%',marginTop:'4%'}} >
                                 
                            { monindex ?
                           (() => {
                               
                                switch (collapseIsOpen) {
                                    case 'section':
                                        return <EditSection></EditSection>
                                    case 'element':
                                        return (elementInEditing!=null && <EditElement></EditElement>)
                                    default:
                                        break;
                                }
                            } )() 
                        : <Grids/>


                            }
                         

<Route render={({ history }) => (
                                    <div id="bottom_configurtor"  >
                                        {/* <div class="dropup"> */}
                                        <button className='btn' style={{ background: "none", border: "none" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => clickView(history)}>
                                            <CgScreen style={{ color: "#cac6c6"}}></CgScreen>
                                        </button>
                                        <div class="dropdown-menu mobile container row" id="mydr" style={{ backgroundColor: "#2E2E2E", position: "fixed", width: "100% ", height: "75px", marginRight:"-33%"}}>
                                            <div class="container">
                                                <div class="row" style={{color:"white"}}>
                                                    <div class="col-4 responsive"  onClick={(e) => setMyComputer("a")}>
                                                        <FaDesktop className="iconRes"  />
                                                        <br />
                                                        Desktop    </div>
                                                    <div class="col-4 responsive" onClick={(e) => setMyComputer("b")} style={{  border:"1px 0px white solid"}}>
                                                    <FaTabletAlt className="iconRes" /><br/>
                                                        Tablet    </div>
                                                    <div class="col-4 responsive" onClick={(e) => setMyComputer("c")}>
                                                        <FaMobileAlt className="iconRes" /><br/>
                                                        Mobile    </div>
                                                </div>
                                            </div>
                                          
                                        </div>

                                        <button className='btn' onClick={() => clickView(history)}>
                                            <BsEye style={{ color: "#cac6c6" }}></BsEye>
                                        </button>

                                        <button className='btn' onClick={() => clickView(history)}>
                                            <FiSettings style={{ color: "#cac6c6" }}></FiSettings>
                                        </button>
                                        {idPage && <div> <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => updatefunnel2()} >update</button>
                                            <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => removeFunnel("5fd9f7b28eedc0eb8b5dea30")} >remove</button>
                                        </div>
                                            ||
                                            <button type="button" id="whatapp" class="btn btn-info btn-sm" onClick={() => saveOrUpdate()} style={{height:'80%'}}>update</button>
                                        }
                                    </div>





                                )} />
                               </Grid>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default withRouter(connect(
    (state) => {
        return {
            elementInEditing: state.funnel.elementInEditing,
            collapseIsOpen: state.funnel.collapseIsOpen,
            flagCon: state.funnel.isOpenConfigurator,
            jsonPage: state.funnel.jsonPage,
            idPage: state.funnel.idFunnel,
            nameUser: state.user.userName,
            nameFunnel: state.funnel.name,
            urlPage: state.funnel.urlPage,
            userName: state.user.userName,
            funnelName: state.funnel.name,
            monindex:state.funnel.monindex
        }
        
    },
    (dispatch) => {
        return {
            chageEditMode: () => { dispatch(actions.chageEditMode()) },
            creatFunnel: () => { dispatch(actions.creatFunnel()) },
            saveOrUpdate:()=>{dispatch(actions.saveOrUpdate())},
            getAllFunnel: () => { dispatch(actions.getAllFunnel()) },
            updateFunnel: () => { dispatch(actions.updateFunnel()) },
            updatingFunnel:()=>{dispatch(actions.updatingFunnel())},
            removeFunnel: (id) => { dispatch(actions.removeFunnel(id)) },
            setFlagAllFunnnels: () => { dispatch(actions.setFlagAllFunnnels()) },
            uploadFile: (file) => { dispatch(actions.uploadFile(file)) },
            save: (file) => { dispatch(actions.save(file)) },
            setCollapseOpen: function (collapse) { dispatch(actions.setCollapseOpen(collapse)) },
            sectionInEditing: (indexSection) => { dispatch(actions.sectionInEditing(indexSection)) },
            setMonIndex: (idx)=>{dispatch(actions.setMonIndex(idx))},
            setWidthPage:(idx)=>{dispatch(actions.setWidthPage(idx))},
            setMyComputer: (idx)=>{dispatch(actions.setMyComputer(idx))},

         
        }
    }
)(Configurator))

