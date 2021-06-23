
// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import Part from '../part/part'
// // import { useDrag } from 'react-dnd'
// import { removeSection, setCollapseOpen, sectionInEditing } from '../../redux/actions/funnel.action'
// import './section.css'

// import GridList from '@material-ui/core/GridList';
// import Grid  from '@material-ui/core/Grid';
// function Section(props) {
//     const { section, indexSection, removeSection, setCollapseOpen, sectionInEditing, editMode, jsonPage, numSections, message, saveInLocalStorage, urlPage, nameUser, nameFunnel } = props
//     // const sectionStyle = {
//     //     minHeight:"200px"
//     // }
//     // useEffect(() => {
//     //     window.addEventListener("message", iframeFunctions, false);
//     // }, [message])
//     // function iframeFunctions(event) {
//     //     debugger
//     //     console.log('I am an iframe, I accepted it:', event.data);
//     //     let data = JSON.parse(event.data)
//     //     // console.log(data.params)
//     //     switch (data.function) {
//     //         // case 'add section':
//     //         //     console.log(numSections)
//     //         //     // addSection(data.params, numSections)
//     //         //     break;
//     //         // case "move to view":
//     //         //     console.log(jsonPage)
//     //         //     localStorage.setItem("json", JSON.stringify(jsonPage));
//     //         //     window.open(`${urlPage}/${nameUser}/${nameFunnel}`)
//     //         //     // saveInLocalStorage()
//     //         //     break;
//     //     }
//     // }

//     const editSection = (indexSection) => {
//         debugger
//         //////////לשים משהוא במקום השליחה הזו
//         // window.parent.postMessage(JSON.stringify({function:"set collapse open" ,params:{elementOrSection:'section',id:indexSection}}), '*')
//         console.log(jsonPage)
//         //sectionInEditing(indexSection)
//         //setCollapseOpen('section')
//     }
//     // const [{ isDragging }, drag] = useDrag({
//     //     item: { name: props.name, type: ItemTypes.BOX },
//     //     collect: (monitor) => ({
//     //         isDragging: !!monitor.isDragging()
//     //     }),
//     //     end: async (item, monitor) => {
//     //         //////////////
//     //         const dropResult = monitor.getDropResult();
//     //         if (item && dropResult) {
//     //             console.log(settings);
//     //             setName(item.name)
//     //             if (indexPart === dropResult.indexPart && indexSection === dropResult.indexSection)
//     //                 props.addElement(name, valueWidget[item.name], indexSection, indexPart, numElement)
//     //             else {
//     //                 setIndexPart(dropResult.indexPart)
//     //                 setIndexSection(dropResult.indexSection)
//     //                 setChangePosition(!changePosition)
//     //             }
//     //         }
//     //         ////////////////
//     //     }
//     // })
//     // const drag1 = (event) => {
//     //     console.log("dragging!!!!")
//     //     event.stopPropagation();
//     //     event.preventDefault();
//     //     // let x =1
//     //     // x=JSON.stringify(event.target)
//     //     // event.dataTransfer.setData("text", x);
//     //     // event.originalEvent.dataTransfer.setData("foo",x)
//     //     event.dataTransfer.dropEffect = 'move';
//     //     addElement1(props.name, valueWidget[props.name])
//     //   }
//     console.log(props.section)
//     let gt=props.section.gridType
//     console.log(gt)
//     return (
//         <>
//             <div className={editMode ? "row no-gutters sectionToEdit" : "row no-gutters"} style={section.settings.style}>
//         {/* <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" onDragStart="drag(event)" > */}
//                 {editMode && <div className='edit_buttons_section'>
//                     <div>
//                         <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeSection(indexSection)}>
//                             delete
//                 </span>
//                     </div>
//                     <div>
//                         <span class="material-icons" style={{ zIndex: 4, fontSize: '1.2rem' }} onClick={() => editSection(indexSection)} >
//                             create
//                     </span>
//                     </div></div>}
//             <Grid container direction="row" style={{height:"40%"}} id={gt=='i'? 'tmpg': (gt=='j')?'tmpg1':''}>

//                 { 
//                 props.section.arrParts.map((item, i) => {
//                     return (
                        
//                         // <div key={i} className={(gt=='b'|| gt=='d') ?`col-md-${12 / props.section.arrParts.length} p-0` : (gt=='a'|| gt=='c'||gt=='e') ?`row-md p-0` :""} style={{clear:'both'}}>
//                         //     <Part part={item} indexSection={indexSection} indexPart={i}></Part>
                            
//                         // </div>
//                         <>
//                         {
//                             (gt=='b'|| gt=='d')? <>
//                             <div key={i} className={`col-md-${12 / props.section.arrParts.length} p-0`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div> </>
//                             :  (gt=='a'|| gt=='c'||gt=='e') ? <>
//                             <Grid container direction="row" key={i}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </Grid>
//                             </> : (gt=='f')? <>
//                             <div key={i} className={i==props.section.arrParts.length-1? `col-md-6 p-0`: `col-md-3 p-0`} >
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div> 
//                             </> :
//                              (gt=='g')?
//                              <>
                           
//                              {i==((props.section.arrParts.length-1)/2) ?
//                              <>
//                             <div key={i} className={`w-100`}/>
//                             <div key={i} className={`col-md-${12 / 2} p-0`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>

//                              </>:
//                              <>
//                             <div key={i} className={`col-md-${12 / 2} p-0`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>
//                              </>
//                             }
//                              </>
//                              : (gt=='h')? <>
//                             {(i==3|| i==6 )?
//                              <>
//                             <div key={i} className={`w-100`}/>
//                             <div key={i} className={`col-md-${12 / 3} p-0`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>

