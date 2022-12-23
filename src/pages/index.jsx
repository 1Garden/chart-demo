import React from 'react';
import { Table, Statistic, Tag } from 'antd';
import Chart from '../components/Chart';
import processNum from '../utils/processNum'
import './style.css';
import 'echarts-wordcloud';

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth() + 1;


const dataSource = [
  {
    key: '1',
    name: '（演示）绿地控股集团采购合同',
    com: '绿地控股集团有限公司',
    money: processNum(Math.random() * 100000),
    risk: '存续风险',
  },
  {
    key: '2',
    name: '智慧园区装修材料采购合同测试',
    com: '绿地控股集团有限公司',
    money: processNum(Math.random() * 100000),
    risk: '关联交易风险',
  },
  {
    key: '3',
    name: '海尔智家股份有限公司',
    com: '海尔智家股份有限公司',
    money: processNum(Math.random() * 100000),
    risk: '存续风险',
  },
  {
    key: '4',
    name: '（导入）绿地控股集团采购合同测试',
    com: '绿地控股集团有限公司',
    money: processNum(Math.random() * 100000),
    risk: '关联交易风险',
  },
  {
    key: '5',
    name: '（演示）奇瑞控股集团销售合同',
    com: '	奇瑞控股集团有限公司',
    money: processNum(Math.random() * 100000),
    risk: '存续风险',
  },
  {
    key: '6',
    name: '上海吉祥航空销售合同',
    com: '上海吉祥航空股份有限公司',
    money: processNum(Math.random() * 100000),
    risk: '关联交易风险',
  },
  {
    key: '7',
    name: '内蒙古伊利实业销售合同',
    com: '内蒙古伊利实业集团股份有限公司',
    money: processNum(Math.random() * 100000),
    risk: '存续风险',
  },
  {
    key: '8',
    name: '（演示）海尔智家产品战略合作协议',
    com: '海尔智家股份有限公司',
    money: processNum(Math.random() * 100000),
    risk: '关联交易风险',
  },
  {
    key: '9',
    name: '海澜之家项目战略合作协议书',
    com: '海澜之家集团股份有限公司',
    money: processNum(Math.random() * 100000),
    risk: '关联交易风险',
  }
];

