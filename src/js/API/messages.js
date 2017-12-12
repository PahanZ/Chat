import { appendMessage } from "../appendMessage";
import { addObjectToUserMessages } from "../addObjectToUserMessages";
let usersMessages;


const getLocalStorage = () => {
    if (localStorage.getItem('usersMessages')) {
        usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
    } else {
        usersMessages = [];
    }
};

const setMessageToLocalStorage = (object) => {
    addObjectToUserMessages(object);
    const str = JSON.stringify(usersMessages);
    localStorage.setItem('usersMessages', str);
};


const appendFromLocalStorage = () => {
    if (usersMessages != null) {
        Array.prototype.forEach.call(usersMessages, (item) => {
            appendMessage(item.message);
        });
    }
}

export { usersMessages, getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage };