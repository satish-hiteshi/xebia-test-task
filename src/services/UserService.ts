export const UserService = async () => {
  const resp = await fetch('/api/getUser');
  return resp.json();
};