//                              </>:
//                              <>
//                             <div key={i} className={`col-md-${12 / 3} p-0`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>
//                              </>
//                             }   
//                              </> :(gt=='i')? 
//                              <>
//                             <div key={i} id={`tm${i}`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>

//                             </>
                         
//                         :<>
//                             <div key={i} id={`tm${i}`}>
//                             <Part part={item} indexSection={indexSection} indexPart={i}/>
//                             </div>
//                         </>
//                         }
//                         </>
//                     )
//                 })
               
//                 }
//             </Grid >
//                 {/* </div> */}
//             </div>
//         </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             editMode: state.funnel.editMode,
//             jsonPage: state.funnel.jsonPage,
//             numSections: state.funnel.jsonPage.num_sections,
//             urlPage: state.funnel.urlPage,
//             nameUser: state.user.userName,
//             nameFunnel: state.funnel.name,
//             message: state.funnel.message
//         }
//     },
//     (dispatch) => {
//         return {
//             removeSection: function (indexSection) {
//                 dispatch(removeSection(indexSection))
//             },
//             saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
//             setCollapseOpen: function (collapse) { dispatch(setCollapseOpen(collapse)) },
//             sectionInEditing: (indexSection) => { dispatch(sectionInEditing(indexSection)) }
//         }
//     }
// )(Section)

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Part from '../part/part'
// import { useDrag } from 'react-dnd'
import { removeSection, setCollapseOpen, sectionInEditing } from '../../redux/actions/funnel.action'
import './section.css'

import GridList from '@material-ui/core/GridList';
import Grid  from '@material-ui/core/Grid';
function Section(props) {
    const { section, indexSection, removeSection, setCollapseOpen, sectionInEditing, editMode, jsonPage, numSections, message, saveInLocalStorage, urlPage, nameUser, nameFunnel } = props

    const editSection = (indexSection) => {
        debugger
        //////////לשים משהוא במקום השליחה הזו
        // window.parent.postMessage(JSON.stringify({function:"set collapse open" ,params:{elementOrSection:'section',id:indexSection}}), '*')
        console.log(jsonPage)
        //sectionInEditing(indexSection)
        //setCollapseOpen('section')
    }
 
    console.log(props.section)
    let gt=props.section.gridType
    console.log(gt)
    return (
        <div style={{height:'100%'}}>
            <div id="taille" className={editMode ? "row no-gutters sectionToEdit" : "row no-gutters"} style={section.settings.style} >
        {/* <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" onDragStart="drag(event)" > */}
                {editMode && <div className='edit_buttons_section'>
                    <div>
                        <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeSection(indexSection)}>
                            delete
                </span>
                    </div>
                    <div>
                        <span class="material-icons" style={{ zIndex: 4, fontSize: '1.2rem' }} onClick={() => editSection(indexSection)} >
                            create
                    </span>
                    </div></div>}
            <Grid container direction="row" style={{height:"100%"}} id={gt=='i'? 'tmpg': (gt=='j')?'tmpg1':""}>

                { 
                props.section.arrParts.map((item, i) => {
                    return (
                        
                        // <div key={i} className={(gt=='b'|| gt=='d') ?`col-md-${12 / props.section.arrParts.length} p-0` : (gt=='a'|| gt=='c'||gt=='e') ?`row-md p-0` :""} style={{clear:'both'}}>
                        //     <Part part={item} indexSection={indexSection} indexPart={i}></Part>
                            
                        // </div>
                        <>
                        {
                            (gt=='b'|| gt=='d')? <>
                            <div key={i} className={`col-md-${12 / props.section.arrParts.length} p-0` }>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='25vh'/>
                            </div> </>
                            :  (gt=='a'|| gt=='c'||gt=='e') ? <>
                            <Grid container direction="row" key={i}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille={gt=='a'?'12vh':(gt=='c'?'9vh':'5vh')}/>
                            </Grid>
                            </> : (gt=='f')? <>
                            <div key={i} className={i==props.section.arrParts.length-1? `col-md-6 p-0`: `col-md-3 p-0`} >
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='25vh' />
                            </div> 
                            </> :
                             (gt=='g')?
                             <>
                           
                             {i==((props.section.arrParts.length-1)/2) ?
                             <>
                            <div key={i} className={`w-100`}/>
                            <div key={i} className={`col-md-${12 / 2} p-0`}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='10vh'/>
                            </div>

                             </>:
                             <>
                            <div key={i} className={`col-md-${12 / 2} p-0`}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='10vh'/>
                            </div>
                             </>
                            }
                             </>
                             : (gt=='h')? <>
                            {(i==3|| i==6 )?
                             <>
                            <div key={i} className={`w-100`}/>
                            <div key={i} className={`col-md-${12 / 3} p-0`}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='8vh'/>
                            </div>

                             </>:
                             <>
                            <div key={i} className={`col-md-${12 / 3} p-0`}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='8vh'/>
                            </div>
                             </>
                            }   
                             </> :(gt=='i')? 
                             <>
                            <div key={i} id={`tm${i}`}>
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='11vh'/>
                            </div>

                            </>
                         
                        :<>
                            <div key={i} id={`tm${i}`} >
                            <Part part={item} indexSection={indexSection} indexPart={i} taille='11vh'/>
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
            removeSection: function (indexSection) {
                dispatch(removeSection(indexSection))
            },
            saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
            setCollapseOpen: function (collapse) { dispatch(setCollapseOpen(collapse)) },
            sectionInEditing: (indexSection) => { dispatch(sectionInEditing(indexSection)) }
        }
    }
)(Section)
