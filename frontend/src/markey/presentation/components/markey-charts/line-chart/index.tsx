import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis,ResponsiveContainer } from "recharts";
import { ILineChart } from "../../../../domain/entities/linechart";
import { Container } from "./styles";
  
const SingleLineChart: React.FC<ILineChart> = ({data,  lines, XAxisKey}) => {
  return (
    <Container>         
    <ResponsiveContainer>     
      <LineChart data={data} >
        <CartesianGrid strokeDasharray={"3 3"} stroke={"#1234"}/>
        <XAxis dataKey={XAxisKey} stroke="#1234"/>      
        <Tooltip/>         
          {
            lines.map(
              (line) => <Line
                type="monotone"
                dataKey={line.dataKey}
                name={line.title}
                stroke={line.color}
                strokeWidth={5}
                dot={{ r: 10 }}
                activeDot={{r:8}}
              />
            )
          }      
      </LineChart> 
      </ResponsiveContainer>  
      </Container>  
  );
}

export default SingleLineChart;