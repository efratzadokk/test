
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import animate from '../listPapers/components/assets/img.png'
import animate from '../../assets/leader_logo.png'
import threeDots from '../../assets/ellipsis-v-solid.svg'
import searchImgGif from '../../assets/searchIcon.gif'
import LabelCompleted from '../../assets/Label - Completed.svg'
import copyIcon from '../../assets/Group 22678.svg'
import downArrow from '../../assets/down-arrow.svg'
import userSolid from '../../assets/user-solid.svg'
import fileFolder from '../../assets/fileFolder.svg'
import NoFunnels from '../noFunnels/noFunnels'
import JsonToHtml from '../convertJsonToHtmk/jsonToHtml'
import {actions} from '../../redux/actions/funnel-try.action'
import { Link, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { render } from '@testing-library/react';
//import { history } from "../../App";
import { createBrowserHistory } from 'history'
// import FileCopyIcon from '@material-ui/icons/FileCopy';
import overlayFactory from 'react-bootstrap-table2-overlay';
import Button from '@material-ui/core/Button';
import './listPapers.css'
//  import SelectMassage from './selectMassage';
import loading from '../../assets/leader_logo.png'
// // import profileDefault from './assets/error.png'
import  {chageEditMode, setJsonPage, setNameChosenFunnel,setOrderSection,duplicateFunnel,setNameFunnel ,addSection, setNamePage, setStylePage, removeFunnel,removeReducer, setStyleSection,setJsonServer, setFlagBorderParts, setIdFunnel } from '../../redux/actions/funnel.action'
import $ from 'jquery';
import Stage from '../stage/stage'
import { from } from 'pumpify';
import html2canvas from 'html2canvas';

import { useLocation } from 'react-router-dom';
// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
// import { duplicateFunnel } from '../../redux/middleware/crud';
// import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';

//   import MultiSelectInput from '../sendEmail/sensEmail'
const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;




// const location = useLocation();

// import $ from "jquery";
// import { addElement } from '../../redux/actions/funnel.action'


const getEmailsContacts = (contacts) => {
    let emailsContacts = [];
    if (contacts) {
        contacts.map((contact) => {
            emailsContacts.push({ value: contact.email, label: contact.email })
        })
    }
    return emailsContacts;
}


function ListPapers(props) {
    const { allFunnels,setIdFunnel,setJsonPage,  setNameChosenFunnel,setJsonServer,removeFunnel,removeReducer ,duplicateFunnel, setNameFunnel} = props

    const statusClrs = { 'Open': 'green', 'Deal': '#d93025', 'In Progress': '#FFA756', 'New': '#00B69B', 'Connected': '#6226EF', 'Unqualified': '#EF3826' }
    const statusLeft = { 'Open': '22px', 'Deal': '20px', 'In Progress': '17px', 'New': '47px', 'Connected': '27px', 'Unqualified': '25px' }
    // let { history } = props;
    // const history = createBrowserHistory({ forceRefresh: true })

    const [idfunnelName, setIdFunnelName] = useState("");
    const [newName, setNewName] = useState("");
    const [isSend, setIsSend] = useState(false);


    //----------
    const [flag ,setFlag]=useState(0)

    const [idFunnelChangeName, setIdFunnelChangeName] = useState("");

    const [exportYN, setExportYN] = useState(false);

    let url = window.location;
    const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""

    var userName = (url.pathname.split('/')[1]);
        let { history } = props;

    history = createBrowserHistory({ forceRefresh: true })

    const historyPush = (url) => {
        history.push(`/${userName}/${url}`)
    
    }
const remove=(e)=>
{  
    // debugger
    removeReducer(e)
removeFunnel(e)

}
const downloadFunnel=(json)=>
{     
    // debugger
     <JsonToHtml jsonFunnel={json}></JsonToHtml>
}


   
const setjsonByIdFunnel=(e)=>
{ 
    // debugger
    console.log("jsonnnn"+e, e._id, e.name)
    setjsonReducer(e._id)
setJsonServer(e, e.name)


}  
 console.log(allFunnels)
    const handleClick = () => {

        var parser = new DOMParser();
        var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
        if (!doc.body.innerText) {
            // let empty = "empty_paper" + "_" + new Date().toLocaleString().replace("/", ".").replace(" ", "")
            // empty = empty.replace("/", ".").replace(" ", "_")
            // props.changeNameQ(empty)
            props.createQuote();
        }
        // e.preventDefault();
        // onPageChange(page);
    };

    const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
        const handleClick = (e) => {
            e.preventDefault();
            onPageChange(page);
        };
        const activeStyle = {};
        if (active) {
            activeStyle.backgroundColor = 'gray';
            activeStyle.color = 'white';
        } else {
            activeStyle.backgroundColor = 'white';
            activeStyle.color = 'black';
        }
        if (typeof page === 'string') {
            activeStyle.backgroundColor = 'white';
            activeStyle.color = 'black';
        }
        return (
            <li className="page-item mb-0 px-1" >
                <button className="btn btn-outline-secondary" onClick={(e) => handleClick(e)} style={activeStyle}>{page}</button>
            </li>
        );
    };
    //pagination
    const options = {
        sizePerPage: 10,
        // hideSizePerPage: true,
        // hidePageListOnlyOnePage: true,
        pageButtonRenderer
    };

    //   const  setJsonPage=(idFunneltochange)=>{
    //       console.log("helloo! , i in f2"+idFunneltochange)
    //   }

//     const duplicateFunnel = (idFunnel, user, name, json) => {
// duplicateFunnel(idFunnel, user, name, json)
//     }


    const setjsonReducer = (e) => {
        console.log(e)
        // d/ebugger
        console.log("i am in func setJsonBy..." + " " + e.idFunnel)
        let indexfunnel = 0
        allFunnels.map((item, index) => {
            if (item._id == e._id) {
                indexfunnel = index
                console.log(indexfunnel)
                // console.log("uuuuu" + allFunnels[indexfunnel].json)
                console.log("rrrr" + JSON.parse(allFunnels[indexfunnel].json))

                //  history.goBack()
                //   setJsonPage(JSON.parse(allFunnels[index].json))
            }
            // <Stage />

        })
        setNameChosenFunnel(allFunnels[indexfunnel].name)
        setIdFunnel(allFunnels[indexfunnel]._id)
        setJsonPage(JSON.parse(allFunnels[indexfunnel].json))
    console.log("alldetailsfunnel"+" "+allFunnels[indexfunnel].name, +" "+allFunnels[indexfunnel]._id)
        // userName = (url.pathname.split('/')[2]);
        // history.push(`/admin/${userName}/new`)
        // setJsonPage(JSON.parse(allFunnels[indexfunnel].json))

    }

    //  let splitedPathname = location.pathname.split("/");
    // const redirectFunction=()=>{
    //     // history.direct()

    // }
    // redirectFunction()

  const optionDetails=()=>{
    //   debugger
    console.log("aaaaaaaaaaaaaaaaaaaaa")
    $(".ui").css('display','block')
    return(<>

    <span>chaya</span>
    {/* <div class="ui dropdown">
  <div class="text">File</div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">Delete</div>
    <div class="item">
      <span class="description">ctrl + o</span>
      Open...
    </div>
    <div class="item">
      <span class="description">ctrl + s</span>
    Copy
    </div>
    <div class="item">
      <span class="description">ctrl + r</span>
      Edit
    </div>
    <div class="item">Make a copy</div>
    <div class="item">
      <i class="folder icon"></i>
      Move to folder
    </div>
    <div class="item">
      <i class="trash icon"></i>
      Move to trash
    </div>
    <div class="divider"></div>
    <div class="item">Download As...</div>
    <div class="item">
      <i class="dropdown icon"></i>
      Publish To Web */}
      {/* <div class="menu"> */}
        {/* <div class="item">Google Docs</div>
        <div class="item">Google Drive</div>
        <div class="item">Dropbox</div>
        <div class="item">Adobe Creative Cloud</div>
        <div class="item">Private FTP</div>
        <div class="item">Another Service...</div>
      </div> */}
    {/* </div> */}
    {/* <div class="item">E-mail Collaborators</div> */}
  {/* </div> */}
{/* </div> */}
</>)
}

    const getIdFunnelByIndex = (index) => {
        {
            allFunnels.map((item, i) => {


                setIdFunnelChangeName(item[index]._id)
                // return idFunnel

            })
        }
    }

    const txtName="ALL TEAM"

    const columns = [


        // },
        {

//             events: {
//                 onDoubleClick: (e) => {
//                     // e.currentTarget.contentEditable = 'true';
//                     // setFunnelName(e.currentTarget.innerText);
//                     //    console.log("fff:"+rowIndex);

//                     ;
//                     // getIdFunnelByIndex()
//                 },

//                 onClick: (e) => {
//                     e.stopPropagation();
//                 },
//                 onBlur: async (e) => {
//                     // debugger;
//                     // console.log(props.quote2.currentName)
//                     // if (props.quote2.currentName != e.currentTarget.innerText) {
//                     //     console.log(props.name)

//                     //     await props.changeNameQ(e.currentTarget.innerText);
//                     //     console.log(props.quote2.name)
//                     //     await props.changePaperName();
//                     // }

//                 },

//             },
//              text: "STATUS",
//             dataField: "edit&delete",
//             align: "center",
//             headerAlign: "center",
//             sort: true,
//             style: { width: '15%' },
//              formatter: s => s ? s.substr(0, 15) : "",
//             formatter: (c, e) => {
//                 // setjsonByIdFunnel(e._id)
//                 return  (<><img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img></>)


                    


               
//             },

//             headerStyle: (column, colIndex) => {
//                 return { textAlign: 'center',
//                 backgroundColor: '#F5F5FA' ,    
//                 //   height: '2vh',
//                 padding: '2vh',
//                 letterSpacing: '0px',
//                 color: '#202224',
//                 textTransform: 'uppercase',
//                 opacity: 0.9, };
//             },
//             headerStyle: {
//                 backgroundColor: '#F5F5FA',
               
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
// // font: 'normal normal 800 14px/19px Nunito Sans',
// letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
//             },
//         },
        




            events: {
                onDoubleClick: (e) => {
                    // console.log("eeeeeeeee:" + e.currentTarget);
                    // e.currentTarget.contentEditable = 'true';
                    // console.log("eeeeeeeee:" + e.currentTarget.innerText, +"dddd" +e._id);
                    //    console.log("fff:"+rowIndex);

                    e.currentTarget.contentEditable = 'true';
                    setNewName(e.currentTarget.innerText)

                    // getIdFunnelByIndex()
                

                // onClick: (e) => {
                    // e.stopPropagation();
                    //  e.currentTarget.contentEditable = 'true';
                    //  setNewName(e.currentTarget.innerText)
                  //   console.log("חיה"+e.currentTarget.innerText)


                },
                
                onBlur: async (e) => {
                    // debugger;
                    console.log("חחחחחחחחחחחח"+e.currentTarget.innerText)
                    setNewName(e.currentTarget.innerText)

                    console.log(e.currentTarget.innerText)
                     console.log(newName)
                //  await 
                   setNameFunnel(idfunnelName, e.currentTarget.innerText);
                   console.log("ממממממממממ"+newName)

                   console.log("גגגגג"+idfunnelName,"דדדדדדד"+newName)
                 console.log(idfunnelName)
            //  console.log(e.currentTarget.innerText)
                    // if (props.quote2.currentName != e.currentTarget.innerText) {
                        // console.log(props.name)

                        // await props.changeNameQ(e.currentTarget.innerText);
                        // console.log(props.quote2.name)
                        // await props.changePaperName();
                    // }

                },

            },
            // dataField: "name",
            // text: "NAME",
            // align: "center",
            // headerAlign: "center",
            // sort: true,
            // style: { width: '15%' },
            // formatter: s => s ? s.substr(0, 20) : "",
            // style: {
                // width: '15% !important',
                // overfolw: "hidden"
            // },
            // formatter: s => s ? s.substr(0, 20) : "",

            // formatter: (c, e) => {
            //    c.substr(0, 15) 
                // console.log(e._id)
                // setjsonByIdFunnel(e._id)
                
                // setNameFunnel(e._id)
                    
                
                    // <button className="btn
                    dataField: "name",
                    // title: "name",
                    text: "NAME",
                    align: "left",
                    headerAlign: "center",
                    sort: true,
                    style: { width: '15%',overfolw: "inherit" },
                    formatter: s => s ? s.substr(0, 22) : "",
                    // formatter: (c, e) => {
                        // setjsonByIdFunnel(e._id)
                //         return  (<>
                              

                
                // {/* {noDepartment||question?null:<br/>} */}
   
                //         </>)                    // formatter: s => s ? s.substr(0, 15) : "",
                //     // headerStyle: (column, colIndex) => {
                //     //     return { textAlign: 'center' }; 
                //      },
                    headerStyle: {
                        backgroundColor: '#F5F5FA', position: 'sticky',
                        top: '0', 
                        //  height: '2vh',
                        //   padding: '2vh',
                          letterSpacing: '0px',
color: '#202224',
textTransform: 'uppercase',
opacity: 0.9,
                    },
        
                },

                       // formatter: (c, e) => {
                    //    c? c.substr(0, 15) :"",
                        // console.log(e._id)
                        // return (
        
                            // {/* <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button> */}
                        
                                // <button onBlur={() => setIdFunnelName(e._id)} style={{width:"60px", border:"none", background:"none"}}> 
                                // {/* // onChange={()=>setNewName(e.currentTarget.innerText) */}
                            // {c.substr(0, 15)}
                            //   </button>
                        // )

                        // },           

         
            // headerStyle: (column, colIndex) => {
                // return { textAlign: 'center' };
            // },
            // headerStyle: {
            //     backgroundColor: '#F5F5FA',
        //  } ,// },
            {

                events: {
                    onClick: (e, c) => {
                        userName = (url.pathname.split('/')[2]);
                        // history.push(`/admin/${userName}/${c.name}`)
                    }
                },
                dataField: "date",
                style: { width: '15% !important', overfolw: "inherit" },
                formatter: s => s ? s.substr(0, 20) : "",
                headerStyle: { backgroundColor: '#F5F5FA' ,    
                //   height: '2vh',
                // padding: '2vh',
                letterSpacing: '0px',
                color: '#202224',
                textTransform: 'uppercase',
                opacity: 0.9,},
                text: "START"
            },
        
        
            // dataField: "date",
            //  text: "START",
            // align: "center",
            // headerAlign: "center",
            // sort: true,
            // style: { width: '15%' },
            // //  formatter: s => s ?                        
            // //  {new Date(s.toLocaleDateString('en-GB', { month: '2-digit', day: '2-digit', year: 'numeric' })},
            // //  substr(0, 15) : "",
            // formatter: (c, e) => {
            //     // setjsonByIdFunnel(e._id)
            //     return  (<></>)


                    


               
            // },

            // headerStyle: (column, colIndex) => {
            //     return { textAlign: 'center' };
            // },
            // headerStyle: {
            //     backgroundColor: '#F5F5FA',
            //     // height: '2vh',
            //     padding: '2vh',
            //     textAlign: 'left',
            //     letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
// // font: 'normal normal 800 14px/19px Nunito Sans',
// letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
//             },
//         },
        {

            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    // history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "lastUpdate",
            style: { width: '15% !important', overfolw: "inherit" },
              formatter: s => s ? s.substr(0, 20) : "",
            
            headerStyle: { backgroundColor: '#F5F5FA' ,    
            //   height: '2vh',
            padding: '2vh',
            letterSpacing: '0px',
            color: '#202224',
            textTransform: 'uppercase',
            opacity: 0.9,},
            text: "END"
        },
        {
            events: {
                onClick: (e, c) => {
                    //    setJsonPage 
                    console.log("eeeeeee" + e)
                    console.log("cccccc" + c)
                    console.log("cccccc" + c.name)

                    // userName = (url.pathname.split('/')[2]);
                    // history.push(`/admin/${userName}/${c.name}`)
                }
            },


//             events: {
//                 onDoubleClick: (e) => {
//                     // e.currentTarget.contentEditable = 'true';
//                     // setFunnelName(e.currentTarget.innerText);
//                     //    console.log("fff:"+rowIndex);

//                     ;
//                     // getIdFunnelByIndex()
//                 },

//                 onClick: (e) => {
//                     e.stopPropagation();
//                 },
//                 onBlur: async (e) => {
//                     // debugger;
//                     // console.log(props.quote2.currentName)
//                     // if (props.quote2.currentName != e.currentTarget.innerText) {
//                     //     console.log(props.name)

//                     //     await props.changeNameQ(e.currentTarget.innerText);
//                     //     console.log(props.quote2.name)
//                     //     await props.changePaperName();
//                     // }

//                 },

//             },
             text: "STATUS",
            dataField: "edit&delete",
            align: "center",
            headerAlign: "center",
            sort: true,
            style: { width: '15%' },
             formatter: s => s ? s.substr(0, 15) : "",
            formatter: (c, e) => {
            if(e.viewsNumber>0)  
             setIsSend(true)
                // setjsonByIdFunnel(e._id)
                return  (<>

                {isSend?
                <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>
              :    <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>

               } 
                </>
            
                )


               


               
            },

            headerStyle: (column, colIndex) => {
                return { textAlign: 'center',
                backgroundColor: '#F5F5FA' ,    
                //   height: '2vh',
                padding: '2vh',
                letterSpacing: '0px',
                color: '#202224',
                textTransform: 'uppercase',
                opacity: 0.9, };
            },
            headerStyle: {
                backgroundColor: '#F5F5FA',
               
color: '#202224',
textTransform: 'uppercase',
opacity: 0.9,
// font: 'normal normal 800 14px/19px Nunito Sans',
letterSpacing: '0px',
color: '#202224',
textTransform: 'uppercase',
opacity: 0.9,
            },
        },

            //     formatter: (c) => c ? c.length : "",
            // },
            // {
            //     events: {
            //         onClick: (e, c) => {
            //             userName = (url.pathname.split('/')[2]);
            //             history.push(`/admin/${userName}/${c.name}`)
            //         }

        //     dataField: "viewsNumber",
        //     text: `ALL TEAM ${<div class="dropdown">
        //     <a class="dropbtn">           <img 
          
        //   style={{marginLeft:"2vw",marginTop:"2vh", display:"inline-block"}} 
        //   src={threeDots}>
        //      </img> </a>
        //     <div class="dropdown-content">
        //       <a  onClick={()=>remove()}><span  onClick={()=>remove()} style={{ width: '25%', marginBottom:'0px'}} class="material-icons">delete</span> Delete</a>
        //       <a onClick={()=>{duplicateFunnel()}}><span  style={{ width: '25%'}} class="material-icons">file_copy</span> Copy</a>
        //     </div></div>}`
            //  ,
            // align: "left",
            // csvExport: false,
            // headerAlign: "center",
            // formatter: (c, e) => {
            //     return(
            //         <>
            //         {/* <JsonToHtml json= {e.json}></JsonToHtml> */}

            //                <img style={{width:"15%", marginTop:"2vh", verticalAlign:"center"}}  src={userSolid}></img>
            //         </>)
//             //     },
        
//             style: { width: '15% !important' },
//             headerStyle: {
//                 borderRadius: " 0 15px 0 0",
//                 backgroundColor: '#F5F5FA',
//                 // height: '2vh',
//                 // padding: '2vh',
//                 letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,

            // },
            // sort: true,
        
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    console.log("aaaa" + c)
                    // history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "url",
            text: "LINK",
            style: { width: '15% !important', },
            align: "center",
            headerAlign: "center",
            headerStyle: { backgroundColor: '#F5F5FA' ,
            // height: '2vh',
            // padding: '2vh',
            letterSpacing: '0px',
            color: '#202224',
            textTransform: 'uppercase',
            opacity: 0.9,},
            formatter: (c, e) => {
                console.log("dddd"+c)
                // setjsonByIdFunnel(e._id)
                return  (
                <>
                       
                            {/* // {c.substr(0, 15)} */}
                         
                            {/* // style={{marginRight:"2vw"}} */}
                            <span  style={{marginLeft:"12%"}}> { c.substr(0, 20) }</span>


                            {/* <div className="col-md-4"> */}
                {/* <text style={{ width: '100%', height: '35px', borderRadius: '2px',  textAlign: 'center' }}  type="button" data-toggle="dropdown"  aria-expanded="false"> */}
                  {/* {!selectDepartment ? 'Select Knowledge Base' : selectDepartment.categoryName} */}
    
       
<div class="dropdown">
  <a class="dropbtn">           <img 

style={{marginLeft:"2vw",marginTop:"2vh", display:"inline-block"}} 
src={threeDots}>
   </img> </a>
  <div class="dropdown-content">
    <a  onClick={()=>remove(e._id)}><span  onClick={()=>remove(e._id)} style={{ width: '25%', marginBottom:'0px'}} class="material-icons">delete</span> Delete</a>
    <a onClick={()=>{duplicateFunnel(e._id)}}><span  style={{ width: '25%'}} class="material-icons">file_copy</span> Copy</a>
    <a onClick={()=>setFlag(!flag)}> <span  style={{ width: '25%', marginBottom:'0px'}} class="material-icons" >edit</span>  Edit</a>
    <a  onClick={()=>{setFlag(!flag)}}><span  style={{ width: '25%'}} class="material-icons">download</span> Download</a>
    {flag? <JsonToHtml jsonFunnel={e.json}/> :""}
    <a href="#"><span  style={{ width: '25%'}} class="material-icons">share</span> Share</a>
    <a href="#"><span  style={{ width: '25%'}} class="material-icons">print</span> Print</a>

  </div>
</div>
       
   
         
      
    
    {/* <div class="item">
      <i class="folder icon"></i>
      Move to folder
    </div>
    <div class="item">
      <i class="trash icon"></i>
      Move to trash
    </div>
    <div class="divider"></div>
    <div class="item">Download As...</div>
    <div class="item">
      <i class="dropdown icon"></i>
      Publish To Web
      <div class="menu"> */}
        {/* <div class="item">Google Docs</div>
        <div class="item">Google Drive</div>
        <div class="item">Dropbox</div>
        <div class="item">Adobe Creative Cloud</div>
        <div class="item">Private FTP</div>
        <div class="item">Another Service...</div>
      </div>
    </div>
    <div class="item">E-mail Collaborators</div>
  </div>
</div> */}

                </>)
            }
            //             // לשאול איך מראים הכל*

            // formatter: e => {
            //     if (e) {
            //         let count = 0;
            //         e.forEach(e => {
            //             if (e) {
            //                 if (e.isSigned) {
            //                     count++
            //                 }
            //             }

            //         })
            //         return count;
            //     }
            // },
        },  
            //             // לשאול איך מראים הכל*

            // formatter: e => {
            //     if (e) {
            //         let count = 0;
            //         e.forEach(e => {
            //             if (e) {
            //                 if (e.isSigned) {
            //                     count++
            //                 }
            //             }

            //         })
            //         return count;
            //     }
            // },
        
        // {
        //     events: {

        //         onClick: (e, c) => {
        //             userName = (url.pathname.split('/')[2]);
        //             console.log("aaaaaaaa" + c)
        //             // history.push(`/admin/${userName}/${c.name}`)
        //             //  <Stage/>
        //         }
        //     },
//             dataField: "link",
//             text: "send",
//             align: "center",
//             csvExport: false,
//             headerAlign: "center",
//             style: { width: '15% !important' },
//             headerStyle: {
//                 borderRadius: " 0 15px 0 0",
//                 backgroundColor: '#F5F5FA',
//                 height: '4vh',
//                 padding: '2vh',
//                 letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,

            // },
            // sort: true,
            // formatter: (c, e) => {
            //     console.log("eeee"+e)

                // console.log(e._id)
                // setjsonByIdFunnel(e._id)
            //     return (
            //         <>

            //          {/* <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button> */}
            //         <button 
            //         // onClick={()=> setjsonByIdFunnel(e)}

            //             //  onClick={exportBtn} onClick={aaa}
            //             className="btn bkg" style={{ color: "#FFFFFF", backgroundColor: "gray" }}>send
            //             {/* <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button> */}
            //         </button>
            //         </>
            //     )
            // }
        // },

    ];

    function exportBtn(e) {
        // setPaperName(e.currentTarget.parentElement.parentElement.firstChild.innerText)
        setExportYN(true)
        // $(".containerDivList").css("width", "70vw")
        $(".sendEmailFromList").css("display", "block")
        // props.approachedToServerYesOrNo();
        // props.massageSuccessOrError(true);
        e.stopPropagation();

    }
    function aaa() {
        // alert("safeaw")
        props.approachedToServerYesOrNo();
        props.massageSuccessOrError(true);
        // props.massageToShowSuccesOrError("The Mail Sent May Take A Few Minutes To Arrive")
        // props.massageSuccessOrOops("select");
    }
    // PaperName
    // const rowEvents = {
    // onClick: (e, c) => {

    //     userName = (url.pathname.split('/')[2]);
    //     history.push(`/admin/${userName}/${c.name}`)



    // },

    // };
