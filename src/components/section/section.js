

import React, { useEffect, useState ,useRef} from 'react';
import { connect } from 'react-redux';
import Part from '../part/part'
import './section.css'
import {actions} from '../../redux/actions/funnel-try.action'
import GridList from '@material-ui/core/GridList';
import Grid  from '@material-ui/core/Grid';
import PdfContainer from '../../components/pdf/pdfContainer';


function Section(props) {
    const {changeMessage,addSection2, section, indexSection, removeSection, setCollapseOpen, sectionInEditing, editMode, jsonPage, numSections, message, saveInLocalStorage, urlPage, nameUser, nameFunnel } = props
    const bodyRef = useRef();
    const editSection = (indexSection) => {
        debugger
        //////////לשים משהוא במקום השליחה הזו
        // window.parent.postMessage(JSON.stringify({function:"set collapse open" ,params:{elementOrSection:'section',id:indexSection}}), '*')
        console.log(jsonPage)
        //sectionInEditing(indexSection)
        //setCollapseOpen('section')
    }
 

    function addNewGrid(numParts,styleG,place) {
        let newSection = {
            settings: { style: { backgroundColor: '' } },
            arrParts: [],
            id: numSections
        }


        for (let i = 0; i < numParts; i++) {
            newSection.arrParts.push({
                settings: { style: {} },
                arrElements: [
                ],
                mySectionHeight:0
            })
        }
        addSection2(newSection, numSections,styleG,place)
        changeMessage()
    }

    // console.log(props.section)
     let gt=props.section.gridType
    // console.log(gt)
    return (
        <div style={{height:'100%'}}>
            <div id="taille" className={editMode ? "row no-gutters sectionToEdit" : "row no-gutters"} style={section.settings.style} >
        {/* <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" onDragStart="drag(event)" > */}
                {editMode && <div className='edit_buttons_section'>
                    <div>
                        <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeSection(indexSection);localStorage.removeItem(props.leid)}}>
                            delete
                </span>
                </div>
                    <div><PdfContainer reference={bodyRef} fileName={`funnel1.pdf`} /></div>
                    <div>
                        <span class="material-icons" style={{ zIndex: 4, fontSize: '1.2rem' }} onClick={() => editSection(indexSection)} >
                            create
                    </span>
                    </div></div>}
                    <Grid container direction="row" ref={bodyRef} style={{height:"100%"}} id={gt=='i'? 'tmpg': (gt=='j')?'tmpg1':""}>

            { 
            props.section.arrParts.map((item, i) => {
                
                return (
                    
                    <>
                {
                    (gt=='b'|| gt=='d')? <>
                    <div key={i} className={`col-md-${12 / props.section.arrParts.length} p-0` } id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='55vh'gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div> </>
                    :  (gt=='a'|| gt=='c'||gt=='e') ? <>
                    <Grid container direction="row" key={i} id={`mypart${indexSection}`}>
                    <Part part={item} indexSection={indexSection} indexPart={i} taille={gt=='a'?'21vh':(gt=='c'?'14vh':'45vh') }   gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </Grid>
                    </> : (gt=='f')? <>
                    <div key={i} className={i==props.section.arrParts.length-1? `col-md-6 p-0`: `col-md-3 p-0`}id={`mypart${indexSection}`} >
                    <Part part={item}  indexSection={indexSection} indexPart={i} taille='45vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div> 
                    </> :
                    (gt=='g')?
                    <>
                
                    {i==((props.section.arrParts.length-1)/2) ?
                    <>
                    <div key={i} className={`w-100`}/>
                    <div key={i} className={`col-md-${12 / 2} p-0`} id={`mypart${indexSection}`}>
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='20vh'  gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>

                    </>:
                    <>
                    <div key={i} className={`col-md-${12 / 2} p-0`} id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='20vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>
                    </>
                    }
                    </>
                    : (gt=='h')? <>
                    {(i==3|| i==6 )?
                    <>
                    <div key={i} className={`w-100`}/>
                    <div key={i} className={`col-md-${12 / 3} p-0`} id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='8vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>

                    </>:
                    <>
                    <div key={i} className={`col-md-${12 / 3} p-0`} id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='13vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>
                    </>
                    }   
                    </> :(gt=='i')? 
                    <>
                    <div key={i} className={`tm${i}`} id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='20vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>

                    </>
                
                    :<>
                    <div key={i} className={`tm${i}`} id={`mypart${indexSection}`} >
                    <Part part={item} indexSection={indexSection} indexPart={i} taille='20vh' gt={props.section.gridType} nPart={props.section.arrParts.length} addNewGrid={addNewGrid} mySection={section} nums={numSections} leid={props.leid} />
                    </div>
                </>
                }
                </>
            )
        })

        }
        </Grid >
                {/* </div> */}
            </div>
        </div>
    )
}
export default connect(
    (state) => {
        return {
            editMode: state.funnel.editMode,
            jsonPage: state.funnel.jsonPage,
            numSections: state.funnel.jsonPage.num_sections,
            urlPage: state.funnel.urlPage,
            nameUser: state.user.userName,
            nameFunnel: state.funnel.name,
            message: state.funnel.message
        }
    },
    (dispatch) => {
        return {
            removeSection:  (indexSection) =>{dispatch(actions.removeSection(indexSection))},
            saveInLocalStorage: () => { dispatch(actions.saveInLocalStorage()) },
            // setCollapseOpen:  (collapse)=> { dispatch(actions.setCollapseOpen(collapse)) },
            sectionInEditing: (indexSection) => { dispatch(actions.sectionInEditing(indexSection)) },
            addSection2: (newSection,id,s,place) => { dispatch(actions.addSection2({newSection:newSection,id:id,s:s,place:place})) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) }
        }
    }
)(Section)
