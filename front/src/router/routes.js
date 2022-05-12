import React from 'react';
import {Route, Routes} from "react-router-dom";
import {IndexRouter} from "./indexRouter";

const Routers = () => {

    return (
        <Routes>
            {IndexRouter.map(route =>
                <Route element={route.element}
                       path={route.path}
                       exact={route.exact}/>
            )}
        </Routes>

    );
};

export default Routers;