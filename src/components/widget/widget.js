import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './widget.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import { addElement, addElement1 } from '../../redux/actions/funnel.action'
import element from '../element/element';
import { setName } from '../../redux/actions/user.action';

function Widget(props) {
    const { numElement, changeMessage, addElement, addElement1 } = props
    const [settings, setSettings] = useState({})
    const [indexSection, setIndexSection] = useState()
    const [indexPart, setIndexPart] = useState()
    const [changePosition, setChangePosition] = useState()
    const [name, setName] = useState()
    const [valueWidget, setValueWidget] = useState({
        Title: '<h1 style="text-align:center">Title</h1>',
        Text: '<p style="text-align:center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\r\n magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd \r\ngubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetu \r\nsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\",\r\n</p>',
        Image: '',
        // Video:'https://www.youtube.com/watch?v=Ke90Tje7VS0',
        Video: '',
        Forms: '<form >form1</form>',//action="/action_page.php" method="get"
        Html: '',
        Button: ''
    })
    // {dropEffect: "move",
    //         indexPart: 0,
    //         indexSection: 0,
    //         name: "Drop"}
    const [{ isDragging }, drag] = useDrag({
        item: { name: props.name, type: ItemTypes.BOX },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        end: async (item, monitor) => {
            //////////////
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log(settings);
                setName(item.name)
                if (indexPart === dropResult.indexPart && indexSection === dropResult.indexSection)
                    props.addElement(name, valueWidget[item.name], indexSection, indexPart, numElement)
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
        // debugger
        // setSettings({tamar:"cohjkds"});
        // window.addEventListener("message", iframeFunctions, false);
        if (name) {

            props.addElement(name, valueWidget[name], indexSection, indexPart, numElement)

        }
        // console.log('dd', settings)
    }, [changePosition])
    const drag1 = (event) => {
        console.log("dragging!!!!")
        event.stopPropagation();
        event.preventDefault();
        // let x =1
        // x=JSON.stringify(event.target)
        // event.dataTransfer.setData("text", x);
        // event.originalEvent.dataTransfer.setData("foo",x)
        event.dataTransfer.dropEffect = 'move';
        addElement1(props.name, valueWidget[props.name])
      }
    // const click = (event) => {
    //     console.log("pp")
    //     event.stopPropagation();
    //     event.preventDefault();
    //     // Style the drag-and-drop as a "copy file" operation.
    //     event.dataTransfer.dropEffect = 'move';
    //     debugger
    //     addElement1(props.name, valueWidget[props.name])//params:{name:props.name,value:valueWidget[props.name]}
    //     //   props.iframe.contentWindow.postMessage( JSON.stringify({function:"add element" ,params:{name:props.name,value:valueWidget[props.name]}}), '*')
    // }
    return (
        <div ref={drag} className="d-flex pl-1 move" onDrag={e => drag1(e)} draggable="true" onDragStart="drag(event)" >
            <div className="newEelement col-1 d-flex justify-content-center p-1 px-3 my-3 " >
                <span class="material-icons">
                    {props.icon}
                </span>
            </div>
            <div className="mt-3 ml-2 p">
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default connect(
    (state) => {
        return {
            numElement: state.funnel.jsonPage.num_elements,
            // iframe: state.funnel.iframe
        }
    },
    (dispatch) => {
        return {
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            addElement: function (newElement, value, section, part, numElement) {
                dispatch(addElement({
                    type: newElement, value: value, section: section, part: part, id: numElement
                }))
            },
            addElement1: function (newElement, value) {
                dispatch(addElement1({ type: newElement, value: value }))
            },
        }
    }
)(Widget)