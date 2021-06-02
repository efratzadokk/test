// import React, { useState, useRef } from 'react';
// import { useDropzone, onDragOver } from 'react-dropzone'
// import './image.css'
// import { connect } from 'react-redux';
// import { uploadImage, setValueElement, setStyleImage } from '../../redux/actions/funnel.action'
// import $ from "jquery";


// function ImageUploader(props) {
//     const modalImageRef = useRef();
//     const modalRef = useRef();
//     const { element, setValueElement, setStyleImage, user } = props
//     const [image, setImage] = useState();
//     const [file, setFile] = useState(false);
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');
    


//     const dragOver = (e) => {
//         e.preventDefault();
//     }
//     const dragEnter = (e) => {
//         e.preventDefault();
//     }
    
//     const dragLeave = (e) => {
//         e.preventDefault();
//     }
//     const fileDrop = (e) => {
//         e.preventDefault();
//         const files = e.dataTransfer.files;
//         console.log(e);
//         if (files.length) {
//             handleFiles(files)
//         }
//     }
//     const handleFiles = async (files) => {
//         console.log(files[0])
//         if (validateFile(files[0])) {
//             setFile(!file)
//             let url = URL.createObjectURL(files[0]);
//             local_image(url)
//             const myFile = new FormData()
//             myFile.append("file", files[0])
//             console.log(myFile.get('file'))
//             console.log(image)
//             console.log(files)
//             // openImageModal(files[0])
//             //  await props.uploadImage(myFile).then((url) => {
//             //     console.log(url);
//             // })
//             // $.ajax({
//             //     url: `https://funnel.dev.leader.codes/api/uploadFile/${getState().user.userId}/${getState().user.userName}`,
//             //     type: 'POST',
//             //     data: myFile,
//             //     contentType: false,
//             //     processData: false,
//             //     headers: {
//             //         Authorization: 'view'
//             //     },
//             //     success: function (data) {
//             //         console.log(data);
//             //         dispatch({ type: '[funnel] SET_IMAGE_FILE', payload: data })
//             //         resolve(data)
//             //     },
//             //     error: function (err) {
//             //         console.log(err);
//             //         reject(err)
//             //     }
//             // })
//             $.ajax({
//                 type: "POST",
//                 url: `/api/uploadFile/${user.userId}/${user.userName}`,
//                 headers: {
//                     Authorization: 'view'
//                 },
//                 data: myFile,
//                 processData: false,
//                 contentType: false,
//                 success: await function (data) {
//                     console.log(data);
//                     // data.data ?
//                         console.log(data)
//                         server_image(data)
//                     //     : alert('error')
//                     // return data.data.url
//                     // resolve(data.data.url)
//                 },
//                 error: await function (err) {
//                     alert(err);
//                     // return false
//                     // resolve(false)
//                 },
//             });
//         };
//     }
//     const validateFile = (file) => {
//         const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
//         if (validTypes.indexOf(file.type) === -1) {
//             return false;
//         }
//         console.log("yes")
//         return true;
//     }
//     const changeImgOnClick = () => {
//         $('#inputFileImg').trigger('click')
//     }
//     const chooseImg = (e) => {
//         const files = Array.from(e.target.files)
//         console.log("files:", files)
//         handleFiles(files)
//     }
//     const server_image = (val) => {
//         setValueElement(val)
//         setStyleImage('width', '100%')
//         setStyleImage('height', '400px')
//         setStyleImage('opacity', '0.99')
//     }
//   const  local_image=(url)=>{
//     setStyleImage('width', '100%')
//     setStyleImage('height', '400px')
//     setStyleImage('opacity', '0.5')
//     setImage(url)
//   }
//     return (
//         <div>
//             <input type="file" id="inputFileImg" className="d-none" onChange={(e) => chooseImg(e)}></input>
//             <div className="content" onClick={() => changeImgOnClick()}>
//                 <div className="container p-0">
//                     <div className="drop-container col-12 p-0" onDragOver={dragOver}
//                         onDragEnter={dragEnter}
//                         onDragLeave={dragLeave}
//                         onDrop={fileDrop}
//                         // onDrag={e => drag1(e)}
//                         draggable="true" 
//                         //  onDragStart="drag(event)" 
//                     >
//                         <div className="align-items-center d-flex drop-message flex-column">

//                             <div className="upload-icon"> </div>
//                             {element.value ? <img src={element.value} style={element.settings} alt="aaaaaa" /> : image ? <img src={image} style={element.settings} alt="aaaaaa" /> :
//                                 <>
//                                     <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
//                                         panorama
//                              </span>
//                                     <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
//                                 </>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="modal"  ref={modalRef}>
//     <div className="overlay"></div>
//     <span className="close">X</span>
//     <div className="modal-image" ref={modalImageRef}></div>
// </div> */}