//     const rowEvents = {
//         onClick: (e, row, rowIndex) => {
//             // return rowIndex
// console.log("row"+e._id)
//             // setjsonByIdFunnel(e._id)
//         },
//     };

const rowEvents = {
    onClick: (e, c) => {
        debugger
        console.log("id"+c._id)
        setjsonReducer(c)
        // userName = (url.pathname.split('/')[2]);
        // history.push(`/admin/${userName}/${c.name}`)
// console.log("ffff")

    },
}
    const rowClasses = (row, rowIndex) => {
        return '';
    }
    // const createDefaultPaper = () => {
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
    //     // let empty = "empty_paper" + "_" + new Date().toLocaleString().replace("/", ".").replace(" ", "")
    //     // empty = empty.replace("/", ".").replace(" ", "_")
    //     // props.changeNameQ(empty)
    //     props.createQuote();

    //     // rowEvents(empty)
    //     userName = (url.pathname.split('/')[2]);
    //     // history.push(`/admin/${userName}/${empty}`)
    //     // history.replace(`/${userName}/${empty}`)



    //     //     };
    //     const MyExportCSV = () => {

    //     }
    // }


    // return(
    // <>
    // <h1>chaya</h1>
    //         // <div className="row d-flex mt-1 btnDiv">
    //         <div className="col-2" style={{ "justify-content": "end" }} >
    //             <button className="btn w-100  "
    //                 style={{
    //                     backgroundColor: "#f7b500",
    //                     width: "100%",
    //                     color: "white"
    //                 }}
    //                 // onClick={handleClick}>Download to CSV</button>
    //                 onClick={createDefaultPaper}>new paper+</button>

    //         </div>
    //         // </div>
    //    </> );


    // return(<h1>chaya</h1>)

    const MyExportCSV = () => {
        return (
            // <div className="row d-flex mt-1 btnDiv">
            <div className="col-2" style={{ "justify-content": "end" }} >
                <button className="btn w-100  "
                    style={{
                        backgroundColor: "#f7b500",
                        width: "100%",
                        color: "white"
                    }}
                    // onClick={handleClick}>Download to CSV</button>
                    onClick={createNewFunnel}>Create new template+</button>

            </div>
            // </div>
        );
    };

    const mydata = [];

    console.log(columns);

    const indication = () => {
        return (

        //   allFunnels ? 
            // <NoFunnels></NoFunnels>:
            // <img  style={{width:"40%", marginTop:"2vh"}} src={fileFolder}></img>:

            // "oopsss...   no papers found 😞" :
                 <div className="indicationAnimate" >

          <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>
                 </div>
                
                // <div className="indicationAnimate">
                    // <img src={animate} ></img>
                // </div >
    
        )
    }
    const createNewFunnel = () => {
        userName = (url.pathname.split('/')[2]);
        //         console.log("aaaaaaaa"+c)
        history.push(`/admin/${userName}/new`)
    }
    return (        <>


{
// allFunnels ? 



        

            <div className="row">


                <div className={exportYN ? "container-fixed-width containerDivList mw-100 mb-0 pr-lg-5 pr-sm-1 pr-md-1 justify-content-start align-items-center col-10" : "container-fixed-width containerDivList mw-100 mb-0 pr-lg-5 pr-sm-1 pr-md-1 justify-content-start align-items-center col-12"}
                    style={{ marginTop: '7vh' }}>
                    {/* <SelectMassage ></SelectMassage> */}

                    <div className="pt-3">
                        {/* <Button
                            variant="filled"
                            component="label"
                            style={{
                                backgroundColor: "#A66DFF",
                                width: "100%",
                                color: "white"
                            }}
                            onClick={() => historyPush("new")}
                        >
                            + New Contact

            </Button> */}

                        <div className="row">
                            <div className="col-12 container-fixed-width px-0"
                                style={{ "zIndex": 0 }}>
                                {/* {props ? props.allContact ? */}

                                {/* // {true ? true ? */}
                                <ToolkitProvider
                                    style={{ "marginTop": "0px" }}
                                    keyField="id"
                                    data={props ? props.allFunnels || mydata : mydata}
                                    columns={columns}
                                    // exportCSV={{
                                    //     fileName: 'contacts.csv',
                                    //     noAutoBOM: false,
                                    //     blobType: 'text/csv;charset=ansi'
                                    // }}
                                    search >
                                    {
                                        props => (
                                            <div>
                                                <div className="mt-2 px-0 d-flex justify-content-between"
                                                    style={{ "marginTop": "7vh" }}>
                                                    {/* <img src={searchImgGif}  style={{ width: "5vw"}}></img> */}

                                                    {/* <div className="fas fa-search searchIcon"  >  </div> */}
                                                    <SearchBar {...props.searchProps}
                                                        className="searhBtn"
                                                        placeholder="search..."
                                                        style={{
                                                            "width": "50vw",
                                                            "color": "gray",
                                                            "minWidth": "100%",
                                                            "paddingLeft": "2.375rem"
                                                        }} >
                                                    <img src={searchImgGif}  style={{ width: "15vw"}}></img>

                                                    </SearchBar>
                                                    <MyExportCSV
                                                        {...props.csvProps}>Export CSV</MyExportCSV>

                                                    {/* <MyExportCSV
                                                {...props.csvProps}>Export CSV</MyExportCSV> */}
                                                    {/* {<ClearSearchButton  {...props.searchProps} />} */}
                                                </div>
                                                <div className="row mt-0 "  ></div>
                                                <BootstrapTable
                                                    style={{ top: '10px' }}
                                                    loading={false}  //only loading is true, react-bootstrap-table will render overlay
                                                    overlay={overlayFactory()}
                                                    rowStyle={{ overfolw: "hidden" }}
                                                    bodyStyle={{
                                                        tableLayout: "fixed !important",
                                                    }}
                                                    noDataIndication={indication}
                                                    bordered={false}
                                                    classes="table-hover contactTable mt-2"
                                                    rowClasses={rowClasses}
                                                    rowEvents={rowEvents}
                                                    tabIndexCell={true}
                                                    pagination={paginationFactory(options)}
                                                    {...props.baseProps} />
                                            </div>
                                        )
                                    }
                                </ToolkitProvider>

                            </div >
                        </div>

                    </div >
                    <div className="sendEmailFromList col" style={{ width: "17vw", background: "white",
                    //  height: "100vh", 
                    display: "none", marginTop: "10vh" }}>
                        <button onClick={() => { setExportYN(false); $(".sendEmailFromList").css("display", "none") }} style={{ background: "white", justifyContent: 'flex-end !important' }}
                        >x</button>
                         {/* {props.allContact && */}
                        {/* // <MultiSelectInput options={getEmailsContacts(props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', zIndex: "10", width: '20vw !important', zIndex: "10" }} paperName={props.paperName}></MultiSelectInput> */}
                    {/* // }  */}
                    </div>
                </div >
            </div> 
            // :
           
                    //    <NoFunnels/>

            }
       
        </>
    )
};

