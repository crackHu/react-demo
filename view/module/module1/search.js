import React from 'react';
import {Button,Form, Input, Row, Col, DatePicker} from 'antd';

const FormItem = Form.Item;

const Search = React.createClass({
	getInitialState() {
	    return {visible:false };
	},
	showForm:function(){
		this.setState({
	    	visible: !this.state.visible,
	    });
	},
	hideForm : function(){
		this.setState({
	    	visible: false
	    });
	},
	render:function(){
		return (
			<Form horizontal className={this.state.visible ? "ant-advanced-search-form c-form-a" : "ant-advanced-search-form c-form-a dis"}>
			    <Row gutter={16}>
			      <Col sm={8}>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			        <FormItem
			          label="较长搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <DatePicker size="default" />
			        </FormItem>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			      </Col>
			      <Col sm={8}>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			        <FormItem
			          label="较长搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <DatePicker size="default" />
			        </FormItem>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			      </Col>
			      <Col sm={8}>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			        <FormItem
			          label="较长搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <DatePicker size="default" />
			        </FormItem>
			        <FormItem
			          label="搜索名称"
			          labelCol={{ span: 10 }}
			          wrapperCol={{ span: 14 }}
			        >
			          <Input placeholder="请输入搜索名称" size="default" />
			        </FormItem>
			      </Col>
			    </Row>
			    <Row>
			      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
			        <Button type="primary" htmlType="submit">搜索</Button>
			        <Button className="ml15">清除</Button>
			        <Button className="ml15" onClick={this.hideForm}>取消</Button>
			      </Col>
			    </Row>
			</Form>
		)
	}
})

module.exports = Search;