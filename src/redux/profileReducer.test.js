import React from "react";
import profileReducer, {addPost, deletePost} from "./profileReducer";


//==============DATA=============//
let state = {
    postData: [
        {id: 1, message: 'Hi', likesCount: "12"},
        {id: 2, message: 'Hey, this is my first post!', likesCount: "1"},
        {id: 3, message: 'Hey, this is my second post!', likesCount: "0"},
        {id: 4, message: 'Hey, this is my third post!', likesCount: "1000"}
    ],
};

//=====================================================================================//
it('postData length should be incremented', () => {
    //1. testing data

    let action = addPost("New message");

    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.postData.length).toBe(state.postData.length+1);
});
//=====================================================================================//
it('new message text should be correct', () => {
    //1. testing data

    let action = addPost("New message");

    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.postData[newState.postData.length-1].message).toBe("New message")
});
//=====================================================================================//
it('after delete postData length should be decremented', () => {
    //1. testing data

    let action = deletePost(1);

    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
   expect(newState.postData.length).toBe(state.postData.length-1)
});