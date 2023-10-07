import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UserListPage from "./pages/Users/UserListPage";
import HomePage from "./pages/Users/HomePage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/users"}>Users</Link>
                </div>
                <div>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/users"} element={<UserListPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
