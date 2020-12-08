import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
  return (
  <div className = {s.item}>
    <div className = {s.item_wrapp}>
    <img src="https://mmo-dev.info/media/%D0%9C%D0%BE%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.4077/full" alt="user photo"/>
  <p>{props.message}</p>
  </div>
    <div className = {s.like}>
      <span> {props.likesCount} </span>
        <img src="https://pngimg.com/uploads/like/like_PNG64.png" alt="users like"/>
      <div>
      </div>
      like
    </div>
  </div>
  )
}

export default Post;  