//         </div>
//         // </div>
//     )
// }

// export default connect(
//     (state) => {
//         return {
//             user: state.user
//         }
//     },
//     (dispatch) => {
//         return {
//             // movingElement:(elementId) => { dispatch(setValueElement({ value: newValue })) },
//             setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
//             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }
//         }
//         // uploadImage: (files) => { dispatch(uploadImage(files)) }
//     }

// )(ImageUploader);




import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import './image.css'
import { connect } from 'react-redux';
import { uploadImage, setValueElement, setStyleImage,setValueMe,elementInEditing } from '../../redux/actions/funnel.action'
import $ from "jquery";


function ImageUploader(props) {
    const modalImageRef = useRef();
    const modalRef = useRef();
    const { element, setValueElement, setStyleImage, user } = props
    const [image, setImage] = useState();
    const [file, setFile] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log(element)


    const dragOver = (e) => {
        e.preventDefault();
    }
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        debugger
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(e);
        if (files.length) {
            handleFiles(files)
        }
    }
    const handleFiles = async (files) => {
        debugger
        console.log(files[0])
        if (validateFile(files[0])) {
            setFile(!file)
            let url = URL.createObjectURL(files[0]);
           // console.log(url)
            local_image(url)
            const myFile = new FormData()
            myFile.append("file", files[0])
            console.log(myFile.get('file'))
            console.log(image)
            console.log(files)
   
            $.ajax({
                type: "POST",
                url: `/api/uploadFile/${user.userId}/${user.userName}`,
                headers: {
                    Authorization: 'view'
                },
                data: myFile,
                processData: false,
                contentType: false,
                success: await function (data) {
                    console.log(data);
                    // data.data ?
                        console.log(data)
                        server_image(data)
                    //     : alert('error')
                    // return data.data.url
                    // resolve(data.data.url)
                },
                error: await function (err) {
                    alert(err);
                    // return false
                    // resolve(false)
                },
            });
        };
    }
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        console.log("yes")
        return true;
    }
    const changeImgOnClick = (e) => {
        
        console.log(e)
       // console.log(e.target.value);
        $(`#inputFileImg${element.id}`).trigger('click')
    }
    const chooseImg = (e) => {
        debugger
        if(e.target.files[0])
        {
        const files = Array.from(e.target.files)
        console.log("files:", files)
        handleFiles(files)
        }
    }
    const server_image = (val) => {
        setValueElement(val)
        setStyleImage('width', '100%')
        setStyleImage('height', '400px')
        setStyleImage('opacity', '0.99')
    }
  const  local_image=(url)=>{
      debugger
    setStyleImage('width', '100%')
    setStyleImage('height', '400px')
    setStyleImage('opacity', '0.5')
    setImage(url)
  //  console.log(image)
    console.log(url)
    props.setValueMe(url,'image')
    //  console.log(element)
    //  console.log(element.id)
     props.elementInEditing(element.id)
    // console.log(element)



  }

  console.log(element)
    return (
        <div>
            <input type="file" id={'inputFileImg'+element.id} className="d-none" onChange={(e) => chooseImg(e)}></input>
            <div className="content" onDoubleClick={() => changeImgOnClick()}>
                <div className="container p-0">
                    <div className="drop-container col-12 p-0" onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                        // onDrag={e => drag1(e)}
                        draggable="true" 
                        //  ondragstart="drag(event)" 
                    >
                        <div className="align-items-center d-flex drop-message flex-column">

                            <div className="upload-icon"> </div>
                            {element.value ? <img src={element.value} style={element.settings} alt="picture" /> 
                            : image ? <img src={image} style={element.settings}  alt="pic"  /> :
                                <>
                                    <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
                                        panorama
                             </span>
                                    <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="modal"  ref={modalRef}>
    <div className="overlay"></div>
    <span className="close">X</span>
    <div className="modal-image" ref={modalImageRef}></div>
</div> */}

        </div>
        // </div>
    )
}

export default connect(
    (state) => {
        return {
            user: state.user
        }
    },
    (dispatch) => {
        return {
            // movingElement:(elementId) => { dispatch(setValueElement({ value: newValue })) },
            setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
            setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) },
             setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
             elementInEditing: function (id) { dispatch(elementInEditing({ id: id })) },

        }
        // uploadImage: (files) => { dispatch(uploadImage(files)) }
    }

)(ImageUploader);