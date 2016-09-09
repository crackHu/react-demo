import './style.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Sider from './left';
import Top from './top';
import { Router, Route, hashHistory,IndexRedirect } from 'react-router';
import Module1 from './module/module1/main';
import Module3 from './module/module3/main';
import Module4 from './module/survey/main';

var Container = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<div className="top">
					<div className='logo'></div>
					<Top route={this.props.children.props.route}/>
				</div>
				<div className="content">
					<div className='left'>
						<Sider route={this.props.children.props.route}/>
					</div>
					<div className='main'>
						{this.props.children}
					</div>				
				</div>
			</div>
		);
	}
})

ReactDOM.render(
	<Router history={hashHistory}>
	  <Route path="/" component={Container}>
	  	<IndexRedirect to="/account" />
	  	<Route path="account" menuKey="account" status='0' topKey="home" component={Module3}/>
	  	<Route path="survey" menuKey="survey" status='0' topKey="home" component={Module4}/>
	  	
	  	<Route path="topic" menuKey="topic" status='1' topKey="community" component={Module1}/>
	  </Route>
	</Router>
	, document.body);