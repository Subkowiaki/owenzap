
import { IBillingReport } from "./billing_report";
import { IGetAnalyticsChatbotResponse } from "./get_analytics_chatbot_response";
import { ITag } from "./tag";
import { ITicket } from "./ticket";

export interface IHomeDashBoard{
  payments: IBillingReport,
  chatbot: IGetAnalyticsChatbotResponse,
  tagListAndCount: {tags: ITag[]} ,
  tickets: {
    allTickets: ITicket[],
    totalTickets: number,
    totalClosedTickets: number,
    totalTicketsToday: number,
    totalTicketsYesterday: number,
    totalTicketsCurrentMonth: number,
    totalTicketsLastMonth: number,
  }
}