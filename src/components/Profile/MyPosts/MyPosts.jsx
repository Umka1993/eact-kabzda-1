import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"


const MyPosts = (props) => {
    debugger;
    let postsElements =
         props.posts.map( (p) => <Post message={p.message} likesCount = {p.likesCount} />);

    /*ссылка в которую заносится вс что записалось в textarea*/
    let newPostElement = React.createRef();

    /*считываем что записано в  textarea с помощью ref ссылки */
    let addPost = () => {
        let text = newPostElement.current.value;  /*создаем перменную в которую заносим  текущее значение ссылки*/
            props.addPost(text);
        newPostElement.current.value = ""

    }
    /*let updateNewPostText = props.updateNewPostText*/
    let onPostChange = (props) => {

        let text = newPostElement.current.value;  /*создаем перменную в которую заносим  текущее значение ссылки*/
        /*console.log(text);*/
        props.updateNewPostText(text);
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <textarea className={s.post} ref={newPostElement} value= {props.newPostText} onChange={onPostChange} />
            <button onClick={ () => { addPost ()} }>Add post</button>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;  