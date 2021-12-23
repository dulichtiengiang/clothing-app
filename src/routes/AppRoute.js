import React from 'react';
import { useRoutes } from 'react-router-dom';
//! pages
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import SigninSignupPage from '../pages/signin-signup/signin-signup.component'
import PublicRoute from './PublicRoute';
//! comps
const CompBabyDoll = () => {
    return <div className="homeone">Hello Baby Doll</div>;
};
const CompAoDam = () => {
    return <div className="homeone">Hello Dam</div>;
};
const CompQuanJean = () => {
    return <div className="homeone">Hello Quan Jean</div>;
};
const CompGiangSinh = () => {
    return <div className="homeone">Hello Giang Sinh</div>;
};
const CompXuHuong = () => {
    return <div className="homeone">Hello Xu Huong</div>;
};

const AppRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <PublicRoute />, //! Thu thap du lieu
            children: [
                { path: '', element: <HomePage /> },
                { path: 'home', element: <HomePage /> },
                { path: 'shop', element: <ShopPage /> },
                { path: 'signin', element: <SigninSignupPage /> },
            ],
        },
        { path: '/babydoll', element: <CompBabyDoll /> },
        { path: '/aodam', element: <CompAoDam /> },
        { path: '/quanjean', element: <CompQuanJean /> },
        { path: '/giangsinh', element: <CompGiangSinh /> },
        { path: '/xuhuong', element: <CompXuHuong /> },
    ]);

    return routes;
};

export default AppRoute;
