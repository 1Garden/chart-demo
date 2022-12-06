import React from 'react';
import { Col, Row, Card, Table } from 'antd';
import Chart from '../components/Chart';

const dataSource = [
  {
    key: '1',
    name: '采购合同',
    com: '绿地控股集团',
    money: 32,
    risk: '首付款金额超过10%',
  },
  {
    key: '2',
    name: '销售合同',
    com: '胡彦祖',
    money: 42,
    risk: '合同没盖章',
  },
  {
    key: '3',
    name: '采购合同',
    com: '绿地控股集团',
    money: 32,
    risk: '首付款金额超过10%',
  },
  {
    key: '4',
    name: '销售合同',
    com: '胡彦祖',
    money: 42,
    risk: '合同没盖章',
  },
  {
    key: '5',
    name: '采购合同',
    com: '绿地控股集团',
    money: 32,
    risk: '首付款金额超过10%',
  },
  {
    key: '6',
    name: '销售合同',
    com: '胡彦祖',
    money: 42,
    risk: '合同没盖章',
  },
  {
    key: '7',
    name: '采购合同',
    com: '绿地控股集团',
    money: 32,
    risk: '首付款金额超过10%',
  },
  {
    key: '8',
    name: '销售合同',
    com: '胡彦祖',
    money: 42,
    risk: '合同没盖章',
  },
];

const columns = [
  {
    title: '合同名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '相对方',
    dataIndex: 'com',
    key: 'com',
  },
  {
    title: '合同总金额（万元）',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: '风险项',
    dataIndex: 'risk',
    key: 'risk',
  },
];

function Main() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Card
            size="small"
            title="风险合同金额（收入类）"
            extra={<a href="#">More</a>}
            style={{
              width: 380,
            }}
          >
            <p>RMB xxx 万元</p>
            <p>同比 环比 </p>
            <p>风险合同</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="风险合同金额（支出类）"
            extra={<a href="#">More</a>}
            style={{
              width: 380,
            }}
          >
            <p>RMB xxx 万元</p>
            <p>同比 环比 </p>
            <p>风险合同</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="风险规则项"
            extra={<a href="#">More</a>}
            style={{
              width: 380,
            }}
          >
            <p>RMB xxx 万元</p>
            <p>同比 环比 </p>
            <p>风险合同</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            title="风险合同金额"
            extra={<a href="#">More</a>}
            style={{
              width: 380,
            }}
          >
            <p>RMB xxx 万元</p>
            <p>同比 环比 </p>
            <p>风险合同</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card
            title="风险按合同类型区分"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
            }}
          >
            <Chart />
          </Card>
          <Card
            title="高频风险项"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
            }}
          >
            <Chart />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="重点风险合同"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
            }}
          >
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Main;
