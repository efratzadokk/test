import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './configurator.css'
import EditPage from '../editPage/editPage'
import EditSection from '../editSection/editSection'
import EditElement from '../editElement/editElement'
import { chageEditMode, creatFunnel, getAllFunnel, updateFunnel, updateFunnel1,removeFunnel, setFlagAllFunnnels, setAllFunnels, uploadFile, save, sectionInEditing, setCollapseOpen } from '../../redux/actions/funnel.action'
import {  Route, withRouter } from 'react-router-dom'
import html2canvas from 'html2canvas';


function Configurator(props) {

    const [flag, setFlag] = useState(false);
    const { history, setFlagAllFunnnels, userName, funnelName, flagCon, collapseIsOpen, elementInEditing, chageEditMode, jsonPage, creatFunnel, getAllFunnel, save, updateFunnel, removeFunnel, idPage, nameFunnel, nameUser, uploadFile, urlPage, sectionInEditing, setCollapseOpen } = props

    //////////אני  יירקתי
    // useEffect(() => {

    //     window.addEventListener("message", messageFromIframe, false);
    // })

    //////////אני  יירקתי
//     function messageFromIframe(event) {
//         console.log('I am an iframe, I accepted it:', event.data);
//         let data = JSON.parse(event.data)
//         // console.log(data.params)
//         switch (data.function) {
//             case 'set collapse open':
//                 console.log(data.params)
// debugger
//                 sectionInEditing(data.params.id)//data.params.num
//                 setCollapseOpen({collapse:data.params.elementOrSection,id:data.params.id})

//                 break;

//         }
//     }

    // let color = elementInEditing.settings.style.color
    function changeColor(co) {
        elementInEditing.settings.style.color = co;
    }
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
            // console.log(emailImg);
            // this.props.getUrlImage(emailImg);
            //this.props.setEmailBody(img);
            // let win = window.open();
            // win.document.write("<img src='"+imgData+"'/>");
            console.log(funnelImage);
            const myFile = new FormData()
            myFile.append("file", funnelImage[0])
            save(funnelImage)
            // return (funnelImage)
        });
    }
    const updatefunnel2 = () => {
        
        let eventRegristration = document.querySelector('#landingPage_edit');
        html2canvas(eventRegristration).then((canvas) => {
            let imgData = canvas.toDataURL();
            console.log(imgData);
            var funnelImage = dataURLtoFile(imgData, 'event.png');
            // console.log(emailImg);
            // this.props.getUrlImage(emailImg);
            //this.props.setEmailBody(img);
            // let win = window.open();
            // win.document.write("<img src='"+imgData+"'/>");
            console.log(funnelImage);
            const myFile = new FormData()
            myFile.append("file", funnelImage[0])
            updateFunnel1(funnelImage)
            // return (funnelImage)
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

    // const saveOrUpdatefunnel = () => {
    //     save(clic())
    //     // await uploadFile(clic())
    //     //     .then((v) => {
    //             // if (v) {
    //             // if (idPage)
    //             //     updateFunnel()
    //             // else
    //             //     creatFunnel()
    //             // // }
    //         // }).catch(e => {
    //         //     console.log(e);
    //         // });
    // }
    return (
        <>
            {  flagCon &&
                <>
                    <div id="wrap-configurator" className="pt-4 px-2">
                        <div id="head-configurator" className="row d-flex justify-content-between m-0 mb-3 mt-1">
                            {/* <span className="material-icons pointer" onClick={() => clickAllFunnels()}>
                            settings
                 </span> */}
                            {/* <Link to={window.location.pathname.includes('all')?`/${userName}/${funnelName}`:`/${userName}/${funnelName}/all`}> */}
                            <span className="material-icons pointer" onClick={() => clickAllFunnels()}>
                                settings
                 </span>
                            
                        </div>
                        <div id="accordion" className=''>
                            <EditPage></EditPage>
                            {(() => {
                                switch (collapseIsOpen) {
                                    case 'section':
                                        return <EditSection></EditSection>
                                    case 'element':
                                        return (elementInEditing!=null && <EditElement></EditElement>)
                                    default:
                                        break;
                                }
                            })()}
                            {/* <button onClick={() => clic()}> click</button> */}
                            <Route render={({ history }) => (
                                <div id="bottom_configurtor">
                                    <button className='btn' onClick={() => clickView(history)}>
                                        <span class="material-icons iconBottom" style={{ color: "#cac6c6" }}>
                                            remove_red_eye
                            </span>
                                    </button>
                                    {idPage && <> <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => updatefunnel2()} >update</button>
                                        <button className='btn' style={{ background: '#ff5f5f' }} onClick={() => removeFunnel("5fd9f7b28eedc0eb8b5dea30")} >remove</button></>
                                        ||
                                        <button className='btn' id="whatapp" style={{ background: '#ff5f5f' }} onClick={() => saveOrUpdatefunnel()} >save</button>}

                                </div>
                                




                            )} />
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
            sectionInEditing: (indexSection) => { dispatch(sectionInEditing(indexSection)) }
        }
    }
)(Configurator))