export default connect(
    (state) => {
        return {
            allFunnels: state.funnel.allFunnels


            // iframe: state.funnel.iframe
        }
    },
    (dispatch) => {
        return {
            removeReducer:(id) => {dispatch(actions.removeReducer(id)) },
            setNameFunnel: (idFunnel, newName) => { dispatch(actions.setNameFunnel({id:idFunnel,name: newName })) },
            setJsonPage: (json) => { dispatch(actions.setJsonPage(json)) },
            setNameChosenFunnel: (name) => { dispatch(actions.setNameChosenFunnel(name)) },
            setIdFunnel: (id) => { dispatch(actions.setIdFunnel(id)) },
            setJsonServer: (json) => { dispatch(actions.setJsonServer(json)) },
            removeFunnel: (id) => {dispatch(actions.removeFunnel(id)) },
            duplicateFunnel:(idFunnel)=>  {dispatch(actions.duplicateFunnel(idFunnel))}
        }
    }

)(ListPapers)












// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import threeDots from '../../assets/ellipsis-v-solid.svg'
// import searchImgGif from '../../assets/searchIcon.gif'
// import LabelCompleted from '../../assets/Label - Completed.svg'
// import JsonToHtml from '../convertJsonToHtmk/jsonToHtml'

// import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import { createBrowserHistory } from 'history'
// import overlayFactory from 'react-bootstrap-table2-overlay';
// import './listPapers.css'
// import $ from 'jquery';
// import Stage from '../stage/stage'
// import { from } from 'pumpify';
// import html2canvas from 'html2canvas';
// import {actions} from '../../redux/actions/funnel-try.action'

