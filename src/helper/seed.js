import users from '../data/users.json';
import clubs from '../data/clubs.json';

export const seedLocalStorage = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  if (!localStorage.getItem('clubs')) {
    localStorage.setItem('clubs', JSON.stringify(clubs));
  }
};
