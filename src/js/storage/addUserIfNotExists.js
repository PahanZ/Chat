import users from './users';

export default (id, name) => {
  if (!Object.prototype.hasOwnProperty.call(users, id)) {
    const usersArray = Object.keys(users);
    const nextUserId = Math.max(...usersArray) + 1;
    users[nextUserId] = {
      id: nextUserId,
      userName: name,
    };
  }
};
