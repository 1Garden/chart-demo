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
      data: [
        {
          name: 'Sam S Club',
          value: 10000,
          textStyle: {
            normal: {
              color: 'black',
            },
            emphasis: {
              color: 'red',
            },
          },
        },
        {
          name: 'Macys',
          value: 6181,
        },
        {
          name: 'Amy Schumer',
          value: 4386,
        },
        {
          name: 'Jurassic World',
          value: 4055,
        },
        {
          name: 'Charter Communications',
          value: 2467,
        },
        {
          name: 'Chick Fil A',
          value: 2244,
        },
        {
          name: 'Planet Fitness',
          value: 1898,
        },
        {
          name: 'Pitch Perfect',
          value: 1484,
        },
        {
          name: 'Express',
          value: 1112,
        },
        {
          name: 'Home',
          value: 965,
        },
        {
          name: 'Johnny Depp',
          value: 847,
        },
        {
          name: 'Lena Dunham',
          value: 582,
        },
        {
          name: 'Lewis Hamilton',
          value: 555,
        },
        {
          name: 'KXAN',
          value: 550,
        },
        {
          name: 'Mary Ellen Mark',
          value: 462,
        },
        {
          name: 'Farrah Abraham',
          value: 366,
        },
        {
          name: 'Rita Ora',
          value: 360,
        },
        {
          name: 'Serena Williams',
          value: 282,
        },
        {
          name: 'NCAA baseball tournament',
          value: 273,
        },
        {
          name: 'Point Break',
          value: 265,
        },
      ],
    },
  ],
};

let JsonList = [];

