import React from "react";
import {useAuth} from "./hooks/auth.hook";
import {Layout, Spin} from 'antd';
import {Header} from "./components";
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./routes";


function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth);

    // if (!ready) {
    //     return <Spin />
    // }
    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
            <Layout>
                <Header/>
                    <Layout style={{padding: '24px'}}>
                        <Layout.Content className="site-layout-background container">
                            {routes}
                        </Layout.Content>
                    </Layout>
            </Layout>
        </AuthContext.Provider>
    );
}

export default App;
