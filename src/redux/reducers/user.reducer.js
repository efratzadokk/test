
import produce from 'immer'
import createReducer from "./reducerUtil";

const initialState = {
    userName:window.location.pathname.split('/')[2],
    userId:''
}

// export default produce((state = initialState, action) => {
//     switch (action.type) {
//         case '[user] SET_USER_ID':
//             state.userId=action.payload;break;
//         default:
//             return state
//     }
// })
const userReducer = {

    setUserId(state, action) {
        state.userId=action.payload;
        return state;
    },
}
export default produce((state, action) => createReducer(state, action, userReducer), initialState);