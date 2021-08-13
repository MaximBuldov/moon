import React, {useContext, useState} from 'react';
import {Drawer, Layout, Menu} from "antd";
import {NavLink, useHistory} from "react-router-dom";
import './style.scss';
import {VscMenu} from "react-icons/all";
import {AuthContext} from "../../context/AuthContext";



const Header = () => {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('1');
    const showDrawer = () => {
        setVisible(!visible);
    }
    const handleClick = e => {
        setCurrentMenu(e.key)
    };

    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout();
        history.push('/login');
    }
    return (
        <>
            <Layout.Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick={handleClick}
                    defaultSelectedKeys={[currentMenu]}
                    style={{justifyContent: "flex-end"}}
                >
                    {auth.isAuth ? (
                        <>
                            <Menu.Item key="home">
                                <NavLink to="/">Home</NavLink>
                            </Menu.Item>
                            <Menu.Item onClick={logoutHandler} key="logout">
                            Log out
                            </Menu.Item>
                            <Menu.Item onClick={showDrawer} key="drawer">
                                <VscMenu />
                            </Menu.Item>
                        </>
                    ) : (
                        <>
                            <Menu.Item key="login">
                                <NavLink to="/login">Log In</NavLink>
                            </Menu.Item>
                            <Menu.Item key="signup">
                                <NavLink to="/signup">Sign Up</NavLink>
                            </Menu.Item>
                        </>
                        )}
                </Menu>
            </Layout.Header>
            <Drawer
                title="Maxim"
                placement="right"
                closable={false}
                onClose={showDrawer}
                visible={visible}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderLeft: 0 }}
                >
                    <Menu.Item key="1">Payment</Menu.Item>
                    <Menu.Item key="2">Past order</Menu.Item>
                    <Menu.Item key="3">FAQ</Menu.Item>
                    <Menu.Item key="4">Contact us</Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};

export default Header;