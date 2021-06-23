import React from 'react'
import './Charts.css';
import {LineChart,Line,XAxis,CartesianGrid,ResponsiveContainer} from "recharts";
const data = [
    
    {
        name: '',
        "Rejected": 2400,
        "Applicants": 4000,
        amt: 2400,
      },
      {
      name: 'Jan',
      "Rejected": 2400,
      "Applicants": 4000,
      amt: 2400,
    },
    {
      name: 'Feb',
      "Rejected": 1398,
      "Applicants": 3000,
      amt: 2210,
    },
    {
      name: 'March',
      "Rejected": 2000,
      "Applicants": 9800,
      amt: 2290,
    },
    {
      name: 'April',
      "Rejected": 2780,
      "Applicants": 3908,
      amt: 2000,
    },
    {
      name: 'May',
      "Rejected": 1890,
      "Applicants": 4800,
      amt: 2181,
    },
    {
      name: 'June',
      "Rejected": 2390,
      "Applicants": 7670,
      amt: 2500,
    },
    {
      name: 'July',
      "Rejected": 3490,
      "Applicants": 7956,
      amt: 2100,
    },
  ];
function Charts() {
    return (
        <div className="charts">
            <h4 className="chartsTitle">Application Received</h4>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
             <XAxis dataKey="name" stroke="lightgray"/>
             <Line type="monotone"  stroke="red" dataKey="Applicants"/>
             <Line type="monotone"  stroke="rgb(49, 46, 46)" dataKey="Rejected"/>
             <CartesianGrid stroke="rgb(49, 46, 46)" />
            </LineChart>
            
            </ResponsiveContainer>
        </div>
    )
}
export default Charts
