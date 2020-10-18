
function convertActionTypeToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
  }
  
export default function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);
    const handler = handlers[key];
    if (handler) {
        handler(state, action);
    }
}

export function getCardById(cards, cardId)
{
    var card = cards.find(card => card.id === cardId);
    return card;
}

export function getAgentByCardId(agents, agentId)
{
    var agent = agents.find(agent => agent.id === agentId);
    return agent;
}

export function getIndexSocialMedia(socialMedias,socialMediaName)
{
    var index = socialMedias.findIndex(event => event.name === socialMediaName);
    return index;
}