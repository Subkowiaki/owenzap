import html2canvas from "html2canvas";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { IStoreReport } from "../../../domain/entities/store_report";
import { getStoreReport } from "../../../domain/usecases/get_store_report";
import { valueFormaterBrl } from "../../../utils/value_formater_brl";
import Card from "../../components/card/card";
import ListTile from "../../components/list-tile";
import { TitleH1, TitleH2 } from "../../components/titles/titles";
import { ProfilePic } from "./store_sreport_styles";

const StoreReport: React.FC = () => {
  const [emailBusca, setEmailBusca] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false); 
  const [storeReport, setStoreReport] = useState<IStoreReport[]|null>(null); 

  async function getStore() {
    setLoad(true);
    const report = await getStoreReport(emailBusca);
    setStoreReport(report);
    setLoad(false);   
  }

  function printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input as HTMLElement,)
      .then((canvas) => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = `${emailBusca}.jpg`;
        a.click();
      });
  }

  return (
    <Container>
      <Row>
        <TitleH1 title="Gerar Relatório"/>
      </Row>
      <Row>
      <Row>
          <Col><TitleH2 title="Faturamento" /> </Col>  
          <Col xs={2} className="p-1">
          <Form.Control type="email" placeholder="name@example.com" id="email" onChange={(e) => setEmailBusca(e.target.value)} />
        </Col>
          <Col xs={1}className="p-1">          
            <div className="d-grid gap-2">
              <Button variant="primary"  disabled={load} onClick={getStore}>
                {load ?<Spinner as="span" animation="border" size="sm" /> : "Buscar por email"}  
              </Button>                  
            </div>  
          </Col>  
          <Col xs={1}className="p-1">          
            <div className="d-grid gap-2">
              <Button variant="primary"  disabled={load} onClick={printDocument}>
                {load ?<Spinner as="span" animation="border" size="sm" /> : "Imprimir"}  
              </Button>                  
            </div>  
          </Col> 
        </Row>
      </Row>
      <div id="divToPrint">
        <Card>
        <Row className="justify-content-md-center p2">    
            <Col>{storeReport ? <ProfilePic src={storeReport[0].profilePic} /> : ""}</Col>  
              <Col xs={6}>
                <Card>
                  <Row className="justify-content-md-center">
                    <Col>
                      {storeReport ? <TitleH2 title={storeReport[0].storeName}/> : ""}
                      {storeReport ? <ListTile
                      cardColor="#0dd6aa"
                      tagColor="#0dd6aa"
                      title="Total de Agendamentos"
                      subtitle={`*Incluindo agendamentos futuros`}
                      amount={storeReport[0].totalSchedulesCount as string}/> : ""
                    }
                    {storeReport ? <ListTile
                      cardColor="#0dd6aa"
                      tagColor="#0dd6aa"
                      title="Total Faturamento"
                      subtitle={`*Incluindo agendamentos futuros`}
                      amount={storeReport[0].totalValueSum as string}/> : ""
                    }                      
                    </Col>  
                  </Row>                  
                </Card>
              </Col> 
              <Col></Col>
            </Row>  
            <hr/>
            <Row>
              {storeReport?.map((report) => {
                let subititle = "";
                // eslint-disable-next-line array-callback-return    
                report.professionals.map((professional) => {
                  subititle = subititle + `${professional.name} ${valueFormaterBrl(professional.totalValue)} (${professional.totalSchedules} atendimentos)   | `;                             
                });
                return<ListTile
                  cardColor="#0dd6aa"
                  tagColor="#0dd6aa"
                  title={`${report.ref} - Agendamentos: ${report.totalSchedules}`}
                  subtitle={subititle}
                  amount={valueFormaterBrl(report.totalValue)} />
              })
              }             
            </Row>
        </Card>
      </div>
    </Container>
  );
}

export default StoreReport;
