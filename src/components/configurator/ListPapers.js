
import logo from './assets/newLogoLeader.png';
import { actions } from '../Redux/Actions/ContactAction';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import animate from './assets/animation.gif'
import { Link, Redirect } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { render } from '@testing-library/react';
import { history } from "../App";
import { createBrowserHistory } from 'history'
import overlayFactory from 'react-bootstrap-table2-overlay';
import Button from '@material-ui/core/Button';
import './listPapers.css'
// import { useEffect } from 'react';
import SelectMassage from './selectMassage';
import loading from './assets/LOGO_1.gif';





import profileDefault from './assets/error.png'


const { SearchBar, ClearSearchButton } = Search;

const { ExportCSVButton } = CSVExport;





const mapStateToProps = (state) => {
    return {
        // allContact: state.contactDetails.allContact,
        contactDetails: state.contactDetails.contactDetails,
        allquote: state.quote.allQuote,
        quote: state.quote.quote,
        quote2: state.quote,






    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllQuote: (a) => dispatch({ type: 'GETALL_QUOTE' }),
    changeNameQ: (email) => dispatch(actions.setNameQ(email)),
    getQuote: (a) => dispatch(actions.getQuote()),
    currentName: (a) => dispatch(actions.setCurrentName(a)),
    editQuote: (a) => dispatch({ type: 'EDIT_QUOTE' }),
    createQuote: (a) => dispatch({ type: 'CREATE_QUOTE' }),
    // editQuote: (a) => dispatch({ type: 'EDIT_QUOTE' }),

    approachedToServerYesOrNo: () => dispatch(actions.setApproachedToServerYesOrNo()),
    massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
    massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
    massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),



})



export default connect(mapStateToProps, mapDispatchToProps)(function ListPapers(props) {
    useEffect(() => {

        localStorage.removeItem('approachedToServerYesOrNo');
        //     // console.log(history);
        props.getAllQuote()
        console.log(props.allquote)

        //  props.quote.name(props.getQuote().currentName);


    }, []);
    const statusClrs = { 'Open': 'green', 'Deal': '#d93025', 'In Progress': '#FFA756', 'New': '#00B69B', 'Connected': '#6226EF', 'Unqualified': '#EF3826' }
    const statusLeft = { 'Open': '22px', 'Deal': '20px', 'In Progress': '17px', 'New': '47px', 'Connected': '27px', 'Unqualified': '25px' }
    let url = window.location;
    var userName = (url.pathname.split('/')[1]);
    const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""
    let { history } = props;
    history = createBrowserHistory({ forceRefresh: true })

    const historyPush = (url) => {
        history.push(`/${userName}/${url}`)
    }

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

    const columns = [
        // {
        //     dataField: "thumbnail",
        //     style: { width: '10%' },
        //     text: "",
        //     align: "center",
        //     headerAlign: "center",
        //     csvExport: false,
        //     headerStyle: {
        //         backgroundColor: '#F5F5FA',
        //         borderRadius: "15px 0 0 0"
        //     },
        //     formatter: (c) => {
        //         return (
        //             <img
        //                 style={{
        //                     height: '6vh', width: '6vh', marginTop: "0",
        //                     borderRadius: "50%", marginLeft: '3vh'
        //                 }}
        //                 src={c ? c : profileDefault}
        //             />

        //         )
        //     }
        // },
        {
            events: {
                onDoubleClick: (e) => {
                    e.currentTarget.contentEditable = 'true';
                    props.currentName(e.currentTarget.innerText);
                    // props.quote2.currentName=
                },
                onBlur: async (e) => {
                    if (props.quote2.currentName != e.currentTarget.innerText) {
                        props.changeNameQ(e.currentTarget.innerText);
                        await props.editQuote();
                        //    createQuote

                        // setNameQ
                    }
                }


            },
            dataField: "name",
            text: "NAME",
            align: "center",
            headerAlign: "center",
            sort: true,
            style: { width: '15%' },
            formatter: s => s ? s.substr(0, 15) : "",
            headerStyle: (column, colIndex) => {
                return { textAlign: 'center' };
            },
            headerStyle: {
                backgroundColor: '#F5F5FA',
            },
        },
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "createdDate",
            align: "center",
            headerAlign: "center",
            // לשאול
            formatter: s => s ? s.substr(0, 20) : "",
            style: {
                width: '15% !important',
                overfolw: "hidden"
            },
            headerStyle: { backgroundColor: '#F5F5FA' },
            sort: true,
            text: "PRODUCTION DATE",
        },
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "lastUpdateQuote",
            align: "center",
            headerAlign: "center",
            style: { width: '15% !important', overfolw: "inherit" },
            formatter: s => s ? s.substr(0, 20) : "",
            headerStyle: { backgroundColor: '#F5F5FA' },
            text: "LAST OPENING DATE"
        },
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "emailsToSend",
            align: "center",
            csvExport: false,
            headerAlign: "center",
            style: { width: '15% !important', overfolw: "inherit" },
            headerStyle: { backgroundColor: '#F5F5FA' },
            text: "SOME RECIPIENTS",
            sort: true,
            formatter: (c) => c ? c.length : "",
        },
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "numOfViews",
            text: "NUMBER OF VIEWS",
            align: "center",
            csvExport: false,
            headerAlign: "center",
            style: { width: '15% !important' },
            headerStyle: {
                borderRadius: " 0 15px 0 0",
                backgroundColor: '#F5F5FA',

            },
            sort: true,
        },
        {
            events: {
                onClick: (e, c) => {
                    userName = (url.pathname.split('/')[2]);
                    history.push(`/admin/${userName}/${c.name}`)
                }
            },
            dataField: "emailsToSend",
            style: { width: '15% !important', },
            align: "center",
            headerAlign: "center",
            headerStyle: { backgroundColor: '#F5F5FA' },
            // לשאול איך מראים הכל*

            formatter: e => {
                if (e) {
                    let count = 0;
                    e.forEach(e => {
                        if (e) {
                            if (e.isSigned) {
                                count++
                            }
                        }

                    })
                    return count;
                }
            },
            sort: true,
            text: "NUMBER OF SIGNATURE",
        },
        {
            // events: {
            //     onClick: (e, c) => {
            //         userName = (url.pathname.split('/')[2]);
            //         history.push(`/admin/${userName}/${c.name}`)
            //     }
            // },
            dataField: "link",
            text: "dgfhc",
            align: "center",
            csvExport: false,
            headerAlign: "center",
            style: { width: '15% !important' },
            headerStyle: {
                borderRadius: " 0 15px 0 0",
                backgroundColor: '#F5F5FA',

            },
            sort: true,
            formatter: (c) => {
                return (
                    // <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button>
                    <a href="#" onClick={aaa} className="btn bkg" style={{color: "#FFFFFF", backgroundColor:"red"}}>export
                        {/* <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button> */}
                        </a>
                )
            }
        },

    ];
function aaa(){
    // alert("safeaw")
    props.approachedToServerYesOrNo();
    props.massageSuccessOrError(true);
    // props.massageToShowSuccesOrError("The Mail Sent May Take A Few Minutes To Arrive")
    // props.massageSuccessOrOops("select");
}
    // PaperName
    const rowEvents = {
        // onClick: (e, c) => {

        //     userName = (url.pathname.split('/')[2]);
        //     history.push(`/admin/${userName}/${c.name}`)



        // },

    };

    const rowClasses = (row, rowIndex) => {
        return '';
    };
    const createDefaultPaper = () => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
        // let empty = "empty_paper" + "_" + new Date().toLocaleString().replace("/", ".").replace(" ", "")
        // empty = empty.replace("/", ".").replace(" ", "_")
        // props.changeNameQ(empty)
        props.createQuote();

        // rowEvents(empty)
        userName = (url.pathname.split('/')[2]);
        // history.push(`/admin/${userName}/${empty}`)
        // history.replace(`/${userName}/${empty}`)



    };
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
                    onClick={createDefaultPaper}>new paper+</button>

            </div>
            // </div>
        );
    };
    const mydata = [];

    const indication = () => {
        return (

            props ? props.allquote ? "oopsss...   no papers found 😞" :
                <div className="indicationAnimate" >
                    <img src={animate} ></img>
                </div>
                :
                <div className="indicationAnimate">
                    <img src={animate} ></img>
                </div >
        )
    }
    return (
        
        <div className="container-fixed-width 
      containerDivList mw-100 mb-0
      pr-lg-5 pr-sm-1 pr-md-1" style={{ marginTop: '7vh' }}>
                    <SelectMassage ></SelectMassage>
                    <div class="d-flex justify-content-center align-items-center">
          {props.quote2.approachedToServerYesOrNo ?

            < img src={loading} id="loading" style={{ position: "absolute", top: "12vh", zIndex: "5" ,width:"80%"}} />
            : null
          }
        </div>
            <div className="pt-3">
                {/* <div className="row ">
          <h3>Contant List</h3>
        </div> */}
                {/* {!iFrame &&
     <><Top_frame></Top_frame>
      <Sidebar_left></Sidebar_left></>} */}
                {/* <Sidebar_left /> */}
                {/* <div className="sidebar_top d-flex" >
        <img src={logo} className="imgLogo"></img>
      </div> */}
                {/* <div className="row d-flex btnDiv mb-2" > */}
                {/* <div className="col-2 " >
                        <Button
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

            </Button>
                    </div> */}
                {/* <div className="col-2" >
                        <Button
                            variant="filled"
                            component="label"
                            style={{
                                backgroundColor: "#A66DFF",
                                width: "100%",
                                color: "white"
                            }}
                            onClick={() => historyPush("deals")}
                        >Deals
            </Button>
                    </div> */}
                {/* </div> */}
                <div className="row">
                    <div className="col-12 container-fixed-width px-0"
                        style={{ "z-index": 0 }}>
                        {/* {props ? props.allContact ? */}

                        {/* // {true ? true ? */}
                        <ToolkitProvider
                            style={{ "marginTop": "0px" }}
                            keyField="id"
                            data={props ? props.allquote ? props.allquote.quotes || mydata : mydata : mydata}
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
                                            <div className="fas fa-search searchIcon"  >  </div>
                                            <SearchBar {...props.searchProps}
                                                className="searhBtn"
                                                placeholder="search..."
                                                style={{
                                                    "width": "50vw",
                                                    "color": "gray",
                                                    "min-width": "100%",
                                                    "padding-left": "2.375rem"
                                                }} >
                                            </SearchBar>
                                            <MyExportCSV
                                                {...props.csvProps}>Export CSV</MyExportCSV>
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
                                            pagination={paginationFactory(options)}
                                            {...props.baseProps} />
                                    </div>
                                )
                            }
                        </ToolkitProvider>

                    </div >
                </div>

            </div >
        </div >
    )
}) 