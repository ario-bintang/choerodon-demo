const STORAGE_KEY = 'users';

export const getUsers = () => {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return users;
};

export const addUser = (newUser) => {
    const users = getUsers();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const user = { id, ...newUser };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...users, user]));
    return user;
};

export const updateUser = (updatedUser) => {
    const users = getUsers().map((u) => (u.id === updatedUser.id ? updatedUser : u));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return updatedUser;
};

export const deleteUser = (id) => {
    const users = getUsers().filter((u) => u.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
