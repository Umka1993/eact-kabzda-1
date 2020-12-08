import React from "react";
import s from "./Header.module.css"
const Header = () => {
  return <header className = {s.header}>
    <div>
        <img src = "https://cdn.worldvectorlogo.com/logos/react-academy.svg" alt = "logo"/>
        <div><a href="#">NASA</a></div>
      <div>
        <h1>Channel for astronauts</h1>
      </div>
    </div>
</header>
}
export default Header;