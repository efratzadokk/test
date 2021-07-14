

import React, { useEffect, useState } from 'react';
import Element from '../element/element'
import { connect } from 'react-redux';
import './part.css'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes'
import {actions} from '../../redux/actions/funnel-try.action'
function Part(props) {
    const { part, flagBorder, indexPart, indexSection, numElement, editMode, addElement, add1 } = props
    const [add, setAdd] = useState();

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
     
    };

     
    const handleDrop1 = e => {

    let newheit
    let calcheight=0
    let istrue=true
        console.log("droppping!!!!!")
         debugger
        e.preventDefault();
        e.stopPropagation();
        console.log(props.leid)
        console.log(indexPart)
        console.log(add1.type, add1, indexSection, indexPart, numElement)

        let elem2 = document.querySelector(`#mypart${indexSection}`);
        console.log(elem2)
        let rect2 = elem2.getBoundingClientRect().height;
        console.log(rect2)
       

        switch(add1.type)
        {
            case 'Title': { calcheight=104 }break; 
            case 'Paragraph': {calcheight=80 } break
            case 'Image' : { calcheight=350 } break
            case 'Gallery' : { calcheight=180 } break
            case 'Video' : { calcheight=280 } break
            case 'Form' : { calcheight=350 } break
            case 'Html' : { calcheight=114 } break
            case 'Button' : { calcheight=79 } break
            case 'Emoji' : { calcheight=60 } break
            case 'Spacer' : { calcheight=45 } break
            case 'Sharing' : { calcheight=67 } break
            case 'Logo': { calcheight=70 }break; 
            default : { calcheight=0 } break
        }
    console.log(calcheight)
    
        if (localStorage.getItem(`${props.leid}`) == null)
        {
                let pname=indexPart
                newheit={sectionId:`${props.leid}`,height:rect2}
                newheit[pname]={isBigger:istrue,myHeight:calcheight}
                console.log(newheit)
                localStorage.setItem(props.leid, JSON.stringify(newheit))
                addElement(add1.type, add1, indexSection, indexPart, numElement)

        }
        else{
            let b =JSON.parse(localStorage.getItem(`${props.leid}`))
            let d=indexPart
            let secc=b[d]
            console.log(b)
            console.log(secc)
            if (secc== null)
            {
                newheit=b
                newheit[d]={isBigger:istrue,myHeight:calcheight}

                console.log(newheit)
                localStorage.setItem(props.leid, JSON.stringify(newheit))
                addElement(add1.type, add1, indexSection, indexPart, numElement)
            }
            else
            {
                if(calcheight+secc.myHeight<=b.height)
                {
                    let newvalue={isBigger:istrue, myHeight:(secc.myHeight+calcheight)}
                    b[d]=newvalue
                    localStorage.setItem(props.leid, JSON.stringify(b))
                    addElement(add1.type, add1, indexSection, indexPart, numElement)        
                }
                else{
                    console.log('i have no place')
                    
                    let newmyvalue={sectionId:`${props.leid+1}`,height:rect2}
                    newmyvalue[indexPart]={isBigger:istrue,myHeight:calcheight}
                    console.log(props.nums)
                    localStorage.setItem((props.nums), JSON.stringify(newmyvalue))
                    props.addNewGrid(props.nPart,props.gt,indexSection+1)
                    addElement(add1.type, add1, indexSection+1, indexPart, numElement)
                 
                }
            }
        }

        

    };

    const mafunc = (x) => {
        debugger
        let elem = document.querySelector(`#allmyelem${x}`);
        if (elem.children[1].getAttribute('id')) {
            let a = elem.children[1].getAttribute('id')
            const textareas = document.querySelector(`#${a}`);
            console.log(textareas)

            textareas.style.height = 'inherit'
            textareas.style.height = textareas.scrollHeight + 'px'
        }

        }

        const mafunc2=(x)=>{

        }

    return (
        <>
            <div ref={drop} onDrop={e => handleDrop1(e)} onDragOver={e => handleDragOver(e)} //  אני גזרתי
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)} className={flagBorder ? 'border_part' : ''} style={part.settings.style, { height:"100%", width: '100%'}}>
                {part.arrElements.length > 0 && part.arrElements.map((item, i) => {
                    return (
                        <Element key={i} currentKey={i} element={item} part={indexPart} section={indexSection} id={item.id} taille={props.taille} mafunc={mafunc} mafunc2={mafunc2} leid={props.leid}></Element>
                    )
                }) ||
                    <> <div className="d-flex flex-column align-items-center justify-content-center" style={{ alignItems: 'center', width: '100%', 
                  height:'100%'
                    
                    }}>{editMode && <p style={{ color: 'gray', marginTop: '4%' }}>DRAG & DROP ELEMENTS</p>}</div></>}
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
            add1: state.funnel.newElementTypeAndValue,
        }
    }, (dispatch) => {
        return {
            setStylePage: (property, newValue) => { dispatch(actions.setStylePage({ property: property, value: newValue })) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            addElement: function (newElement, value, section, part, numElement) {
                dispatch(actions.addElement({
                    type: newElement, value: value, section: section, part: part, id: numElement
                }))
            },
        }
    },
)(Part)
