import React from "react";

const UserContext = React.createContext({
  // firstname: "",
  // lastname: "",
  // email: "",
  // language: "",
  // image: "",
  user: {},
  users: [],
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;
