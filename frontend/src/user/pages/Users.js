import React from "react";

import UsersList from "../components/UsersList.js";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Lucas Zamora",
      image:
        "https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
