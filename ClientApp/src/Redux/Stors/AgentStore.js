import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createNewCard,cardSelection,saveNewCard,updateCard,getCards } from '../MiddleWares/CardMiddleWare'
import agentDetails from '../reducers/AgentDetailsStore';
import card from '../reducers/CardStore'


// const state = {
       
// };

const reducer = combineReducers({ agentDetails, card });

const store = createStore(reducer, applyMiddleware(cardSelection,createNewCard,saveNewCard,updateCard,getCards));
window.store = store;
export default store;
store.dispatch({ type: "CARD_INIT" });