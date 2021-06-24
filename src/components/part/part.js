// import React, { useEffect, useState } from 'react';
// import Element from '../element/element'
// import { connect } from 'react-redux';
// import './part.css'
// import { useDrop } from 'react-dnd';
// import { ItemTypes } from '../../ItemTypes'
// import { addElement,changeMessage,setStylePage } from '../../redux/actions/funnel.action'

// function Part(props) {
//     const { part, flagBorder, indexPart, indexSection, numElement, editMode, addElement,add1 ,changeMessage} = props
//     const [add, setAdd] = useState();
//     // const partStyle = {
//     //     //   backgroundColor:props.part.settings.bgColor,
//     //     height: "100%",
//     // }
//     // if (editMode) { 
//     const [{ canDrop, isOver }, drop] = useDrop({
//         accept: ItemTypes.BOX,
//         drop: () => ({ name: 'drop', indexSection: indexSection, indexPart: indexPart }),///'Drop'
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         }),
//     })
//     //////////אני  יירקתי
//     // useEffect(() => {
//     //     window.addEventListener("message", iframeFunctions, false);
//     // }, [props.message])

//     //////////אני  יירקתי
//     // function iframeFunctions(event) {
//     //     console.log('I am an iframe, I accepted it:', event.data);
//     //     let data = JSON.parse(event.data)
//     //     switch (data.function) {
//     //         case 'add element':
//     //             debugger
//     //             setAdd(data.params)
//     //             console.log(add)
//     //      debugger
//     //             break;
//     //             // case "set style page":
//     //             //     console.log(data.params)
//     //             //     setStylePage(data.params.item, data.params.value)
//     //             //     break;
//     //     }
//     // }

//     const click =
//         () => {
//             console.log({ "indexSection": indexSection })
//             // window.parent.postMessage({ name: 'Drop', indexSection: indexSection, indexPart: indexPart }, "*")
//         }
//     const handleDragEnter = e => {
//         e.preventDefault();
//         e.stopPropagation();
//     };
//     const handleDragLeave = e => {
//         e.preventDefault();
//         e.stopPropagation();
//     };
//     const handleDragOver = e => {
//         e.preventDefault();
//         e.stopPropagation();
//     };
//     const handleDrop = e => {
//         e.preventDefault();
//         e.stopPropagation();
//         console.log("kk")
//         debugger
//         console.log(add, add, indexSection, indexPart, numElement)
//         debugger
//         addElement(add.name, add.value, indexSection, indexPart, numElement)
//         setAdd('')
//         // console.log(add)
//         // changeMessage()
//     };
//     const handleDrop1 = e => {
//         console.log("droppping!!!!!")
//         // setAdd(456)//data.params
//         // debugger
//         e.preventDefault();
//         e.stopPropagation();
//         // debugger
//         console.log(add1, add1, indexSection, indexPart, numElement)
//         // debugger
//         addElement(add1.type, add1, indexSection, indexPart, numElement)
//         // setAdd('')
//         // console.log(add)
//         // changeMessage()
//     };
//     return (
//         <>
//             <div ref={drop} onDrop={e => handleDrop1(e)} onDragOver={e => handleDragOver(e)} //  אני גזרתי
//                 onDragEnter={e => handleDragEnter(e)}
//                 // onDragLeave={e => handleDragLeave(e)} className={`p-2 drop-container  ${flagBorder ? "" : "border_part"}`} style={part.settings.style, { height: '100%' }}>
//                 onDragLeave={e => handleDragLeave(e)} className={flagBorder ? 'border_part' : ''} style={part.settings.style, { height: '100%' }}>
//                 {part.arrElements.length > 0 && part.arrElements.map((item, i) => {
//                     return (
//                         <Element key={i} currentKey={i} element={item} part={indexPart} section={indexSection} id={item.id} ></Element>
//                     )
//                 }) ||
//                     <> <div>{editMode && <p className="text-center m-3">ADD ELEMENTS</p>}</div></>}
//             </div>
//         </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             flagBorder: state.funnel.borderPart,
//             editMode: state.funnel.editMode, 
//              message: state.funnel.message,
//              numElement: state.funnel.jsonPage.num_elements,
//              urlPage: state.funnel.urlPage,
//              nameUser: state.user.userName,
//              nameFunnel: state.funnel.name,
//             jsonPage: state.funnel.jsonPage,
//             add1:state.funnel.newElementTypeAndValue,
//         }
//     }, (dispatch) => {
//         return {
//             setStylePage: (property, newValue) => { dispatch(setStylePage({ property: property, value: newValue })) },
//             changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
//             addElement: function (newElement, value, section, part, numElement) {
//                 dispatch(addElement({
//                     type: newElement, value:
//                         value, section: section, part: part, id: numElement
//                 }))
//             },
//         }
//     },
// )(Part)



