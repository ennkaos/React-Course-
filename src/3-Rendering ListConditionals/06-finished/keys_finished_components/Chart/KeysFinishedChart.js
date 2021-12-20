import React from 'react';

import KeysFinishedChartBar from './KeysFinishedChartBar';
import './KeysFinishedChart.css';

const KeysFinishedChart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <KeysFinishedChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default KeysFinishedChart;
