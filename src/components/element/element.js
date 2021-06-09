
// import SelectIcon from '../SelectIcon/SelectIcon';
// import Spacer from '../spacer/spacer';
// import Form from '../Form/Form';
// import Gallery from '../image_gallery/imageGallery';

// import React, { useEffect, useState, useRef } from 'react';
// import Grid from '@material-ui/core/Grid';

// import { connect } from 'react-redux';
// import './element.css'
// import { useDrag, useDrop } from 'react-dnd';
// import { setValueElement, moveElementInPart, removeElement, elementInEditing, setCollapseOpen } from '../../redux/actions/funnel.action'
// import { ItemTypes } from '../../ItemTypes'
// import EelementEditButtons from '../elementsEditButtons/elementEditButtons'
// import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';
// import EditText from '../editText/editText';
// import ImageUploader from '../image/image';
// import $ from "jquery";
// import VideoUploader from '../video/video';
// // import { useDrag } from 'react-dnd'
// // import { ItemTypes } from '../../ItemTypes'
// // import Parser from 'html-react-parser';
// // import PanoramaIcon from '@material-ui/icons/Panorama';
// // import Icon from '@material-ui/core/Icon';

// function Element(props) {
//     const { elementInEditing, removeElement, currentKey, element, editMode, section, part, id, setCollapseOpen, jsonPage,saveInLocalStorage } = props
//     const [name, setName] = useState()
    
//     // let id='qq'
//     // const ref = React.createRef();

//     //////////אני  יירקתי
//     // useEffect(() => {
//     //     window.addEventListener("message", iframeFunctions, false);
//     // }, [props.message])

//     //////////אני  יירקתי
//     // function iframeFunctions(event) {
//     //     debugger
//     //     console.log('I am an iframe, I accepted it:', event.data);
//     //     let data = JSON.parse(event.data)
//     //     // console.log(data.params)
//     //     switch (data.function) {
//     //         case "move to view":
//     //             console.log(jsonPage)
//     //             saveInLocalStorage()
//     //             break;
//     //     }
//     // }
    
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
//     //                {
//     //                    movingElement(dropResult.id)}
//     //                    props.addElement(name, valueWidget[item.name], indexSection, indexPart, numElement)
//     //                }
//     //                else {
//     //                 setIndexPart(dropResult.indexPart)
//     //                 setIndexSection(dropResult.indexSection)
//     //                 setChangePosition(!changePosition)
//     //             }
//     //         }
//     //         ////////////////
//     //     }
//     // )

//     // useEffect(() => {
//     //     // debugger
//     //     // setSettings({tamar:"cohjkds"});
//     //     // window.addEventListener("message", iframeFunctions, false);
//     //     if (name) {

//     //         props.addElement(name, valueWidget[name], indexSection, indexPart, numElement)

//     //     }
//     //     // console.log('dd', settings)
//     // }, [changePosition])

//     const drag1 = (event) => {
//         console.log("dragging!!!!")
//         event.stopPropagation();
//         event.preventDefault();
//         debugger
//         event.dataTransfer.dropEffect = 'move';
//         // movingElement(id)
//         // addElement1(props.name, valueWidget[props.name])
//       }
//     const Quill = ReactQuill.Quill
//     var Font = Quill.import('formats/font');
//     Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
//     Quill.register(Font, true);
//     const ref = useRef(null);


//     const [, drop] = useDrop({
//         accept: ItemTypes.EL,
//         hover(item, monitor) {
//             if (!ref.current) {
//                 return;
//             }
//             const dragIndex = item.currentKey;
//             const hoverIndex = currentKey;
//             // Don't replace items with themselves
//             if (dragIndex === hoverIndex) {
//                 return;
//             }
//             // Determine rectangle on screen
//             const hoverBoundingRect = ref.current?.getBoundingClientRect();
//             // Get vertical middle
//             const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//             // Determine mouse position
//             const clientOffset = monitor.getClientOffset();
//             // Get pixels to the top
//             const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//             const source = monitor.getItem();
//             // Only perform the move when the mouse has crossed half of the items height
//             // When dragging downwards, only move when the cursor is below 50%
//             // When dragging upwards, only move when the cursor is above 50%
//             // Dragging downwards
//             if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//                 return;
//             }
//             // Dragging upwards
//             if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//                 return;
//             }
//             // Time to actually perform the action
//             console.log(`dragIndex: ${dragIndex},hoverIndex: ${hoverIndex} ,hoverClientY: ${hoverClientY} ,hoverMiddleY: ${hoverMiddleY}`,)
//             // moveCard(dragIndex, hoverIndex);
//             props.moveElementInPart(dragIndex, hoverIndex)
//             // Note: we're mutating the monitor item here!
//             // Generally it's better to avoid mutations,
//             // but it's good here for the sake of performance
//             // to avoid expensive index searches.
//             item.index = hoverIndex;
//         },
//     });
//     const [{ isDragging }, drag] = useDrag({
//         item: { type: ItemTypes.EL, id, currentKey },
//         collect: (monitor) => ({
//             isDragging: monitor.isDragging(),
//             //   console.log(drag);
//         }),
//     });
//     const opacity = isDragging ? 0 : 1;
//     drag(drop(ref));


