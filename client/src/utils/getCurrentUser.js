const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser;
};

export default getCurrentUser;
