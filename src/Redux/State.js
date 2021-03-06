import React from "react";
import {rerenderEntireTree} from "../render";

let state ={
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you? ", likesCount: "0"},
            {id: 2, message: "It's my first post!", likesCount: "23"},
            {id: 3, message: "You"}
        ],
        newPostText: "it-kamasutra"
    },

    dialogsPage: {
        messages: [
            { id: 1, message: "Hi"},
            { id: 2, message: "How is it-kamasutra?"},
            { id: 3, message: "You"},
        ],
        dialogs: [
            { id: 1, name: "Dimych"},
            { id: 2, name: "Andrey"},
            { id: 3, name: "Sveta"},
            { id: 4, name: "Sasha"},
            { id: 5, name: "Viktor"},
            { id: 6, name: "Valera"},
        ]
    }
}


/*функция  которая  добавляет в  соответствующий массив
  новую запись из textarea*/
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);


}




export default state;
