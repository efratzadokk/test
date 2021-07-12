import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import ItemInAllFunnels from '../itemIInAllFunnels/itemInAllFunnels';
import './allFunnels.css'
function AllFunnels(props) {
    const { allFunnels } = props
    return (
        <>
            <div id='divAllFunnels'className='row no-gutters py-3 '>
                {allFunnels.map((item, i) => {
                    return (
                        <>
                            <ItemInAllFunnels item={item}></ItemInAllFunnels>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default connect(
    (state) => {
        return {
            allFunnels: state.funnel.allFunnels
        }
    },
    (dispatch) => {
        return {
        }
    }
)(AllFunnels)