// // import React, { useState, useRef } from 'react';
// // import { useDropzone, onDragOver } from 'react-dropzone'
// // import { connect } from 'react-redux';
// // import { setValueElement,setStyleImage, elementInEditing } from '../../redux/actions/funnel.action'
// // import './editImg.css'

// // function EditImg(props) {
// //     const {styleImage,element,ImgOnEdit,setValueElement,setStyleImage}=props
// //     const setWidthImage = (value)=>{
// //         setStyleImage('width',value+'%')
// // console.log(value)
// //     }
// //     const setHeightImage =(value)=>{
// //         setStyleImage('height',value+'px')
// //     }
// //     const  setOpacityImage=(value)=>{
// //         setStyleImage('opacity',value)
// //     }
// //     return (
// //         <>
// //         <label for="">Image width</label>
// //           <input type="range" className="slider" 
// //         //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
// //            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
// //            onChange={(e) => setWidthImage(e.target.value)}
// //             min="0" max="100" step="1" />
// //                <label for="">Image height</label>
// //           <input type="range" className="slider" 
// //         //   defaultValue={styleImage.height.replace('px','')}
// //            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
// //            onChange={(e) => setHeightImage(e.target.value)}
// //             min="0" max="800" step="1" />
// //         {/* <label for="">size</label>
// //         <input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */}
// //         <label for="">Image transparency</label>
// //         <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" defaultValue={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
// //          onChange={(e) => setOpacityImage(e.target.value)} />
// //    </>
// //     )
// // }

// // export default connect(
// //     (state) => {
// //         return {
// //             styleImage: state.funnel.elementInEditing.settings
// //         }
// //     },
// //     (dispatch) => {
// //         return {           
// //              setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) }}
// //     }
// // )(EditImg)


// import React, { useState, useRef } from 'react';
// import { useDropzone, onDragOver } from 'react-dropzone'
// import { connect } from 'react-redux';
// import { setValueElement,setStyleImage,setValueMe } from '../../redux/actions/funnel.action'
// import './editImg.css'
// import AlignB from '../../assets/AlignB.svg'
// import AlignL from '../../assets/AlignL.svg'
// import AlignM from '../../assets/AlignM.svg'
// import AlignR from '../../assets/AlignR.svg'
// import AlignT from '../../assets/AlignT.svg'
// import AMid from '../../assets/AMid.svg'
// import Image from '../../assets/Image.svg'
// import Opacity from '../../assets/opacity.svg'
// import Grid  from '@material-ui/core/Grid';
// // import PanoramaIcon from '@material-ui/icons/Panorama';
// import $ from "jquery";

// //import { IoMdImage } from "react-icons/io";


// import { Col, Row, Container } from "react-bootstrap";
// function EditImg(props) {
//     const {styleImage,element,ImgOnEdit,setValueElement,setStyleImage,elementInEditing}=props
//     const [file, setFile] = useState(false);
//     const [image, setImage] = useState();

//     console.log(ImgOnEdit)
//  //   console.log(element)
//  //   console.log(elementInEditing)
//     const setWidthImage = (value)=>{
//         setStyleImage('width',value+'%')
// //console.log(value)

//    }
//     const setHeightImage =(value)=>{
//         setStyleImage('height',(4*value)+'px')
//     }
//     const  setOpacityImage=(value)=>{
//         setStyleImage('opacity',value)
//     }
//     const chooseImg = (e) => {
//         debugger
//         if(e.target.files[0])
//         {
//         const files = Array.from(e.target.files)
//         console.log("files:", files)
//         handleFiles(files)
//         }
//     }
//     const handleFiles = async (files) => {
//         debugger
//         console.log(files[0])
//         if (validateFile(files[0])) {
//             setFile(!file)
//             let url = URL.createObjectURL(files[0]);
//            // console.log(url)
//             local_image(url)
//             const myFile = new FormData()
//             myFile.append("file", files[0])
//             console.log(myFile.get('file'))
//             console.log(image)
//             console.log(files)
   
//             // $.ajax({
//             //     type: "POST",
//             //     url: `/api/uploadFile/${user.userId}/${user.userName}`,
//             //     headers: {
//             //         Authorization: 'view'
//             //     },
//             //     data: myFile,
//             //     processData: false,
//             //     contentType: false,
//             //     success: await function (data) {
//             //         console.log(data);
//             //         // data.data ?
//             //             console.log(data)
//             //             server_image(data)
//             //         //     : alert('error')
//             //         // return data.data.url
//             //         // resolve(data.data.url)
//             //     },
//             //     error: await function (err) {
//             //         alert(err);
//             //         // return false
//             //         // resolve(false)
//             //     },
//             // });
//         };
//     }
//     const  local_image=(url)=>{
//         debugger
//       setStyleImage('width', '100%')
//       setStyleImage('height', '100%')
//       setStyleImage('opacity', '0.99')
//       setImage(url)
//     //  console.log(image)
//       console.log(url)
//       props.setValueMe(url,'image')
//       //  console.log(element)
//       //  console.log(element.id)
//        props.elementInEditing(element.id)
//       // console.log(element)
  
  
  
