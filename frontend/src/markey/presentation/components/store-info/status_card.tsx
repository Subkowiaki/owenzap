import React from "react";
import { Col, ListGroup, Badge } from "react-bootstrap";
import { IStore } from "../../../domain/entities/store";

const StoreInfo: React.FC<IStore> = ({
  nomeEstabelecimento,
  nome,
  ativo,  
  dataVencimento,  
  link,
  statusPagamento,
  hash  
}) => { 
  return ( 
    <Col>     
      <ListGroup variant="flush">
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
            Nome Responsavel           
              <div className="fw-bold">{nome}</div>                
          </div>        
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
            Nome Estabelecimento           
              <div className="fw-bold">{nomeEstabelecimento}</div>                
          </div>
          <Badge bg={ativo === 0 ? "danger" : "primary"} pill>
                  {ativo === 0 ? "Inativo" : "Ativo"}
                </Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
              Vencimento           
              <div className="fw-bold">{dataVencimento}</div>                
          </div>        
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
              Link           
              <div className="fw-bold">{link}</div>                
          </div>        
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
              Vencimento           
              <div className="fw-bold">{dataVencimento}</div>                
          </div>        
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">Status do Pagamento
          <div className="fw-bold">
               {               
              statusPagamento === 0 ? "cancelado" : statusPagamento === 2 ? "Atrasado" : " ok "
            }
            </div>                
          </div>  
          <Badge bg={
                statusPagamento === 0 ? "danger" : statusPagamento === 2 ? "warning" : "primary"
              } pill>{statusPagamento}  </Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start primarybg">
          <div className="ms-2 me-auto">
              Hash           
              <div className="fw-bold">{hash}</div>                
          </div>        
        </ListGroup.Item>       
      </ListGroup>       
    </Col>      
  );
}

export default StoreInfo; 