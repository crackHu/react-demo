import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Top = React.createClass({
  render() {
    return (
      <Menu
        selectedKeys={[this.props.route.topKey]}
        mode="horizontal"
        theme = "blue"
        className="c-ant-menu"
      >
      	<Menu.Item key="home">
          <Link to='/account'><Icon type="home" /> 首页</Link>
        </Menu.Item>
        <Menu.Item key="community">
          <Link to='/topic'><Icon type="appstore-o" />社区管理</Link>
        </Menu.Item>
        <Menu.Item key="center">
          <Icon type="shopping-cart" />xxxxx
        </Menu.Item>
        <Menu.Item key="analysis">
        	<Icon type="bar-chart" />xxxxx
        </Menu.Item>
      </Menu>
    );
  },
});

module.exports = Top;