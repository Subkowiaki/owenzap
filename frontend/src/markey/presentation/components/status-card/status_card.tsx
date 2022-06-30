import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, IconCard } from "./styled";


interface IStatusCard {
  title: string,
  message: string,
  status: "info" | "danger",
} 


const StatusCard: React.FC<IStatusCard> = ({
  title,
  message,
  status 
}) => { 
  return ( 
    <Col>
      <Card color={status} className={status === "danger" ? "shadow" :"" }>   
        <Row>
          <Col xs={1}>        
            <IconCard color={status} className={status === "danger" ? "fa-solid fa-circle-exclamation" :"fa-solid fa-circle-check" }/>
          </Col>
          <Col xs={11}>             
            <h1>{title}</h1>                    
          </Col>          
        </Row> 
        {status === "danger" ? <hr /> :"" }       
        <span>{message}</span>
      </Card>   
    </Col>      
  );
}

export default StatusCard; 