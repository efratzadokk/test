import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeSection, setStyleSection } from '../../redux/actions/funnel.action'

function EditSection(props) {
    const { sectionInEditing, arrSections,iframe, indexSectionInEditing, setStyleSection } = props
    // const [editSection, setEditSection] = useState(arrSection[indexSectionInEditing])
    const setColor = (value) => {
        var hex = value.replace('#', '');
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var r = parseInt(hex.substring(0, 2), 16),
            g = parseInt(hex.substring(2, 4), 16),
            b = parseInt(hex.substring(4, 6), 16);
        debugger
        let obj={indexSection:indexSectionInEditing, property:'backgroundColor', val:'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')'}
        setStyleSection(obj)
        // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "set style of section", params: obj }), '*')
    }
    const setOpacity = (value) => {
        // setOpacityPage(value)
        debugger
        let obj={indexSection:indexSectionInEditing, property:'opacity', val:value}//(/[\d\.]+\)$/g, value + ')')}
        setStyleSection(obj)
        // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "set style of section", params: obj }), '*')

        // setStyleSection(indexSectionInEditing, 'backgroundColor', arrSections[indexSectionInEditing].settings.style.backgroundColor.replace(/[\d\.]+\)$/g, value + ')'));
    }
    return (
        <div className="card button_collapse p-0">
            <div className="card-header p-0" id="headingOne">
                <h5 className="m-0">
                    <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
                        data-target="#collapseSection" aria-expanded="false" aria-controls="collapseSection">
                        Section Setting
                        <span className="material-icons align-middle arrow-collapse">
                            keyboard_arrow_right
                        </span>
                    </button>
                </h5>
            </div>
            <div id="collapseSection" className="collapse show" name="0" aria-labelledby="headingOne"
                data-parent="#accordion">
                <div id="pageSetting-body" className="card-body p-2">
                    <label for="">Page Background Color</label>
                    {/* <input type="color" className="form-control input" defaultValue={arrSections&&arrSections[indexSectionInEditing].settings.style.backgroundColor} onChange={(e) => setColor(e.target.value)} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" /> */}
                    <input type="color" className="form-control input" onChange={(e) => setColor(e.target.value)} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" />
                    <label for="">Page Background Opacity</label>
                    {/* <input type="range" className="slider" id="" defaultValue={arrSections&&arrSections[indexSectionInEditing].settings.style.opacity} data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="0.99" step="0.0001" onChange={(e) => setOpacity(e.target.value)} /> */}
                    <input type="range" className="slider" id="" data-toggle="tooltip" data-placement="bottom" placeholder="" min="0" max="0.99" step="0.0001" onChange={(e) => setOpacity(e.target.value)} />
                </div>
            </div>
        </div>)
}
export default connect(
    (state) => {
        return {
            indexSectionInEditing: state.funnel.indexSectionInEditing,
            arrSections: state.funnel.jsonPage.arrSections,
        //    iframe: state.funnel.iframe,
        }
    },
    (dispatch) => {
        return {
            setStyleSection: (obj) => { dispatch(setStyleSection(obj)) }
            // setStyleSection: (indexSection, property, value) => { dispatch(setStyleSection({ indexSection: indexSection, property: property, value: value })) }
        }
    }

)(EditSection)