import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';

// import ReactPlayer from 'react-player'
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
//         debugger
//         const files = e.dataTransfer.files;
//         console.log(e);
//         if (files.length) 
//         {   
//             console.log('III'+files.length)
//             console.log('AAMM '+files)
//             handleFiles(files)
//         }
//     }
//     const handleFiles = async (files) => {
//         debugger
//         console.log('Iam'+files[0])
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
//                 url: `https://funnel.dev.leader.codes/api/uploadFile/${user.userId}/${user.userName}`,
//                 headers: {
//                     Authorization: 'view'
//                 },
//                 data: myFile,
//                 processData: false,
//                 contentType: false,
//                 success: await function (data) {
//                     console.log('success!!:)'+data);
//                     // data.data ?
//                         console.log(data)
//                         server_image(data)
//                     //     : alert('error')
//                     // return data.data.url
//                     // resolve(data.data.url)
//                 },
//                 error: await function (err) {
//                     alert('sad me:('+err);
//                     // return false
//                     // resolve(false)
//                 },
//             });
//         };
//     }
//     const validateFile = (file) => {
//         // const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];

//         const validTypes = ['video/mp4','image/jpg'];
//         if (validTypes.indexOf(file.type) === -1) {
           
//             console.log("noooo")
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
//     // אני ירקתי
//     // const server_image = (val) => {
//     //     setValueElement(val)
//     //     setStyleImage('width', '100%')
//     //     setStyleImage('height', '400px')
//     //     setStyleImage('opacity', '0.99')
//     // }
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
//             setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
//             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }
//         }
//         // uploadImage: (files) => { dispatch(uploadImage(files)) }
//     }

// )(ImageUploader);


import { useDropzone, onDragOver } from 'react-dropzone'
import './video.css'
import { connect } from 'react-redux';
import { uploadImage, setValueElement, setStyleImage } from '../../redux/actions/funnel.action'
import $ from "jquery";

function VideoUploader(props) {
    const modalImageRef = useRef();
    const modalRef = useRef();
    const { element, setValueElement, setStyleImage, user } = props
    const [video, setVideo] = useState();
    const [file, setFile] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const dragOver = (e) => {
        e.preventDefault();
    }
    // const  playVideo=()=> {
    //     // $("#video").refs.vidRef.play()
    //     $("#video").play()

    //     // this.refs.vidRef.play();
    // }
    // useEffect(){

    // }
    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(e);
        if (files.length) {
            console.log('III'+files.length)
            console.log('AAMM '+files)
            handleFiles(files)
        }
    }
    const handleFiles = async (files) => {
        debugger

        console.log('hhhhh'+files[0])
        if (validateFile(files[0])) {
            setFile(!file)
            let url = URL.createObjectURL(files[0]);
            local_image(url)
            const myFile = new FormData()
            myFile.append("file", files[0])
            console.log(myFile.get('file'))
            console.log(video)
            console.log(files)

            $.ajax({
                type: "POST",
                url: `https://funnel.dev.leader.codes/api/uploadFile/${user.userId}/${user.userName}`,
                headers: {
                    Authorization: 'view'
                },
                data: myFile,
                processData: false,
                contentType: false,
                success: await function (data) {
                    console.log('success'+data);
                    // data.data ?
                        console.log(data)
                        server_image(data)
                    //     : alert('error')
                    // return data.data.url
                    // resolve(data.data.url)
                },
                error: await function (err) {
                    alert('errrrrrrrrror'+err);
                    // return false
                    // resolve(false)
                },
            });
        };
    }
    const validateFile = (file) => {
        debugger
        const validTypes = ['video/mp4','image/jpeg'];
        // console.log(file.type)
        
        if (validTypes.indexOf(file.type) === -1) {
            console.log("no")
            return false;

        }
        console.log("yes")
        return true;
    }
    const changeImgOnClick = () => {
        $('#inputFileImg').trigger('click')
    }
    const chooseImg = (e) => {
        debugger
        const files = Array.from(e.target.files)
        console.log("files:", files)
        handleFiles(files)
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
    setVideo(url)
  }
 
  return (
    <div>
        <input type="file" id="inputFileImg" className="d-none" onChange={(e) => chooseImg(e)}></input>
        { <div className="content" onClick={() => changeImgOnClick()}>
            {/* <div className="container p-0">
                <div className="drop-container col-12 p-0" onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                > */} 
                    {/* <div className="align-items-center d-flex drop-message flex-column">

                        <div className="upload-icon"> </div> */}

                        {/* {element.value ? <img src={element.value} style={element.settings} alt="aaaaaa" /> : image ? <img src={image} style={element.settings} alt="aaaaaa" /> : */}


                        {element.value ?
                        <> 
<ReactPlayer
      className='react-player'
     playing url ={video}
      width='100%'
      height='100%'
      controls={true}
      light={true}
    //   controls={controls}
    //   onClick={this.handleClickPreview}

    />
                          <Player autoPlay={true}    width='100%'
      height='100%'                          
                         onPlay={$(this).css('padding-top','0px')}
    src={element.value}  style={element.settings} type="video/mp4" alt="aaaaaa" > 
         <button >PLAY</button>  
         <source src={video} ></source>
         </Player>   
                        </>: 
  
  
  video ?<> 


<ReactPlayer
      className='react-player'
    //   playing url='https://drive.google.com/file/d/1HCWrX5Xky6QqAafpipiYy9i-IgVLNFDk/view?usp=sharing'
    //   url="blob:http://localhost:3000/ba814866-1c54-48b6-bdc5-229a9d2feddb"
    playing url={video}
    width='100%'
      height='100%'
      controls={true}
      playing={false}
      playIcon={false}
    //   loop={true} 


    ><playIcon/>
    </ReactPlayer>
    


                         {/* <Player    width='100%'
                     height='100%' autoPlay={true}   
                          onPlay={$(this).css('padding-top','0px')}
                         src={video} style={element.settings} type="video/mp4" alt="aaaaaa" >
                          <source src={video} ></source>
                          <BigPlayButton position="center" />
                          <LoadingSpinner />

                            </Player>    */}
                         {/* <button onClick={playVideo()}>PLAY</button>  */}
                         </>:
                            <>
                                <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
                                    panorama
                         </span>
                                <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
                    {/* <ReactPlayer url='blob:http://localhost:3000/f203efff-c31e-4404-8ec7-e6bcdd2bf000' /> */}

                            </>
                        }
                    </div>
            

        /* <div className="modal"  ref={modalRef}>
<div className="overlay"></div>
<span className="close">X</span>
<div className="modal-image" ref={modalImageRef}></div>
</div> */}

   
     </div>
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
        setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
        setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }
    }
    // uploadImage: (files) => { dispatch(uploadImage(files)) }
}

)(VideoUploader);
//     return (
//         <div>
//             <input type="file" id="inputFileImg" className="d-none" onChange={(e) => chooseImg(e)}></input>
//             <div className="content" onClick={() => changeImgOnClick()}>
//                 <div className="container p-0">
//                     <div className="drop-container col-12 p-0" onDragOver={dragOver}
//                         onDragEnter={dragEnter}
//                         onDragLeave={dragLeave}
//                         onDrop={fileDrop}
//                     >
//                         <div className="align-items-center d-flex drop-message flex-column">

