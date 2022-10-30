import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/NewPlace.js";
import MainNavigation from "./shared_features/components/Navigation/MainNavigation.js";
import UserPlaces from "./places/pages/UserPlaces.js";
import UpdatePlace from "./places/pages/UpdatePlace.js";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/:userId/places" element={<UserPlaces />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="/places/:placeId" element={<UpdatePlace />} exact />
          <Route path="*" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