// import { useLocation } from 'react-router-dom';

// const { SearchBar, ClearSearchButton } = Search;
// const { ExportCSVButton } = CSVExport;





// const getEmailsContacts = (contacts) => {
//     let emailsContacts = [];
//     if (contacts) {
//         contacts.map((contact) => {
//             emailsContacts.push({ value: contact.email, label: contact.email })
//         })
//     }
//     return emailsContacts;
// }


// function ListPapers(props) {
//     const { allFunnels, setJsonPage, setIdFunnel, setNameChosenFunnel,setJsonServer,removeFunnel,removeReducer ,duplicateFunnel, setNameFunnel} = props
//     const statusClrs = { 'Open': 'green', 'Deal': '#d93025', 'In Progress': '#FFA756', 'New': '#00B69B', 'Connected': '#6226EF', 'Unqualified': '#EF3826' }
//     const statusLeft = { 'Open': '22px', 'Deal': '20px', 'In Progress': '17px', 'New': '47px', 'Connected': '27px', 'Unqualified': '25px' }
//     const [idfunnelName, setIdFunnelName] = useState("");
//     const [newName, setNewName] = useState("");
//     const [isSend, setIsSend] = useState(false);
//     //----------
//     const [flag ,setFlag]=useState(0)
//     const [idFunnelChangeName, setIdFunnelChangeName] = useState("");
//     const [exportYN, setExportYN] = useState(false);
//     let url = window.location;
//     const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""
//     var userName = (url.pathname.split('/')[1]);
//         let { history } = props;
//     history = createBrowserHistory({ forceRefresh: true })
//     const historyPush = (url) => {
//         history.push(`/${userName}/${url}`)
    
