import React from 'react';
import { Col, Row, Card, Table, Statistic, Divider } from 'antd';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Chart from '../components/Chart';
import './style.css';
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { Typography } from 'antd';


const { Title } = Typography;

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
  {
    key: '9',
    name: '采购合同',
    com: '绿地控股集团',
    money: 32,
    risk: '首付款金额超过10%',
  },
  {
    key: '10',
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

let wordCloudOption = {
  title: {
    text: '高频风险项词云',
    left: '2%',
    textStyle: {
      fontSize: 15,
    },
    top: '1%',
  },
  tooltip: {
    show: true,
  },
  // series: [
  //   {
  //     name: '高频风险项',
  //     type: 'wordCloud',
  //     size: ['9%', '99%'],
  //     sizeRange: [6, 40],
  //     textRotation: [0, 45, 90, -45],
  //     rotationRange: [-45, 90],
  //     //shape: 'circle',
  //     textPadding: 0,
  //     autoSize: {
  //       enable: true,
  //       minSize: 6,
  //     },
  //     textStyle: {
  //       normal: {
  //         color: function () {
  //           return (
  //             'rgb(' +
  //             [
  //               Math.round(Math.random() * 160),
  //               Math.round(Math.random() * 160),
  //               Math.round(Math.random() * 160),
  //             ].join(',') +
  //             ')'
  //           );
  //         },
  //       },
  //       emphasis: {
  //         shadowBlur: 10,
  //         shadowColor: '#333',
  //       },
  //     },
  //     top: '15%',
  //     left: '5%',
  //     right: '1%',
  //     bottom: '1%',
  //     width: '90%',
  //     data: [],
  //   },
  // ],
  series: [
    {
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        color: function () {
          return (
            'rgb(' +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(',') +
            ')'
          );
        },

        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333',
        },
      },
      data: [],
    },
  ],
};

let JsonList = [];

JsonList.push(
  {
    name: '资质风险',
    value: 10,
  },
  {
    name: '信用风险',
    value: 20,
  },
  {
    name: '舆情风险',
    value: 20,
  },
  {
    name: '合同到期风险',
    value: 50,
  },
  {
    name: '合同逾期风险',
    value: 50,
  },
  {
    name: '合同倒签风险',
    value: 100,
  }
);

wordCloudOption.series[0].data = JsonList;

const cardStyle = { width: '97%', height: '34.8vh' };

const barOption = {
  title: {
    text: '风险按合同类型区分',
    left: '2%',
    textStyle: {
      fontSize: 15,
    },
    top: '1%',
  },
  color: ['#ee7959', '#108b96', '#b7d332', '#a6559d', '#9b8ea9'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['工程类', '农业类', '技术类', '科研类', 'A类', 'B类'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      name: '金额（万元）',
      type: 'value',
    },
  ],
  series: [
    {
      name: '合同金额合计',
      type: 'bar',
      barWidth: '60%',
      data: [5, 10, 15, 15, 20, 35],
      color: ['#ee7959', '#108b96', '#b7d332', '#a6559d', '#9b8ea9'],
    },
  ],
};

function Main() {
  return (
    <div id="main">
      <Row className="row">
        <Col span={8} className="col">
          <Card size="small" style={{ width: '28vw' }}>
            <Row>
              <Col span={1}></Col>
              <Col span={16}>
                <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
                  风险合同金额（支出类）
                </h4>
                <Statistic
                  title=""
                  value={112893}
                  suffix={<div class="ant-statistic-title">（万元）</div>}
                  style={{ marginBottom: '5px' }}
                />
                <span>
                  同比&nbsp;
                  <i>
                    4.2%<b id="triangle-down"></b>
                  </i>
                  环比&nbsp;
                  <i>
                    2.1%<b id="triangle-up"></b>
                  </i>
                </span>
              </Col>
              <Col span={6}>
                <i class="iconfont">&#xe995;</i>
              </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <h4
              style={{ marginTop: '0', marginBottom: '0', marginLeft: '15px' }}
            >
              风险合同数量：100
            </h4>
          </Card>
        </Col>
        <Col span={8} className="col">
          <Card size="small" style={{ width: '28vw' }}>
            <Row>
              <Col span={1}></Col>
              <Col span={16}>
                <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
                  风险合同金额（支出类）
                </h4>
                <Statistic
                  title=""
                  value={112893}
                  suffix={<div class="ant-statistic-title">（万元）</div>}
                  style={{ marginBottom: '5px' }}
                />
                <span>
                  同比&nbsp;
                  <i>
                    4.2%<b id="triangle-down"></b>
                  </i>
                  环比&nbsp;
                  <i>
                    2.1%<b id="triangle-up"></b>
                  </i>
                </span>
              </Col>
              <Col span={6}>
                <i class="iconfont">&#xe997;</i>
              </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <h4
              style={{ marginTop: '0', marginBottom: '0', marginLeft: '15px' }}
            >
              风险合同数量：100
            </h4>
          </Card>
        </Col>
        <Col span={8} className="col">
          <Card size="small" style={{ width: '28vw' }}>
            <Row>
              <Col span={1}></Col>
              <Col span={16}>
                <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
                  风险规则项
                </h4>
                <Statistic
                  title=""
                  value={112893}
                  suffix={<div class="ant-statistic-title">（个）</div>}
                  style={{ marginBottom: '5px' }}
                />
                <span>
                  同比&nbsp;
                  <i>
                    4.2%<b id="triangle-down"></b>
                  </i>
                  环比&nbsp;
                  <i>
                    2.1%<b id="triangle-up"></b>
                  </i>
                </span>
              </Col>
              <Col span={6}>
                <i class="iconfont">&#xe994;</i>
              </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <h4
              style={{ marginTop: '0', marginBottom: '0', marginLeft: '15px' }}
            >
              埋点：100 &nbsp;&nbsp;&nbsp; 清单：200
            </h4>
          </Card>
        </Col>
      </Row>
      <Row className="row">
        <Col span={12}>
          {/**风险按合同类型区分*/}
          <Card
            className="chartCard"
            style={{ ...cardStyle, marginBottom: '15px', padding: '1px' }}
          >
            <Chart option={barOption} style={{ padding: '10px' }} />
          </Card>
          <Card
            className="chartCard"
            style={{ ...cardStyle, marginTop: '15px', padding: '1px' }}
          >
            <Chart option={{ ...wordCloudOption }} />
          </Card>
        </Col>
        <Col span={12}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            bordered
            size="small"
            title={() => (
              <Title level={5} style={{ marginTop: '10px' }}>
                重点风险合同
              </Title>
            )}
            scroll={{
              y: '57vh',
            }}
            style={{
              width: '46.5vw',
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
