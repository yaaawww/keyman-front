import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login/login"
import Register from "./pages/login/register";
import Layout from "./pages/layout"
import Home from "./pages/home"
import Dashboard from "./pages/user/dashboard";
import ResList from "./components/PwdManager";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}