const columns = [
  {
    title: '合同名称',
    dataIndex: 'name',
    key: 'name',
    className: 'miniFont',
  },
  {
    title: '相对方',
    dataIndex: 'com',
    key: 'com',
    className: 'miniFont',
  },
  {
    title: '风险项',
    dataIndex: 'risk',
    key: 'risk',
    width: '20%',
    align: 'center',
    className: 'miniFont',
    render: (a) => {
      return (
        <Tag color="red" key={a}>
          {a}
        </Tag>
      );
    },
  },
  {
    title: '合同总金额（万元）',
    dataIndex: 'money',
    key: 'money',
    className: 'miniFont',
    width: '25%',
    align: 'right',
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
  series: [
    {
      type: 'wordCloud',
      gridSize: 40,
      sizeRange: [3, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      left: 'center',
      top: 'center',
      width: '100%',
      height: '80%',
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
  grid: {
    left: '5%',
    right: '5%',
    top: '30%',
    bottom: '3%',
    containLabel: true,
  },
};

let JsonList = [
  {
    name: '合同倒签风险',
    value: 101,
  },
];

let list = [
  '存续风险',
  '资质风险',
  '信用风险',
  '舆情风险',
  '资信变化风险',
  '历史合作异常风险',
  '相对方评级风险',
  '纠纷案件风险',
  '初次合作风险',
  '新纠纷案件风险',
  '合作问题风险',
  '合同倒签风险',
  '制式模板风险',
  '关联交易风险',
  '重点涉外风险',
  '红线条款风险',
  '保密条款风险',
  '合同到期风险',
  '合同逾期风险',
  '超额支付风险',
  '频繁变更风险',
  '风险处置风险',
  '人员变动风险',
  '首付款校验（支出类）',
  '首付款校验（收入类）',
  '质保金校验',
  '预付款校验',
  '违约金校验',
  '定金校验',
  '预算校验',
  '应付到期预警',
  '应收到期预警',
  '应付逾期预警',
  '应收逾期预警',
  '已开票未收款预警',
  '采购限价',
  '标的物风险',
  '逾期交货风险',
  '交货不足风险',
  '交货质量风险',
];

for (let name of list) {
  JsonList.push({
    name,
    value: parseInt(50 * Math.random()),
  });
}

wordCloudOption.series[0].data = JsonList;

const barOption = {
  title: {
    text: '风险按合同类型区分',
    left: '10px',
    textStyle: {
      fontSize: 15,
    },
    top: '1%',
  },
  // color: ['#ee7959', '#108b96', '#b7d332', '#a6559d', '#9b8ea9'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
    // params 具体信息看下方
    formatter: function (params) {
      let result = params[0].name + '<br />';
      params.forEach(function (item) {
        // item.marker是自带的小圆点标识
        result +=
          item.marker + item.seriesName + ': ' + item.value + ' (万元)<br />';
      });
      return result;
    },
  },
  grid: {
    left: '5%',
    right: '5%',
    top: '25%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['一般采购', '物料采购', '资产购置', '外贸销售', '内贸销售'],
      axisTick: {
        alignWithLabel: true,
      },
      // axisLabel: {
      //   interval: 0,
      //   rotate: 30,
      // },
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
      data: [5, 10, 15, 15, 20, 50],
      color: '#3c7cd4',
    },
  ],
};

function Main() {
  return (
    <div id="main">
      <div id="page">
        <h2 className="page_fgszb_h2">
          合同风险报表 <span id="now">更新时间：{year}-{month}-{day}</span>
        </h2>
        <div className="card-row">
          <div className="card" style={{ width: '30%' }}>
            <h5>风险合同金额（支出类）</h5>
            <Statistic
              className="statistic"
              title=""
              value={112893}
              suffix={<div className="ant-statistic-title">（万元）</div>}
            />
            <div className="compared-statistic">
              <span>
                同比
                <i>
                  4.2%<b id="triangle-down"></b>
                </i>
                环比
                <i>
                  2.1%<b id="triangle-up"></b>
                </i>
              </span>
            </div>
            <h4>
              合同风险数量：3
              <div
                className="ant-statistic-title"
                style={{ display: 'inline' }}
              >
                （个）
              </div>
            </h4>
          </div>
          <div className="card" style={{ width: '30%' }}>
            <h5>风险合同金额（收入类）</h5>
            <Statistic
              className="statistic"
              title=""
              value={6844327}
              suffix={<div className="ant-statistic-title">（万元）</div>}
            />
            <div className="compared-statistic">
              <span>
                同比
                <i>
                  6.1%<b id="triangle-up"></b>
                </i>
                环比
                <i>
                  3.8%<b id="triangle-down"></b>
                </i>
              </span>
            </div>
            <h4>
              合同风险数量：3
              <div
                className="ant-statistic-title"
                style={{ display: 'inline' }}
              >
                （个）
              </div>
            </h4>
          </div>
          <div className="card" style={{ width: '30%' }}>
            <h5>风险规则项</h5>
            <Statistic
              className="statistic"
              title=""
              value={28}
              suffix={<div className="ant-statistic-title">（个）</div>}
            />
            <div className="compared-statistic">
              <span>
                同比
                <i>
                  4.2%<b id="triangle-down"></b>
                </i>
                环比
                <i>
                  2.1%<b id="triangle-up"></b>
                </i>
              </span>
            </div>
            <h4>
              埋点：35
              <div
                className="ant-statistic-title"
                style={{ display: 'inline' }}
              >
                （个）
              </div>
              &nbsp;&nbsp;
               清单：12
              <div
                className="ant-statistic-title"
                style={{ display: 'inline' }}
              >
                （个）
              </div>
            </h4>
          </div>
        </div>
        <div className="card-row">
          <div
            className="card-col"
            style={{ width: '48%', marginRight: '10px' }}
          >
            <div
              className="card"
              style={{ width: '100%', height: 'auto', marginBottom: '30px' }}
            >
              <Chart option={barOption} />
            </div>
            <div className="card" style={{ width: '100%', height: 'auto' }}>
              <Chart option={wordCloudOption} />
            </div>
          </div>
          <div
            className="card-col"
            style={{ width: '42.8%', marginLeft: '10px' }}
          >
            <div className="card" style={{ width: '100%', height: '610px' }}>
              <h5
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginLeft: '20px',
                  marginBottom: '20px',
                }}
              >
                风险合同详情
              </h5>
              <Table
                id='table'
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                bordered
                scroll={{
                  y: '51vh',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
