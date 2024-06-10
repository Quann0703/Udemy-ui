import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment, useEffect } from 'react';
import useAuthModal from '~/hooks/useAuthModal';
import AuthModal from '~/components/AuthModal';
import Login from './pages/Login';
import Register from './pages/Register';
import useAccount from './hooks/useAccount';
import { doGetAccount } from './store/actions/accountAction';
import PrivateRoute from './components/PrivateRoute';
function App() {
    const modal = useAuthModal();
    const account = useAccount();
    useEffect(() => {
        if (!account?.state?.userInfo?.accessToken) {
            doGetAccount({ ...account });
        }
    }, []);
    return (
        <Router>
            <div className="App">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <ToastContainer />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            >
                                {route.children &&
                                    route.children.map((routeChild, index) => {
                                        const PageChild = routeChild.component;
                                        return <Route key={index} path={routeChild.path} element={<PageChild />} />;
                                    })}
                            </Route>
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </PrivateRoute>
                                }
                            >
                                {route.children &&
                                    route.children.map((routeChild, index) => {
                                        const PageChild = routeChild.component;
                                        return <Route key={index} path={routeChild.path} element={<PageChild />} />;
                                    })}
                            </Route>
                        );
                    })}
                </Routes>
                {modal.state.isOpen && (
                    <AuthModal>
                        <>
                            {modal.state.isLogin && <Login />}
                            {modal.state.isRegister && <Register />}
                        </>
                    </AuthModal>
                )}
            </div>
        </Router>
    );
}

export default App;
