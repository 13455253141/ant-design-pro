import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Table } from 'antd';
import { connect } from "dva";

// eslint-disable-next-line react/prefer-stateless-function
@connect(({ demo }) => {
  return {
    tableData: demo.tableData,
  }

})
class Index extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'demo/getTableData',
      });
    }
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];
    // const dataSource = [
    //   {
    //     key: 1,
    //     name: 'zhangsan',
    //     age: 20,
    //     address: 'beijing'
    //   },
    // ];
    const { tableData } = this.props;
    return (
      <PageHeaderWrapper>
        <Card>
          <Table
            bordered
            dataSource={tableData}
            columns={columns}
            size="small" />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
