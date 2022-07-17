import { ILineChart } from "./linechart";
import { IPieChart } from "./piechart";

export interface IHomeDashboardData{
  schedulesChart: ILineChart,
  totalSchedulesToday: number,
  activeStores: number,
  totalMonthSchedules: number,
  totalPaymentsMonth: number,
  storesChart: ILineChart,
  paymentsChart: ILineChart,
  totalTickets: number,
  totalClosedTickets: number,
  totalTicketsToday: number,
  totalTicketsYesterday: number,
  totalTicketsCurrentMonth: number,
  totalTicketsLastMonth: number,
  tagsAnalytics: IPieChart[],
  allTickets?: ILineChart, 
}