import { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';

const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '1月', '2月', '3月', '4月', '5月', '6月'],
      ['Actual', 120, 132, 101, '-', '-', '-', '-'],
      ['Budget', 120, 178, 70, 134, 90, 230, 210],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
  ],
};

const Chart = () => {
  const [load, setLoad] = useState(false);
  const [chartOption, setChartOption] = useState({});
  const chartRef = useRef(null);
  const [echartsInstance, setEchartsInstance] = useState();

  useEffect(() => {
    const getData = async () => {
      // const data = await DataProcessor().then((data) => {
      //   console.log(data);
      //   return data;
      // });
      setChartOption(option);
    };
    getData();
  }, []);

  useEffect(() => {
    let chart = echarts.getInstanceByDom(chartRef.current);
    if (!chart) chart = echarts.init(chartRef.current);

    const resizeOb = new ResizeObserver((entries) => {
      entries.forEach((entry) =>
        echarts.getInstanceByDom(entry.target).resize()
      );
    });
    resizeOb.observe(chartRef.current);

    setEchartsInstance(chart);
  }, []);

  useEffect(() => {
    if (echartsInstance && chartOption) echartsInstance.setOption(chartOption);
  }, [echartsInstance, chartOption]);

  return (
    <>
      <div ref={chartRef} style={{ width: '100%', height: 300 }}></div>
    </>
  );
};

export default Chart;
