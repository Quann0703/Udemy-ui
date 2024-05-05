import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
