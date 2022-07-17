import React from "react";
import { Col, Row } from "react-bootstrap";
import { IPieChart } from "../../../domain/entities/piechart";
import Card from "../card/card";
import { Loading } from "../loading/loading";
import MarkeyPieChart from "../markey-charts/markey-piechart";
import { TitleH2 } from "../titles/titles";

interface props {
  data?: IPieChart[];
}

const ChartTicketsTypes: React.FC<props> = ({data}) => {
  return (
    <Card>
      <TitleH2 title="Tipos de chamados"/>
      <Row>
        {data ? <MarkeyPieChart data={data}/> : <Loading/>}
      </Row>      
    </Card>
  );
}

export default ChartTicketsTypes;