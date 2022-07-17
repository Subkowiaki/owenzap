import React, { useState } from "react";
import * as lodash from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Col, Container, Form, Row, Spinner, ToggleButton } from "react-bootstrap";
import Card from "../../components/card/card";
import { TitleH1, TitleH2 } from "../../components/titles/titles";
import { newPayment } from "../../../domain/usecases/new_payment";
import { getLastPayment } from "../../../domain/usecases/get_last_payments";
import { IBilling } from "../../../domain/entities/billing";
import ListTile from "../../components/list-tile";
import { valueFormaterBrl } from "../../../utils/value_formater_brl";

const Payments: React.FC = () => {
  const [radioValue, setRadioValue] = useState('PIX');
  const [load, setLoad] = useState<boolean>(false); 
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [emailBusca, setEmailBusca] = useState<string>('');
  const [payments, setPayments] = useState<IBilling[] | null>(null);
  
  const radios = [
    { name: 'PIX', value: 'PIX' },
    { name: 'Credito', value: 'CRÉDITO' },
    { name: 'Sem Liberar Acesso', value: 'PIX-MANUAL' },
  ];
  if (initialLoad) {
    setInitialLoad(false);
    getPayments();
  }
  async function postNewPayment() {
    setLoad(true);
    await newPayment(email, radioValue);     
    getPayments(); 
    setLoad(false);
  }

  async function getPayments() { 
    setLoad(true);
    const payment = await getLastPayment(); 
    setPayments(payment);  
    setLoad(false);
  }
  
  function filter() {
    setPayments(lodash.filter(payments, {email: emailBusca})); 
  }

  return (
    <Container>
      <Row>
      <TitleH1 title="Pagamentos" />    
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col>     
            <Row>
              <Col>
              <Form.Control type="email" placeholder="name@example.com" id="email" onChange={(e) => setEmail(e.target.value)} />
              </Col>
              <Col>              
                <ButtonGroup >
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="secondary"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}>
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
              <Col xs={2}>
                <div className="d-grid gap-2">
                  <Button variant="danger"  disabled={load} onClick={postNewPayment}>
                    {load ?<Spinner as="span" animation="border" size="sm" /> : "Registrar"}  
                  </Button>                  
                </div> 
              </Col>
            </Row>         
        </Col>
      </Row>
      <Row>
        <Card>
        <Row>
          <Col><TitleH2 title="Últimos pagamentos" /> </Col>  
          <Col xs={3} className="p-1">
          <Form.Control type="email" placeholder="name@example.com" id="email" onChange={(e) => setEmailBusca(e.target.value)} />
        </Col>
          <Col xs={2}className="p-1">          
            <div className="d-grid gap-2">
              <Button variant="primary"  disabled={load} onClick={filter}>
                {load ?<Spinner as="span" animation="border" size="sm" /> : "Buscar por email"}  
              </Button>                  
            </div>  
          </Col>
          <Col xs={2}className="p-1">          
            <div className="d-grid gap-2">
              <Button variant="primary"  disabled={load} onClick={getPayments}>
                {load ?<Spinner as="span" animation="border" size="sm" /> : "Histórico completo"}  
              </Button>                  
            </div>  
          </Col>         
        </Row>
        {payments?.map((payment) => (<ListTile cardColor="#0dd6aa"
          tagColor="#0dd6aa"
          title={payment.email}
          subtitle={`Ref: ${payment.month + 1}/${payment.year} Data Pagamento ${payment.date}`}
          amount={`${payment.method} - ${valueFormaterBrl(payment.value)}`} />))
        }            
        </Card>
      </Row>
    </Container>    
  );
}

export default Payments;
