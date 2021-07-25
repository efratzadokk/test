
import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';

import { useDropzone, onDragOver } from 'react-dropzone'
import './video.css'
import { connect } from 'react-redux';
import $ from "jquery";
import {actions} from '../../redux/actions/funnel-try.action'

function VideoUploader(props) {
    const modalImageRef = useRef();
    const modalRef = useRef();
    const { element, setValueElement, setStyleImage, user } = props
    const [video, setVideo] = useState();
    const [file, setFile] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log(element.id)
    console.log(element)
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
        // debugger

     //   console.log('hhhhh'+files[0])
     console.log(files[0])

        if (validateFile(files[0])) {
            setFile(!file)
            let url = URL.createObjectURL(files[0]);
            props.setValueMe(url,'video')
             
            props.elementInEditing(element.id)
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
                    console.log('errrrrrrrrror'+err);
                    console.log(err);

                    // resolve(false)
                },
            });
        };
    }
    const validateFile = (file) => {
        // debugger
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
        $(`#inputFileImg${element.id}`).trigger('click')
    }
    const chooseImg = (e) => {
        // debugger
        const files = Array.from(e.target.files)
        console.log("files:", files)
        handleFiles(files)
    }
    const server_image = (val) => {
        setValueElement(val)
        setStyleImage('width', '100%')
        setStyleImage('height', '100%')
        props.elementInEditing(element.id)

  //      setStyleImage('opacity', '0.99')
    }
  const  local_image=(url)=>{
    //   debugger
    setStyleImage('width', '100%')
    setStyleImage('height', '100%')
   // setStyleImage('opacity', '0.5')
    setVideo(url)
  //  console.log(video)

    props.setValueMe(url,'value')
    //  console.log(element)
    //  console.log(element.id)
     props.elementInEditing(element.id)
    // console.log(element)
  }
 
  return (
    <div style={{width:'100%'}}>
        <input type="file" id={'inputFileImg'+element.id} className="d-none" onChange={(e) => chooseImg(e)}></input>
     {/* {} */}
         <div className="content" onDoubleClick={() => changeImgOnClick()}>
        <div className="container p-0" >
                    <div className="drop-container col-12 p-0" onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                        // onDrag={e => drag1(e)}
                        draggable="true" 
                        //  ondragstart="drag(event)" 
                    >
            
           
                    {/* <div className="align-items-center d-flex drop-message flex-column">

                        <div className="upload-icon"> </div> */}

                        {/* {element.value ? <img src={element.value} style={element.settings} alt="aaaaaa" /> : image ? <img src={image} style={element.settings} alt="aaaaaa" /> : */}
                                    
                        <div className="align-items-center d-flex drop-message flex-column"  style={{backgroundColor:element.backgroundColor , height:element.settings.height , width: element.settings.width  }} >

                                <div className="upload-icon"> </div>

                                {
                                element.value ?
                                <> 
                             

                            <ReactPlayer  
                            autoPlay={true} 
                            url ={video}
                            width={element.settings.width}
                            height={element.settings.height}
                            //style={{height: '200px', width: '200px'}}
                           // style={{width:element.settings.width, height:element.settings.height}}
                           config={{ file: { 
                            attributes: {
                              controlsList: 'nodownload',
                              width:element.settings.width, 
                              height:element.settings.height

                            }
                          }}}
                            playing={true}
                            playIcon={true}
                            controls={true}
                            
                            > 
 

         </ReactPlayer >   
                        </>: 
  
            
            video ?<> 


        <ReactPlayer
            className='react-player'
        autoPlay={true} 
                            url ={video}
                            playing={true}
                            playIcon={true}
                            controls={true}
                            width={element.settings.width}
                            height={element.settings.height}
                             style={{width:element.settings.width, height:element.settings.height}}
                             config={{ file: { 
                                attributes: {
                                  controlsList: 'nodownload',
                                  width:element.settings.width, 
                                  height:element.settings.height
    
                                }
                              }}}
                            


            ><playIcon/>
            </ReactPlayer>
            
                         </>:
                            <>
                                <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
                                        panorama
                             </span>
                                    <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
                                

                            </>
                        }
                    </div>
            
</div> </div> </div>
        {/* } */}

   
     </div>
)
}

export default connect(
(state) => {
    return {
        user: state.user,
        //elementInEditing:state.funnel
    }
},
(dispatch) => {
    return {
        setValueElement: (newValue) => { dispatch(actions.setValueElement({ value: newValue })) },
        setStyleImage: (property, newValue) => { dispatch(actions.setStyleImage({ property: property, value: newValue })) },
        setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
        elementInEditing: function (id) { dispatch(actions.elementInEditing({ id: id })) },

    }
 
}

)(VideoUploader);
