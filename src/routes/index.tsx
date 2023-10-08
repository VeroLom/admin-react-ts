import React from "react";
import HomePage from "../pages/Users/HomePage";
import UserListPage from "../pages/Users/UserListPage";
import {RoutesArray} from "../types/routes";

export const routes: RoutesArray = [
    {path: "/", element: <HomePage />, name: "Home"},
    {path: "/users", element: <UserListPage />, name: "Users"},
];