//     const setValue = (newValue) => {
//         // debugger
//         console.log(this);
//         console.log(currentKey);
//         console.log(id)
//         props.setValueElement(newValue)
//     }
//     function onInputText(e) {
//         e.currentTarget
//             .width(300)
//             .height(50)
//             .width(this.scrollWidth)
//             .height(this.scrollHeight)
//         elementInEditing(id)
//     }
//     function onEnterElement() {
//         debugger
//         setCollapseOpen('element',id)
//         elementInEditing(id)
//     }
// //     switch (element.type) {
// //         // case "Title":
// //         //     return (
// //         //         <>
// //         //         <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //         //             {/* <div dangerouslySetInnerHTML={{__html:element.value}}/>
// //         //           {   Parser(element.value)} */}
// //         //             <div className="pointer">
// //         //                 {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
// //         //                 <div className={editMode && "hoverToEdit pointer"}>
// //         //                     {editMode && <div className='edit_buttons_element'>
// //         //                         <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //         //                             delete
// //         //         </span>
// //         //                         {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //         //             create
// //         //             </span> */}
// //         //                     </div>}
    
        
// //         //                     <textarea id="widgEditor" className="montitre pointe " type="text" 
    
// //         //                            onFocus={() => onEnterElement()}
// //         //                            //quil-------------------------
// //         //                         //    readOnly={!editMode}
// //         //                         //    bounds={$("#textarea")[0]}
// //         //                         //    theme="bubble"
// //         //                         //    modules={{
    
// //         //                         //     toolbar: [
// //         //                         //         [{ 'header': [1, 2, 3, false] }, { 'size': [] }],
// //         //                         //         ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }, { 'font': [] }],
// //         //                         //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
// //         //                         //         ['link'],
// //         //                         //         ['clean']
// //         //                         //     ]
// //         //                         //     /* ... other modules */
// //         //                         //    }}
// //         //                           //-----------------------------
// //         //                             value={element.value}
// //         //                             onChange={(e)=>setValue(e.target.value)}
// //         //                             placeholder='add here your title'
// //         //                             style={{
// //         //                             textAlign: element.textAlign,
                                    
// //         //                             maxHeight: "none",
// //         //                             minHeight: "none",
// //         //                             border: 'none',
// //         //                             width: "100%",
// //         //                         // backgroundColor: item.backgroundColor,
                            
// //         //                        // marginTop: "0px",
// //         //                             outline: "none",
// //         //                             height: "10vh",
// //         //                             fontSize:element.fontSize,
// //         //                             fontWeight: 'bold',
// //         //                             color: element.color,
// //         //                             // marginTop:'20px',
// //         //                             fontFamily:element.fontFamily,
// //         //                             verticalAlign: 'middle',
// //         //                             // fontWeight: item.fontWeight,
// //         //                             // display: 'flex',
// //         //                             // justifyContent: 'center',
// //         //                             // position: 'relative',
// //         //                             //  top: '50%'
// //         //                             padding: '15px 0'
                                
                         
// //         //             }}
               
// //         //         ></textarea >
               
                                
                                
// //         //                         </div>
// //         //                         </div>
                
// //         //                         </div >
    
// //         //         </>
// //         //     )
// //         //     case "Paragraph":
// //         //         return(
// //         //         <>
// //         //         <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
               
// //         //         <div className="pointer">
// //         //             {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
// //         //             <div className={editMode && "hoverToEdit pointer"}>
// //         //                 {editMode && <div className='edit_buttons_element'>
// //         //                     <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //         //                         delete
// //         //     </span>
// //         //                     {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //         //         create
// //         //         </span> */}
// //         //                 </div>}
    
// //         //                 {/* <h1>jkhgk</h1> */}
                        
                           
// //         //                   {/* <textarea onChange={e=>hlps(element.type, e.target.value)} > {newElementTypeAndValue.value}</textarea>  */}
                        
// //         //                 <textarea  className="montitre" type="text" multiline
// //         //                 onFocus={() => onEnterElement()}
// //         //                 value={element.value}
    
// //         //                 onChange={(e) => { debugger; setValue(e.target.value) }}
// //         //                 //value={}
// //         //                 placeholder='enter your paragraph'
// //         //                 style={{
// //         //                     maxHeight: "none",
// //         //                     minHeight: "none",
// //         //                     border: 'none',
// //         //                     width: "100%",
// //         //                     height: "10vh",
// //         //                     textAlign: element.textAlign,
// //         //                     color: element.color,
// //         //                     fontSize:element.fontSize,
// //         //                     fontFamily:element.fontFamily,
    
    
    
    
// //         //         }}
// //         //     ></textarea>
                                
                              
                            
                            
// //         //                     </div></div></div>
// //         //     </>
    
    
    
// //         //         )


