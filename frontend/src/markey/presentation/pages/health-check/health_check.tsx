import React, { useState } from "react";
import { Button, Col,  Form, Row, Spinner } from "react-bootstrap";
import { IHealthCheck } from "../../../domain/entities/health_check";
import { getHealthCheck } from "../../../domain/usecases/get_healthcheck";
import { getResetLink } from "../../../domain/usecases/get_reset_link";
import ContentSubtitle from "../../components/content-subtitle/content_subtitle";
import ProfessionalCard from "../../components/professional-card/professional_card";
import ServiceInfo from "../../components/service-info/service_info";
import StatusCard from "../../components/status-card/status_card";
import StoreInfo from "../../components/store-info/status_card";
import { TitleH1 } from "../../components/titles/titles";
import MarkeyContent from "../../markey-desing-system/markey-content/markey_content";

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
    <MarkeyContent>
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
        <Row className="p-4 align-middle"> 
          <Col >              
              <ContentSubtitle title="Status geral" />  
              <Row>
                <StatusCard title="GeoHash"
                  status={healthData?.storeCheck.geoHash || !healthData  ? "info" : "danger"}
                  message={healthData?.storeCheck.geoHashMessage ?? ""} />
                <StatusCard title="Dias de funcionamento"
                  status={healthData?.storeCheck.openDays || !healthData ? "info" : "danger"}
                  message={healthData?.storeCheck.openDaysMessage ?? ""} />
                <StatusCard title="Serviços"
                  status={healthData?.storeCheck.services || !healthData ? "info" : "danger"}
                  message={healthData?.storeCheck.servicesMessage ?? ""} />
                <StatusCard title="Profissionais"
                  status={healthData?.storeCheck.professionals || !healthData ? "info" : "danger"}
                  message={healthData?.storeCheck.professionalsMessage ?? ""} />               
              </Row>               
            
          </Col>  
          </Row>
        <Row className="p-4 align-middle"> 
          <Col >             
            <ContentSubtitle title="Informacoes Basicas" />  
              <StoreInfo
                nomeEstabelecimento={healthData?.storeData.nomeEstabelecimento}                
                nome={healthData?.storeData.nome}
                ativo={healthData?.storeData.ativo}  
                dataVencimento={healthData?.storeData.dataVencimento}  
                link={healthData?.storeData.link}
                statusPagamento={healthData?.storeData.statusPagamento}
                hash={healthData?.storeData.hash}
              />            
          </Col> 
          <Col> 
            <ContentSubtitle title="Serviços" />  
              {healthData?.services.map((service) => {
                  return <ServiceInfo
                    titulo={service.titulo}
                    valor={service.valor}
                    ativo={service.ativo}
                    duracao={service.duracao}/>
              })}            
          </Col>
          <Col>  
            
              <ContentSubtitle title="Profissionais" />  
              {
                healthData?.professionals.map(
                  (professional) => {
                   return <ProfessionalCard
                      nome={professional.nome}
                      email={professional.email}
                      funcionamento={professional.funcionamento}
                      servico={professional.servico}
                      ativo = {professional.ativo} />
                  })
              }           
          </Col>           
        </Row>             
    </MarkeyContent>
  );
}

export default HealthCheck;
