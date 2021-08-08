import React from "react";
import {useAuth} from "./hooks/auth.hook";
import {Layout} from 'antd';
import {Header, Login, Signup, Started, UseCases} from "./components";
import {Route, Switch} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";



function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuth = !!token;
    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
            <Layout>
                <Header/>
                    <Layout style={{padding: '24px'}}>
                        <Layout.Content className="site-layout-background container">
                                <Switch>
                                    <Route path="/" exact component={Started}/>
                                    <Route path="/usecases" exact component={UseCases} />
                                    <Route path="/login" exact component={Login} />
                                    <Route path="/signup" exact component={Signup} />
                                </Switch>
                        </Layout.Content>
                    </Layout>
            </Layout>
        </AuthContext.Provider>
    );
}

export default App;
