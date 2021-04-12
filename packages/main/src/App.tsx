import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));
const SignIn = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));
const VerifyAccount = lazy(() => import("./pages/verify-account"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const ErrorNotFound = lazy(() => import("./pages/error-404"));
const Error500 = lazy(() => import("./pages/error-500"));
const Error503 = lazy(() => import("./pages/error-503"));
const Error505 = lazy(() => import("./pages/error-505"));

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
                    <Route
                        exact
                        path="/verify-account"
                        component={VerifyAccount}
                    />
                    <Route
                        exact
                        path="/forgot-password"
                        component={ForgotPassword}
                    />
                    <Route exact path="/error-500" component={Error500} />
                    <Route exact path="/error-503" component={Error503} />
                    <Route exact path="/error-505" component={Error505} />
                    <Route path="*" component={ErrorNotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
