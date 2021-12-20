import React from 'react';
import { useRoutes } from 'react-router-dom';
//! pages
import HomePage from '../pages/homepage/homepage.component';
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
        { path: '/', element: <HomePage /> },
        { path: '/babydoll', element: <CompBabyDoll /> },
        { path: '/aodam', element: <CompAoDam /> },
        { path: '/quanjean', element: <CompQuanJean /> },
        { path: '/giangsinh', element: <CompGiangSinh /> },
        { path: '/xuhuong', element: <CompXuHuong /> },
    ]);

    return routes;
};

export default AppRoute;
