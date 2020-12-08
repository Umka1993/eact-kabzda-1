import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";





const App = (props) => {


    return (
            <div className = "app-wrapper" >
                <Header/>
                <Navbar/>
                <div className= "app-wrapper-content">
                    {/*изменили   component ={Dialogs}
                     на  render = { () => <Dialogs/>}
                     так как  таким способом можно прокидывать пропсы.
                      { () => <Dialogs/>}  - это анонимная функция с имененм  компоненты*/}

                    <Route path= "/dialogs"
                           render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}/>}/>
                    <Route path= "/profile"
                           render={ () => <Profile
                               profilePage = {props.state.profilePage}
                               addPost={props.addPost}
                           updateNewPostText = {props.updateNewPostText}/>}/>
                    <Route path= "/news"
                           render={ () => <News/>}/>
                    <Route path= "/music"

                           render={ () => <Music/>}/>
                    <Route path= "/settings"
                           render={ () => <Settings/>}/>
                </div>
            </div>
);

}





export default App;
