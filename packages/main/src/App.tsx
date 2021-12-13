import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader";

// Classic Pages

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
const ProfileView = lazy(() => import("./pages/profile-view"));
const Connections = lazy(() => import("./pages/connections"));
const Groups = lazy(() => import("./pages/groups"));
const Events = lazy(() => import("./pages/events"));
const Timeline = lazy(() => import("./pages/timeline"));
const Pricing = lazy(() => import("./pages/pricing"));
const HelpCenter = lazy(() => import("./pages/help-center"));
const Invoice = lazy(() => import("./pages/invoice"));
const Calendar = lazy(() => import("./pages/apps/calendar"));
const Chat = lazy(() => import("./pages/apps/chat"));
const Contacts = lazy(() => import("./pages/apps/contacts"));
const FileManager = lazy(() => import("./pages/apps/file-manager"));
const Mail = lazy(() => import("./pages/apps/mail"));

// Classic Plus Pages

const ClassicPlusDashboardOne = lazy(
    () => import("./pages/classic-plus/dashboard-one")
);

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        {/* Classic Routes */}

                        <Route path="/" element={<DashboardOne />} />
                        <Route
                            path="/dashboard-two"
                            element={<DashboardTwo />}
                        />
                        <Route
                            path="/dashboard-three"
                            element={<DashboardThree />}
                        />
                        <Route
                            path="/dashboard-four"
                            element={<DashboardFour />}
                        />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route
                            path="/verify-account"
                            element={<VerifyAccount />}
                        />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route path="/error-500" element={<Error500 />} />
                        <Route path="/error-503" element={<Error503 />} />
                        <Route path="/error-505" element={<Error505 />} />
                        <Route path="/profile-view" element={<ProfileView />} />
                        <Route path="/connections" element={<Connections />} />
                        <Route path="/groups" element={<Groups />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/help-center" element={<HelpCenter />} />
                        <Route path="/invoice" element={<Invoice />} />
                        <Route path="/apps/calendar" element={<Calendar />} />
                        <Route path="/apps/chat" element={<Chat />} />
                        <Route path="/apps/contacts" element={<Contacts />} />
                        <Route
                            path="/apps/file-manager"
                            element={<FileManager />}
                        />
                        <Route path="/apps/mail" element={<Mail />} />
                        <Route path="*" element={<ErrorNotFound />} />

                        {/* Classic Plus Routes */}

                        <Route
                            path="/classic-plus/dashboard-one"
                            element={<ClassicPlusDashboardOne />}
                        />
                    </Routes>
                </Suspense>
            </Router>
        </>
    );
};

export default App;