// //         case "Title": 
// //         return (
// //             <>
// //                 {/* <div dangerouslySetInnerHTML={{__html:element.value}}/>
// //               {   Parser(element.value)} */}
// //                 <div className="pointer">
// //                     {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
// //                     <div className={editMode && "hoverToEdit pointer"}>
// //                         {editMode && <div className='edit_buttons_element'>
// //                             <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                 delete
// //             </span>
// //                             {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //                 create
// //                 </span> */}
// //                         </div>}

    
// //                         <textarea id="widgEditor" className="montitre pointe " type="text" 

// //                                onFocus={() => onEnterElement()}
// //                                //quil-------------------------
// //                             //    readOnly={!editMode}
// //                             //    bounds={$("#textarea")[0]}
// //                             //    theme="bubble"
// //                             //    modules={{

// //                             //     toolbar: [
// //                             //         [{ 'header': [1, 2, 3, false] }, { 'size': [] }],
// //                             //         ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }, { 'font': [] }],
// //                             //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
// //                             //         ['link'],
// //                             //         ['clean']
// //                             //     ]
// //                             //     /* ... other modules */
// //                             //    }}
// //                               //-----------------------------
// //                                 value={element.value}
// //                                 onChange={(e)=>setValue(e.target.value)}
// //                                 placeholder='add here your title'
// //                                 style={{
// //                                 textAlign: element.textAlign,
                                
// //                                 maxHeight: "none",
// //                                 minHeight: "none",
// //                                 border: 'none',
// //                                 width: "100%",
// //                             // backgroundColor: item.backgroundColor,
                        
// //                            // marginTop: "0px",
// //                                 outline: "none",
// //                                 height: "10vh",
// //                                 fontSize:element.fontSize +'px',
// //                                 fontWeight: 'bold',
// //                                 color: element.color,
// //                                 // marginTop:'20px',
// //                                 fontFamily:element.fontFamily,
// //                                 verticalAlign: 'middle',
// //                                 // fontWeight: item.fontWeight,
// //                                 // display: 'flex',
// //                                 // justifyContent: 'center',
// //                                 // position: 'relative',
// //                                 //  top: '50%'
// //                                 padding: '15px 0'
                            
                     
// //                 }}
           
// //             ></textarea >
           
                            
                            
// //                             </div>
// //                             </div>
            

// //             </>
// //         )
// // //         case "Text":
// // //             return (
// // //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// // //                 <Grid style={{ color: 'black', fontSize: "16px", padding: "10px" }}  >

                
// // //                     {/* <div dangerouslySetInnerHTML={{__html:element.value}}/>
// // //                   {   Parser(element.value)} */}
// // //                     <div className="pointer">
// // //                         {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
// // //                         <div className={editMode && "hoverToEdit pointer"}>
// // //                             {editMode && <div className='edit_buttons_element'>
// // //                                 <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// // //                                     delete
// // //                 </span>
// // //                                 {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// // //                     create
// // //                     </span> */}
// // //                             </div>}
// // //                             <ReactQuill className='col-12 text-center pointe '
// // //                                 onFocus={() => onEnterElement()}
// // //                                 readOnly={!editMode}
// // //                                 style={{ zIndex: 10 }}
// // //                                 value={element.value}
// // //                                 bounds={$("#editor")[0]}

// // //                                 onChange={setValue}
// // //                                 theme="bubble"
// // //                                 modules={{

// // //                                     toolbar: [
// // //                                         [{ 'header': [1, 2, 3, false] }, { 'size': [] }],
// // //                                         ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }, { 'font': [] }],
// // //                                         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
// // //                                         ['link'],
// // //                                         ['clean']
// // //                                     ]
// // //                                     /* ... other modules */
// // //                                 }} />
// // //                              {/* <EditText element={element}  onDrag={e => drag1(e)} draggable="true"  ></EditText> */}

// // //                                 </div></div>
// // //                         </Grid>
// // // </div>
// // //             )
// //         case "Image":

// //             return (
// //                 <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
                
// //                 <div className={editMode && "hoverToEdit pointer"}>
// //                     {editMode && <div className='edit_buttons_element'>
// //                         <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }}  onClick={() => removeElement(id)}>
// //                             delete
// //                 </span>
// //                         {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => 
                        
// //                         ('section')} >
// //                     create
// //                     </span> */}
// //                     </div>}
// //                     <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //                         // onFocus={() => setCollapseOpen('element')}
// //                         onClick={() => onEnterElement()}>
                            
// //                         {/* {element.value && <div onClick={() => onEnterElement()}
// //                             className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2">
// //                             <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
// //                                 panorama
// //                              </span>
// //                             <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
// //                         </div>
// //                         } */}
// //                         <ImageUploader element={element}  onDrag={e => drag1(e)} draggable="true"  ></ImageUploader>
// //                     </div>
// //                     {/* <img style={{ width: '30%' }} src={element.value}></img> */}
// //                 </div></div>
// //                 </>
// //             )
// //             // return (
// //             //     <><div className={editMode && "hoverToEdit pointer"}>
// //             //         {editMode && <div className='edit_buttons_element'>
// //             //             <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }}  onClick={() => removeElement(id)}>
// //             //                 delete
// //             //     </span>
// //             //             {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => 
                        
