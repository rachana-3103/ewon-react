import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardOne from "./pages/dashboard-one";
import DashboardTwo from "./pages/dashboard-two";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DashboardOne />
                </Route>
                <Route exact path="/dashboard-two">
                    <DashboardTwo />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
