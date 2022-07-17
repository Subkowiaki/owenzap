import { Divider } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Col,  Row, } from "react-bootstrap";
import { IHomeDashboardData } from "../../../domain/entities/home_dashboard_data";
import { getHomeDashboardData } from "../../../domain/usecases/get_home_dashboard_data";
import Card from "../../components/card/card";
import ChartTicketsTypes from "../../components/chart-tickets-types";
import ChartTotalBilling from "../../components/chart-total-billing/chart_total_billing";
import ChartTotalPayments from "../../components/chart-total-payments/chart_total_payments";
import ChartTotalSchedules from "../../components/chart-total-schedules-per-day/chart_total_schedules_per_day";
import { InfoCard } from "../../components/information-card/information_card";
import { InfoCardWhitSpan } from "../../components/information-card/information_card_with_span";
import { Loading } from "../../components/loading/loading";
import { TitleH1, TitleH2 } from "../../components/titles/titles";
import MarkeyContent from "../../markey-desing-system/markey-content/markey_content";

class HomeDashBoard extends Component{
  state: {
    data: IHomeDashboardData | null,
    isLoading: boolean,
    errorAuth: boolean,  
  } = {
    data: null,
    isLoading: true,
    errorAuth: false, 
  }

  async componentDidMount() {  
    try {
      await getHomeDashboardData().then((response) => {      
        this.setState({ data: response, isLoading: false, errorAuth: false });      
      });  
    } catch (e) {  
      this.setState({data: null, isLoading: true, errorAuth: true });
    }    
  }
 
  render() {  
 
    return (
      <MarkeyContent>
        <Divider/>
        <TitleH1 title="Suporte / CS "/>  
        <Row>
          <Col>          
            <InfoCardWhitSpan
              isLoading={this.state.data ? false : true}
              title=" Abertos Hoje"
              value={this.state.data ?   this.state.data.totalTicketsToday.toString() : ""}
              subtitle={this.state.data ? ` Abertos ontem:${this.state.data.totalTicketsYesterday}` : ""}
              icon="24h"
              spanClass={this.state.data ? this.state.data.totalTicketsToday > this.state.data.totalTicketsYesterday ? 
                "fa-solid fa-angle-up" :
                "fa-solid fa-angle-down"
                : "fa-solid fa-cloud"
              }
            />                   
          </Col>
          <Col>          
            <InfoCardWhitSpan
              isLoading={this.state.data ? false : true}
              title=" Pendentes"
              value={this.state.data ?
                (this.state.data.totalTickets - this.state.data.totalClosedTickets).toString()
                : ""}
              subtitle=""
              icon="headphone"
              spanClass={this.state.data ?this.state.data.totalTickets - this.state.data.totalClosedTickets > 10 ? 
                "fa-solid fa-bullhorn" :
                "fa-solid fa-face-laugh-wink"
                : "fa-solid fa-cloud"
              }
            />                   
          </Col> 
        </Row>
        <Row>
        <Col>          
            <InfoCardWhitSpan
              isLoading={this.state.data ? false : true}
              title=" Atendimentos este mês"
              value={this.state.data ?   this.state.data.totalTicketsCurrentMonth.toString() : ""}
              subtitle={this.state.data ? ` Abertos ontem:${this.state.data.totalTicketsLastMonth}` : ""}
              icon="mes"
              spanClass={this.state.data ? this.state.data.totalTicketsCurrentMonth > this.state.data.totalTicketsLastMonth ? 
                "fa-solid fa-angle-up" :
                "fa-solid fa-angle-down"
                : "fa-solid fa-cloud"
              }
            />                   
          </Col>
        <Col>          
            <InfoCardWhitSpan
              isLoading={this.state.data ? false : true}
              title=" Total Tickets"
              value={this.state.data ? this.state.data.totalTickets.toString() : ""}
              subtitle=""
              icon="headphone"
              spanClass={this.state.data ? "fa-solid fa-circle-info" : "fa-solid fa-cloud"
              }
            />                   
          </Col>
        </Row>
        <Row>
        <Col>
            <ChartTicketsTypes data={ this.state.data ? this.state.data.tagsAnalytics : undefined }/>
          </Col>
        </Row>
        <Divider/>
        <TitleH1 title="Agendamentos / Faturamento"/>       
        <Row className="align-items-center">
          <Col xs={4}>          
          <InfoCard
              isLoading={this.state.data ? false : true}
              title=" Agendamentos Hoje "
              value={this.state.data ? this.state.data.totalSchedulesToday.toString() : ""}
              subtitle=""
              icon="calendar"
            />
            <InfoCard
                isLoading={this.state.data ? false : true}
                title=" Agendamentos Mensal "
                value={this.state.data ? this.state.data.totalMonthSchedules.toString() : ""}
                subtitle=""
                icon="robot"
              />
          </Col>
          <Col className="align-self-center">
          {this.state.data ? <ChartTotalSchedules
          data={this.state.data.schedulesChart.data}
          lines={this.state.data.schedulesChart.lines}
          XAxisKey={this.state.data.schedulesChart.XAxisKey}
            /> : <Card>
                <TitleH2 title="Aguarde"/>
                <Loading/>
            </Card>}
          </Col>         
        </Row>
            <Divider/>
        <Row className="align-items-center">
          <Col xs={4}>        
            <InfoCard
              isLoading={this.state.data ? false : true}
              title=" Estabelecimentos"
              value={this.state.data ? this.state.data.activeStores.toString() : ""}
              subtitle=" Com agendamentos este mês"
              icon="barber"
            />       
            <InfoCard
              isLoading={this.state.data ? false : true}
              title="Assinaturas Renovadas"
              value={this.state.data ? this.state.data.totalPaymentsMonth.toString() : ""}
              subtitle=""
              icon="money"
            />         
          </Col>
          <Col className="align-self-center">
          {this.state.data ? <ChartTotalPayments
          data={this.state.data.storesChart.data}
          lines={this.state.data.storesChart.lines}
          XAxisKey={this.state.data.storesChart.XAxisKey}
            /> : <Card>
                <TitleH2 title="Carregando..."/>
                <Loading/>
            </Card>}
          </Col>         
        </Row> 
        <Row>
        <Col className="align-self-center">
          {this.state.data ? <ChartTotalBilling
          data={this.state.data.paymentsChart.data}
          lines={this.state.data.paymentsChart.lines}
          XAxisKey={this.state.data.paymentsChart.XAxisKey}
            /> : <Card>
                <TitleH2 title="Carregando..."/>
                <Loading/>
            </Card>}
          </Col>      
        </Row>
        
      </MarkeyContent>        
    );
  }
}

export default HomeDashBoard;