// //             //             ('section')} >
// //             //         create
// //             //         </span> */}
// //             //         </div>}
// //             //         <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //             //             // onFocus={() => setCollapseOpen('element')}
// //             //             onClick={() => onEnterElement()}>
// //             //             {/* {element.value && <div onClick={() => onEnterElement()}
// //             //                 className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2">
// //             //                 <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
// //             //                     panorama
// //             //                  </span>
// //             //                 <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
// //             //             </div>
// //             //             } */}
// //             //             <ImageUploader element={element}  onDrag={e => drag1(e)} draggable="true"  ></ImageUploader>
// //             //         </div>
// //             //         {/* <img style={{ width: '30%' }} src={element.value}></img> */}
// //             //     </div>
// //             //     </>
// //             // )
// //         case 'Video':
// //             return (
// //             <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
            

// //             <div className={editMode && "hoverToEdit pointer"}>
// //                     {editMode && <div className='edit_buttons_element'>
// //                         <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                             delete
// //                 </span>
// //                         {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //                     create
// //                     </span> */}
// //                     </div>}

// //                     <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //                         // onFocus={() => setCollapseOpen('element')}
// //                         onClick={() => onEnterElement()}>
// //                         {/* {element.value && <div onClick={() => onEnterElement()}
// //                             className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2">
// //                             <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
// //                                 panorama
// //                              </span>
// //                             <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
// //                         </div>
// //                         } */}
// //                         <VideoUploader element={element}>

// //                         </VideoUploader>
// //                     </div>
// //                     {/* <img style={{ width: '30%' }} src={element.value}></img> */}
// //                 </div></div>
// //             </>
// //         )
// //         // return (
// //             //     <>
// //             //         <div className={editMode && "hoverToEdit pointer "}>
// //             //             {editMode && <div className='edit_buttons_element'>
// //             //                 <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //             //                     delete
// //             //     </span>
// //             //                 {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //             //         create
// //             //         </span> */}
// //             //             </div>}
// //             //             {/* <div className="d-flex flex-column align-items-center " style={{ backgroundColor: '#d0c7c7' }} onFocus={() => setCollapseOpen('element')}
// //             //             onClick={() => onEnterElement()}> */}
// //             //             {element.value ? (editMode ? <img className="col-12" src={`https://img.youtube.com/vi/${element.value.replace('https://www.youtube.com/watch?v=', '')}/hqdefault.jpg`} onClick={() => onEnterElement()}></img> :
// //             //                 <iframe className="col-12" src={element.value.replace("watch?v=", "embed/")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
// //             //                 :
// //             //                 <div onClick={() => onEnterElement()}
// //             //                     className="d-flex flex-column align-items-center divEmptyElement justify-content-center m-2"
// //             //                 // onFocus={() => setCollapseOpen('element')}
// //             //                 > <span class="material-icons" style={{ fontSize: '5rem' }}>
// //             //                         play_circle_outline
// //             //             </span>
// //             //                     <p className="m-0 text-center">Add Url Video</p>
// //             //                 </div>
// //             //             }
// //             //             {/* // src="https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg" */}
// //             //             {/* https://www.youtube.com/embed/Ke90Tje7VS0‏ */}
// //             //             {/* </div> */}
// //             //         </div>
// //             //     </>
// //             // )
// //         // case 'Form':
// //         //     return (
// //         //         <>
// //         //             <div className={editMode && "hoverToEdit pointer"}>
// //         //                 {editMode && <div className='edit_buttons_element'>
// //         //                     <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //         //                         delete
// //         //         </span>
// //         //                     {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //         //             create
// //         //             </span> */}
// //         //                 </div>}
// //         //                 {element.value ?<>???????????</> //<iframe onClick={() => onEnterElement()} width="100%" height="315" src={element.value} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// //         //                  :
// //         //                     <div onClick={() => onEnterElement()} className="d-flex flex-column align-items-center justify-content-center m-2 divEmptyElement"
// //         //                     > <span class="material-icons" style={{ fontSize: '5rem' }}>
// //         //                             description
// //         //                 </span>
// //         //                         <p className="m-0 text-center">Add Url Form</p>
// //         //                     </div>}
// //         //             </div>
// //         //         </>
// //         //     )


