import React, {useState} from 'react';
import {Drawer, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import './style.scss';
import {VscMenu} from "react-icons/all";



const Header = () => {
    const [visible, setVisible] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('1');
    const showDrawer = () => {
        setVisible(!visible);
    }
    const handleClick = e => {
        setCurrentMenu(e.key)
    };
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
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/login">Log In</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item onClick={showDrawer} key="4">
                        <VscMenu />
                    </Menu.Item>
                </Menu>
            </Layout.Header>
            <Drawer
                title="Basic Drawer"
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
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};

export default Header;