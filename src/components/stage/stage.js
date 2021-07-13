
import React, { useEffect, useState,useRef } from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/funnel-try.action'
import './stage.css'
import Loading from '../loading/loading'
import Section from '../section/section'
import 'jquery-ui-bundle';
import PdfContainer from '../../components/pdf/pdfContainer'

function Stage(props) {
    const { jsonPage, edit, chageEditMode, setJsonPage, editMode, loading } = props;
    const [flag, setFlag] = useState(true);
    const bodyRef = useRef();
    useEffect(() => {
        chageEditMode(edit)
        if (!editMode && flag) {
            setFlag(false)
            let json = localStorage.getItem("json")
            console.log(JSON.parse(json))
            setJsonPage(JSON.parse(json))
        }
    })
    useEffect(() => {
        localStorage.clear()
        let newhit={height:390}
        const atmp={myHeight:367,isBigger:false}
        const btmp={myHeight:350,isBigger:false}
        newhit[0]=atmp
        newhit[1]=btmp
        console.log(newhit)
        localStorage.setItem(0, JSON.stringify(newhit))
        // return () => {
        //   localStorage.clear()
        // };
      }, []);
    return (
        <>
           {loading ? <Loading></Loading> :
                <div id="stage" ref={bodyRef} className={editMode ? "col-md-9 d-flex p-0 m-auto " : "col-md-12 d-flex p-0 "}
                   style={{border:0,width:"100%",height:"100%",marginTop:'5%',maxHeight:'50vh',marginBottom:'0px',paddingBottom:'0px'}}
                >
                    <div id="landingPage_edit"  className={editMode ? "m-auto border_page p-0 " : "col-md-12 p-0 "} style={{
            
                     backgroundImage:"blob:http://localhost:3000/8c11b757-3bf4-49ca-90bb-44f1dd1348d1"}}>
                        {jsonPage.arrSections.length == 0 && < div className=" d-flex justify-content-center " style={{height:'100%'}}>
                            <h2 id="whenIsEmpty" className="col-md-9 mt-5 p-4"style={{height:"20vh", fontSize:'2vw'}}>CHOOSE A GRID TO START</h2>
                        </div>
                        }
                        {props.jsonPage.arrSections.map((item, i) => {
                            return (
                                <div key={i} id="myStage" style={{height:"60vh",maxHeight:'100%',width:'100%',padding:'0',marginBottom:'0px',overflow:'scroll'}} className="ui-state-default" section-id={item.id} data-id={i}>
                                    <Section section={item} indexSection={i} leid={item.id}></Section>
                                    </div>
                            )
                        })}
                         <div><PdfContainer reference={bodyRef} fileName={`funnel1.pdf`} /></div>
                    </div>
                </div>
                }
        </>
    )
    
}
export default connect(
    (state) => {
        return {
            jsonPage: state.funnel.jsonPage,
            editMode: state.funnel.editMode,
            loading: state.funnel.loading,
            numSections: state.funnel.jsonPage.num_sections,
            urlPage: state.funnel.urlPage,
            nameUser: state.user.userName,
            nameFunnel: state.funnel.name
        }
    },
    (dispatch) => {
        return {
            changeMessage: () => { dispatch(actions.changeMessage()) },
            saveInLocalStorage: () => { dispatch(actions.saveInLocalStorage()) },
            setJsonPage: (json) => { dispatch(actions.setJsonPage(json)) },
            chageEditMode: (edit) => { dispatch(actions.chageEditMode(edit)) },
            setOrderSection: (newI, oldI) => { dispatch(actions.setOrderSection({new_index:newI, old_index:oldI})) },
            setNamePage: (newName) => { dispatch(actions.setNamePage(newName)) },
            setStylePage: (property, newValue) => { dispatch(actions.setStylePage({ property: property, value: newValue })) },
            setStyleSection: (obj) => { dispatch(actions.setStyleSection(obj)) },

        }
    }
)(Stage)
