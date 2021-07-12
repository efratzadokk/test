
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/funnel-try.action'
import './menu.css'
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
                arrElements: []
            })
        }
        addSectioOnClick(newSection, numSections)
        changeMessage()
    }
    function setShowGrid(e) {
        debugger
        let c = e.target.checked;
        changeFlagBorderPart(c);
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
            {/* ----------------------------------------------------------- */}
            <div id="sections_select" className="d-flex flex-column">
                <div className="form-check m-2">
                    <input type="checkbox" className="form-check-input pointer" id="show_grid_checkbox" onClick={(e) => setShowGrid(e)} />
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
        }
    },
    (dispatch) => {
        return {
            addToArrSection: () => { dispatch({ type: '[funnel] ADD_TO_ARR_SECTION' }) },
            addSectioOnClick:  (newSection,id) =>{ dispatch(actions.addSection({newSection:newSection,id:id})) },
            changeFlagBorderPart: (newFlag)=> { dispatch(actions.setFlagBorderParts(newFlag)) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
        }
    },
)(Menu)
