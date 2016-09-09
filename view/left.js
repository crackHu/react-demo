import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;

const Sider = React.createClass({
  	render() {
    	return (
    		<div>
	      		<Menu theme="blue-dark" defaultOpenKeys={['sub1']} style={{ width: 240,display:this.props.route.status==0?'block':'none' }} selectedKeys={[this.props.route.menuKey]} mode="inline">
	        		<SubMenu key="sub1" title={<span><Icon type="book" /><span>首页</span></span>}>
	        			<Menu.Item key="account"><Link to='/account'>账号管理</Link></Menu.Item>
	        			<Menu.Item key="survey"><Link to='/survey'>应用概况</Link></Menu.Item>
	        			<Menu.Item key="message">消息通知</Menu.Item>
	        		</SubMenu>
	      		</Menu>
	      		<Menu theme="blue-dark" defaultOpenKeys={['sub1','sub2']} style={{ width: 240,display:this.props.route.status==1?'block':'none' }} selectedKeys={[this.props.route.menuKey]} mode="inline">
	        		<SubMenu key="sub1" title={<span><Icon type="book" /><span>内容维护</span></span>}>
	        			<Menu.Item key="topic"><Link to='/topic'>xx管理</Link></Menu.Item>
	        			<Menu.Item key="xx1">xxxx管理</Menu.Item>
	        			<Menu.Item key="xx2">xx管理</Menu.Item>
	        			<Menu.Item key="xx3">xx监控</Menu.Item>
	        			<Menu.Item key="xx4">xx模板</Menu.Item>
	        		</SubMenu>
	        		<SubMenu key="sub2" title={<span><Icon type="user" /><span>用户管理</span></span>}>
	        			<Menu.Item key="user">用户管理</Menu.Item>
	        		</SubMenu>
	      		</Menu>
	      		<Menu theme="blue-dark" defaultOpenKeys={['sub1']} style={{ width: 240 ,display:this.props.route.status==2?'block':'none'}} selectedKeys={[this.props.route.menuKey]} mode="inline">
	        		<SubMenu key="sub1" title={<span><Icon type="book" /><span>交易中心</span></span>}>
	        			<Menu.Item key="xx5">交易明细</Menu.Item>
	        			<Menu.Item key="xx6">提现审核</Menu.Item>
	        			<Menu.Item key="xx7">交易数据分析</Menu.Item>
	        			<Menu.Item key="xx8">内容监控</Menu.Item>
	        		</SubMenu>
	      		</Menu>
	      		<Menu theme="blue-dark" defaultOpenKeys={['sub1']} style={{ width: 240 ,display:this.props.route.status==3?'block':'none'}} openKeys={['sub1']} onOpen={this.onToggle} onClose={this.onToggle} selectedKeys={[this.props.route.menuKey]} mode="inline">
	        		<SubMenu key="sub1" title={<span><Icon type="book" /><span>xxxxx</span></span>}>
	        			<Menu.Item key="xx9">xxxxxx</Menu.Item>
	        			<Menu.Item key="xx10">xxxxxx</Menu.Item>
	        		</SubMenu>
	      		</Menu>
      		</div>
    	);
  	}
});

module.exports = Sider;