//     }
//    const remove=(e)=>
//    {  debugger
//     removeReducer(e)
//    removeFunnel(e)

//    }
//    const downloadFunnel=(json)=>
//    {     debugger
//      <JsonToHtml jsonFunnel={json}></JsonToHtml>
//     }
//      const setjsonByIdFunnel=(e)=>{ 
//        setjsonReducer(e._id)
//       setJsonServer(e, e.name)
//       }  
//     const handleClick = () => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
//         if (!doc.body.innerText) {
//             props.createQuote();
//         }
//     };
//     const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
//         const handleClick = (e) => {
//             e.preventDefault();
//             onPageChange(page);
//         };
//         const activeStyle = {};
//         if (active) {
//             activeStyle.backgroundColor = 'gray';
//             activeStyle.color = 'white';
//         } else {
//             activeStyle.backgroundColor = 'white';
//             activeStyle.color = 'black';
//         }
//         if (typeof page === 'string') {
//             activeStyle.backgroundColor = 'white';
//             activeStyle.color = 'black';
//         }
//         return (
//             <li className="page-item mb-0 px-1" >
//                 <button className="btn btn-outline-secondary" onClick={(e) => handleClick(e)} style={activeStyle}>{page}</button>
//             </li>
//         );
//     };
//     const options = {
//         sizePerPage: 10,
//         pageButtonRenderer
//     };
//     const setjsonReducer = (e) => {
//         console.log("i am in func setJsonBy..." + " " + e.idFunnel)
//         let indexfunnel = 0
//         allFunnels.map((item, index) => {
//             if (item._id == e._id) {
//                 indexfunnel = index
//             }
//         })
//         setNameChosenFunnel(allFunnels[indexfunnel].name)
//         setIdFunnel(allFunnels[indexfunnel]._id)
//         setJsonPage(JSON.parse(allFunnels[indexfunnel].json))
//     }
//     const getIdFunnelByIndex = (index) => {
//         {
//             allFunnels.map((item, i) => {
//                 setIdFunnelChangeName(item[index]._id)
//             })
//         }
//     }
//     const columns = [
//         {
//             events: {
//                 onDoubleClick: (e) => {
//                     e.currentTarget.contentEditable = 'true';
//                     setNewName(e.currentTarget.innerText)
//                 },
//                 onBlur: async (e) => {
//                     console.log("חחחחחחחחחחחח"+e.currentTarget.innerText)
//                     setNewName(e.currentTarget.innerText)
//                     console.log(e.currentTarget.innerText)
//                      console.log(newName) 
//                    setNameFunnel(idfunnelName, e.currentTarget.innerText);
//                    console.log("ממממממממממ"+newName)
//                    console.log("גגגגג"+idfunnelName,"דדדדדדד"+newName)
//                  console.log(idfunnelName)
//                 },

