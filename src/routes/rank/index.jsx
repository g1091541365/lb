/* eslint-disable react/sort-comp */
import React from 'react';
import {
	withRouter,
} from 'react-router-dom';
import request from 'utils/request';
import api from 'utils/enum-api';
import {
	Table, Button, Icon, message,
} from 'antd';

class Index extends React.Component {
	columns = [
		{
			title: '排名',
      render: (text, record, index) => index + 1,
		},
		{
			title: '组号',
			dataIndex: 'id',
			render: text => `第${text}组`,
		},
		{
			title: '积分',
			dataIndex: 'score',
		},
	];

	constructor(props) {
		super(props);
		this.state = {
			data: [{
				id: 1,
				score: 0,
			}, {
				id: 2,
				score: 0,
			}, {
				id: 3,
				score: 0,
			}, {
				id: 4,
				score: 0,
			}, {
				id: 5,
				score: 0,
			}, {
				id: 6,
				score: 0,
			}, {
				id: 7,
				score: 0,
			}]
		};
	}

	componentDidMount = () => {
		const params = {};
		const {
			getRankList,
		} = api;
    request(getRankList, 'get', params).then(res => {
			if (res.success) {
				this.setState({
					data: res.data,
				});
			} else {
				message.error('数据获取失败！');
			}
		});
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<Button onClick={() => this.props.history.goBack()} style={{ margin: 10 }} type="primary">
					<Icon type="arrow-left"/>
					<span>返回</span>
				</Button>
				<Table columns={this.columns} dataSource={data} pagination={false} rowKey={record => record.id} />
			</div>
		);
	}
}

export default withRouter(Index);
