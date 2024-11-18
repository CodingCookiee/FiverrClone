const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  return currentUser;
};

export default getCurrentUser;
