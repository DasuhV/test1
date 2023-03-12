let initialState = {
    sideBar: {
        friends:[
        {
            id: "1",
            name: "Kurtka",
            imgsrc: "https://mykaleidoscope.ru/uploads/posts/2021-11/1636730935_78-mykaleidoscope-ru-p-devushka-v-plashche-devushka-krasivo-foto-104.jpg"
        },
        {
            id: "2",
            name: "Pup",
            imgsrc: "https://yobte.ru/uploads/posts/2019-11/devushki-s-kruglymi-ochkami-53-foto-43.jpg"
        },
        {
            id: "3",
            name: "Dasuter",
            imgsrc: "https://heaclub.ru/tim/182cc886b005cbefe3f251cde7a3b7eb/krasivie-kartinki-na-avu-dlya-devushek.jpg"
        }
    ]
    }
}

const sidebarReducer = (state = initialState,action) => {
    let stateCopy = {...state}
    return stateCopy
}
export default sidebarReducer;
