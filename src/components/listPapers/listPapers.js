
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import { setStylePage, setOpacityPage, setNamePage } from '../../redux/actions/funnel.action'


function ListPapers(props) {
  const {allFunnels } = props
    return (
        <div style={{marginTop:"100px"}}>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">PRODUCTION DATE</th>
      <th scope="col">LAST OPENNING DATE</th>
      <th scope="col">SOME RECIPIENTS</th>
      <th scope="col">NUMBER OF VIEWS</th>
      <th scope="col">NUMBER OF SIGNTURE</th>
      <th scope="col">EXPORT</th>
    </tr>
  </thead>

  <tbody>
    {allFunnels.map((funnel,index)=>{
      debugger
          <tr>
          <th id={index} scope="row" ></th>
            <td>{funnel.name}</td>
            <td>{funnel.name}</td>
            <td>{funnel.name}</td>
            <td>{funnel.name}</td>
            <td>{funnel.name}</td>
            <td>{funnel.name}</td>
          </tr>
    })}
  </tbody>
</table>
        </div>
    )
}
export default connect(
  (state) => {
      return {
         allFunnels:state.funnel.allFunnels,
      }
  },
  (dispatch) => {
      return {
          // setStylePage: (property, newValue) => { dispatch(setStylePage({ property: property, value: newValue })) },
          // setOpacityPage: (newValue) => { dispatch(setOpacityPage(newValue)) },
          // setNamePage: (newName) => { dispatch(setNamePage(newName)) }
      }
  }
)(ListPapers)