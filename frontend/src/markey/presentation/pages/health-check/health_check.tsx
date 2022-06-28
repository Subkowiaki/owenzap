import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { IHealthCheck } from "../../../domain/entities/health_check";
import { getHealthCheck } from "../../../domain/usecases/get_healthcheck";
import { getResetLink } from "../../../domain/usecases/get_reset_link";
import ContentSubtitle from "../../components/content-subtitle/content_subtitle";
import { TitleH1 } from "../../components/titles/titles";

const HealthCheck: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [healthData, setHealthData] = useState<IHealthCheck | null>(null);
  const [loadsInfo, setLoaders] = useState<{
    resetLinkBtnLoad?: Boolean,
    paymentRegister?: boolean,
    getHealthCheck?: boolean,
  }>({
    resetLinkBtnLoad: false,
    paymentRegister: false,
    getHealthCheck: false,
  });
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getPasswordLink() {
    await getResetLink(email).then((link) => {
      console.log(link);
      navigator.clipboard.writeText(link);     
    }); 
    handleShow();
  }

  async function healthCheck() {
    setLoaders({ getHealthCheck: true });
    const data = await getHealthCheck(email);    
  
    setLoaders({ getHealthCheck: false });
    setHealthData(data);
  }


  return (
    <Container>
      <TitleH1 title= "Check de cadastro"/>
      <Row>
      <Col xs={3} className="p-4 align-middle">
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Control type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text id="email" muted>Colocar email informado pelo cliente</Form.Text>   
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg"
                disabled={loadsInfo.getHealthCheck}
                onClick={healthCheck}>
                {loadsInfo.getHealthCheck ?
                <Spinner as="span" animation="border" size="sm" /> : "Consultar dados"}  
            </Button>                  
          </div>  
        </Col> 
        <Col></Col>
        <Col className="p-4" xs={2}>          
            <ContentSubtitle title="Reset de senha" />  
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg"
                  disabled={!!loadsInfo.resetLinkBtnLoad}
                  onClick={getPasswordLink}>
                  {loadsInfo.resetLinkBtnLoad ?
                    <Spinner as="span" animation="border" size="sm" />
                    : "Gerar"}  
                </Button>                  
            </div>           
          </Col>          
        </Row>
      
    </Container>
  );
}

export default HealthCheck;
