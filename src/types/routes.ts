import React from "react";

interface RouteArrayElement {
    path: string;
    element: React.ReactNode;
    name: string;
}

export type RoutesArray = RouteArrayElement[];
