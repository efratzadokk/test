// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import './grids.css'
// import { addSection, setFlagBorderParts, addElement } from '../../redux/actions/funnel.action'
// import { useDrag } from 'react-dnd'
// import { ItemTypes } from '../../ItemTypes'
// import Widget from '../widget/widget'
 
// import Grid  from '@material-ui/core/Grid';
// function Grids(props) {
//     const { flagBorderParts, numSections, urlPage, userName, changeMessage, name, changeFlagBorderPart, addSectioOnClick } = props
//     function clickAddSection(numParts,styleG) {
//         let newSection = {
//             settings: { style: { backgroundColor: '' } },
//             arrParts: [],
//             id: numSections
//         }


//         for (let i = 0; i < numParts; i++) {
//             newSection.arrParts.push({
//                 settings: { style: {} },
//                 arrElements: [
//                 ]
//             })
//         }
//         // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "add section", params: newSection }), '*')
//         addSectioOnClick(newSection, numSections,styleG)
//         changeMessage()
//     }
//     function setShowGrid(e) {
//         debugger
//         let c = e.target.checked;
//         changeFlagBorderPart(c);
//         // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "set show grid", params: c }), '*')
//         changeMessage()
//     }

//     // const [{ isDragging }, drag] = useDrag({
//     //     item: { type: ItemTypes.BOX },
//     //     collect: (monitor) => ({
//     //         isDragging: !!monitor.isDragging()
//     //     }),
//     //     end: (item, monitor) => {
//     //         const dropResult = monitor.getDropResult();
//     //         if (item && dropResult) {
//     //             alert(`You dropped ${item.type} into ${dropResult.name}!`);
//     //             props.addElement('title')
//     //         }
//     //     }
//     // })
//     // const opacity = isDragging ? 0.4 : 1;
//     return (
       

//         <>
  
// <Grid container direction="row" style={{height:"15%", marginButton:'0px'}}>

// <Grid item md={5} sm={5} > <div id="g1" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(2,'a')}></div> </Grid>
// <Grid item md={1} sm={1}></Grid>
// <Grid item md={5} sm={5} > <div id="g2" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(2 ,'b')}></div></Grid>

// </Grid>


// <Grid container direction="row" style={{height:"15%" , marginButton:'0px'}}>

// <Grid item md={5} sm={5} > <div id="g3" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(3,'c')}></div> </Grid>
// <Grid item md={1} sm={1}></Grid>
// <Grid item md={5} sm={5} > <div id="g4" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(3,'d')}></div></Grid>

// </Grid>
// <Grid container direction="row" style={{height:"15%", marginButton:'0px'}}>

// <Grid item md={5} sm={5} > <div id="g5" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(4,'e')}></div> </Grid>
// <Grid item md={1} sm={1}></Grid>
// <Grid item md={5} sm={5} > <div id="g6" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(3,'f')}></div></Grid>

// </Grid>
// <Grid container direction="row" style={{height:"15%", marginButton:'0px'}}>

// <Grid item md={5} sm={5} > <div id="g7" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(4,'g')}></div> </Grid>
// <Grid item md={1} sm={1}></Grid>
// <Grid item md={5} sm={5} > <div id="g8" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(9,'h')}></div></Grid>

// </Grid>
// <Grid container direction="row" style={{height:"15%", marginButton:'0px'}}>

// <Grid item md={5} sm={5} > <div id="g9" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(3,'i')}></div> </Grid>
// <Grid item md={1} sm={1}></Grid>
// <Grid item md={5} sm={5} > <div id="g10" className=" grid_imgs m-1 pointer" style={{width:'100%', height:'100%'}} onClick={() => clickAddSection(3,'j')}></div></Grid>

// </Grid>

// <Grid container direction="row" style={{height:"20px"}}>

// <Grid item md={2} sm={2} style={{marginTop:'5px'}}>     <input type="checkbox" id="show_grid_checkbox"  onClick={(e) => setShowGrid(e)} /> </Grid>
// <Grid item md={10} sm={10} style={{marginTop:'0px'}} >  <label id="monlabel"  for="show_grid_checkbox" style={{color:'grey' ,marginTop:'0px'}}>Show Grid Line</label> </Grid>
// </Grid>
       
       
       
//         </>
//     )
// }




