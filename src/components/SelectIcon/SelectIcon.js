

import * as React from 'react'
import  { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/funnel-try.action'
//import { IconPicker } from 'react-fa-icon-picker'

import { useSelector, useDispatch } from 'react-redux';
import { useDropzone, onDragOver } from 'react-dropzone'
import $ from "jquery";
// import { actions } from '../Redux/Action/action';
import Picker from 'emoji-picker-react';

 function  SelectIcon(props)  {
  debugger

  // const { chosenColorIcon, chosenSizeIcon, setStyleIcon,styleIcon} = props
  // const { element, setValueElement, user } = props

  //const [value, setValue] = useState("FaSearch")
  //console.log(element);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [onEntr, setonEntr] = useState(true)
  const {element}=props
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setonEntr(!onEntr)
  };
const mac=()=>{
  setonEntr(!onEntr)
  console.log(onEntr)
}
  return (

    <div className='d-flex flex-column align-items-center justify-content-center m-2  y' style={{width:'100%', height:'100%' ,  textAlign:'right'}} >
    {chosenEmoji ? (
      <h1 onClick={()=>mac()} style={{ fontSize: element.fontSize+'px',opacity:element.opacity}} >{chosenEmoji.emoji}</h1>
    ) : (<>
      <span>No emoji Chosen</span>
    
      </>
    )}
    {/* {onEntr? <Picker onEmojiClick={onEmojiClick} />:""}
     */}
    {
      onEntr? <Picker onEmojiClick={onEmojiClick}/> :""
    }
    {/* <Picker onEmojiClick={onEmojiClick}  /> */}
  </div>
);
}

export default connect(
  (state) => {
      return {
          styleIcon: state.funnel.elementInEditing.settings
      }
  },
  (dispatch) => {
      return {      
        setValueElement: (newValue) => { dispatch(actions.setValueElement({ value: newValue })) },     
          }
  }
)(SelectIcon)






