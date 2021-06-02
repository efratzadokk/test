import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './menu.css'
import { addSection, setFlagBorderParts, addElement } from '../../redux/actions/funnel.action'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import Widget from '../widget/widget'


function Menu(props) {
    const { flagBorderParts, numSections, urlPage, userName, changeMessage, name, changeFlagBorderPart, addSectioOnClick } = props
    function clickAddSection(numParts) {
        let newSection = {
            settings: { style: { backgroundColor: '' } },
            arrParts: [],
            id: numSections
        }
        for (let i = 0; i < numParts; i++) {
            newSection.arrParts.push({
                settings: { style: {} },
                arrElements: [
                ]
            })
        }
        // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "add section", params: newSection }), '*')
        addSectioOnClick(newSection, numSections)
        changeMessage()
    }
    function setShowGrid(e) {
        debugger
        let c = e.target.checked;
        changeFlagBorderPart(c);
        // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "set show grid", params: c }), '*')
        changeMessage()
    }

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.BOX },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.type} into ${dropResult.name}!`);
                props.addElement('title')
            }
        }
    })
    const opacity = isDragging ? 0.4 : 1;
    return (
        <div id="menu" className="col-md-3 pr-0">
            <button className="btn col-md-12 my-2 p-0" id="new_button">
                +
                New
            </button>
            <div id="sections_select" className="d-flex flex-column">
                <div className="form-check m-2">
                    {/* <input type="checkbox" className="form-check-input pointer" id="show_grid_checkbox" onChange={() => props.changeFlagBorderPart(!flagBorderParts)} /> */}
                    <input type="checkbox" className="form-check-input pointer" id="show_grid_checkbox" onClick={(e) => setShowGrid(e)} />
                    {/* <input type="checkbox" className="form-check-input pointer" id="show_grid_checkbox" onclick='handleClick(this);'></input>/> */}
                    <label className="form-check-label" for="show_grid_checkbox">Show Grid Line</label>
                </div>
                <div className="row justify-content-around no-gutters my-auto">
                    <div id="grid1" className="col-2 grid_imgs m-1 pointer" onClick={() => clickAddSection(1)}></div>
                    <div id="grid2" className="col-2 grid_imgs m-1 pointer" onClick={() => clickAddSection(2)}></div>
                    <div id="grid3" className="col-2 grid_imgs m-1 pointer" onClick={() => clickAddSection(3)}></div>
                    <div id="grid4" className="col-2 grid_imgs m-1 pointer" onClick={() => clickAddSection(4)}></div>
                </div>
            </div>
            <div id="elements_select" className="my-2 p-2 pl-4">
                <strong>Widget</strong>
                <Widget name="Gallery" icon="code"></Widget>

                <Widget name="Title"  tagWidget="h1" icon="title"></Widget>
                <Widget name="Text" tagWidget="p" icon="notes"></Widget>
                <Widget name="Image" icon="crop_original"></Widget>
                <Widget name="Form" icon="description"></Widget>
                <Widget name="Video" icon="videocam"></Widget>
                <Widget name="Html" icon="code"></Widget>
                <Widget name="Button" icon="code"></Widget>
                <Widget name="Spacer" icon="icon"></Widget>
                <Widget name="Form" icon="description"></Widget>
                <Widget name="Icon" icon="code"></Widget>
{/* <Widget name="Spacer" ></Widget> */}


                {/* <div className="d-flex" onClick={() => props.addElement('text')} >
                    <div className="newEelement col-1 d-flex justify-content-center p-1 px-3 my-3 " >
                        <span class="material-icons">
                            notes
                     </span>
                    </div>
                    <div className="mt-3 ml-2 p">
                        <p>Text</p>
                    </div> */}
            </div>
        </div >
    )
}










export default connect(
    (state) => {
        return {
            flagBorderParts: state.funnel.borderPart,
            numSections: state.funnel.jsonPage.num_sections,
            urlPage: state.funnel.urlPage,
            userName: state.user.userName,
            name: state.funnel.name,
            // iframe: state.funnel.iframe,
        }
    },
    (dispatch) => {
        return {
            addToArrSection: () => { dispatch({ type: '[funnel] ADD_TO_ARR_SECTION' }) },
            // addSectionInIframe:function(newSection) { dispatch(addSectionInIframe(newSection)) },
            addSectioOnClick: function (newSection,id) { dispatch(addSection(newSection,id)) },
            changeFlagBorderPart: function (newFlag) { dispatch(setFlagBorderParts(newFlag)) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            // addElement: function (newElement, part) { dispatch(addElement({ type: newElement, section: 1 })) },
        }
    },
)(Menu)
