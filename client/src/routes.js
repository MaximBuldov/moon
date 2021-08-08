import React from 'react';
import {Switch, Route} from "react-router-dom";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>

            </Switch>
        )
    }
    return  (
        <Switch>

        </Switch>
    )
}