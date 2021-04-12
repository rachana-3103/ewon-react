import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));
const SignIn = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));

const App: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={DashboardOne} />
                    <Route
                        exact
                        path="/dashboard-two"
                        component={DashboardTwo}
                    />
                    <Route
                        exact
                        path="/dashboard-three"
                        component={DashboardThree}
                    />
                    <Route
                        exact
                        path="/dashboard-four"
                        component={DashboardFour}
                    />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
