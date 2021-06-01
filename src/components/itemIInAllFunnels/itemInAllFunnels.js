import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setHrefButton } from '../../redux/actions/funnel.action'
import './itemInAllFunnels.css'
function ItemInAllFunnels(props) {
    const { item ,nameUser,urlPage} = props
    const [bgImg,setBgImg]=useState(JSON.parse(item.json).image_funnel)
    const openSelectedFunnel=()=>{
        //////////
        window.open(`${urlPage}/${nameUser}/${item.name}`)
    }
    return (
        <>
            <div className="card cardItemInAllFunnels col-md-3 mb-3 text-center px-3" name="0" onClick={()=>openSelectedFunnel()}>
                <div className="card-body element" style={{backgroundImage:`url(${bgImg})`}}>
                    <h5 class="card-title"></h5>
                </div>
                <div className="card-footer text-muted font-weight-bold">
                    {item.name}
                </div>
            </div>
            {/* <div className="card cardItemInAllFunnels col-md-3 mb-3 text-center">
<div  className="itemInAllFunnels"> {item.name}</div>
           </div> */}
        </>
    )
}

export default connect(
    (state) => {
        return {
            nameUser: state.user.userName,
            urlPage:state.funnel.urlPage
        }
    },
    (dispatch) => {
        return {
            // setHrefButton:(newValue)=>{dispatch(setHrefButton({value:newValue}))}
        }
    }
)(ItemInAllFunnels)