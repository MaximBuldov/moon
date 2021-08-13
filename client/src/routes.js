import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {
    Login,
    Signup,
    Started,
    UseCases,
    Location,
    LocationDetails,
    ItemList,
    ItemDetail,
    HelperCount,
    DateSelect, PayMethod
} from "./pages";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact component={Started}/>
                <Route path="/usecases" exact component={UseCases} />
                <Route path="/location" exact component={Location} />
                <Route path="/location-details" exact component={LocationDetails} />
                <Route path="/item-list" exact component={ItemList} />
                <Route path="/item-detail" exact component={ItemDetail} />
                <Route path="/helper-count" exact component={HelperCount} />
                <Route path="/date-select" exact component={DateSelect} />
                <Route path="/paymethod" exact component={PayMethod} />
                <Redirect to="/" />
            </Switch>
        )
    }
    return  (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Redirect to="/login" />
        </Switch>
    )
}