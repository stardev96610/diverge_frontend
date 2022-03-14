import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// components
import Root from './Root';
import PrivateRoute from './PrivateRoute';

// lazy load all the views
// auth
const Login = React.lazy(() => import('../pages/auth/Login'));

// home
const Home = React.lazy(() => import('../pages/Home'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            // root route
            path: '/',
            element: <Root />,
        },
        {
            // public routes
            path: '/',
            children: [
                {
                    path: 'auth',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                    ],
                },
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
            ],
        },
    ]);
};

export default AllRoutes;
