import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Slash from "./pages/Slash";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Slash} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
}

export default Routes;