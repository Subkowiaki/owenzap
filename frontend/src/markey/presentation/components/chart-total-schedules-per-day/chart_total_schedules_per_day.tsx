
import React from "react";
import { ILineChart } from "../../../domain/entities/linechart";
import Card from "../card/card";
import SingleLineChart from "../markey-charts/line-chart";
import { TitleH2 } from "../titles/titles";

const ChartTotalSchedules: React.FC<ILineChart> = ({data,  lines, XAxisKey}) => {  
  return (
    <Card> 
      <TitleH2 title="Evolução de agendamentos"/>  
      <SingleLineChart data={data} lines={lines} XAxisKey={XAxisKey} />
    </Card>
  );
}

export default ChartTotalSchedules;