//     }
//     const validateFile = (file) => {
//         const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
//         if (validTypes.indexOf(file.type) === -1) {
//             return false;
//         }
//         console.log("yes")
//         return true;
//     }
    
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
//         debugger
//         e.preventDefault();
//         const files = e.dataTransfer.files;
//         console.log(e);
//         if (files.length) {
//             handleFiles(files)
//         }
//     }
//     const changeImgOnClick = (e) => {
        
//         console.log(e)
//        // console.log(e.target.value);
//         $(`#inputFileImg${element.id}`).trigger('click')
//     }
//    const  twoCalls = e => {
//         setWidthImage(e.target.value)
//         setHeightImage(e.target.value)
//       }

//     // const margin=(c)=>{
//     //     if(c=='left')

//     // }
//     return (
//         <>
//         {/* <label for="">Image width</label>
//           <input type="range" className="slider" 
//         //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
//            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//            onChange={(e) => setWidthImage(e.target.value)}
//             min="0" max="100" step="1" />
//                <label for="">Image height</label>
//           <input type="range" className="slider" 
//         //   defaultValue={styleImage.height.replace('px','')}
//            id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//            onChange={(e) => setHeightImage(e.target.value)}
//             min="0" max="800" step="1" /> 


//         {/* yavait pas// <label for="">size</label> */}
//         {/* yavait pas //<input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */} 
        
        
//         {/* <label for="">Image transparency</label>
//         <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" defaultValue={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
//          onChange={(e) => setOpacityImage(e.target.value)} /> */}
// <div>
             
           
//          </div>
// <Container>
//   <Row>Image </Row>
//   <hr/>
//   <Row>
//   {ImgOnEdit.value ?
//   <>
//    {/* <input type="file" id={'inputFileImg'+element.id} className="d-none" onChange={(e) => chooseImg(e)}></input> */}
//     <img style={{ width: "10vw", height: "10vh", margin: "0 15%" }} src={ImgOnEdit.value}  alt="Image"></img>
//   </>: 
//   <>
//    <input type="file"  className="d-none" onChange={(e) => chooseImg(e)}></input>
//       <span class="material-icons-outlined" style={{ fontSize: '5rem', marginLeft: 'auto', marginRight: 'auto'}} >
//           panorama
// </span>
// <div className="content" onDoubleClick={() => changeImgOnClick()}>
//                 <div className="container p-0">
//                     <div className="drop-container col-12 p-0" onDragOver={dragOver}
//                         onDragEnter={dragEnter}
//                         onDragLeave={dragLeave}
//                         onDrop={fileDrop}
//                         // onDrag={e => drag1(e)}
//                         draggable="true" 
//                         //  ondragstart="drag(event)" 
//                     >
//                         <div className="align-items-center d-flex drop-message flex-column">

//                             <div className="upload-icon"> </div>
//                             {/* {element.value ? <img src={element.value} style={element.settings} alt="picture" /> 
//                             : image ? <img src={image} style={element.settings}  alt="pic"  /> :
//                                 <>
//                                     <span class="material-icons-outlined" style={{ fontSize: '5rem' }} >
//                                         panorama
//                              </span>
//                                     <p className="m-0 text-center">Drag & Drop files here or click to upload</p>
//                                 </>
//                             } */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//       {/* <p className="m-0 text-center">Drag & Drop files here or click to upload</p> */}
//   </>
// }
//   </Row>
//   <hr/>

//   <Grid container direction="row" style={{height:"15px"}} >
//                 {/* <Grid item md={1}/> */}
//                 <Grid item md={1} sm={1}>  <img src={Image} style={{width:'40px', height:'30px',position:'absolute' ,left:'12px'}}></img></Grid>
//                 <Grid item md={2} sm={2} ></Grid>
//                 <Grid item md={9} sm={9}>  
//                 <input type="range" className="slider" data-toggle="tooltip" data-placement="bottom" 
//  onChange={twoCalls} min="0" max="100" step="1" /></Grid>
//                 </Grid>
 