// //         case "Gallery":
// //             return (
// //                 <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //                     <div className={editMode && "hoverToEdit pointer"}>
// //                         {editMode && <div className='edit_buttons_element'>
// //                             <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                 delete
// //                     </span>
// //                         </div>}
// //                         <div className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //                             onClick={() => onEnterElement()}>                            
// //                             <Gallery id="gallery" element={element}></Gallery>
// //                         </div>
// //                     </div>
// //                     </div>
// //                 </>
// //             )
// //         case 'Html':
// //             return (
// //                 <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //                     <div className={editMode && "hoverToEdit pointer"}>
// //                         {editMode && <div className='edit_buttons_element'>
// //                             <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                 delete
// //                 </span>
// //                             {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //                     create
// //                     </span> */}
// //                         </div>}
// //                         <div onClick={() => onEnterElement()} className="pl-4 p-4">
// //                             {element.value ? <div dangerouslySetInnerHTML={{ __html: element.value }} /> :
// //                                 <p>ADD HTML CODE</p>}
// //                         </div></div>
// //                     </div></>
// //             )
// //         case 'Button':
// //             return (
// //                 <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //                     <div className={editMode && "hoverToEdit pointer"}>
// //                         {editMode && <div className='edit_buttons_element'>
// //                             <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                 delete
// //                 </span>
// //                             {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //                     create
// //                     </span> */}
// //                         </div>}
// //                         <div className='d-flex'>
// //                             <a target="_blank" className='col-10 m-auto' href={editMode ? null : element.href ? element.href : null}>
// //                                 <button onClick={() => onEnterElement()} className="btn col-12 p-0" style={element.style, { backgroundColor: '#9b9191' }}>
// //                                     <ReactQuill className='col-12 text-center p-0'
// //                                         onFocus={() => onEnterElement()}
// //                                         readOnly={!editMode}
// //                                         style={{ zIndex: 10 }}
// //                                         value={element.value}
// //                                         bounds={$("#editor")[0]}
// //                                         onChange={setValue}
// //                                         theme="bubble"
// //                                         modules={{
// //                                             toolbar: [
// //                                                 [{ 'header': [1, 2, 3, false] }, { 'size': [] }],
// //                                                 ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }, { 'font': [] }],
// //                                                 [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
// //                                                 ['link'],
// //                                                 ['clean']
// //                                             ]
// //                                             /* ... other modules */
// //                                         }}
// //                                     />
// //                                 </button></a>
// //                         </div>
// //                     </div> 
// //                     </div>
                       
// //                         </>
// //             )
// //             case 'Form':
// //                 return (
// //                     <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //                     <Form></Form>
// //                         <div className={editMode && "hoverToEdit pointer"}>
// //                             {editMode && <div className='edit_buttons_element'>
// //                                 <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                     delete
// //                     </span>
// //                                  <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
// //                         create
// //                         </span> 
// //                              </div>} 
// //                             {element.value ?<>???????????</> //<iframe onClick={() => onEnterElement()} width="100%" height="315" src={element.value} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// //                              :
// //                                 <div onClick={() => onEnterElement()} className="d-flex flex-column align-items-center justify-content-center m-2 divEmptyElement"
// //                                 > <span class="material-icons" style={{ fontSize: '5rem' }}>
// //                                         description
// //                             </span>
// //                                     <p className="m-0 text-center">Add Url Form</p>
// //                                 </div>} 
// //                          </div> 
// //                          </div>
// //                     </>
// //                 )
           
               
    
// //             case 'Icon':
    
            
// //                       return (
// //                         <>
// //                 <div ref={drag} className="move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >

// //                             <div className={editMode && "hoverToEdit pointer"}>
// //                                 {editMode && <div className='edit_buttons_element'>
// //                                     <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                         delete
// //                         </span>
                            
// //                                 </div>}
// //                                 <div  className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //                                   onClick={() => onEnterElement()} >
                
// //                     <SelectIcon element={element} onDrag={e => drag1(e)} draggable="true"/>
// //                                 </div>
// //                             </div>
// //                             </div>
// //                             </>
// //                     );
    
// //                     case 'Spacer':
    
            
// //                         return (
// //                           <>
                          
// //                               <div className={editMode && "hoverToEdit pointer"}>
// //                                   {editMode && <div className='edit_buttons_element'>
// //                                       <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
// //                                           delete
// //                           </span>
                              
// //                                   </div>}
// //                                   <div  className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'}
// //                                     onClick={() => onEnterElement()} >
                  
// //                       <Spacer element={element} onDrag={e => drag1(e)} draggable="true"/>
// //                                   </div>
// //                               </div></>
// //                       );
// //         default:
// //             break;
// //     }
// }
// export default connect(
//     (state) => {
//         return {
//             editMode: state.funnel.editMode,
//             jsonPage: state.funnel.jsonPage,
//         }
//     }
//     ,
//     (dispatch) => {
//         return {
            
//           //  movingElement:(elementId) => { dispatch(setValueElement({ value: newValue })) },
//             saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
//             // changeFlagConfigurator: function (newFlag) { dispatch(setFlagToggleCon(newFlag)) }
//             setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
//             // setValueElement: (section, part, element, newValue) => { dispatch(setValueElement({ section: section, part: part, element: element, newValue: newValue })) },
//             moveElementInPart: function (dragIndex, hoverIndex) { dispatch(moveElementInPart({ dragIndex: dragIndex, hoverIndex: hoverIndex })) },
//             removeElement: function (id) { dispatch(removeElement({ id: id })) },
//             elementInEditing: function (id) { dispatch(elementInEditing({ id: id })) },
//             setCollapseOpen: function (collapse,id) { dispatch(setCollapseOpen({collapse:collapse,id:id})) }
//         }
//     }
// )(Element)

