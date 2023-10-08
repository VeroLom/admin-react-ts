import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/Navbar/Navbar";
import {routes} from "./routes";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar links={routes} />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