//   {/* <Row>
//       {/* width */}
//   {/* <Col sm='1' md='1'> <img src={Image}/></Col>
//  <Col sm={{span: 9, offset: 1}}>
//  <input type="range" className="slider"  id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
//  onChange={twoCalls} */}
//     {/* // {setWidthImage(e.target.value) setHeightImage(e.target.value)}}
//             min="0" max="100" step="1" /> */}
// {/* 
//  </Col> */}



//   {/* </Row> */} 
//   <hr/>
// <div>
//     Alignement
// </div>
// {/* <Row>
//  {/* <Col sm='1'><img src={AlignB}/></Col>
// <Col  sm='1'><img src={AMid}/></Col>
// <Col  sm='1'><img src={AlignT}/></Col> */}


// {/* <Col  sm='1'><img src={AlignL}/></Col>
// <Col  sm='1'><img src={AlignM}/></Col>
// <Col  sm='1'><img src={AlignR}/></Col>

// </Row> */} 

// <Grid container direction="row" style={{height:"10px"}} >
//                 {/* <Grid item md={1}/> */}
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={AlignL} ></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={AlignM} onClick={e=> props.setValueMe('center','alignItem')}></img></Grid>
//                 <Grid item md={2}>  <img style={{ alignItems: "right" }} src={AlignR} onClick={e=> props.setValueMe('right','alignItem')}></img></Grid>

          
                    
//     </Grid>


// <hr/>
// <div>
//     Opacity
// </div>
// <Row>
// <Col sm='1' md='1'> <img src={Opacity}/></Col>
// <Col>

//         <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" defaultValue={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
//          onChange={(e) => setOpacityImage(e.target.value)}/>
// </Col>
// </Row>
// </Container>
    
          

//    </>
//     )
// }

// export default connect(
//     (state) => {
//         return {
//             styleImage: state.funnel.elementInEditing.settings,
//             elementInEditing: state.funnel.elementInEditing,

//         }
//     },
//     (dispatch) => {
//         return {           
//              setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) },
//             setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) }
//         }
//     }
// )(EditImg)

import React, { useState, useRef } from 'react';
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-redux';
import { setValueElement,setStyleImage,setValueMe } from '../../redux/actions/funnel.action'
import './editImg.css'
import AlignB from '../../assets/AlignB.svg'
import AlignL from '../../assets/AlignL.svg'
import AlignM from '../../assets/AlignM.svg'
import AlignR from '../../assets/AlignR.svg'
import AlignT from '../../assets/AlignT.svg'
import AMid from '../../assets/AMid.svg'
import Image from '../../assets/Image.svg'
import Opacity from '../../assets/opacity.svg'
import Grid  from '@material-ui/core/Grid';
// import PanoramaIcon from '@material-ui/icons/Panorama';

//import { IoMdImage } from "react-icons/io";
//------------------------------------moi
import Cloud from '../../assets/cloud.png'
import $ from "jquery";


import { Col, Row, Container } from "react-bootstrap";



