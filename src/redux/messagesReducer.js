const ADD_MESSAGE = 'social network/message/ADD-MESSAGE';

let initialState = {
    dialogData: [
        {id: "1", name: "Oleg"},
        {id: "2", name: "Bob"},
        {id: "3", name: "Tod"},
        {id: "4", name: "Roy"},
        {id: "5", name: "Pit"}
    ],
    messageData: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine thank you, what about you?"}
    ],
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 6, message: action.messageText};
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
        default:
            return state;
    }

}
export default messagesReducer;
export const addMessage = (messageText) => {
    return {
        type: ADD_MESSAGE,
        messageText
    }
}
