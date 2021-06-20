// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import './stage.css'
// import Loading from '../loading/loading'
// import Section from '../section/section'
// import { chageEditMode, setJsonPage, setOrderSection, addSection, setNamePage, setStylePage, setStyleSection, setFlagBorderParts } from '../../redux/actions/funnel.action'
// import $ from "jquery";
// import 'jquery-ui-bundle';
// // import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';

// function Stage(props) {
//     const { jsonPage, edit, chageEditMode, setJsonPage, addSection, editMode, iframe, setOrderSection, setFlagBorderParts, loading, numSections, urlPage, nameUser, nameFunnel, saveInLocalStorage, setStylePage, setStyleSection, setNamePage } = props;
//     const [flag, setFlag] = useState(true);
//     useEffect(() => {
//         chageEditMode(edit)
//         if (!editMode && flag) {
//             setFlag(false)
//             let json = localStorage.getItem("json")
//             console.log(JSON.parse(json))
//             setJsonPage(JSON.parse(json))
//         }
//     }) 
//     // $("#sortable").sortable({
//     //     stop: function (event, ui) {
//     //         var prev = $(ui.item).prev('div.ui-state-default').attr('data-id');
//     //         var next = $(ui.item).next('div.ui-state-default').attr('section-id');
//     //         console.log('prev = '+prev+ ' '+$(ui.item).attr('data-id')+' next = '+next);
//     //         setOrderSection(next,$(ui.item).attr('section-id'))
//     //     }
//     // })

//     // useEffect(() => {
//     // debugger
//     //     window.addEventListener("message", iframeFunctions, false);
//     // }, [props.message])

// //////////אני  יירקתי
//     // function iframeFunctions(event) {
//     //     console.log('I am an iframe, I accepted it:', event.data);
//     //     console.log("11111111111111111")
//     //     saveInLocalStorage();
//     //     let data = JSON.parse(event.data)
//     //     // console.log(data.params)
//     //     debugger
//     //     switch (data.function) {
//     //         case 'add section':
//     //             console.log(numSections)
//     //             addSection(data.params, numSections)
//     //             break;
//     //         case "set name page":
//     //             console.log(data.params)
//     //             setNamePage(data.params)
//     //             break;
//     //         case "set style page":
//     //             console.log(data.params)
//     //             setStylePage(data.params.property, data.params.value)
//     //             break;
//     //         case "set style of section":
//     //             debugger
//     //             console.log(data.params)
//     //             setStyleSection(data.params)
//     //             break;
//     //         case "set show grid":
//     //             debugger
//     //             setFlagBorderParts(data.params)
//     //             break;
//     //     }
//     // }
//     const pageStyle = {
//         // color:jsonPage.settings.color,
//         // backgroundColor:jsonPage.settings.bgColor
//     }

//     return (
//         <>
//             {loading ? <Loading></Loading> :
//                 <div id="stage" className={editMode ? "col-md-9 d-flex p-0 m-auto " : "col-md-12 d-flex p-0 "}
//                    style={{border:0,width:"100%",height:"100%"}}
//                 >
//                     <div id="landingPage_edit" className={editMode ? "m-auto border_page " : "col-md-12 "} style={{backgroundImage:"blob:http://localhost:3000/8c11b757-3bf4-49ca-90bb-44f1dd1348d1"}}>
//                     {/* jsonPage.settings.style */}
//                         <div id='sortable'></div>
//                         {jsonPage.arrSections.length == 0 && < div className=" d-flex justify-content-center ">
//                             {/* <img className="image" src="https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg" style={{resizeMode:'contain'}} /> */}
//                             <h2 id="whenIsEmpty" className="col-md-9 mt-5 p-4">Drag an element into content</h2>
//                         </div>
//                         }
//                         {props.jsonPage.arrSections.map((item, i) => {
//                             return (
//                                 <div key={i} className="ui-state-default" section-id={item.id} data-id={i}>
//                                     <Section section={item} indexSection={i}></Section>
//                                     </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//                 }
//         </>
//     )
    
// }
// export default connect(
//     (state) => {
//         return {
//             jsonPage: state.funnel.jsonPage,
//             editMode: state.funnel.editMode,
//             loading: state.funnel.loading,
//             numSections: state.funnel.jsonPage.num_sections,
//             urlPage: state.funnel.urlPage,
//             nameUser: state.user.userName,
//             nameFunnel: state.funnel.name,
//             // message: state.funnel.message
//         }
//     },
//     (dispatch) => {
//         return {
//             changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
//             saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
//             addSection: (newSection, id) => { dispatch(addSection(newSection, id)) },
//             setJsonPage: (json) => { dispatch(setJsonPage(json)) },
//             chageEditMode: (edit) => { dispatch(chageEditMode(edit)) },
//             setOrderSection: (newI, oldI) => { dispatch(setOrderSection(newI, oldI)) },
//             setNamePage: (newName) => { dispatch(setNamePage(newName)) },
//             setStylePage: (property, newValue) => { dispatch(setStylePage({ property: property, value: newValue })) },
//             setStyleSection: (obj) => { dispatch(setStyleSection(obj)) },
//             setFlagBorderParts: (flag) => { dispatch(setFlagBorderParts(flag)) }
//         }
//     }
// )(Stage)