import React, { useEffect, useState } from 'react';
import Element from '../element/element'
import { connect } from 'react-redux';
import './part.css'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes'
import { addElement,changeMessage,setStylePage } from '../../redux/actions/funnel.action'

function Part(props) {
    const { part, flagBorder, indexPart, indexSection, numElement, editMode, addElement,add1 ,changeMessage} = props
    const [add, setAdd] = useState();
    // const partStyle = {
    //     //   backgroundColor:props.part.settings.bgColor,
    //     height: "100%",
    // }
    // if (editMode) { 
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'drop', indexSection: indexSection, indexPart: indexPart }),///'Drop'
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
 
    const click =
        () => {
            console.log({ "indexSection": indexSection })
            // window.parent.postMessage({ name: 'Drop', indexSection: indexSection, indexPart: indexPart }, "*")
        }
    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log("kk")
        debugger
        console.log(add, add, indexSection, indexPart, numElement)
        debugger
        console.log(indexPart)

        addElement(add.name, add, indexSection, indexPart, numElement)
        setAdd('')
        // console.log(add)
        // changeMessage()
    };
    const handleDrop1 = e => {
        console.log("droppping!!!!!")
        // setAdd(456)//data.params
        // debugger
        e.preventDefault();
        e.stopPropagation();
        console.log(add1)
       // console.log(add1.type)
        // debugger
        console.log(indexPart)

        console.log(add1.type, add1, indexSection, indexPart, numElement)
        // debugger
        addElement(add1.type, add1, indexSection, indexPart, numElement)
        // setAdd('')
        // console.log(add)
        // changeMessage()
    };
    return (
        <>
            <div ref={drop} onDrop={e => handleDrop1(e)} onDragOver={e => handleDragOver(e)} //  אני גזרתי
                onDragEnter={e => handleDragEnter(e)}
                // onDragLeave={e => handleDragLeave(e)} className={`p-2 drop-container  ${flagBorder ? "" : "border_part"}`} style={part.settings.style, { height: '100%' }}>
                onDragLeave={e => handleDragLeave(e)} className={flagBorder ? 'border_part' : ''} style={part.settings.style,{ height: '100%' ,width:'100%' }}>
                {part.arrElements.length > 0 && part.arrElements.map((item, i) => {
                    return (
                        <Element key={i} currentKey={i} element={item} part={indexPart} section={indexSection} id={item.id} ></Element>
                    )
                }) ||
                // justify-content-center
                    <> <div>{editMode && <p className="text-center m-3 " style={{ width:'100%',height:props.taille}}>ADD ELEMENTS</p>}</div></>}
            </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
            flagBorder: state.funnel.borderPart,
            editMode: state.funnel.editMode, 
             message: state.funnel.message,
             numElement: state.funnel.jsonPage.num_elements,
             urlPage: state.funnel.urlPage,
             nameUser: state.user.userName,
             nameFunnel: state.funnel.name,
            jsonPage: state.funnel.jsonPage,
            add1:state.funnel.newElementTypeAndValue,
        }
    }, (dispatch) => {
        return {
            setStylePage: (property, newValue) => { dispatch(setStylePage({ property: property, value: newValue })) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            addElement: function (newElement, value, section, part, numElement) {
                dispatch(addElement({type: newElement, value:value, section: section, part: part, id: numElement
                }))
            },
        }
    },
)(Part)
