import { AdminWebApiGetway } from "../../getways/http/admin_web_api";
import { IHomeDashboardData } from "../entities/home_dashboard_data";
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
        color: "#1664e8",
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
          color: "#1664e8",
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
      color: "#1664e8",
      dataKey: "value",
     }
    ]
  };   
  
    
  return {  
    schedulesChart,
    totalSchedulesToday,
    activeStores,
    totalMonthSchedules,
    totalPaymentsMonth: dashboardData.payments.targetAllPayments.length,
    storesChart,
    paymentsChart
  }
  
}