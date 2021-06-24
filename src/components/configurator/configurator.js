import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './configurator.css'
import EditPage from '../editPage/editPage'
import EditSection from '../editSection/editSection'
import EditElement from '../editElement/editElement'
import { chageEditMode, creatFunnel, getAllFunnel, updateFunnel, updateFunnel1,removeFunnel, setFlagAllFunnnels, setAllFunnels, uploadFile, save, sectionInEditing, setCollapseOpen,setMonIndex } from '../../redux/actions/funnel.action'
import {  Route, withRouter } from 'react-router-dom'
import html2canvas from 'html2canvas';
import Grid  from '@material-ui/core/Grid';
import Grids from '../grids/grids';

import {FiSettings} from 'react-icons/fi'
import {CgScreen} from 'react-icons/cg'
import {BsEye} from 'react-icons/bs'

function Configurator(props) {

    const [flag, setFlag] = useState(false);
    const { history, setFlagAllFunnnels, userName, funnelName, flagCon, collapseIsOpen, elementInEditing, chageEditMode, jsonPage, creatFunnel, getAllFunnel, save, updateFunnel, removeFunnel, idPage, nameFunnel, nameUser, uploadFile, urlPage, sectionInEditing, setCollapseOpen ,setMonIndex,monindex} = props
  
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
            updateFunnel1(funnelImage)
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
        debugger
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
                        <div id="head-configurator" className="row d-flex justify-content-between m-0 mb-3 mt-1">
                                 <span className="material-icons pointer" onClick={() => clickAllFunnels()}>
                                settings
                 </span>
                            
                        </div>
                       


                        <div id="accordion" style={{height:'100%'}}>
                           
                            <Grid container direction="row" style={{height:"6vh", color:'grey',textAlign:'center', fontSize:'15px'}}>

                          
                                
                              <Grid item sm={6} md={6}> <button  id={monindex?'bl':''} className='b1' onClick={()=>changeTable(1)} style={{fontSize:"1.5vw"}}>Design</button> </Grid>
                              <Grid item sm={6} md={6} > <button  id={monindex?'':'bl'} className='b2' onClick={()=>changeTable(0)} style={{fontSize:"1.5vw"}}>Grid</button> </Grid>
                                
                            </Grid>
                              
                         
                             <Grid container direction ='row'id='gdm' style={{height:'80%',marginTop:'4%'}} >
                                 
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
                                <div id="bottom_configurtor"   >
                                     <Grid container direction="row" style={{height:"100%", width:'100%'}} >
                                     <Grid item md={2} sm={2}><button className='btn' style={{width:'100%',height:'100%',textAlign:'center'}} onClick={() => clickView(history)}>
                                        <span class="material-icons iconBottom" style={{ color: "#cac6c6"}}>
                                            remove_red_eye
                                        </span>
                                         </button>
                                        </Grid>
                                        <Grid item md={2} sm={2}></Grid>
                                    <Grid item md={5} sm={5}>
                                    {idPage && <div> <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => updatefunnel2()} >update</button>
                                        <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => removeFunnel("5fd9f7b28eedc0eb8b5dea30")} >remove</button>
                                        </div>
                                        ||
                                        // <button className='btn '  style={{width:'80%', backgroundColor:'blue'}} onClick={() => saveOrUpdatefunnel()} >save</button>}
                                        <button type="button" id="whatapp"  onClick={() => saveOrUpdatefunnel()}>Save</button>
                            }
                                        </Grid>
                                        <Grid item md={2} sm={2}></Grid>

                                     </Grid>
                                    
                                    
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
            // iframe: state.funnel.iframe,
            monindex:state.funnel.monindex
        }
        
    },
    (dispatch) => {
        return {
            chageEditMode: () => { dispatch(chageEditMode()) },
            creatFunnel: () => { dispatch(creatFunnel()) },
            getAllFunnel: () => { dispatch(getAllFunnel()) },
            updateFunnel: () => { dispatch(updateFunnel()) },
            updateFunnel1:()=>{dispatch(updateFunnel1())},
            removeFunnel: (id) => { dispatch(removeFunnel(id)) },
            setFlagAllFunnnels: () => { dispatch(setFlagAllFunnnels()) },
            uploadFile: (file) => { dispatch(uploadFile(file)) },
            save: (file) => { dispatch(save(file)) },
            setCollapseOpen: function (collapse) { dispatch(setCollapseOpen(collapse)) },
            sectionInEditing: (indexSection) => { dispatch(sectionInEditing(indexSection)) },
            setMonIndex: (idx)=>{dispatch(setMonIndex(idx))},
        }
    }
)(Configurator))