//                             <div className="upload-icon"> </div>
//                             {element.value ?<> 
//                             {/* <Player id="n123" autoPlay={true}  src={element.value}  style={element.settings} type="video/mp4" alt="aaaaaa"
//                             onStart={$(this).parent('div').css('padding-top','0%')} > 
                           
//                             <source src={video} ></source>
                            
//                                  </Player>  */}
//                                  <ReactPlayer className='react-player' playing url={video} width='100%' height='100%'  controls={true} playing={false} playIcon={false}><playIcon/></ReactPlayer>
//                             </>:
//                             //  video ?<> <Player autoPlay={true}  id="n123" src={video} style={element.settings} type="video/mp4" alt="aaaaaa"
//                             //  onStart={$(this).parent('div').css('padding-top','0%')} >
//                             //      <source src={video} ></source>
//                             //      </Player> 
//                             <>
//                             {/* <ReactPlayer className='react-player' playing url={video} width='100%' playIcon={false}  playing={false}  controls={true}  height='100%'><playIcon/></ReactPlayer> */}
                             
                              
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
//             setValueElement: (newValue) => { dispatch(setValueElement({ value: newValue })) },
//             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }
//         }
//         // uploadImage: (files) => { dispatch(uploadImage(files)) }
//     }

// )(VideoUploader);


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
//         debugger
//         const files = e.dataTransfer.files;
//         console.log(e);
//         if (files.length) 
//         {   
//             console.log('III'+files.length)
//             console.log('AAMM '+files)
//             handleFiles(files)
//         }
//     }
//     const handleFiles = async (files) => {
//         debugger
//         console.log('Iam'+files[0])
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
//                 url: `https://funnel.dev.leader.codes/api/uploadFile/${user.userId}/${user.userName}`,
//                 headers: {
//                     Authorization: 'view'
//                 },
//                 data: myFile,
//                 processData: false,
//                 contentType: false,
//                 success: await function (data) {
//                     console.log('success!!:)'+data);
//                     // data.data ?
//                         console.log(data)
//                         server_image(data)
//                     //     : alert('error')
//                     // return data.data.url
//                     // resolve(data.data.url)
//                 },
//                 error: await function (err) {
//                     alert('sad me:('+err);
//                     // return false
//                     // resolve(false)
//                 },
//             });
//         };
//     }
//     const validateFile = (file) => {
//         // const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];

//         const validTypes = ['video/mp4','image/jpg'];
//         if (validTypes.indexOf(file.type) === -1) {
           
//             console.log("noooo")
//             return false;
//         }
//         console.log("yes")
//         return true;
//     }
//     const changeImgOnClick = () => {
//         $('#inputFileImg').trigger('click')
//     }