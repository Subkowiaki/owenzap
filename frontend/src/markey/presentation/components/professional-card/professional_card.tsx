import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, ListGroup, Row, Badge } from "react-bootstrap";
import { IProfessional } from "../../../domain/entities/professional";
import Card from "../card/card";


const ProfessionalCard: React.FC<IProfessional> = ({
  nome,
  email,
  funcionamento,
  ativo
}) => { 
  return ( 
    <Row className="p-4">
      <Card>
        <Col>     
          <ListGroup variant="flush">
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">
                Nome Profissional           
                  <div className="fw-bold">{nome}</div>                
              </div>
            <Badge bg={ativo === 0 ? "danger" : "primary"} pill>
                  {ativo === 0 ? "Inativo" : "Ativo"}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">
                E-mail Profissional           
                  <div className="fw-bold">{email}</div>                
              </div>        
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">                     
              <div className="fw-bold">Atendimento</div>   
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Segunda-Feira</div>
              <Badge bg={funcionamento.seg ? "primary" : "danger"} pill>
                {funcionamento.seg ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Terça-Feira</div>
              <Badge bg={funcionamento.ter ? "primary" : "danger"} pill>
                {funcionamento.ter ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Quarta-Feira</div>
              <Badge bg={funcionamento.qua ? "primary" : "danger"} pill>
                {funcionamento.qua ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Quinta-Feira</div>
              <Badge bg={funcionamento.qui ? "primary" : "danger"} pill>
                {funcionamento.qui ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Sexta-Feira</div>
              <Badge bg={funcionamento.sex ? "primary" : "danger"} pill>
                {funcionamento.sex ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Sabado</div>
              <Badge bg={funcionamento.sab ? "primary" : "danger"} pill>
                {funcionamento.sab ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
              <div className="ms-2 me-auto">Domingo</div>
              <Badge bg={funcionamento.dom ? "primary" : "danger"} pill>
                {funcionamento.dom ? "Ativo" : "Inativo"}
              </Badge>
            </ListGroup.Item>
          </ListGroup>       
        </Col>  
        </Card>
      </Row>
  );
}

export default ProfessionalCard; 