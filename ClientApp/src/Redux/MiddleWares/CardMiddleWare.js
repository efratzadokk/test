import { actions } from '../actions/Action';

export const getCards = ({ dispatch, getState }) => next => action => {
        if (action.type === 'CARD_INIT') {
                return fetch('https://cards.leader.codes/api/digitalcard/vdQ4rhYrcJOuTNSoxLbirDG8vMJ2?jwt?=123'
                ).then((res) => res.json())
                        .then((resJson) => {
                                dispatch(actions.setCards(resJson));
                        })
                        .catch((err) => {
                                console.log(err)
                        })
        }
        return next(action);
};


export const cardSelection = ({ dispatch, getState }) => next => action => {
        if (action.type === 'SET_CARD') {
                dispatch(actions.setCurrentCard(action.payload));
                var agentDetails = getState().card.currentCard.agentDetails;
                dispatch(actions.setcurrentAgentForCard(agentDetails));
                return;
        }
        return next(action);
};

export const createNewCard = ({ dispatch, getState }) => next => action => {
        if (action.type === 'SET_NEW_CARD') {
                dispatch(actions.setNewCurrentCard(action.payload));
                var agentDetails = getState().card.currentCard.agentDetails;
                dispatch(actions.setcurrentAgentForCard(agentDetails));
                return;
        }
        return next(action);
};

export const saveNewCard = ({ dispatch, getState }) => next => action => {
        if (action.type === 'SAVE_CARD') {
                var agentDetails = getState().agentDetails.currentAgentForCard;
                var newCard = getState().card.currentCard;
                Object.assign(newCard["agentDetails"], agentDetails)
                fetch('https://cards.leader.codes/api/digitalcard/vdQ4rhYrcJOuTNSoxLbirDG8vMJ2?jwt?=123', {
                        method: 'POST',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newCard)
                })
                        .then(() => {
                                dispatch(actions.addNewCurrentCard(newCard));
                        })
                        .catch((err) => {
                                console.log(err)
                        })
                return;
        }
        return next(action);
};



export const updateCard = ({ dispatch, getState }) => next => action => {
        if (action.type === 'UPDATE_CARD') {
                var agentDetails = getState().agentDetails.currentAgentForCard;
                var newCard = getState().card.currentCard;
                Object.assign(newCard["agentDetails"], agentDetails);
                dispatch(actions.updateCurrentCard(newCard));
                return;
        }
        return next(action);
};
