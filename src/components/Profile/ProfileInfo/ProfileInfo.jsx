import React from "react";
import s from "./ProfileInfo.module.css"
import MyPosts from "../MyPosts/MyPosts";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src = "https://cdn.smartfacts.ru/215225/interstellar_0.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;