const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');
let usersMessages;


const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    usersMessages = [];
  }
};
getLocalStorage();


const users = {
  1: {
    id: 1,
    userName: 'user',
  },
  2: {
    id: 2,
    userName: 'server',
  },
};


const createObj = (id, message) => ({
  id,
  message,
  date: new Date(),
});


const addUserIfNotExists = (id, name) => {
  if (!Object.prototype.hasOwnProperty.call(users, id)) {
    const usersArray = Object.keys(users);
    const nextUserId = Math.max(...usersArray) + 1;
    users[nextUserId] = {
      id: nextUserId,
      userName: name,
    };
  }
};


const getDate = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};


const appendMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = sms;
  output.appendChild(newDiv);
};


const addObjectToUserMessages = (object) => {
  usersMessages.push(object);
};


const setMessageToLocalStorage = (object) => {
  addObjectToUserMessages(object);
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};


if (usersMessages != null) {
  Array.prototype.forEach.call(usersMessages, (item) => {
    appendMessage(item.message);
  });
}


// const display = () => {
//   Object.keys(users).forEach((element) => {
//     // let length;
//     // if (usersMessages.length === 0) {
//     //   [length] = usersMessages;
//     // } else {
//     //   length = usersMessages.length - 1;
//     // }
//     for (let index = usersMessages.length; index > 0; index -= 1) {
//       // console.log(usersMessages[index]);
//       // if (users[element].id === Number(usersMessages[index])) {
//       //   // getDate(usersMessages[index].date);
//       //   // appendMessage(usersMessages[index].message);
//       //   console.log(`users${users[element].id}`);
//       //   console.log(`usersMessages${usersMessages[index].id}`);
//       //   break;
//       // }
//     }
//   });
// };
// display();
// console.log(usersMessages.length);

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const object = createObj('1', textarea.value);
  addUserIfNotExists(object.id, 'user2');
  // display();
  setMessageToLocalStorage(object);
  getDate(object.date);
  appendMessage(object.message);
  textarea.value = '';
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    setMessageToLocalStorage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
    // display();
  }, 1000);
});

