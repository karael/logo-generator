import React from "react";
//import Store from './store'
//import Router from './router'

import "./App.css";

//import { RLayout } from 'templates'
export default function App () {
    return (
        <div className="flex justify-center">
            <h1 className="font-bold text-2xl text-blue-900">
                React and Tailwind with Vitejs!
            </h1>
        </div>
    );
    //return (
    //    <Store>
    //        <ReactRouter history={browserHistory}>
                <RLayout>
    //                <Router />
                </RLayout>
    //        </ReactRouter>
    //    </Store>
    //)
}
