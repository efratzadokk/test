
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/funnel-try.action'
import './stage.css'
import Loading from '../loading/loading'
import Section from '../section/section'
import 'jquery-ui-bundle';


function Stage(props) {
    const { jsonPage, edit, chageEditMode, setJsonPage, editMode, loading } = props;
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        chageEditMode(edit)
        if (!editMode && flag) {
            setFlag(false)
            let json = localStorage.getItem("json")
            console.log(JSON.parse(json))
            setJsonPage(JSON.parse(json))
        }
    })

    return (
        <>
            {loading ? <Loading></Loading> :
                <div id="stage" className={editMode ? "col-md-9 d-flex p-0 m-auto " : "col-md-12 d-flex p-0 "}
                   style={{border:0,width:"100%",height:"100%",marginTop:'5%'}}
                >
                    <div id="landingPage_edit" className={editMode ? "m-auto border_page " : "col-md-12 "} style={{overflow: 'scroll',height:'100%',marginBottom:'5px', backgroundImage:"blob:http://localhost:3000/8c11b757-3bf4-49ca-90bb-44f1dd1348d1"}}>
                               <div id='sortable'></div>
                        {jsonPage.arrSections.length == 0 && < div className=" d-flex justify-content-center " style={{height:'100%'}}>
                                <h2 id="whenIsEmpty" className="col-md-9 mt-5 p-4"style={{height:"20vh", fontSize:'2vw'}}>Drag an element into content</h2>
                        </div>
                        }
                        {props.jsonPage.arrSections.map((item, i) => {
                            return (
                                <div key={i} style={{height:"100%"}} className="ui-state-default" section-id={item.id} data-id={i}>
                                    <Section section={item} indexSection={i}></Section>
                                    </div>
                            )
                        })}
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
