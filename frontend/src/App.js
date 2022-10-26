import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/NewPlace.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/places/new" element={<NewPlace />} exact/>
        <Route path="*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