function EditImg(props) {
    const {styleImage,element,ImgOnEdit,setValueElement,setStyleImage,elementInEditing}=props
console.log(elementInEditing)
    console.log(ImgOnEdit)
 //   console.log(element)
 //   console.log(elementInEditing)
    const setWidthImage = (value)=>{
        setStyleImage('width',value+'%')
//console.log(value)

   }
    const setHeightImage =(value)=>{
        setStyleImage('height',(value)+'%')
    }
    const  setOpacityImage=(value)=>{
        setStyleImage('opacity',value)
    }

   const  twoCalls = e => {
        setWidthImage(e.target.value)
        setHeightImage(e.target.value)
      }

    // const margin=(c)=>{
    //     if(c=='left')

    // }

    const changePic=(e)=>
    {
        $(`#inputFileImg${ImgOnEdit.id}`).trigger('click')
        
    }
    return (
        <>
        {/* <label for="">Image width</label>
          <input type="range" className="slider" 
        //   defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')}
           id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
           onChange={(e) => setWidthImage(e.target.value)}
            min="0" max="100" step="1" />
               <label for="">Image height</label>
          <input type="range" className="slider" 
        //   defaultValue={styleImage.height.replace('px','')}
           id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
           onChange={(e) => setHeightImage(e.target.value)}
            min="0" max="800" step="1" /> 


        {/* yavait pas// <label for="">size</label> */}
        {/* yavait pas //<input type="text" className="form-control input " value="" id="" data-toggle="tooltip" data-placement="bottom" placeholder=""   />  */} 
        
        
        {/* <label for="">Image transparency</label>
        <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" defaultValue={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
         onChange={(e) => setOpacityImage(e.target.value)} /> */}
<div>
             
           
         </div>
<Container>
  <Row>Image </Row>
  <hr/>
  <Row >
  {ImgOnEdit.value ?  <img style={{ width: "150px", height: "90px", margin: "0 9%" }} src={ImgOnEdit.value}  alt="Image"></img>
  : 
  <>
      <span class="material-icons-outlined" style={{ fontSize: '5rem', marginLeft: 'auto', marginRight: 'auto'}} >
          panorama
</span>
      {/* <p className="m-0 text-center">Drag & Drop files here or click to upload</p> */}
  </>


}

  </Row>
  <Row><img onDoubleClick={changePic} style={{width:' 20px', height:'15px' ,position:'absolute' ,left:'25px'}}src={Cloud} alt='cloud'/> </Row>
  <hr/>
  <div>
    Size
</div>
  <Grid container direction="row" style={{height:"15px"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={1} sm={1}>  <img src={Image} style={{width:'40px', height:'30px',position:'absolute' ,left:'12px'}}></img></Grid>
                <Grid item md={1} sm={1} ></Grid>
                <Grid item md={8} sm={7}>  
                <input type="range" className="slider" data-toggle="tooltip" 
              defaultValue='100'
              onChange={twoCalls} min="10" max="100" step="1"  /></Grid>
               <Grid item md={1}/>

        <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{ImgOnEdit.settings.height? ImgOnEdit.settings.height.slice(0,-1) : "" }</p> </Grid>
     
    </Grid>
 

  {/* <Row>
      {/* width */}
  {/* <Col sm='1' md='1'> <img src={Image}/></Col>
 <Col sm={{span: 9, offset: 1}}>
 <input type="range" className="slider"  id="" data-toggle="tooltip" data-placement="bottom" placeholder="" 
 onChange={twoCalls} */}
    {/* // {setWidthImage(e.target.value) setHeightImage(e.target.value)}}
            min="0" max="100" step="1" /> */}
{/* 
 </Col> */}



  {/* </Row> */} 
  <hr/>
<div>
    Alignement
</div>
{/* <Row>
 {/* <Col sm='1'><img src={AlignB}/></Col>
<Col  sm='1'><img src={AMid}/></Col>
<Col  sm='1'><img src={AlignT}/></Col> */}


{/* <Col  sm='1'><img src={AlignL}/></Col>
<Col  sm='1'><img src={AlignM}/></Col>
<Col  sm='1'><img src={AlignR}/></Col>

</Row> */} 

<Grid container direction="row" style={{height:"10px"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={2}>  <img  src={AlignL} onClick={e=> props.setValueMe('left','textAlign')} ></img></Grid>
                <Grid item md={2}>  <img  src={AlignM} onClick={e=> props.setValueMe('center','textAlign')}></img></Grid>
                <Grid item md={2}>  <img  src={AlignR} onClick={e=> props.setValueMe('right','textAlign')}></img></Grid>

          
                    
    </Grid>


<hr/>
<div>
    Opacity
</div>
{/* <Row>
<Col sm='1' md='1'> <img src={Opacity}/></Col>
<Col>

        <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" value={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.0001"
         onChange={(e) => setOpacityImage(e.target.value)}/>
</Col>
</Row> */}
<Grid container direction="row" style={{height:"15px"}} >
                {/* <Grid item md={1}/> */}
                <Grid item md={1} sm={1}>  <img src={Opacity} style={{width:'20px', height:'20px',position:'absolute' ,left:'20px'}}></img></Grid>
                <Grid item md={1} sm={1} ></Grid>
                <Grid item md={8} sm={7}>  
                <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" value={styleImage.opacity} placeholder="" min="0" max="0.99" step="0.01"
         onChange={(e) => setOpacityImage(e.target.value)}/>
              </Grid>
               <Grid item md={1}/>

        <Grid item md={1} sm={1} > <p style={{position:'fixed', buttom:'0px'}}>{ImgOnEdit.settings.opacity? ImgOnEdit.settings.opacity : "" }</p> </Grid>
     
    </Grid>



</Container>
    
          

   </>
    )
}

export default connect(
    (state) => {
        return {
            styleImage: state.funnel.elementInEditing.settings,
            elementInEditing: state.funnel.elementInEditing,

        }
    },
    (dispatch) => {
        return {           
             setStyleImage: (property, newValue) => { dispatch(setStyleImage({ property: property, value: newValue })) },
            setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) }
        }
    }
)(EditImg)