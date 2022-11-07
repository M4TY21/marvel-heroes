import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { MyHeroes } from "../pages/MyHeroes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myHeroes" element={<MyHeroes />} />
      </Routes>
    </BrowserRouter>
  );
}
