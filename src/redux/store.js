// //==================================DATA=======================================================//
// import profileReducer from "./profileReducer";
// import messagesReducer from "./messagesReducer";
//
// let store = {
//     _state: {
//
//
//         messagesPage: {
//             dialogData: [
//                 {id: "1", name: "Oleg"},
//                 {id: "2", name: "Bob"},
//                 {id: "3", name: "Tod"},
//                 {id: "4", name: "Roy"},
//                 {id: "5", name: "Pit"}
//             ],
//             messageData: [
//                 {id: "1", message: "Hi"},
//                 {id: "2", message: "How are you?"},
//                 {id: "3", message: "I'm fine thank you, what about you?"}
//             ],
//             messageText: ""
//         },
//         sideBar: [
//             {
//                 id: "1",
//                 name: "Kurtka",
//                 imgsrc: "https://mykaleidoscope.ru/uploads/posts/2021-11/1636730935_78-mykaleidoscope-ru-p-devushka-v-plashche-devushka-krasivo-foto-104.jpg"
//             },
//             {
//                 id: "2",
//                 name: "Pup",
//                 imgsrc: "https://yobte.ru/uploads/posts/2019-11/devushki-s-kruglymi-ochkami-53-foto-43.jpg"
//             },
//             {
//                 id: "3",
//                 name: "Dasuter",
//                 imgsrc: "https://heaclub.ru/tim/182cc886b005cbefe3f251cde7a3b7eb/krasivie-kartinki-na-avu-dlya-devushek.jpg"
//             },
//         ]
//     },
//     //================================ get state methods =================================//
//     _callSubscriber: {},
//     subscribe(observer) {
//         return this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state
//     },
//     //================================ACtions=============================================//
//     dispatch(action) {
//         //=========================Profile Post logic========================//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._callSubscriber(this._state)
//     }
// }
//=============================================================================================//
// window.store = store;
//=============================================================================================//
//export default store;
