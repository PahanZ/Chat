import { appendMessage } from "./appendMessage";
let usersMessages;


const getLocalStorage = () => {
    if (localStorage.getItem('usersMessages')) {
        usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
    } else {
        usersMessages = [];
    }
};

const addObjectToUserMessages = (object) => {
    usersMessages.push(object);
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

export { usersMessages, getLocalStorage, addObjectToUserMessages, setMessageToLocalStorage, appendFromLocalStorage  };