import React from 'react';
import { connect } from 'react-redux';
import './loading.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import ReactSpinner from 'react-bootstrap-spinner'

function Loading(props) {
    // super(props);
    // this.state = {
    //   loading: true
    // }
    return (
      <>
      <div id="loadingPage">
  <ReactSpinner type="border" color="primary" size="5" />
  </div>
       </>
    )
  }
  export default connect(
undefined
    ,
    (dispatch) => {
        return {
        }
    }
)(Loading)