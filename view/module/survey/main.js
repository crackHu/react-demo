import React from 'react';
import {Card} from 'antd';
import {BarChart} from 'react-d3-components';

const Module4 = React.createClass({
	render : function(){
		var data = [{
		    label: 'somethingA',
		    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
		}];

		return (
			<div className='survey'>
				<Card title='每日新增用户' style={{ width: 440 }}>
					<BarChart
				        data={data}
				        width={380}
				        height={300}
				        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</Card>
				<Card title='每日新增用户' style={{ width: 440 }}>
					<BarChart
				        data={data}
				        width={380}
				        height={300}
				        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</Card>
				<Card title='每日新增用户' style={{ width: 440 }}>
					<BarChart
				        data={data}
				        width={380}
				        height={300}
				        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</Card>
				<Card title='每日新增用户' style={{ width: 440 }}>
					<BarChart
				        data={data}
				        width={380}
				        height={300}
				        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</Card>
				<Card title='每日新增用户' style={{ width: 440 }}>
					<BarChart
				        data={data}
				        width={380}
				        height={300}
				        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</Card>
			</div>
		)
	}
})

module.exports = Module4;