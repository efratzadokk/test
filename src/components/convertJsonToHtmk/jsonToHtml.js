
// import {JsonTable} from 'react-json-to-html'

// // class Nested extends React.Component
//   function Nested(props) {
// const {json} = props 
//   const Css = {
//       jsonTr: {
//         height: '100px'
//       },
//       jsonTd: {
//         padding: '5px',
//         borderSpacing: '2px',
//         borderRadius: '5px'
//       },
//       rowSpacer: {
//         height: '2px'
//       },
//       rootElement: {
//         padding: '5px',
//         borderSpacing: '2px',
//         backgroundColor: '#BBBBBB',
//         fontWeight: 'bold',
//         fontFamily: 'Arial',
//         borderRadius: '5px'
//       },
//       subElement: {
//         padding: '5px',
//         borderSpacing: '2px',
//         backgroundColor: '#DDDDDD',
//         fontWeight: 'bold',
//         fontFamily: 'Arial',
//         borderRadius: '5px'
//       },
//       dataCell: {
//         borderSpacing: '2px',
//         backgroundColor: '#F1F1F1',
//         fontFamily: 'Arial',
//         borderRadius: '5px'
//       }
//     }
//   const jsonOne = {
//     "Server Name": "hjkj",
//     "Description": "bar",
//     "Specs": {
//       "IP": "10.100.99.101",
//       "MAC": "00:0a:ghh:9F:XX:16"
//     },
//     "Date": "Jan 1, 2018"
//   }
//     return (
//       <JsonTable prp={json}  css={Css}/>
//     )
  
// }

// export default Nested;

import {toHtml, toHtmlText} from "from-json-to-html";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import { connect } from 'react-redux';


  function JsonToHtml(props) {
    debugger
    const {jsonPage, jsonFunnel}=props
    console.log(JSON.parse(jsonFunnel))
    let generatedHtml = toHtml(JSON.parse(jsonFunnel));
    let generatedHtml1 = toHtml(jsonFunnel);
    console.log("generatedHtml1=",generatedHtml1)

    console.log("aaaa",generatedHtml)
    // let generatedHtml = jsonPage

   
     
      // console.log(jsonPage)

      return(
      <>{generatedHtml} </>
      )
  
            
  }
      


  export default connect(
        (state) => {
            return {
                allFunnels: state.funnel.allFunnels,
                jsonPage: state.funnel.jsonPage
    
                // iframe: state.funnel.iframe
            }
        },
        (dispatch) => {
          return {
          
          }
        })
    (JsonToHtml) ;
// var generatedHtmltext = toHtmlText(json or stringy-fied json);