import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './stage.css'
import Loading from '../loading/loading'
import Section from '../section/section'
import { chageEditMode, setJsonPage, setOrderSection, addSection, setNamePage, setStylePage, setStyleSection, setFlagBorderParts } from '../../redux/actions/funnel.action'
import $ from "jquery";
import 'jquery-ui-bundle';

// import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';

function Stage(props) {
    const { jsonPage, edit, chageEditMode, setJsonPage, addSection, editMode, iframe, setOrderSection, setFlagBorderParts, loading, numSections, urlPage, nameUser, nameFunnel, saveInLocalStorage, setStylePage, setStyleSection, setNamePage } = props;
    const [flag, setFlag] = useState(true);
    const [aaa, setaaa] = useState(true)
    useEffect(() => {
        chageEditMode(edit)
        if (!editMode && flag) {
            setFlag(false)
            let json = localStorage.getItem("json")
            console.log(JSON.parse(json))
            setJsonPage(JSON.parse(json))
        }
    })
    // $("#sortable").sortable({
    //     stop: function (event, ui) {
    //         var prev = $(ui.item).prev('div.ui-state-default').attr('data-id');
    //         var next = $(ui.item).next('div.ui-state-default').attr('section-id');
    //         console.log('prev = '+prev+ ' '+$(ui.item).attr('data-id')+' next = '+next);
    //         setOrderSection(next,$(ui.item).attr('section-id'))
    //     }
    // })

    // useEffect(() => {
    // debugger
    //     window.addEventListener("message", iframeFunctions, false);
    // }, [props.message])

//////////אני  יירקתי
    // function iframeFunctions(event) {
    //     console.log('I am an iframe, I accepted it:', event.data);
    //     console.log("11111111111111111")
    //     saveInLocalStorage();
    //     let data = JSON.parse(event.data)
    //     // console.log(data.params)
    //     debugger
    //     switch (data.function) {
    //         case 'add section':
    //             console.log(numSections)
    //             addSection(data.params, numSections)
    //             break;
    //         case "set name page":
    //             console.log(data.params)
    //             setNamePage(data.params)
    //             break;
    //         case "set style page":
    //             console.log(data.params)
    //             setStylePage(data.params.property, data.params.value)
    //             break;
    //         case "set style of section":
    //             debugger
    //             console.log(data.params)
    //             setStyleSection(data.params)
    //             break;
    //         case "set show grid":
    //             debugger
    //             setFlagBorderParts(data.params)
    //             break;
    //     }
    // }
    const pageStyle = {
        // color:jsonPage.settings.color,
        // backgroundColor:jsonPage.settings.bgColor
    }

    return (
        <>
            {loading ? <Loading></Loading> :
                <div id="stage" className={editMode ? "col-md-9 d-flex p-0 m-auto " : "col-md-12 d-flex p-0 "}
                style={{border:0,width:"70%",height:"70%"}}
                onClick={()=>setaaa(false)}                >
                    <div id="landingPage_edit" className={editMode ? "m-auto border_page " : "col-md-12 "} style={{height:'100%',marginBottom:'5px', backgroundImage:"blob:http://localhost:3000/8c11b757-3bf4-49ca-90bb-44f1dd1348d1"}}>
                    {/* jsonPage.settings.style */}
                        <div id='sortable'></div>
                        {jsonPage.arrSections.length == 0 && < div className=" d-flex justify-content-center " style={{height:'100%'}}>
                            {/* <img className="image" src="https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg" style={{resizeMode:'contain'}} /> */}
                            <h2 id="whenIsEmpty" className="col-md-9 mt-5 p-4">Drag an element into content</h2>
                        </div>
                        }
                        {props.jsonPage.arrSections.map((item, i) => {
                            return (
                                <div key={i} className="ui-state-default" section-id={item.id} data-id={i}>
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
            nameFunnel: state.funnel.name,
            // message: state.funnel.message
        }
    },
    (dispatch) => {
        return {
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
            addSection: (newSection, id) => { dispatch(addSection(newSection, id)) },
            setJsonPage: (json) => { dispatch(setJsonPage(json)) },
            chageEditMode: (edit) => { dispatch(chageEditMode(edit)) },
            setOrderSection: (newI, oldI) => { dispatch(setOrderSection(newI, oldI)) },
            setNamePage: (newName) => { dispatch(setNamePage(newName)) },
            setStylePage: (property, newValue) => { dispatch(setStylePage({ property: property, value: newValue })) },
            setStyleSection: (obj) => { dispatch(setStyleSection(obj)) },
            setFlagBorderParts: (flag) => { dispatch(setFlagBorderParts(flag)) }
        }
    }
)(Stage)