// export default connect(
//     (state) => {
//         return {
//             flagBorderParts: state.funnel.borderPart,
//             numSections: state.funnel.jsonPage.num_sections,
//             urlPage: state.funnel.urlPage,
//             userName: state.user.userName,
//             name: state.funnel.name,
//             // iframe: state.funnel.iframe,
//         }
//     },
//     (dispatch) => {
//         return {
//             addToArrSection: () => { dispatch({ type: '[funnel] ADD_TO_ARR_SECTION' }) },
//             // addSectionInIframe:function(newSection) { dispatch(addSectionInIframe(newSection)) },
//             addSectioOnClick: function (newSection,id,s) { dispatch(addSection(newSection,id,s)) },
//             changeFlagBorderPart: function (newFlag) { dispatch(setFlagBorderParts(newFlag)) },
//             changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
//             // addElement: function (newElement, part) { dispatch(addElement({ type: newElement, section: 1 })) },
//         }
//     },
// )(Grids)


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './grids.css'
import { addSection, setFlagBorderParts, addElement } from '../../redux/actions/funnel.action'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import Widget from '../widget/widget'
 
import Grid  from '@material-ui/core/Grid';
function Grids(props) {
    const { flagBorderParts, numSections, urlPage, userName, changeMessage, name, changeFlagBorderPart, addSectioOnClick } = props
    function clickAddSection(numParts,styleG) {
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
        addSectioOnClick(newSection, numSections,styleG)
        changeMessage()
    }
    function setShowGrid(e) {
        debugger
        let c = e.target.checked;
        changeFlagBorderPart(c);
        // props.iframe.contentWindow.postMessage(JSON.stringify({ function: "set show grid", params: c }), '*')
        changeMessage()
    }

    return (
       

<div className="card button_collapse p-0" style={{width:'100%',height:'90%',marginTop:'2%'}}>


<Grid container direction="row" style={{height:"11vh", marginLeft:'3%',marginTop:'5%'}}>

<Grid item md={5} sm={5} > <div id="g1" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(2,'a')}></div> </Grid>
<Grid item md={1} sm={1}></Grid>
<Grid item md={5} sm={5} > <div id="g2" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(2 ,'b')}></div></Grid>

</Grid>


<Grid container direction="row" style={{height:"11vh" ,marginLeft:'3%' }}>

<Grid item md={5} sm={5} > <div id="g3" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(3,'c')}></div> </Grid>
<Grid item md={1} sm={1}></Grid>
<Grid item md={5} sm={5} > <div id="g4" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(3,'d')}></div></Grid>

</Grid>
<Grid container direction="row" style={{height:"11vh" ,marginLeft:'3%'}}>

<Grid item md={5} sm={5} > <div id="g5" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(4,'e')}></div> </Grid>
<Grid item md={1} sm={1}></Grid>
<Grid item md={5} sm={5} > <div id="g6" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(3,'f')}></div></Grid>

</Grid>
<Grid container direction="row" style={{height:"11vh" ,marginLeft:'3%'}}>

<Grid item md={5} sm={5} > <div id="g7" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(4,'g')}></div> </Grid>
<Grid item md={1} sm={1}></Grid>
<Grid item md={5} sm={5} > <div id="g8" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(9,'h')}></div></Grid>

</Grid>
<Grid container direction="row" style={{height:"11vh",marginLeft:'3%'}}>

<Grid item md={5} sm={5} > <div id="g9" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(3,'i')}></div> </Grid>
<Grid item md={1} sm={1}></Grid>
<Grid item md={5} sm={5} > <div id="g10" className=" grid_imgs m-1 pointer" style={{width:'90%', height:'100%'}} onClick={() => clickAddSection(3,'j')}></div></Grid>

</Grid>

<Grid container direction="row" style={{height:"20px"}}>
<Grid item md={1} sm={1}/>
<Grid item md={2} sm={2} style={{marginTop:'1%'}}>     <input type="checkbox" id="show_grid_checkbox"  onClick={(e) => setShowGrid(e)} style={{width:'1vw', height:'100%'}} /> </Grid>
<Grid item md={9} sm={9} style={{marginTop:'0px'}} >  <label id="monlabel"  for="show_grid_checkbox" style={{color:'grey' ,marginTop:'0px',fontSize:"1vw"}}>Show Grid Line</label> </Grid>
</Grid>
       
       
       
        </div>
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
            addSectioOnClick: function (newSection,id,s) { dispatch(addSection(newSection,id,s)) },
            changeFlagBorderPart: function (newFlag) { dispatch(setFlagBorderParts(newFlag)) },
            changeMessage: () => { dispatch({ type: '[funnel] CHANGE_MESSAGE' }) },
            // addElement: function (newElement, part) { dispatch(addElement({ type: newElement, section: 1 })) },
        }
    },
)(Grids)
