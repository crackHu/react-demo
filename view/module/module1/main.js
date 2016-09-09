import React from 'react';
import {Table,Icon,Modal,Button,Card} from 'antd';
import Search from './search'

const Module1 = React.createClass({
	getInitialState() {
	    return {
	      data: [],
	    };
  	},
	showForm:function(){
		this.refs.module1search.showForm();
	},
	hideForm : function(){
		this.refs.module1search.hideForm();
	},
	handleOk() {
	    this.setState({
	    	visible: false,
	    });
	  },
	  handleCancel(e) {
	    this.setState({
	    	visible: false,
	    });
	  },
//	componentDidMount: function() {
//		var request = new Request('http://192.168.1.42:8080/v1/user/getData', {
//			method: 'get', 
//			mode: 'cors',
//			cache: 'default'
//		});
//	    fetch(request).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
//	  },
	render: function(){
		const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  render: text => <a href="#">{text}</a>,
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		}, {
		  title: '住址',
		  dataIndex: 'address',
		}, {
		  title: '操作',
		  key: 'operation',
		  render: (text, record) => (
		    <span>
		      <a href="#">修改</a>
		      <span className="ant-divider"></span>
		      <a href="#">删除</a>
		    </span>
		  ),
		}];
		
		return (
			<div className='module'>
				<Card>
					<div className="button-bar">
						<Button type="primary" icon="search" onClick={this.showForm}>搜索</Button>
						<Button type="primary" icon="plus">添加</Button>
					</div>
					<Search ref='module1search'/>
					<Table columns={columns} dataSource={this.state.data} />
				</Card>
			</div>)
	}
})

module.exports = Module1;