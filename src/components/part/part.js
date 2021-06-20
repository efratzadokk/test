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
    const { part, flagBorder, indexPart, indexSection,posY, numElement, editMode, addElement,add1 ,changeMessage} = props
    const [add, setAdd] = useState();
    const [name, setName] = useState()

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'drop', indexSection: indexSection, indexPart: indexPart,posY:posY}),///'Drop'
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        end: async (item, monitor) => {
            debugger
            const offset = monitor.getClientOffset();
            console.log("Part offset: ",offset)
        }
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
        console.log(add, add, indexSection, indexPart, numElement,)
        debugger
        console.log(indexPart)
console.log("I am!!!")
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
console.log("posY:::",posY)
        console.log(add1.type, add1, indexSection, indexPart, numElement)
        // debugger
console.log("I am!!!")

        addElement(add1.type, add1, indexSection, indexPart, numElement)
        // setAdd('')
        // console.log(add)
        // changeMessage()
    };
    // const findMe=(myname)=>{
    //     debugger
    //     let obj = valueWidget.find(x => x.type === myname.toLowerCase());
    //    // console.log(obj)
    //     let index = valueWidget.indexOf(obj);
    //    // console.log(index)
    //   const tmp= valueWidget[index]
    //   console.log(tmp)
    // return tmp

    // }

    
    // const [{ isDragging }, drag] = useDrag({
        
    //     item: { name: props.name, type: ItemTypes.BOX },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     }),
    //     end: async (item, monitor) => {
    //         //////////////
    //         debugger
    //         const dropResult = monitor.getDropResult();
    //         if (item && dropResult) {
    //             console.log(settings);
    //             setName(item.name)
    //             if (indexPart === dropResult.indexPart && indexSection === dropResult.indexSection)
    //             { debugger
    //                 props.addElement(name, findMe(props.name), indexSection, indexPart, numElement)
    //             }
    //                 else {
    //                 setIndexPart(dropResult.indexPart)
    //                 setIndexSection(dropResult.indexSection)
    //                 setChangePosition(!changePosition)
    //             }
    //         }
    //         ////////////////
    //     }
    // })

//     useEffect(() => {
//         debugger
//        // setSettings({tamar:"cohjkds"});
//        // window.addEventListener("message", iframeFunctions, false);
//        if (name) {

//            props.addElement(name, findMe(props.name), indexSection, indexPart, numElement)
//           // props.addElement(props.name, valueWidget[props.name], indexSection, indexPart, numElement)

//        }
//        // console.log('dd', settings)
//    }, [changePosition])

//    const drag1 = (event) => {

//     debugger
// console.log("dragging!!!!")
// event.stopPropagation();
// event.preventDefault();
// // let x =1
// // x=JSON.stringify(event.target)
// // event.dataTransfer.setData("text", x);
// // event.originalEvent.dataTransfer.setData("foo",x)
// event.dataTransfer.dropEffect = 'move';
// debugger
// addElement1(props.name, findMe(props.name))
// //   addElement1(props.name, valueWidget[props.name])

// }
    return (
        <>
            <div ref={drop} className="droppable" onDrop={e => handleDrop1(e)} onDragOver={e => handleDragOver(e)} //  אני גזרתי
                onDragEnter={e => handleDragEnter(e)}
                // onDragLeave={e => handleDragLeave(e)} className={`p-2 drop-container  ${flagBorder ? "" : "border_part"}`} style={part.settings.style, { height: '100%' }}>
                onDragLeave={e => handleDragLeave(e)} className={flagBorder ? 'border_part' : ''} style={part.settings.style, { height: '100%' ,width:'100%' }}>
                {part.arrElements.length > 0 && part.arrElements.map((item, i) => {
                    return (
                        // <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
           
                        <Element key={i} currentKey={i} element={item} part={indexPart} section={indexSection} id={item.id} ></Element>
                    // </div>
                    )
                }) ||
                    <> <div>{editMode && <p className="text-center m-3">ADD ELEMENTS</p>}</div></>}
            </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
            posElement:state.funnel.posElement,
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
