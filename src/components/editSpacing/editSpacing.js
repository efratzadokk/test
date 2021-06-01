import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setHrefButton } from '../../redux/actions/funnel.action' 
import { setValueElement } from '../../redux/actions/funnel.action'
import { useDropzone, onDragOver } from 'react-dropzone'
import { connect } from 'react-spacer';
import { useSelector, useDispatch } from 'react-redux';


export default function MySpace(props) {

    const myCampaign = useSelector(state => state.mainReducer.myCampaign);
    let item = myCampaign.objects.filter(f => f.index === props.index);
    let index;
    if (item.length) {
        item = item[0];
        index = myCampaign.objects.indexOf(item);
    }
    const dispatch = useDispatch();


    return (
        <div style={{
            backgroundColor:item.backgroundColor,
            marginTop:item.margin+"vh" ,
            marginBottom:item.margin+"vh" ,
            height:item.height+"vh"}}>
   </div>
    );
}
