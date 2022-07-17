import { AdminWebApiGetway } from "../../getways/http/admin_web_api";
import { MarkeyColors } from "../../presentation/markey-desing-system/markey_colors";
import { IHomeDashboardData } from "../entities/home_dashboard_data";
import { IPieChart } from "../entities/piechart";
import { EMonth } from "../enums/month";

export async function getHomeDashboardData():Promise<IHomeDashboardData | "offline"> {
  const today = new Date();
  
  const dashboardData = await new AdminWebApiGetway().getHomeData(
    today.getFullYear(),
    today.getMonth(),
  );
  
  const activeStores = dashboardData.chatbot.allStores.length;
  let totalSchedulesToday = 0
  let totalSchedulesPerDay: { date: string, value: number }[] = [];
  let totalMonthSchedules = 0;
  const evolutionOfPayments: { month: string, value: number, total: number }[] = [];

  dashboardData.chatbot.allMonthDays.forEach((day: { day: number; totalChatbot: number; date: any; })=> {
      if (day.day === today.getDate()) {
        totalSchedulesToday = day.totalChatbot;
      }
      totalMonthSchedules = totalMonthSchedules + day.totalChatbot;
      totalSchedulesPerDay.push({
        date: day.date,
        value: day.totalChatbot,
      });
    });
    
  dashboardData.payments.resumeData.forEach((paymentResume) => {  
    evolutionOfPayments.push({
      month: `${EMonth[paymentResume.month]}/${paymentResume.year}`,
      value: paymentResume.totalValue / 100,
      total: paymentResume.totalStores,
    });
  });

  const storesChart = {
    XAxisKey: "month",
    data: evolutionOfPayments,
    lines: [
      {
        title: "Lojas",
        color: MarkeyColors.brandPrimary,
        dataKey: "total",
      },
    ]
  };
  const paymentsChart = {
    XAxisKey: "month",
      data: evolutionOfPayments,
      lines: [
        {
          title: "Lojas",
          color: MarkeyColors.brandPrimary,
          dataKey: "value",
        },
      ]
    };
  
  const schedulesChart = {
    XAxisKey: "date",
    data: totalSchedulesPerDay,
    lines: [
      {
      title: "chats",
      color: MarkeyColors.brandPrimary,
      dataKey: "value",
     }
    ]
  };   
  
  const tagsAnalytics: IPieChart[] = [];
  dashboardData.tagListAndCount.tags.forEach((tag) => {
    tagsAnalytics.push(
      {
        name: tag.name,
        value: parseInt(tag.ticketsCount),
        color: tag.color
      });
  });
  


  return {  
    schedulesChart,
    totalSchedulesToday,
    activeStores,
    totalMonthSchedules,
    totalPaymentsMonth: dashboardData.payments.targetAllPayments.length,
    storesChart,
    paymentsChart,
    tagsAnalytics,
    totalTickets: dashboardData.tickets.totalTickets,
    totalClosedTickets: dashboardData.tickets.totalClosedTickets,
    totalTicketsToday: dashboardData.tickets.totalTicketsToday,
    totalTicketsYesterday: dashboardData.tickets.totalTicketsYesterday,
    totalTicketsCurrentMonth: dashboardData.tickets.totalTicketsCurrentMonth,
    totalTicketsLastMonth: dashboardData.tickets.totalTicketsLastMonth,
  }
  
}