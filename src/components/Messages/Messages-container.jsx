import React from 'react';
import {
    addMessage,

} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        messageText: state.messagesPage.messageText
    }
}
export default compose(
    connect(mapStateToProps, {addMessage}),
   withAuthRedirect
)(Messages)

// let AuthRedirectComponent = withAuthRedirect(Messages)
// export default connect(mapStateToProps, {addMessage, updateMessageText})(AuthRedirectComponent)