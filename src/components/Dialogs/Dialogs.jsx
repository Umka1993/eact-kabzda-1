import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

/*созжаем  массив  данных для  диалогов данные из него отправлем в пропсы,
а так же перебираем с помощью .map  */

const Dialogs = (props) => {

/*перебираем  данные массивов с помощью .map*/
    let dialogsElements =  props.dialogs.map( d => <DialogItem name = {d.name} id = {d.id} />);
    let messagesElements = props.messages.map( m => <Message message = {m.message}  /> );

    /*считываем что находится  записалось в  textarea*/
    let newMessageElement = React.createRef()

    /*выводим на экран то что записали  в  textarea*/
   let addMessage = () => {
       let text = newMessageElement.current.value
        alert(text)
    };



    return(
        <div className={s.dialogs} >

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages} >
                {messagesElements}
                <div className={s.addMessage}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={ () => (addMessage ())}>
                        <img src="data:image/png;base64,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"/>
                    </button>
                </div>


            </div>


        </div>
    )
}

export default Dialogs