JsonList.push(
  {
    name: 'Jayfee',
    value: 666,
  },
  {
    name: 'Nancy',
    value: 520,
  },
  {
    name: '生活资源',
    value: '999',
  },
  {
    name: '供热管理',
    value: '888',
  },
  {
    name: '供气质量',
    value: '777',
  },
  {
    name: '生活用水管理',
    value: '688',
  },
  {
    name: '一次供水问题',
    value: '588',
  },
  {
    name: '交通运输',
    value: '516',
  },
  {
    name: '城市交通',
    value: '515',
  },
  {
    name: '环境保护',
    value: '483',
  },
  {
    name: '房地产管理',
    value: '462',
  },
  {
    name: '城乡建设',
    value: '449',
  },
  {
    name: '社会保障与福利',
    value: '429',
  },
  {
    name: '社会保障',
    value: '407',
  },
  {
    name: '文体与教育管理',
    value: '406',
  },
  {
    name: '公共安全',
    value: '406',
  },
  {
    name: '公交运输管理',
    value: '386',
  },
  {
    name: '出租车运营管理',
    value: '385',
  },
  {
    name: '供热管理',
    value: '375',
  },
  {
    name: '市容环卫',
    value: '355',
  },
  {
    name: '自然资源管理',
    value: '355',
  },
  {
    name: '粉尘污染',
    value: '335',
  },
  {
    name: '噪声污染',
    value: '324',
  },
  {
    name: '土地资源管理',
    value: '304',
  },
  {
    name: '物业服务与管理',
    value: '304',
  },
  {
    name: '医疗卫生',
    value: '284',
  },
  {
    name: '粉煤灰污染',
    value: '284',
  },
  {
    name: '占道',
    value: '284',
  },
  {
    name: '供热发展',
    value: '254',
  },
  {
    name: '农村土地规划管理',
    value: '254',
  },
  {
    name: '生活噪音',
    value: '253',
  },
  {
    name: '供热单位影响',
    value: '253',
  },
  {
    name: '城市供电',
    value: '223',
  },
  {
    name: '房屋质量与安全',
    value: '223',
  },
  {
    name: '大气污染',
    value: '223',
  },
  {
    name: '房屋安全',
    value: '223',
  },
  {
    name: '文化活动',
    value: '223',
  },
  {
    name: '拆迁管理',
    value: '223',
  },
  {
    name: '公共设施',
    value: '223',
  },
  {
    name: '供气质量',
    value: '223',
  },
  {
    name: '供电管理',
    value: '223',
  },
  {
    name: '燃气管理',
    value: '152',
  },
  {
    name: '教育管理',
    value: '152',
  },
  {
    name: '医疗纠纷',
    value: '152',
  },
  {
    name: '执法监督',
    value: '152',
  },
  {
    name: '设备安全',
    value: '152',
  },
  {
    name: '政务建设',
    value: '152',
  },
  {
    name: '县区、开发区',
    value: '152',
  },
  {
    name: '宏观经济',
    value: '152',
  },
  {
    name: '教育管理',
    value: '112',
  },
  {
    name: '社会保障',
    value: '112',
  },
  {
    name: '生活用水管理',
    value: '112',
  },
  {
    name: '物业服务与管理',
    value: '112',
  },
  {
    name: '分类列表',
    value: '112',
  },
  {
    name: '农业生产',
    value: '112',
  },
  {
    name: '二次供水问题',
    value: '112',
  },
  {
    name: '城市公共设施',
    value: '92',
  },
  {
    name: '拆迁政策咨询',
    value: '92',
  },
  {
    name: '物业服务',
    value: '92',
  },
  {
    name: '物业管理',
    value: '92',
  },
  {
    name: '社会保障保险管理',
    value: '92',
  },
  {
    name: '低保管理',
    value: '92',
  },
  {
    name: '文娱市场管理',
    value: '72',
  },
  {
    name: '城市交通秩序管理',
    value: '72',
  },
  {
    name: '执法争议',
    value: '72',
  },
  {
    name: '商业烟尘污染',
    value: '72',
  },
  {
    name: '占道堆放',
    value: '71',
  },
  {
    name: '地上设施',
    value: '71',
  },
  {
    name: '水质',
    value: '71',
  },
  {
    name: '无水',
    value: '71',
  },
  {
    name: '供热单位影响',
    value: '71',
  },
  {
    name: '人行道管理',
    value: '71',
  },
  {
    name: '主网原因',
    value: '71',
  },
  {
    name: '集中供热',
    value: '71',
  },
  {
    name: '客运管理',
    value: '71',
  },
  {
    name: '国有公交（大巴）管理',
    value: '71',
  },
  {
    name: '工业粉尘污染',
    value: '71',
  },
  {
    name: '治安案件',
    value: '71',
  },
  {
    name: '压力容器安全',
    value: '71',
  },
  {
    name: '身份证管理',
    value: '71',
  },
  {
    name: '群众健身',
    value: '41',
  },
  {
    name: '工业排放污染',
    value: '41',
  },
  {
    name: '破坏森林资源',
    value: '41',
  },
  {
    name: '市场收费',
    value: '41',
  },
  {
    name: '生产资金',
    value: '41',
  },
  {
    name: '生产噪声',
    value: '41',
  },
  {
    name: '农村低保',
    value: '41',
  },
  {
    name: '劳动争议',
    value: '41',
  },
  {
    name: '劳动合同争议',
    value: '41',
  },
  {
    name: '劳动报酬与福利',
    value: '41',
  },
  {
    name: '医疗事故',
    value: '21',
  },
  {
    name: '停供',
    value: '21',
  },
  {
    name: '基础教育',
    value: '21',
  },
  {
    name: '职业教育',
    value: '21',
  },
  {
    name: '物业资质管理',
    value: '21',
  },
  {
    name: '拆迁补偿',
    value: '21',
  },
  {
    name: '设施维护',
    value: '21',
  },
  {
    name: '市场外溢',
    value: '11',
  },
  {
    name: '占道经营',
    value: '11',
  },
  {
    name: '树木管理',
    value: '11',
  },
  {
    name: '农村基础设施',
    value: '11',
  },
  {
    name: '无水',
    value: '11',
  },
  {
    name: '供气质量',
    value: '11',
  },
  {
    name: '停气',
    value: '11',
  },
  {
    name: '市政府工作部门（含部门管理机构、直属单位）',
    value: '11',
  },
  {
    name: '燃气管理',
    value: '11',
  },
  {
    name: '市容环卫',
    value: '11',
  },
  {
    name: '新闻传媒',
    value: '11',
  },
  {
    name: '人才招聘',
    value: '11',
  },
  {
    name: '市场环境',
    value: '11',
  },
  {
    name: '行政事业收费',
    value: '11',
  },
  {
    name: '食品安全与卫生',
    value: '11',
  },
  {
    name: '城市交通',
    value: '11',
  },
  {
    name: '房地产开发',
    value: '11',
  },
  {
    name: '房屋配套问题',
    value: '11',
  },
  {
    name: '物业服务',
    value: '11',
  },
  {
    name: '物业管理',
    value: '11',
  },
  {
    name: '占道',
    value: '11',
  },
  {
    name: '园林绿化',
    value: '11',
  },
  {
    name: '户籍管理及身份证',
    value: '11',
  },
  {
    name: '公交运输管理',
    value: '11',
  },
  {
    name: '公路（水路）交通',
    value: '11',
  },
  {
    name: '房屋与图纸不符',
    value: '11',
  },
  {
    name: '有线电视',
    value: '11',
  },
  {
    name: '社会治安',
    value: '11',
  },
  {
    name: '林业资源',
    value: '11',
  },
  {
    name: '其他行政事业收费',
    value: '11',
  },
  {
    name: '经营性收费',
    value: '11',
  },
  {
    name: '食品安全与卫生',
    value: '11',
  },
  {
    name: '体育活动',
    value: '11',
  },
  {
    name: '有线电视安装及调试维护',
    value: '11',
  },
  {
    name: '低保管理',
    value: '11',
  },
  {
    name: '劳动争议',
    value: '11',
  },
  {
    name: '社会福利及事务',
    value: '11',
  },
  {
    name: '一次供水问题',
    value: '11',
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
          <Card size="small" style={{ width: '25vw' }}>
            <Row>
              <Col span={16}>
                <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
                  风险合同金额（支出类）
                </h4>
                <Statistic
                  title=""
                  value={112893}
                  suffix={<div class="ant-statistic-title">（万元）</div>}
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
              <Col span={7}>
                <PieChartOutlined
                  style={{
                    fontSize: '50px',
                    marginTop: '20px',
                    marginLeft: '20px',
                  }}
                />
              </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <h4 style={{ marginTop: '0', marginBottom: '0' }}>
              风险合同数量：100
            </h4>
          </Card>
        </Col>
        <Col span={8} className="col">
          <Card size="small" style={{ width: '28vw' }}>
            <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
              风险合同金额（收入类）
            </h4>
            <Statistic
              title=""
              value={112893}
              suffix={<div class="ant-statistic-title">（万元）</div>}
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
            <Divider style={{ margin: '10px 0' }} />
            <h4 style={{ marginTop: '0', marginBottom: '0' }}>
              风险合同数量：100
            </h4>
          </Card>
        </Col>
        <Col span={8} className="col">
          <Card size="small" style={{ width: '28vw' }}>
            <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>
              风险规则项
            </h4>
            <Statistic
              title=""
              value={112893}
              suffix={<div class="ant-statistic-title">（个）</div>}
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
            <Divider style={{ margin: '10px 0' }} />
            <h4 style={{ marginTop: '0', marginBottom: '0' }}>
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
