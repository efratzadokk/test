import { createStore ,applyMiddleware,combineReducers} from 'redux';
import { produce } from 'immer'
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from './reducers/index'
import ReduxThunk from 'redux-thunk' 
import {getFromServer,uploadImage,creatFunnel,getAllFunnelByUserId,getUidByUserName,getFunnelByName,updateFunnel,removeFunnel,uploadFile,saveOrUpdate} from './middleware/crud'
import userReducer from './reducers/user.reducer'
import funnelReducer from './reducers/funnel.reducer'


const reducer=combineReducers({
    user: userReducer,
    funnel: funnelReducer,
   
    
})
const store = createStore(
    reducer,composeWithDevTools(
        applyMiddleware(
            getFromServer,
            creatFunnel,
            getAllFunnelByUserId,
            getUidByUserName,
            getFunnelByName,
            updateFunnel,
            removeFunnel,
            uploadFile,
            saveOrUpdate
            // uploadImage
        ),
    )
)
//////////
store.dispatch({ type: 'EXTRACT_JWT' });
window.store=store
// store.dispatch({ type: 'EXTRACT_JWT' });
export default store;
//ADD IMPORT TO NEW MIDLEWARE
