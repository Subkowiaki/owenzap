import { ILineChart } from "./linechart";

export interface IHomeDashboardData{
  schedulesChart: ILineChart,
  totalSchedulesToday: number,
  activeStores: number,
  totalMonthSchedules: number,
  totalPaymentsMonth: number,
  storesChart: ILineChart,
  paymentsChart: ILineChart
}