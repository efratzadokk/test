import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    currentAgentForCard: {
        id: 0,
        cardId: 0,
        fullName: "",
        rule: "",
        mobile: "",
        personalEmail: "",
        aboutConnect: "",
        aboutTitle: "",
        personalMassegeTitle: "",
        personalMassegeConnect: "",
    }

};

const agent = {
    setcurrentAgentForCard(state, action) {
        state.currentAgentForCard = action.payload;
    },
    setFullname(state, action) {
        state.currentAgentForCard.fullName = action.payload;
    },
    setRule(state, action) {
        state.currentAgentForCard.rule = action.payload;
    },
    setMobile(state, action) {
        state.currentAgentForCard.mobile = action.payload;
    },
    setPersonalemail(state, action) {
        state.currentAgentForCard.personalEmail = action.payload;
    },
    setAbouttitle(state, action) {
        state.currentAgentForCard.aboutTitle = action.payload;
    },
    setAboutConnect(state, action) {
        state.currentAgentForCard.aboutConnect = action.payload;
    },
    setPersonalmassegeTitle(state, action) {
        state.currentAgentForCard.personalMassegeTitle = action.payload;
    },
    setPersonalmassegeConnect(state, action) {
        state.currentAgentForCard.personalMassegeConnect = action.payload;
    }

};

export default produce((state, action) => createReducer(state, action, agent), initialState);