//             },
//                     dataField: "name",
//                     text: "NAME",
//                     align: "left",
//                     headerAlign: "center",
//                     sort: true,
//                     style: { width: '15%',overfolw: "inherit" },
//                     formatter: s => s ? s.substr(0, 22) : "",
//                     headerStyle: {
//                         backgroundColor: '#F5F5FA', position: 'sticky',
//                         top: '0', 
//                           letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
//                     },
//                 },
//             {
//                 events: {
//                     onClick: (e, c) => {
//                         userName = (url.pathname.split('/')[2]);
//                     }
//                 },
//                 dataField: "date",
//                 style: { width: '15% !important', overfolw: "inherit" },
//                 formatter: s => s ? s.substr(0, 20) : "",
//                 headerStyle: { backgroundColor: '#F5F5FA' ,    
//                 letterSpacing: '0px',
//                 color: '#202224',
//                 textTransform: 'uppercase',
//                 opacity: 0.9,},
//                 text: "START"
//             },
//         {

//             events: {
//                 onClick: (e, c) => {
//                     userName = (url.pathname.split('/')[2]);
//                 }
//             },
//             dataField: "lastUpdate",
//             style: { width: '15% !important', overfolw: "inherit" },
//               formatter: s => s ? s.substr(0, 20) : "",
//             headerStyle: { backgroundColor: '#F5F5FA' ,   
//             padding: '2vh',
//             letterSpacing: '0px',
//             color: '#202224',
//             textTransform: 'uppercase',
//             opacity: 0.9,},
//             text: "END"
//         },
//         {
//             events: {
//                 onClick: (e, c) => {
//                     console.log("eeeeeee" + e)
//                     console.log("cccccc" + c)
//                     console.log("cccccc" + c.name)
//                 }
//             },
//              text: "STATUS",
//             dataField: "edit&delete",
//             align: "center",
//             headerAlign: "center",
//             sort: true,
//             style: { width: '15%' },
//              formatter: s => s ? s.substr(0, 15) : "",
//             formatter: (c, e) => {
//             if(e.viewsNumber>0)  
//              setIsSend(true)
//                 return  (<>
//                 {isSend?
//                 <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>
//               :    <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>
//                } 
//                 </>
//                 )
//             },
//             headerStyle: (column, colIndex) => {
//                 return { textAlign: 'center',
//                 backgroundColor: '#F5F5FA' ,    
//                 padding: '2vh',
//                 letterSpacing: '0px',
//                 color: '#202224',
//                 textTransform: 'uppercase',
//                 opacity: 0.9, };
//             },
//             headerStyle: {
//                 backgroundColor: '#F5F5FA',
               
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
// letterSpacing: '0px',
// color: '#202224',
// textTransform: 'uppercase',
// opacity: 0.9,
//             },
//         },
//         {
//             events: {
//                 onClick: (e, c) => {
//                     userName = (url.pathname.split('/')[2]);
//                     console.log("aaaa" + c)
//                 }
//             },
//             dataField: "url",
//             text: "LINK",
//             style: { width: '15% !important', },
//             align: "center",
//             headerAlign: "center",
//             headerStyle: { backgroundColor: '#F5F5FA' ,
//             letterSpacing: '0px',
//             color: '#202224',
//             textTransform: 'uppercase',
//             opacity: 0.9,},
//             formatter: (c, e) => {
//                 console.log("dddd"+c)
//                 return  (
//                 <>
//                             <span  style={{marginLeft:"12%"}}> { c.substr(0, 20) }</span>
// <div class="dropdown">
//   <a class="dropbtn">           <img 

