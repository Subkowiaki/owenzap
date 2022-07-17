import React from "react";
import { Col, ListGroup,Badge } from "react-bootstrap";
import { IService } from "../../../domain/entities/service";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceInfo: React.FC<IService> = ({
  titulo,
  valor,
  duracao,
  ativo
}) => { 
  return ( 
    <Col className="p-4">     
      <ListGroup>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start fw-bold primarybg">
          
        <div className="ms-2 me-auto  fw-bold">
            Serviço           
              <div className="fw-normal">{'Descrição: '+ titulo}</div>                
          </div>
          <Badge bg={ativo === 0 ? "danger" : "primary"} pill>
                  {ativo === 0 ? "Inativo" : "Ativo"}
                </Badge> 
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start fw-bold primarybg">
          <div className="ms-2 me-auto">
            Valor          
              <div className="fw-normal">{'R$: ' +valor}</div>                
          </div>        
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start fw-bold primarybg">
          <div className="ms-2 me-auto">
            Duração         
              <div className="fw-normal">{'Tempo: ' + duracao +' minutos'}</div>                
          </div>        
        </ListGroup.Item>   
      </ListGroup>       
    </Col>      
  );
}

export default ServiceInfo; 