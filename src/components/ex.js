// import React from 'react';
// import { connect } from 'react-redux';
// import { setName } from '../redux/actions/user.action'

// function Ex(props) {
//     // const handleSubmit = (a) => {
//     //     console.log(a);
//     //     props.changeNameFromLogin(a)
//     // }

//     return (<>
//         <h1>Ex: {props.userName}</h1>
//         <input type="text" name="name" id="a" onChange={(e) => props.changeNameFromLogin(e.target.value)} />
//         <button  >login</button>
//     </>
//     )
// }



// // function mapStateToProps(state) {
// //     return {
// //         userName: state.user.name
// //     };
// // }

// // const mapDispatchToProps = (dispatch) => ({
// //     changeNameFromLogin: function (newName) {
// //         dispatch(setName(newName))
// //     }
// //     // setFirstName: (firstName) => dispatch(actions.setFirstName(firstName)),
// //     // setLastName: (lastName) => dispatch(actions.setLastName(lastName)),
// //     // setAge: (age) => dispatch(actions.setAge(age)),
// //     // setMobile: (mobile) => dispatch(actions.setMobile(mobile)),
// // })
// export default connect(
//     (state) => {
//         return {
//             userName: state.user.name
//         }
//     },
//     (dispatch) => {
//         return {
//             changeNameFromLogin: function (newName) {dispatch(setName(newName))}
//         }
//     }
// )(Ex);