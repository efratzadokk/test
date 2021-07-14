
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './element.css'
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes'
import EelementEditButtons from '../elementsEditButtons/elementEditButtons'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import ImageUploader from '../image/image';
import $ from "jquery";
import VideoUploader from '../video/video';
import Parser from 'html-react-parser';
import Slider from '../slider/slider'
import SelectIcon from '../SelectIcon/SelectIcon'
import Shares from '../sharing/sharing'
//import Spacer from '../spacer/spacer'
// import Spacer from 'react-spacer'
import Spacer from 'react-spacer'
import Form from '../Form/Form'
import {actions} from '../../redux/actions/funnel-try.action'

function Element(props) {
    const { newElementTypeAndValue ,images, elementInEditing,removeElement, currentKey, element, editMode, section, part, id, setCollapseOpen, jsonPage,saveInLocalStorage } = props
    const [name, setName] = useState()

    const myTitle = useRef()
    const titre = myTitle
    const myTxt = useRef()
    const monTxt = myTxt
    const mytxtarea=useRef()
    
    const mafunc2=()=>{
        props.mafunc2(element.id)
    }

    useEffect(mafunc2,[mytxtarea])
    
    const mafunc = () => {
        props.mafunc(element.id)
    }

    useEffect(mafunc, [titre, monTxt])

    const drag1 = (event) => {
        console.log("dragging!!!!")
        event.stopPropagation();
        event.preventDefault();
        debugger
        event.dataTransfer.dropEffect = 'move';
        // movingElement(id)
        // addElement1(props.name, valueWidget[props.name])
      }

     


    const setValue = (newValue) => {
         debugger
   

      console.log(newValue)
    //   console.log(Parser(newValue))
    //   console.log(Parser(newValue).props.children)
        console.log(currentKey);
        console.log(id)
       // props.setValueElement(Parser(newValue).props.children)
        props.setValueElement(newValue)

    }
    // function onInputText(e) {
    //     e.currentTarget
    //         .width(300)
    //         .height(50)
    //         .width(this.scrollWidth)
    //         .height(this.scrollHeight)
    //     elementInEditing(id)
    // }
    function onEnterElement() {
      //  debugger
        // console.log(e)
        // console.log(e.target.value)
        console.log(id)
        //setCollapseOpen('element',id)
       // setCollapseOpen(id)
       setCollapseOpen( 'element',id)

        elementInEditing(id)
        props.setMonIndex(1)

    }

    // const hlps=(val)=>{
    //     debugger 
    //     console.log(val)
    //     setValueElement(val)
    //     // addElement1(e,val)
        

    //   }
    function moi(a)
    {
        debugger
        console.log(a)
        const textareas = document.querySelector(`#${a}`);
        textareas.style.height ='inherit'
        textareas.style.height= textareas.scrollHeight+'px'
    }
    
    function delpart (id)
    {
        debugger
        let calcheight=0
        console.log(part)
       // console.log(props.myId)
        let b =JSON.parse(localStorage.getItem(`${props.leid}`))
        let d=part
        let secc=b[d]
        switch(element.type)
        {
            case 'Title': { calcheight=104 }break; 
            case 'Paragraph': {calcheight=80 } break
            case 'Image' : { calcheight=350 } break
            case 'Gallery' : { calcheight=180 } break
            case 'Video' : { calcheight=280 } break
            case 'Form' : { calcheight=350 } break
            case 'Html' : { calcheight=114 } break
            case 'Button' : { calcheight=79 } break
            case 'Icon' : { calcheight=60 } break
            case 'Spacer' : { calcheight=45 } break
            case 'Sharing' : { calcheight=67 } break
            default : { calcheight=0 } break
        }
        let h=secc.myHeight
        
        if(h-calcheight<=0)
        {
            console.log(b)
           // b.splice(d, 1)
           // console.log(b)
            delete b[d]
            console.log(b)
            localStorage.setItem((props.leid), JSON.stringify(b))
        }
        else{
            secc= {isBigger:true, myHeight:(h-calcheight)}
            b[d]=secc
            localStorage.setItem((props.leid), JSON.stringify(b))
        }

       

        
        
    }
        switch (element.type)
     {
        case "Title":
            return (
                <>
                    {/* <div dangerouslySetInnerHTML={{__html:element.value}}/>
              {   Parser(element.value)} */}
                    <div   ref={myTitle}>
                        {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}  onClick={() => onEnterElement()}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                create
                </span> */}
                            </div>}


                            <textarea
                            ref={mytxtarea}
                                //id="widgEditor" 
                                className="montitre" type="text"
                                id={`montxtarea${element.id}`}
                                //  onFocus={() => onEnterElement()}
                                //quil-------------------------
                                //    readOnly={!editMode}
                                //    bounds={$("#textarea")[0]}
                                //    theme="bubble"
                                //    modules={{

                                //     toolbar: [
                                //         [{ 'header': [1, 2, 3, false] }, { 'size': [] }],
                                //         ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }, { 'font': [] }],
                                //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
                                //         ['link'],
                                //         ['clean']
                                //     ]
                                //     /* ... other modules */
                                //    }}
                                //-----------------------------
                                // value={element.value}

                                // id=`montxtarea`
                                onFocus={() => {moi(`montxtarea${element.id}`) }}
                                value={element.value}
                                onChange={(e) => { setValue(e.target.value); moi(`montxtarea${element.id}`) }}
                                placeholder='add here your title'
                                style={{
                                    textAlign: element.textAlign,

                                    maxHeight: "none",
                                    minHeight: "none",
                                    border: 'none',
                                    width: "100%",
                                    outline: "none",
                                    height: "10vh",
                                    fontSize: element.fontSize + 'px',
                                    fontWeight: 'bold',
                                    color: element.color,
                                    fontFamily: element.fontFamily,
                                    verticalAlign: 'middle',
                                   
                                    padding: '15px 0'


                                }}

                            ></textarea >



                        </div>
                    </div>


                </>
            )
        case "Paragraph":
            return (
                <>

                    <div  id={element.id} ref={monTxt}>
                        {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}  onClick={() => onEnterElement()}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
            create
            </span> */}
                            </div>}
                            {/* <textarea onChange={e=>hlps(element.type, e.target.value)} > {newElementTypeAndValue.value}</textarea>  */}

                            <textarea className="montitre" type="text"  id={`montxtarea${element.id}`}
                                onFocus={() => {moi(`montxtarea${element.id}`) }}
                                value={element.value}
                                onChange={(e) => { setValue(e.target.value); moi(`montxtarea${element.id}`) }}
                                // onFocus={() => onEnterElement()}
                                // value={element.value}

                                // onChange={(e) => { debugger; setValue(e.target.value) }}
                                //value={}
                                placeholder='enter your paragraph'
                                style={{
                                    maxHeight: "none",
                                    minHeight: "none",
                                    border: 'none',
                                    width: "100%",
                                    height: "16vh",
                                    textAlign: element.textAlign,
                                    color: element.color,
                                    fontSize: element.fontSize + 'px',
                                    fontFamily: element.fontFamily,




                                }}
                            ></textarea>




                        </div></div>
                </>



            )
        case "Image":
          //  debugger
            //   return (
            return (
                <div style={{ backgroundColor: 'transparent',height:'95%'}}
                //  ref={myImage}
                >
                    <div className={editMode && "hoverToEdit pointer"} style={{ height: '100%' }} id={`allmyelem${element.id}`}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                delete
                            </span>

                        </div>}
                        <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
                            // onFocus={() => setCollapseOpen('element')}
                            onClick={() => onEnterElement()}
                            style={{ height: '100%' }}>
                            <ImageUploader element={element} onDrag={e => drag1(e)} draggable="true" taille={props.taille} ></ImageUploader>
                        </div>
                    </div>
                </div>
            )



        case "Gallery":
           // debugger
            return (
                <>

                    <div id={element.id}
                    //  ref={myGalery}
                    >
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => 
                            
                            ('section')} >
                        create
                        </span> */}
                            </div>}
                            <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement '}
                                // onFocus={() => setCollapseOpen('element')}
                                onClick={() => onEnterElement()}>

                                {/* {element.value && <div onClick={() => onEnterElement()}
                                className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2">
                                <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
                                    panorama
                                 </span>
                                <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
                            </div>
                            } */}
                            <Slider element={element} elementId={element.id} onDrag={e => drag1(e)} draggable="true"  ></Slider>
                       
                        </div>
                        {/* <img style={{ width: '30%' }} src={element.value}></img> */}
                    </div></div>
                    </>
                )


        case 'Video':

            return (
                <div 
                // ref={myVideo}
                >
                    <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                delete
                            </span>
                            {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                        create
                        </span> */}
                        </div>}

                        <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
                            // onFocus={() => setCollapseOpen('element')}
                            onClick={() => onEnterElement()}>
                            {/* {element.value && <div onClick={() => onEnterElement()}
                                className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2">
                                <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
                                    panorama
                                 </span>
                                <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
                            </div>
                            } */}
                            <VideoUploader element={element} />

                            {/* </VideoUploader> */}
                        </div>
                        {/* <img style={{ width: '30%' }} src={element.value}></img> */}
                    </div>
                </div>
            )



        case 'Form':
            return (
                <>
                    <div id={element.id} 
                    // ref={myForm}
                    >
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                <span class="material-icons" style={{ zIndex: 4, fontSize: '1.2rem' }} onClick={() => setCollapseOpen('section')} >
                                    create
                                </span>
                            </div>}
                            {element.value ? <><Form></Form></> //<iframe onClick={() => onEnterElement()} width="100%" height="315" src={element.value} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                :
                                <div onClick={() => onEnterElement()} className="d-flex flex-column align-items-center justify-content-center m-2 divEmptyElement"
                                > <span class="material-icons" style={{ fontSize: '5rem' }}>
                                        description
                                    </span>
                                    <p className="m-0 text-center">Add Url Form</p>
                                </div>}
                        </div> </div>
                </>
            )


        case 'Html':
            return (
                <>
                    <div id={element.id}
                    //  ref={myHtml}
                     >
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`} >
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                    create
                    </span> */}
                            </div>}
                            <div onClick={() => onEnterElement()} className="pl-4 p-4">
                                {element.value ? <div dangerouslySetInnerHTML={{ __html: element.value }} className='myHtmlClass' style={{ fontFamily: element.fontFamily }} placeholder="Html Code"
                                    onChange={(e) => { setValue(e.target.value) }} value={element.value}
                                />
                                    :
                                    <p>ADD HTML CODE</p>}
                            </div></div>
                    </div></>
            )
        case 'Button':
            return (
                <>
                    <div id={element.id} 
                    // ref={myButton}
                    >
                        <div className={editMode && "hoverToEdit pointer"}id={`allmyelem${element.id}`} >
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>
                                {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                    create
                    </span> */}
                            </div>}
                            <div className='d-flex' style={{ textAlign: element.textAlign }}>
                                <a target="_blank" className='col-10 m-auto' href={editMode ? null : element.href ? element.href : null}>
                                    <button type='button' onClick={() => onEnterElement()} onChange={(e) => { debugger; setValue(e.target.value) }}
                                        style={{
                                            border: 'none',
                                            width: element.width + "%",
                                            height: "10vh",
                                            // textAlign: element.textAlign,
                                            color: element.color,
                                            fontSize: element.fontSize + 'px',
                                            //fontFamily:element.fontFamily,
                                            backgroundColor: element.backgroundColor,
                                            borderRadius: element.borderRadius + 'px',
                                            placeholder: 'button'
                                        }}>
                                        {element.value}

                                    </button></a>
                            </div></div>
                    </div> </>
            )

        case 'Icon':


            return (
                <>
                    <div id={element.id}
                    //  ref={myIcon}
                    >
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>

                            </div>
                            }
                            <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'} onClick={() => onEnterElement()} >
                                {/* <div className='monIconClass' style={{width:'100%', height:'100%' , textAlign:''}} > */}
                                <SelectIcon element={element} onDrag={e => drag1(e)} draggable="true" style={{ alignItem: 'center' }} />

                            </div>
                            {/* </div> */}
                        </div>
                    </div></>
            );

        case 'Spacer':


            return (
                <>
                    <div id={element.id} 
                    // ref={mySpacer}
                    >
                        <div className={editMode && "hoverToEdit pointer "} style={{ marginTop: '0px', marginBottom: '0px', height: '100%' }}  id={`allmyelem${element.id}`}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>

                            </div>}
                            <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
                                onClick={() => onEnterElement()}
                                style={{ height: element.height, backgroundColor: element.color }}
                            //  style={{marginTop:'0px' , marginBotton:'0px' }}
                            >
                                {/* <Spacer  element={element} /> */}
                                <Spacer width='100%' height={element.height + 'vh'} />



                                {/* </Spacer> */}
                                {/* <Spacer element={element} onDrag={e => drag1(e)} draggable="true"/> */}
                            </div></div>
                    </div></>
            );

        case 'Sharing':
            return (
                <>
                    <div id={element.id} 
                    // ref={mySharing}
                    >
                        <div className={editMode && "hoverToEdit pointer"} id={`allmyelem${element.id}`}>
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => {removeElement(id);delpart(id)}}>
                                    delete
                                </span>

                            </div>
                            }
                            <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'} onClick={() => onEnterElement()} >
                                {/* <div className='monIconClass' style={{width:'100%', height:'100%' , textAlign:''}} > */}
                                <Shares element={element} onDrag={e => drag1(e)} draggable="true" style={{ alignItem: 'center' }} />
                                {/* <Shares/> */}


                            </div>
                            {/* </div> */}
                        </div>
                    </div></>
                // <>
                // <Shares/>
                // </>
            )
        default:
            break;
    }
}
export default connect(
    (state) => {
        return {
            editMode: state.funnel.editMode,
            jsonPage: state.funnel.jsonPage,
            images:state.funnel.elementInEditing
          //  newElementTypeAndValue:state.funnel.newElementTypeAndValue,
            // elementInEditing:state.funnel.elementInEditing
        }
    }
    ,
    (dispatch) => {
        return {
            saveInLocalStorage: () => { dispatch(actions.saveInLocalStorage()) },
            setValueElement: (newValue) => { dispatch(actions.setValueElement({ value: newValue })) },
            moveElementInPart:  (dragIndex, hoverIndex)=> { dispatch(actions.moveElementInPart({ dragIndex: dragIndex, hoverIndex: hoverIndex })) },
            removeElement:  (id) =>{ dispatch(actions.removeElement({ id: id })) },
            elementInEditing:  (id) =>{ dispatch(actions.elementInEditing({ id: id })) },
            setCollapseOpen: (collapse,id)=>{dispatch(actions.setCollapseOpen({collapse: collapse,id:id})) },
            setMonIndex: (idx)=>{dispatch(actions.setMonIndex(idx))},

        }
    }
)(Element)



