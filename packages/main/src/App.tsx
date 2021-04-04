import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));

const App: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        <DashboardOne />
                    </Route>
                    <Route exact path="/dashboard-two">
                        <DashboardTwo />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