import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './element.css'
import { useDrag, useDrop } from 'react-dnd';
import { setValueElement, moveElementInPart, removeElement, elementInEditing, setCollapseOpen } from '../../redux/actions/funnel.action'
import { ItemTypes } from '../../ItemTypes'
import EelementEditButtons from '../elementsEditButtons/elementEditButtons'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import ImageUploader from '../image/image';
import $ from "jquery";
import VideoUploader from '../video/video';
import Parser from 'html-react-parser';
import Gallery from '../image_gallery/imageGallery'
import SelectIcon from '../SelectIcon/SelectIcon'
//import Spacer from '../spacer/spacer'
// import Spacer from 'react-spacer'
import Spacer from 'react-spacer'
import Form from '../Form/Form'
// import { useDrag } from 'react-dnd'
// import { ItemTypes } from '../../ItemTypes'
// import Parser from 'html-react-parser';
// import PanoramaIcon from '@material-ui/icons/Panorama';
// import Icon from '@material-ui/core/Icon';

//import Spacer from 'react-native-spacer';

// import BlankSpacer from "react-native-blank-spacer";
//import Spacer from '@material-ui/core/Spacer';

//import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

//import fontFamilies from '../editTitle/fontFamily';

function Element(props) {
    const { newElementTypeAndValue , removeElement, currentKey, element, editMode, section, part, id, setCollapseOpen, jsonPage,saveInLocalStorage } = props
    const [name, setName] = useState()
    //console.log(newElementTypeAndValue)
    //console.log(elementInEditing)
    // let id='qq'
    // const ref = React.createRef();

    //////////אני  יירקתי
    // useEffect(() => {
    //     window.addEventListener("message", iframeFunctions, false);
    // }, [props.message])

    //////////אני  יירקתי
    // function iframeFunctions(event) {
    //     debugger
    //     console.log('I am an iframe, I accepted it:', event.data);
    //     let data = JSON.parse(event.data)
    //     // console.log(data.params)
    //     switch (data.function) {
    //         case "move to view":
    //             console.log(jsonPage)
    //             saveInLocalStorage()
    //             break;
    //     }
    // }
    
    // const [{ isDragging }, drag] = useDrag({
    //     item: { name: props.name, type: ItemTypes.BOX },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     }),
    //     end: async (item, monitor) => {
    //         //////////////
    //         const dropResult = monitor.getDropResult();
    //         if (item && dropResult) {
    //             console.log(settings);
    //             setName(item.name)
    //             if (indexPart === dropResult.indexPart && indexSection === dropResult.indexSection)
    //                {
    //                    movingElement(dropResult.id)}
    //                    props.addElement(name, valueWidget[item.name], indexSection, indexPart, numElement)
    //                }
    //                else {
    //                 setIndexPart(dropResult.indexPart)
    //                 setIndexSection(dropResult.indexSection)
    //                 setChangePosition(!changePosition)
    //             }
    //         }
    //         ////////////////
    //     }
    // )

    // useEffect(() => {
    //     // debugger
    //     // setSettings({tamar:"cohjkds"});
    //     // window.addEventListener("message", iframeFunctions, false);
    //     if (name) {

    //         props.addElement(name, valueWidget[name], indexSection, indexPart, numElement)

    //     }
    //     // console.log('dd', settings)
    // }, [changePosition])

    const drag1 = (event) => {
        console.log("dragging!!!!")
        event.stopPropagation();
        event.preventDefault();
        debugger
        event.dataTransfer.dropEffect = 'move';
        // movingElement(id)
        // addElement1(props.name, valueWidget[props.name])
      }

     //=------------------------------------------------------
    //   var quill = new Quill('#editor', {
    //     modules: {
    //       toolbar: '#toolbar'
    //     },
    //     theme: 'snow'
    //   });
      
//--------------------------------------------------------

    const Quill = ReactQuill.Quill
    var Font = Quill.import('formats/font');
    Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
    Quill.register(Font, true);
    const ref = useRef(null);

//---------------------------------------
    const [, drop] = useDrop({
        accept: ItemTypes.EL,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.currentKey;
            const hoverIndex = currentKey;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            const source = monitor.getItem();
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            console.log(`dragIndex: ${dragIndex},hoverIndex: ${hoverIndex} ,hoverClientY: ${hoverClientY} ,hoverMiddleY: ${hoverMiddleY}`,)
            // moveCard(dragIndex, hoverIndex);
            props.moveElementInPart(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.EL, id, currentKey },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            //   console.log(drag);
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));


    const setValue = (newValue) => {
         debugger
        // console.log(newValue.target)
        // console.log(newValue);
        // console.log(newValue.target.value)

      //  onEnterElement()
 

      console.log(newValue)
    //   console.log(Parser(newValue))
    //   console.log(Parser(newValue).props.children)
        console.log(currentKey);
        console.log(id)
       // props.setValueElement(Parser(newValue).props.children)
        props.setValueElement(newValue)

    }
    function onInputText(e) {
        e.currentTarget
            .width(300)
            .height(50)
            .width(this.scrollWidth)
            .height(this.scrollHeight)
        elementInEditing(id)
    }
    function onEnterElement() {
      //  debugger
        // console.log(e)
        // console.log(e.target.value)
        console.log(id)
        //setCollapseOpen('element',id)
       // setCollapseOpen(id)
       setCollapseOpen( 'element',id)

        elementInEditing(id)
    }

    // const hlps=(val)=>{
    //     debugger 
    //     console.log(val)
    //     setValueElement(val)
    //     // addElement1(e,val)
        

    //   }

    console.log(element)
  //  console.log(element.color)
    
    //console.log(elementInEditing)
    switch (element.type)
     {
        
        case "Title": 
        return (
            <>
                {/* <div dangerouslySetInnerHTML={{__html:element.value}}/>
              {   Parser(element.value)} */}
                <div className="pointer">
                    {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
                    <div className={editMode && "hoverToEdit pointer"}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                delete
            </span>
                            {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                create
                </span> */}
                        </div>}

    
                        <textarea id="widgEditor" className="montitre pointe " type="text" 

                               onFocus={() => onEnterElement()}
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
                                value={element.value}
                                onChange={(e)=>setValue(e.target.value)}
                                placeholder='add here your title'
                                style={{
                                textAlign: element.textAlign,
                                
                                maxHeight: "none",
                                minHeight: "none",
                                border: 'none',
                                width: "100%",
                            // backgroundColor: item.backgroundColor,
                        
                           // marginTop: "0px",
                                outline: "none",
                                height: "10vh",
                                fontSize:element.fontSize +'px',
                                fontWeight: 'bold',
                                color: element.color,
                                // marginTop:'20px',
                                fontFamily:element.fontFamily,
                                verticalAlign: 'middle',
                                // fontWeight: item.fontWeight,
                                // display: 'flex',
                                // justifyContent: 'center',
                                // position: 'relative',
                                //  top: '50%'
                                padding: '15px 0'
                            
                     
                }}
           
            ></textarea >
           
                            
                            
                            </div>
                            </div>
            

            </>
        )
        case "Paragraph":
            return(
            <>
           
            <div className="pointer">
                {/* {editMode && <EelementEditButtons id={element.id}></EelementEditButtons>} */}
                <div className={editMode && "hoverToEdit pointer"}>
                    {editMode && <div className='edit_buttons_element'>
                        <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                            delete
        </span>
                        {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
            create
            </span> */}
                    </div>}

                    {/* <h1>jkhgk</h1> */}
                    
                       
                      {/* <textarea onChange={e=>hlps(element.type, e.target.value)} > {newElementTypeAndValue.value}</textarea>  */}
                    
                    <textarea  className="montitre" type="text" multiline
                    onFocus={() => onEnterElement()}
                    value={element.value}

                    onChange={(e) => { debugger; setValue(e.target.value) }}
                    //value={}
                    placeholder='enter your paragraph'
                    style={{
                        maxHeight: "none",
                        minHeight: "none",
                        border: 'none',
                        width: "100%",
                        height: "10vh",
                        textAlign: element.textAlign,
                        color: element.color,
                        fontSize:element.fontSize,
                        fontFamily:element.fontFamily,




            }}
        ></textarea>
                            
                          
                        
                        
                        </div></div>
        </>



            )
        case "Image":
            debugger
            return (
                <><div className={editMode && "hoverToEdit pointer"}>
                    {editMode && <div className='edit_buttons_element'>
                        <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }}  onClick={() => removeElement(id)}>
                            delete
                </span>
                        {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => 
                        
                        ('section')} >
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
                        <ImageUploader element={element}  onDrag={e => drag1(e)} draggable="true"  ></ImageUploader>
                    </div>
                    {/* <img style={{ width: '30%' }} src={element.value}></img> */}
                </div>
                </>
            )

            case "Gallery":
                debugger
                return (
                    <><div className={editMode && "hoverToEdit pointer"}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }}  onClick={() => removeElement(id)}>
                                delete
                    </span>
                            {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => 
                            
                            ('section')} >
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
                            <Gallery element={element}  onDrag={e => drag1(e)} draggable="true"  ></Gallery>
                        </div>
                        {/* <img style={{ width: '30%' }} src={element.value}></img> */}
                    </div>
                    </>
                )


        case 'Video':
            return (
            <><div className={editMode && "hoverToEdit pointer"}>
                    {editMode && <div className='edit_buttons_element'>
                        <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
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
                        <VideoUploader element={element}/>

                        {/* </VideoUploader> */}
                    </div>
                    {/* <img style={{ width: '30%' }} src={element.value}></img> */}
                </div>
            </>
        )


        
        
        case 'Form':
            return (
                <>
                
                    <div className={editMode && "hoverToEdit pointer"}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                delete
                </span>
                             <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                    create
                    </span> 
                         </div>} 
                        {element.value ?<><Form></Form></> //<iframe onClick={() => onEnterElement()} width="100%" height="315" src={element.value} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         :
                            <div onClick={() => onEnterElement()} className="d-flex flex-column align-items-center justify-content-center m-2 divEmptyElement"
                            > <span class="material-icons" style={{ fontSize: '5rem' }}>
                                    description
                        </span>
                                <p className="m-0 text-center">Add Url Form</p>
                            </div>} 
                     </div> 
                </>
            )
       
           
        case 'Html':
            return (
                <>
                    <div className={editMode && "hoverToEdit pointer"}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                delete
                </span>
                            {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                    create
                    </span> */}
                        </div>}
                        <div onClick={() => onEnterElement()} className="pl-4 p-4">
                            {element.value ? <div dangerouslySetInnerHTML={{ __html: element.value }} className='myHtmlClass' style={{fontFamily: element.fontFamily} }   placeholder="Html Code"  
                            onChange={(e) => { setValue(e.target.value)}} value={element.value}
                            /> 
                            :
                                <p>ADD HTML CODE</p>}
                        </div>
                    </div></>
            )
        case 'Button':
            return (
                <>
                    <div className={editMode && "hoverToEdit pointer"}>
                        {editMode && <div className='edit_buttons_element'>
                            <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                delete
                </span>
                            {/* <span class="material-icons" style={{ zIndex: 4 ,fontSize: '1.2rem'}} onClick={() => setCollapseOpen('section')} >
                    create
                    </span> */}
                        </div>}
                        <div className='d-flex' style={{textAlign: element.textAlign}}>
                            <a target="_blank" className='col-10 m-auto' href={editMode ? null : element.href ? element.href : null}>
                                <button onClick={() => onEnterElement()}  onChange={(e) => { debugger; setValue(e.target.value) }}
                                style={{
                                    border: 'none',
                                    width: element.width+"%",
                                    height: "10vh",
                                    // textAlign: element.textAlign,
                                    color: element.color,
                                    fontSize:element.fontSize+'px',
                                    //fontFamily:element.fontFamily,
                                    backgroundColor:element.backgroundColor,
                                    borderRadius: element.borderRadius+'px',
                                    placeholder:'button'
                                }}>
                                    {element.value} 
                                    
                                </button></a>
                        </div>
                    </div> </>
            )

            case 'Icon':
    
            
                return (
                  <>
                      <div className={editMode && "hoverToEdit pointer"}>
                          {editMode && <div className='edit_buttons_element'>
                              <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                  delete
                  </span>
                      
                          </div>
                          }
                          <div  className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement'} onClick={() => onEnterElement()} >
                            {/* <div className='monIconClass' style={{width:'100%', height:'100%' , textAlign:''}} > */}
                            <SelectIcon element={element}  onDrag={e => drag1(e)} draggable="true" style={{alignItem:'center'}}/>

                            </div>
                          {/* </div> */}
                      </div></>
              );

              case 'Spacer':

      
                  return (
                    <>
                        <div className={editMode && "hoverToEdit pointer "}  style={{marginTop:'0px' , marginBottom:'0px',height:'100%' }}  >
                            {editMode && <div className='edit_buttons_element'>
                                <span class="material-icons" style={{ zIndex: 3, fontSize: '1.2rem' }} onClick={() => removeElement(id)}>
                                    delete
                    </span>
                        
                            </div>}
                            <div  className={element.value ? "d-flex flex-column align-items-center justify-content-center m-2  y" : 'd-flex flex-column align-items-center justify-content-center m-2 y divEmptyElement' }
                              onClick={() => onEnterElement()}
                               style={{height:element.height, backgroundColor:element.color}}
                           //  style={{marginTop:'0px' , marginBotton:'0px' }}
                               >
                             {/* <Spacer  element={element} /> */}
                            <Spacer  width='100%' height={element.height+'vh'}/>



{/* </Spacer> */}
                {/* <Spacer element={element} onDrag={e => drag1(e)} draggable="true"/> */}
                            </div>
                        </div></>
                );

                case 'Sharing':
        default:
            break;
    }
}
export default connect(
    (state) => {
        return {
            editMode: state.funnel.editMode,
            jsonPage: state.funnel.jsonPage,
          //  newElementTypeAndValue:state.funnel.newElementTypeAndValue,
            // elementInEditing:state.funnel.elementInEditing
        }
    }
    ,
    (dispatch) => {
        return {
            
          //  movingElement:(elementId) => { dispatch(setValueElement({ value: newValue })) },
            saveInLocalStorage: () => { dispatch({ type: '[funnel] SAVE_IN_LOCAL_STORAGE' }) },
            // changeFlagConfigurator: function (newFlag) { dispatch(setFlagToggleCon(newFlag)) }
            setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
            // setValueElement: (section, part, element, newValue) => { dispatch(setValueElement({ section: section, part: part, element: element, newValue: newValue })) },
            moveElementInPart: function (dragIndex, hoverIndex) { dispatch(moveElementInPart({ dragIndex: dragIndex, hoverIndex: hoverIndex })) },
            removeElement: function (id) { dispatch(removeElement({ id: id })) },
            elementInEditing: function (id) { dispatch(elementInEditing({ id: id })) },
           // setCollapseOpen: function (collapse) { dispatch(setCollapseOpen(collapse)) },
            // addElement1: function (newElement, value) {
            // dispatch(addElement1({ type: newElement, value: value }))
            //////////
            setCollapseOpen:function (collapse,id){dispatch(setCollapseOpen({collapse: collapse,id:id})) }


           // }
        }
    }
)(Element)



