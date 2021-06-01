import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDrag } from 'react-dnd'

function Ex(props){
   useEffect(() => {
     const iFrameWindow =  document.getElementById('calculation').contentWindow
     iFrameWindow.addEventListener("message", receiveMessageFromIndex, false);
    window.addEventListener("message", receiveMessageFromIndex, false);
    const dropArea = document.getElementById('drop-area');
    dropArea.addEventListener('dragover', (event) => {
        console.log("lll");
        event.stopPropagation();
        event.preventDefault();
        // Style the drag-and-drop as a "copy file" operation.
        event.dataTransfer.dropEffect = 'copy';
      });
      dropArea.addEventListener('drop', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const fileList = event.dataTransfer.files;
        console.log(fileList);
      });
      })
    //   const [{ isDragging }, drag] = useDrag({})
 const click=()=>
{
    const childFrameObj = document.getElementById('calculation');
    childFrameObj.contentWindow.postMessage(1233, '*'); //window.postMessage
}
function receiveMessageFromIndex ( event ) {
    console.log( 'I am an iframe, I accepted it:', event.data );
}
const clickD=(e)=>{
window.parent.postMessage(123,"*")
}
    return(
        <>
    <h1>Ex: {props.userName}</h1>
<iframe 
    style={{border:0,width:"70%",height:"70%",}}
    src='/model.htmlhttps://trello.com/b/F6yawDwd/leader-funnel-sari-haizler'
    id='calculation'
    onClick={() => clickD()}
    // onClick={()=>clickD()}
    //onLoad={this.sendToken}
/>
<button onDrag={e => clickD(e)} className="primary" id="drop-area" onDragover={e => clickD(e)} onClick={() => clickD()}>Click me</button>
    </>
    )
}
export default connect(
    (state)=>{
        return {
            userName: state.name
        }
    },
    null
) (Ex);