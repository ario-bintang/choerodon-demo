export const getUsers = async (page = 1, pageSize = 10) => {
  const skip = (page - 1) * pageSize;
  const response = await fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`);
  const data = await response.json();
  return {
    users: data.users,
    total: data.total,
  };
};