// style={{marginLeft:"2vw",marginTop:"2vh", display:"inline-block"}} 
// src={threeDots}>
//    </img> </a>
//   <div class="dropdown-content">
//     <a  onClick={()=>remove(e._id)}><span  onClick={()=>remove(e._id)} style={{ width: '25%', marginBottom:'0px'}} class="material-icons">delete</span> Delete</a>
//     <a onClick={()=>{duplicateFunnel(e._id)}}><span onClick={()=>duplicateFunnel(e._id)} style={{ width: '25%'}} class="material-icons">file_copy</span> Copy</a>
//     <a onClick={()=>setFlag(!flag)}> <span  style={{ width: '25%', marginBottom:'0px'}} class="material-icons" >edit</span>  Edit</a>
//     <a  onClick={()=>{setFlag(!flag)}}><span  style={{ width: '25%'}} class="material-icons">download</span> Download</a>
//     {flag? <JsonToHtml jsonFunnel={e.json}/> :""}
//     <a href="#"><span  style={{ width: '25%'}} class="material-icons">share</span> Share</a>
//     <a href="#"><span  style={{ width: '25%'}} class="material-icons">print</span> Print</a>

//   </div>
// </div>
//                 </>)
//             }
//         },  
//     ];
//     function exportBtn(e) {
//         setExportYN(true)
//         $(".sendEmailFromList").css("display", "block")
//         e.stopPropagation();
//     }
//     function aaa() {
//         props.approachedToServerYesOrNo();
//         props.massageSuccessOrError(true);

