
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './widget.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import element from '../element/element';
import { setName } from '../../redux/actions/user.action';
// import STitle from '../s_title/stitle'
import Grid  from '@material-ui/core/Grid';
import {actions} from '../../redux/actions/funnel-try.action'



function Widget(props) {
    const { numElement,  addElement1,newVal } = props
    const [settings, setSettings] = useState({})
    const [indexSection, setIndexSection] = useState()
    const [indexPart, setIndexPart] = useState()
    const [changePosition, setChangePosition] = useState()
    const [name, setName] = useState()

    const [valueWidget, setValueWidget] = useState(
        newVal
        // Title: Title
        // Text: '<p style="text-align:center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. in fermentum risus felis non sapien. Pellentesque sed hendrerit eros. Vestibulum ac pulvinar diam, quis sodales arcu. Etiam nisl justo, consequat quis enim eget, ornare mollis erat.</p>',
        // Image: '',
        // // Video:'https://www.youtube.com/watch?v=Ke90Tje7VS0',
        // Video: '',
        // Forms: '<form >form1</form>',//action="/action_page.php" method="get"
        // Html: '',
        // Button: ''
    )


    const findMe=(myname)=>{
        debugger
        let obj = valueWidget.find(x => x.type === myname.toLowerCase());
       // console.log(obj)
        let index = valueWidget.indexOf(obj);
       // console.log(index)
      const tmp= valueWidget[index]
      console.log(tmp)


    return tmp

    }

    const [{ isDragging }, drag] = useDrag({
        
        item: { name: props.name, type: ItemTypes.BOX },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        end: async (item, monitor) => {
            //////////////
            debugger
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log(settings);
                setName(item.name)
                if (indexPart === dropResult.indexPart && indexSection === dropResult.indexSection)
                { debugger
                    props.addElement(name, findMe(props.name), indexSection, indexPart, numElement)
                }
                    else {
                    setIndexPart(dropResult.indexPart)
                    setIndexSection(dropResult.indexSection)
                    setChangePosition(!changePosition)
                }
            }
            ////////////////
        }
    })

    useEffect(() => {
        //  debugger
        // setSettings({tamar:"cohjkds"});
        // window.addEventListener("message", iframeFunctions, false);
        if (name) {

            props.addElement(name, findMe(props.name), indexSection, indexPart, numElement)
           // props.addElement(props.name, valueWidget[props.name], indexSection, indexPart, numElement)

        }
        // console.log('dd', settings)
    }, [changePosition])


        const drag1 = (event) => {

        console.log("dragging!!!!")
        event.stopPropagation();
        event.preventDefault();
   
        event.dataTransfer.dropEffect = 'move';
        debugger
        addElement1(props.name, findMe(props.name))
        props.setMonIndex(1)
   
    }
  
    return (
        <>
        
            {/* {!props.img ? <>
                <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
            <div className="newEelement col-1 d-flex justify-content-center p-1 px-3 my-3 " >
                <span class="material-icons">
                    {props.icon}
                </span>
            </div>

                <div className="mt-3 ml-2 p">
                    <p>{props.name}</p>
                </div> 
                </div>
                </> : */}
                <>
                <div ref={drag}   style={{marginBottom:'0px'}} onDrag={e => drag1(e)} draggable="true" ondragstart="drag(event)" >
                        <div  style={{textAlign:'center',height:'9vh'} }>
                        <img  id={(props.name=='Html' || props.name=='Gallery' ||props.name=='Form'||props.name=='Sharing')? "opc":""}
                       // id={(props.name=='Html' || props.name=='Gallery' ||props.name=='Form')? "opc":""} 
                        style={{height:'50%' , alignItems: 'center' , width:'50%' }} src={props.img} alt={props.name} ></img>
                      <div style={{textAlign:'center'}}> <label 
                        //className='d-flex flex-column align-items-center justify-content-center ' 
                         style={{paddingBottom:'0px',fontSize:'1vw'}}>{props.name}</label>
                          <hr style={{margin:'0'}}/>
                         </div> 
                       
                    </div>
                </div>
                </>
                {/* } */}

        </>
    )


}
export default connect(
    (state) => {
        return {
            numElement: state.funnel.jsonPage.num_elements,
            // iframe: state.funnel.iframe
            newVal: state.funnel.newVal,
            newElementTypeAndValue: state.funnel.newElementTypeAndValue
        }
    },
    (dispatch) => {
        return {
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            addElement:  (newElement, value, section, part, numElement)=> {
                dispatch(actions.addElement({
                    type: newElement, value: value, section: section, part: part, id: numElement
                }))
            },
            addElement1:  (newElement, value)=> {
                dispatch(actions.addElement1({ type: newElement, value: value }))
            },
            setMonIndex: (idx)=>{dispatch(actions.setMonIndex(idx))},

        }
    }
)(Widget)