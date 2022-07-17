import React, { useState } from "react";
import * as loadesh from "lodash";
import { Button, Container, Table } from "react-bootstrap";

import { ILatePaymentStore } from "../../../domain/entities/late_payment_store";
import { getChurn } from "../../../domain/usecases/get_churn";
import Card from "../../components/card/card";
import { TitleH1 } from "../../components/titles/titles";
import { valueFormaterBrl } from "../../../utils/value_formater_brl";
import MarkeyContent from "../../markey-desing-system/markey-content/markey_content";


const ChurnControl: React.FC = () => { 
  const [latePayments, setLatePayments] = useState<ILatePaymentStore[]>([]);
  const [isInitialLoad, setInitialLoad] = useState<boolean>(true);

  initialLoad(); 

  function initialLoad() {
    if (isInitialLoad) {
      setInitialLoad(false);
      loadLatePayments();
    }    
  }

  async function loadLatePayments() {    
    const allPaymentsLate = await getChurn();
    const stores = loadesh.filter(allPaymentsLate, ({ totalAgendamento }) => {
      return totalAgendamento > 10;
    });
    setLatePayments(stores);
  }

  function openInNewTab(url: string) {
    window.open(`https://wa.me/55${url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <MarkeyContent>
      <TitleH1 title="Controle de churn" />     
      <Card> 
        <Table striped  hover>
          <thead>
              <tr>
              <th>Prazo Final</th>
              <th>Agendamentos</th>
              <th>Último agendamento</th>
              <th>Status</th>
              <th>Responsável</th>
              <th>Nome Estabelecimento</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Total Pago</th>
              <th>Total Meses</th>
              <th>Churn</th>
              <th></th>
            </tr>
          </thead>       
          <tbody>
          {
            latePayments.map((store) =>
              <tr>
                <td>{ store.dataFinal }</td>
                <td>{ store.totalAgendamento }</td>
                <td>{ store.ultimoAgendamento }</td>
                <td>{ store.clientStatus }</td>
                <td>{ store.nome }</td>
                <td>{ store.nomeEstabelecimento }</td>
                <td>{ store.email }</td>
                <td>{store.telefone}</td>
                <td>{valueFormaterBrl(store.totalValue as number)}</td>
                <td>{store.totalPayments}</td>
                <td>{ store.churnPeriod }</td>
                <td><Button variant="success" onClick={()=> openInNewTab(store.telefone)}>Contato</Button>
                </td>
              </tr>
              )
          }
          </tbody> 
          </Table>  
      </Card>
    </MarkeyContent>
  );
}
export default ChurnControl;