//     }
//     const rowEvents = {
//        onClick: (e, c) => {
//         setjsonReducer(c)
//        },
//     }
//     const rowClasses = (row, rowIndex) => {
//         return '';
//     }
 
//     const MyExportCSV = () => {
//         return (
//             <div className="col-2" style={{ "justify-content": "end" }} >
//                 <button className="btn w-100  "
//                     style={{
//                         backgroundColor: "#f7b500",
//                         width: "100%",
//                         color: "white"
//                     }}
//                     onClick={createNewFunnel}>Create new template+</button>
//             </div>
//         );
//     };
//     const mydata = [];
//     const indication = () => {
//         return (
//                  <div className="indicationAnimate" >
//           <img  style={{width:"40%", marginTop:"2vh"}} src={LabelCompleted}></img>
//                  </div>
//         )
//     }
//     const createNewFunnel = () => {
//         userName = (url.pathname.split('/')[2]);
//         history.push(`/admin/${userName}/new`)
//     }
//     return (   
//          <>
//            {
//             <div className="row">
//                 <div className={exportYN ? "container-fixed-width containerDivList mw-100 mb-0 pr-lg-5 pr-sm-1 pr-md-1 justify-content-start align-items-center col-10" : "container-fixed-width containerDivList mw-100 mb-0 pr-lg-5 pr-sm-1 pr-md-1 justify-content-start align-items-center col-12"}
//                     style={{ marginTop: '7vh' }}>
//                     <div className="pt-3">
//                         <div className="row">
//                             <div className="col-12 container-fixed-width px-0"
//                                 style={{ "zIndex": 0 }}>
//                                 <ToolkitProvider
//                                     style={{ "marginTop": "0px" }}
//                                     keyField="id"
//                                     data={props ? props.allFunnels || mydata : mydata}
//                                     columns={columns}
//                                     search >
//                                     {
//                                         props => (
//                                             <div>
//                                                 <div className="mt-2 px-0 d-flex justify-content-between"
//                                                     style={{ "marginTop": "7vh" }}>
//                                                     <SearchBar {...props.searchProps}
//                                                         className="searhBtn"
//                                                         placeholder="search..."
//                                                         style={{
//                                                             "width": "50vw",
//                                                             "color": "gray",
//                                                             "minWidth": "100%",
//                                                             "paddingLeft": "2.375rem"
//                                                         }} >
//                                                     <img src={searchImgGif}  style={{ width: "15vw"}}></img>

//                                                     </SearchBar>
//                                                     <MyExportCSV
//                                                         {...props.csvProps}>Export CSV</MyExportCSV>
//                                                 </div>
//                                                 <div className="row mt-0 "  ></div>
//                                                 <BootstrapTable
//                                                     style={{ top: '10px' }}
//                                                     loading={false}  //only loading is true, react-bootstrap-table will render overlay
//                                                     overlay={overlayFactory()}
//                                                     rowStyle={{ overfolw: "hidden" }}
//                                                     bodyStyle={{
//                                                         tableLayout: "fixed !important",
//                                                     }}
//                                                     noDataIndication={indication}
//                                                     bordered={false}
//                                                     classes="table-hover contactTable mt-2"
//                                                     rowClasses={rowClasses}
//                                                     rowEvents={rowEvents}
//                                                     tabIndexCell={true}
//                                                     pagination={paginationFactory(options)}
//                                                     {...props.baseProps} />
//                                             </div>
//                                         )
//                                     }
//                                 </ToolkitProvider>
//                             </div >
//                         </div>
//                     </div >
//                     <div className="sendEmailFromList col" style={{ width: "17vw", background: "white",
//                     display: "none", marginTop: "10vh" }}>
//                         <button onClick={() => { setExportYN(false); $(".sendEmailFromList").css("display", "none") }} style={{ background: "white", justifyContent: 'flex-end !important' }}
//                         >x</button>
//                     </div>
//                 </div >
//             </div> 
//         }      
//       </>
//     )
// }
// export default connect(
//     (state) => {
//         return {
//             allFunnels: state.funnel.allFunnels
//         }
//     },
//     (dispatch) => {
//         return {
//             removeReducer:(id) => {dispatch(actions.removeReducer(id)) },
//             setNameFunnel: (idFunnel, newName) => { dispatch(actions.setNameFunnel({id:idFunnel,name: newName })) },
//             setJsonPage: (json) => { dispatch(actions.setJsonPage(json)) },
//             setNameChosenFunnel: (name) => { dispatch(actions.setNameChosenFunnel(name)) },
//             setIdFunnel: (id) => { dispatch(actions.setIdFunnel(id)) },
//             setJsonServer: (json) => { dispatch(actions.setJsonServer(json)) },
//             removeFunnel: (id) => {dispatch(actions.removeFunnel(id)) },
//             duplicateFunnel:(idFunnel)=>  {dispatch(actions.duplicateFunnel(idFunnel))}
//         }
//     }

// )(ListPapers)

