import React from "react";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

class Sidebar extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                theme="light"
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="sidebar-dimensions"

            >
                <SubMenu
                    key="sub2"
                    title={
                            <span>
                              <Icon type="appstore" />
                              <span>Navigation Two</span>
                            </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                            <span>
                              <Icon type="setting" />
                              <span>Navigation Three</span>
                            </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar