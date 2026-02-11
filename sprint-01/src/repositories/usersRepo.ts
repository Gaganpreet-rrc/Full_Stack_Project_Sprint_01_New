let users: string[] = [];
 
export const usersRepository = {
  getUsers() { return users; },
  addUser(username: string) { users.push(username); },
  removeUser(username: string) { users = users.filter(u => u !== username); },
};